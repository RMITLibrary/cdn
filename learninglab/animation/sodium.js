(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.border = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222160").ss(5,1,1).p("ApOp+ISdAAQAwAAAAAxIAASbQAAAxgwAAIydAAQgwAAAAgxIAAybQAAgxAwAAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-66.3,132.7,132.7);


(lib.arrowline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E61E2A").s().p("AgiHhIAAvBIBFAAIAAPBg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-48.1,7,96.30000000000001);


(lib.arrowhead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E61E2A").s().p("AiwCkICylHICvFHg");
	this.shape.setTransform(0,-1.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkkMbIAA41IJIAAIAAY1g");
	this.shape_1.setTransform(-0.25,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-144,58.5,159);


(lib.arrowgrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_39 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Layer_1
	this.instance = new lib.arrowhead("synched",0);
	this.instance.setTransform(0.25,46.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-78.25},39,cjs.Ease.quadInOut).wait(1));

	// Layer_2
	this.instance_1 = new lib.arrowline("synched",0);
	this.instance_1.setTransform(0.25,-2.15,1,1.3273);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-222.2,58.5,284);


(lib.arrowsone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_89 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// border
	this.instance = new lib.border("synched",0);
	this.instance.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApNJ/QgxAAABgxIAAybQgBgxAxAAISbAAQAxAAgBAxIAASbQABAxgxAAg");
	mask.setTransform(0,-0.675);

	// arrow1
	this.instance_1 = new lib.arrowgrow();
	this.instance_1.setTransform(-29.25,33.45);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-67,132.7,132.7);


(lib.arrowsboth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_89 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// border
	this.instance = new lib.border("synched",0);
	this.instance.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// mask2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApNJ/QgxAAABgxIAAybQgBgxAxAAISbAAQAxAAgBAxIAASbQABAxgxAAg");
	mask.setTransform(0,-0.675);

	// arrow2
	this.instance_1 = new lib.arrowgrow();
	this.instance_1.setTransform(29.25,-34.05,1,1,180);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).wait(40));

	// mask1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ApNJ/QgxAAABgxIAAybQgBgxAxAAISbAAQAxAAgBAxIAASbQABAxgxAAg");
	mask_1.setTransform(0,-0.675);

	// arrow1
	this.instance_2 = new lib.arrowgrow();
	this.instance_2.setTransform(-29.25,33.45);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-67,132.7,132.7);


// stage content:
(lib.sodium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.arrowsone();
	this.instance.setTransform(273.75,60.75,0.288,0.288,0,0,0,0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmA2QgNgNgBgSIAVAAQABAKAEAGQAJAKASAAQAMAAAKgFQAJgFAAgLQAAgIgHgEQgFgDgOgDIgQgEQgQgEgIgEQgNgJAAgPQgBgSANgLQANgLAWAAQAcAAANARQAHAKABAMIgVAAQAAgGgEgGQgIgJgRABQgNAAgGAEQgGAFgBAHQAAAIAJAFQAEADAKACIANADQAXAGAJAEQAMAIgBARQABARgNAMQgNANgbAAQgbAAgLgNg");
	this.shape.setTransform(283.65,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsBGQgOgQAAgYIAXAAQABAQAFAIQAIANAVAAQAQAAAKgJQAKgJAAgOQAAgRgKgHQgLgHgSAAIgEAAIgFAAIAAgRIAGAAIAFAAQAKAAAIgEQANgGAAgRQAAgMgIgHQgJgHgMAAQgUAAgIAOQgFAIAAAOIgVAAQAAgTAHgNQANgXAhAAQAYAAAOALQAOAMAAAVQAAAQgIAJQgFAGgIAEQANADAHAKQAIAKAAAPQAAAYgQAPQgQAPgcAAQgeAAgNgQg");
	this.shape_1.setTransform(270.775,23.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BZIAAiuIAWAAIAAARQAFgJAIgEQALgHANAAQAWAAAOAQQAQAQAAAfQgBAogVARQgOALgRAAQgOAAgKgGQgFgDgHgJIAABAgAgegwQgEAMAAASQAAAOAEAKQAJATAVAAQAOAAAKgMQAKgNAAgXQAAgPgEgLQgJgVgVAAQgVAAgJAWg");
	this.shape_2.setTransform(144.9,27.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAXgNIAVgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgIAQQgFAJgBAQIgVAAQABgWAHgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgIAIgWAMIgOAJQgMAGgGAGQgNAKgCAMIBaAAIAAAUg");
	this.shape_3.setTransform(131.25,22.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnA2QgMgNAAgSIAUAAQABAKAFAGQAHAKAUAAQAMAAAIgFQAKgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgEgIgEQgOgJAAgPQAAgSAOgLQANgLAVAAQAcAAAMARQAJAKgBAMIgTAAQgBgGgFgGQgHgJgSABQgMAAgGAEQgHAFABAHQgBAIAJAFQAEADAKACIAOADQAWAGAIAEQANAIAAARQAAARgOAMQgMANgaAAQgcAAgMgNg");
	this.shape_4.setTransform(98.75,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAXgNIAVgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgJAQQgEAJgBAQIgVAAQABgWAHgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgJAIgUAMIgPAJQgMAGgGAGQgNAKgDAMIBbAAIAAAUg");
	this.shape_5.setTransform(86,22.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmA2QgNgNgBgSIAVAAQABAKAEAGQAJAKASAAQAMAAAKgFQAJgFAAgLQAAgIgHgEQgFgDgOgDIgQgEQgQgEgIgEQgNgJAAgPQAAgSAMgLQAOgLAVAAQAcAAANARQAHAKAAAMIgUAAQAAgGgEgGQgIgJgRABQgNAAgGAEQgGAFgBAHQABAIAIAFQAFADAJACIANADQAYAGAIAEQALAIABARQgBARgNAMQgMANgbAAQgbAAgLgNg");
	this.shape_6.setTransform(46.85,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAJBUIAAh3IgnAAIAAgPQAXgCAIgGQAJgFAEgUIARAAIAACng");
	this.shape_7.setTransform(32.95,22.85);

	this.instance_1 = new lib.arrowsboth();
	this.instance_1.setTransform(227.85,60.8,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_2 = new lib.arrowsboth();
	this.instance_2.setTransform(181.9,60.8,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_3 = new lib.arrowsboth();
	this.instance_3.setTransform(135.95,60.8,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_4 = new lib.arrowsboth();
	this.instance_4.setTransform(90,60.8,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_5 = new lib.arrowsboth();
	this.instance_5.setTransform(44.05,60.8,0.288,0.288,0,0,0,0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(199.9,60.7,92.9,19.099999999999994);
// library properties:
lib.properties = {
	id: '0F9B9F581DAF4019BC18150806A25354',
	width: 350,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0F9B9F581DAF4019BC18150806A25354'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;