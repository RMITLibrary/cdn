/**
 * LTI Trigger Resize
 * Sends Canvas-compatible postMessage: { subject: 'lti.frameResize', height }
 * Reliably grows and shrinks iframe to match content.
 */
(function () {
  if (window.parent === window) return;

  const CONFIG = {
    targetOrigin: "*",       // Tighten to Canvas origin in production
    throttleMs: 16,
    lockTimeoutMs: 128,
    pollIntervalMs: 2000,
    tolerance: 0
  };

  let lastHeight = 0;
  let scheduled = false;
  let locked = false;
  let lockTimer = null;
  let lastThrottleCall = 0;

  // --- Measurement ---

  function getBodyMargin(side) {
    const val = getComputedStyle(document.body).getPropertyValue(`margin-${side}`);
    return parseInt(val, 10) || 0;
  }

  function ensureBottomMarker() {
    let marker = document.getElementById("lti-bottom-marker");
    if (!marker) {
      marker = document.createElement("div");
      marker.id = "lti-bottom-marker";
      marker.style.cssText = "clear:both;height:0;margin:0;padding:0;border:0";
      document.body.appendChild(marker);
    }
    return marker;
  }

  function measureHeight() {
    const body = document.body;
    if (!body) return 0;

    const marker = ensureBottomMarker();
    const markerBottom = Math.ceil(marker.getBoundingClientRect().bottom + window.scrollY);
    const bodyTotal = body.offsetHeight + getBodyMargin("top") + getBodyMargin("bottom");

    return Math.max(bodyTotal, markerBottom, body.scrollHeight);
  }

  // --- Resize Logic ---

  function postResize(height) {
    window.parent.postMessage(
      { subject: "lti.frameResize", height },
      CONFIG.targetOrigin
    );
  }

  function setLock() {
    locked = true;
    clearTimeout(lockTimer);
    lockTimer = setTimeout(() => (locked = false), CONFIG.lockTimeoutMs);
  }

  function requestResize(force = false) {
    if (scheduled) return;
    scheduled = true;

    requestAnimationFrame(() => {
      scheduled = false;
      if (locked && !force) return;

      const height = Math.ceil(measureHeight());
      if (!force && Math.abs(height - lastHeight) <= CONFIG.tolerance) return;

      lastHeight = height;
      setLock();
      postResize(height);
    });
  }

  function throttledResize() {
    const now = Date.now();
    if (now - lastThrottleCall >= CONFIG.throttleMs) {
      lastThrottleCall = now;
      requestResize();
    }
  }

  // --- Event Binding ---

  function bindEvents() {
    window.addEventListener("load", () => requestResize(true));
    window.addEventListener("resize", throttledResize);
    window.addEventListener("orientationchange", () => requestResize(true));

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", throttledResize);
    }

    document.addEventListener("load", throttledResize, true);
    document.addEventListener("error", throttledResize, true);
    document.addEventListener("transitionend", throttledResize, true);
    document.addEventListener("animationend", throttledResize, true);

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => requestResize(true)).catch(() => { });
    }

    if (typeof ResizeObserver !== "undefined" && document.body) {
      new ResizeObserver(throttledResize).observe(document.body);
    }

    if (typeof MutationObserver !== "undefined") {
      new MutationObserver(throttledResize).observe(document.documentElement, {
        subtree: true,
        childList: true,
        attributes: true,
        characterData: true
      });
    }

    setInterval(() => requestResize(), CONFIG.pollIntervalMs);
  }

  // --- Init ---

  bindEvents();
  requestResize(true);
})();