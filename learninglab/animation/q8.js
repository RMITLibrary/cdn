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
(lib.q8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnBHQgPgSAAgdQAAgbANgTQAPgVAaAAQANABAJAFQAGAEAHAIIAAg/IAVAAIAACsIgTAAIAAgRQgIALgKAGQgKAEgMAAQgVAAgPgRgAgXgMQgJAMAAAXQAAAUAIAOQAJANARAAQAPAAAKgMQAJgNAAgXQAAgXgKgMQgKgMgOAAQgOAAgLANg");
	this.shape.setTransform(44.3,354.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAwQgPgSAAgbQAAggAQgSQAQgSAYAAQAVAAAOAKQANAKADAZIgVAAQgCgLgGgIQgHgIgPAAQgTAAgJAUQgFANAAASQAAASAIANQAIANAQAAQANAAAIgIQAHgIADgOIAVAAQgEAZgOAMQgOALgWAAQgYAAgOgSg");
	this.shape_1.setTransform(44.175,255.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBRQgGgEgHgJIAAAQIgUAAIAAirIAVAAIAAA+QAHgJAKgFQAKgFAKAAQAXAAAPARQAPAQAAAeQAAAegPAUQgPATgZAAQgNAAgKgHgAgYgOQgLALAAAXQAAASAEALQAJAVAWAAQARAAAIgOQAJgOAAgWQAAgUgJgMQgIgNgQAAQgOAAgLALg");
	this.shape_2.setTransform(45,156.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwA4QgLgLABgQQgBgRALgKQALgIASgCIAggFQAIgBACgFQACgDAAgFQAAgLgIgFQgHgEgOAAQgQAAgHAIQgEAFgBAKIgUAAQABgXAOgJQAOgJAUAAQAVAAANAIQAPAJAAARIAABIQAAADABACQABACAEAAIAEAAIADgBIAAAQIgHACIgHAAQgLAAgFgIQgDgEgBgHQgGAIgMAGQgLAGgPAAQgRAAgMgKgAAOADIgLACIgNACQgLABgGADQgJAGgBAMQABAJAGAFQAHAGAJAAQALAAAJgGQATgIgBgUIAAgPIgKADg");
	this.shape_3.setTransform(45,69.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag3BZIAAiuIAVAAIAAARQAHgJAHgEQALgHAOAAQAUAAAQAQQAOAQAAAfQAAAogVARQgNALgTAAQgNAAgJgGQgHgDgGgJIAABAgAgdgwQgFAMAAASQAAAOAFAKQAHATAWAAQAOAAAKgMQAKgNAAgXQAAgPgFgLQgHgVgWAAQgWAAgHAWg");
	this.shape_4.setTransform(376.8,327.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgsBGQgOgQAAgYIAXAAQABAQAFAIQAIANAVAAQAQAAAKgJQAKgJAAgOQAAgRgKgHQgLgHgSAAIgEAAIgFAAIAAgRIAGAAIAFAAQAKAAAIgEQANgGAAgRQAAgMgIgHQgJgHgMAAQgUAAgIAOQgFAIAAAOIgVAAQAAgTAHgNQANgXAhAAQAYAAAOALQAOAMAAAVQAAAQgIAJQgFAGgIAEQANADAHAKQAIAKAAAPQAAAYgQAPQgQAPgcAAQgeAAgNgQg");
	this.shape_5.setTransform(363.025,323.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnA2QgLgMgBgUIAUAAQABALAEAGQAIAKAUAAQALAAAKgFQAJgFAAgLQAAgIgIgEQgEgDgOgDIgQgFQgQgDgIgFQgOgIAAgPQAAgSANgLQANgLAWAAQAcAAANARQAHAKABANIgUAAQgBgHgEgHQgIgIgSAAQgMABgGAEQgHAFAAAHQAAAIAJAFQAFADAJACIANADQAXAGAJAEQAMAJgBAQQABASgNAMQgNAMgbAAQgbAAgMgNg");
	this.shape_6.setTransform(330.65,325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgsBGQgOgQAAgYIAXAAQABAQAFAIQAIANAVAAQAQAAAKgJQAKgJAAgOQAAgRgKgHQgLgHgSAAIgEAAIgFAAIAAgRIAGAAIAFAAQAKAAAIgEQANgGAAgRQAAgMgIgHQgJgHgMAAQgUAAgIAOQgFAIAAAOIgVAAQAAgTAHgNQANgXAhAAQAYAAAOALQAOAMAAAVQAAAQgIAJQgFAGgIAEQANADAHAKQAIAKAAAPQAAAYgQAPQgQAPgcAAQgeAAgNgQg");
	this.shape_7.setTransform(317.775,323.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag2BZIAAiuIAVAAIAAARQAFgJAIgEQALgHANAAQAWAAAOAQQAPAQABAfQAAAogWARQgOALgSAAQgNAAgKgGQgFgDgHgJIAABAgAgegwQgEAMAAASQAAAOAEAKQAJATAVAAQAOAAAKgMQAKgNAAgXQAAgPgFgLQgIgVgVAAQgVAAgJAWg");
	this.shape_8.setTransform(191.9,327.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAWgNIAWgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgJAQQgEAJgBAQIgVAAQABgWAHgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgJAIgUAMIgPAJQgMAGgGAGQgNAKgDAMIBbAAIAAAUg");
	this.shape_9.setTransform(178.25,322.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmA2QgMgMgCgUIAVAAQABALAEAGQAJAKASAAQANAAAIgFQAKgFAAgLQAAgIgHgEQgFgDgOgDIgQgFQgQgDgIgFQgNgIAAgPQAAgSAMgLQAOgLAVAAQAcAAAMARQAIAKAAANIgUAAQAAgHgEgHQgIgIgRAAQgNABgGAEQgGAFAAAHQAAAIAIAFQAFADAJACIANADQAYAGAHAEQAMAJABAQQgBASgNAMQgMAMgaAAQgcAAgLgNg");
	this.shape_10.setTransform(145.75,325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAWgNIAWgNQAPgHAGgHQAJgJAAgNQAAgPgIgIQgJgJgOAAQgVAAgJAQQgEAJAAAQIgWAAQAAgWAIgOQAOgYAiAAQAdAAANAPQANAQAAATQAAAUgOAOQgJAIgUAMIgQAJQgLAGgHAGQgLAKgEAMIBbAAIAAAUg");
	this.shape_11.setTransform(133,322.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgmA2QgMgMgCgUIAVAAQABALAEAGQAJAKASAAQAMAAAKgFQAJgFAAgLQAAgIgIgEQgEgDgOgDIgQgFQgQgDgIgFQgNgIAAgPQgBgSANgLQANgLAWAAQAcAAANARQAHAKABANIgVAAQAAgHgEgHQgIgIgSAAQgMABgGAEQgGAFgBAHQAAAIAJAFQAFADAJACIANADQAXAGAJAEQAMAJgBAQQABASgNAMQgNAMgbAAQgbAAgLgNg");
	this.shape_12.setTransform(93.85,325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAJBTIAAh1IgnAAIAAgRQAXgCAIgFQAJgFAEgUIARAAIAACmg");
	this.shape_13.setTransform(79.95,322.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag3BZIAAiuIAVAAIAAARQAHgJAHgEQALgHAOAAQAUAAAQAQQAOAQAAAfQAAAogVARQgNALgSAAQgOAAgJgGQgHgDgGgJIAABAgAgdgwQgFAMAAASQAAAOAFAKQAHATAWAAQAOAAAKgMQAKgNAAgXQAAgPgEgLQgIgVgWAAQgWAAgHAWg");
	this.shape_14.setTransform(376.45,225.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgsBGQgOgQAAgYIAXAAQABAQAFAIQAIANAVAAQAQAAAKgJQAKgJAAgOQAAgRgKgHQgLgHgSAAIgEAAIgFAAIAAgRIAGAAIAFAAQAKAAAIgEQANgGAAgRQAAgMgIgHQgJgHgMAAQgUAAgIAOQgFAIAAAOIgVAAQAAgTAHgNQANgXAhAAQAYAAAOALQAOAMAAAVQAAAQgIAJQgFAGgIAEQANADAHAKQAIAKAAAPQAAAYgQAPQgQAPgcAAQgeAAgNgQg");
	this.shape_15.setTransform(362.675,221.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnA2QgMgMAAgUIAUAAQABALAFAGQAHAKAUAAQAMAAAIgFQAKgFAAgLQAAgIgIgEQgEgCgOgEIgQgFQgQgDgIgFQgOgIAAgPQABgSANgLQAMgLAWAAQAcAAANARQAIALAAAMIgUAAQgBgHgFgHQgHgHgSgBQgMAAgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIAOAEQAWAFAJAEQALAIAAASQAAAQgMANQgNAMgaAAQgcAAgMgNg");
	this.shape_16.setTransform(330.3,223.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgsBGQgOgQAAgYIAXAAQABAQAFAIQAIANAVAAQAQAAAKgJQAKgJAAgOQAAgRgKgHQgLgHgSAAIgEAAIgFAAIAAgRIAGAAIAFAAQAKAAAIgEQANgGAAgRQAAgMgIgHQgJgHgMAAQgUAAgIAOQgFAIAAAOIgVAAQAAgTAHgNQANgXAhAAQAYAAAOALQAOAMAAAVQAAAQgIAJQgFAGgIAEQANADAHAKQAIAKAAAPQAAAYgQAPQgQAPgcAAQgeAAgNgQg");
	this.shape_17.setTransform(317.425,221.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag2BZIAAiuIAUAAIAAARQAGgJAIgEQALgHANAAQAWAAAOAQQAPAQAAAfQABAogWARQgOALgSAAQgNAAgKgGQgGgDgGgJIAABAgAgegwQgEAMAAASQAAAOAEAKQAIATAWAAQAOAAAKgMQAKgNAAgXQAAgPgFgLQgHgVgWAAQgWAAgIAWg");
	this.shape_18.setTransform(191.55,225.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAWgNIAWgNQAPgHAGgHQAJgJAAgNQAAgPgIgIQgJgJgPAAQgUAAgJAQQgEAJAAAQIgWAAQABgWAHgOQAOgYAhAAQAeAAANAPQANAQAAATQAAAUgOAOQgJAIgUAMIgPAJQgMAGgHAGQgLAKgEAMIBbAAIAAAUg");
	this.shape_19.setTransform(177.9,221.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgmA2QgNgMgBgUIAVAAQABALAEAGQAJAKASAAQAMAAAKgFQAJgFAAgLQAAgIgHgEQgFgCgOgEIgQgFQgQgDgIgFQgNgIAAgPQAAgSAMgLQAOgLAVAAQAcAAANARQAHALAAAMIgUAAQAAgHgEgHQgIgHgRgBQgNAAgGAFQgGAFgBAHQABAIAIAFQAFADAJACIANAEQAYAFAIAEQALAIABASQgBAQgNANQgMAMgbAAQgbAAgLgNg");
	this.shape_20.setTransform(145.4,223.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAWgNIAWgNQAPgHAGgHQAJgJAAgNQAAgPgIgIQgJgJgOAAQgVAAgJAQQgEAJAAAQIgWAAQAAgWAIgOQAOgYAiAAQAdAAANAPQANAQAAATQAAAUgOAOQgIAIgWAMIgPAJQgLAGgHAGQgMAKgCAMIBaAAIAAAUg");
	this.shape_21.setTransform(132.65,221.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgnA2QgLgMgBgUIAUAAQABALAEAGQAIAKAUAAQALAAAKgFQAJgFAAgLQAAgIgIgEQgEgCgOgEIgQgFQgQgDgIgFQgOgIABgPQgBgSANgLQANgLAWAAQAcAAANARQAHALABAMIgUAAQgBgHgFgHQgHgHgSgBQgMAAgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIANAEQAXAFAJAEQAMAIgBASQABAQgNANQgNAMgbAAQgbAAgMgNg");
	this.shape_22.setTransform(93.5,223.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAJBTIAAh1IgnAAIAAgRQAXgCAIgFQAJgFAFgTIAQAAIAAClg");
	this.shape_23.setTransform(79.6,221.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag3BZIAAiuIAVAAIAAARQAHgJAHgEQALgHAOAAQAUAAAQAQQAOAQAAAfQAAAogVARQgNALgTAAQgNAAgJgGQgHgDgGgJIAABAgAgdgwQgFAMAAASQAAAOAFAKQAHATAWAAQAOAAAKgMQAKgNAAgXQAAgPgFgLQgHgVgWAAQgWAAgHAWg");
	this.shape_24.setTransform(376.8,130.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgsBGQgOgQAAgYIAXAAQABAQAFAIQAIANAVAAQAQAAAKgJQAKgJAAgOQAAgRgKgHQgLgHgSAAIgEAAIgFAAIAAgRIAGAAIAFAAQAKAAAIgEQANgGAAgRQAAgMgIgHQgJgHgMAAQgUAAgIAOQgFAIAAAOIgVAAQAAgTAHgNQANgXAhAAQAYAAAOALQAOAMAAAVQAAAQgIAJQgFAGgIAEQANADAHAKQAIAKAAAPQAAAYgQAPQgQAPgcAAQgeAAgNgQg");
	this.shape_25.setTransform(363.025,126.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgnA2QgLgMgBgUIAUAAQABALAEAGQAIAKAUAAQALAAAKgFQAJgFAAgLQAAgIgIgEQgEgCgOgEIgQgFQgQgDgIgFQgOgIAAgPQAAgSANgLQANgLAWAAQAcAAANARQAHAKABANIgUAAQgBgHgEgHQgIgHgSgBQgMAAgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIANAEQAXAFAJAEQAMAIgBASQABARgNAMQgNAMgbAAQgbAAgMgNg");
	this.shape_26.setTransform(330.65,128);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgsBGQgOgQAAgYIAXAAQABAQAFAIQAIANAVAAQAQAAAKgJQAKgJAAgOQAAgRgKgHQgLgHgSAAIgEAAIgFAAIAAgRIAGAAIAFAAQAKAAAIgEQANgGAAgRQAAgMgIgHQgJgHgMAAQgUAAgIAOQgFAIAAAOIgVAAQAAgTAHgNQANgXAhAAQAYAAAOALQAOAMAAAVQAAAQgIAJQgFAGgIAEQANADAHAKQAIAKAAAPQAAAYgQAPQgQAPgcAAQgeAAgNgQg");
	this.shape_27.setTransform(317.775,126.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag2BZIAAiuIAVAAIAAARQAFgJAIgEQALgHANAAQAWAAAOAQQAPAQABAfQAAAogWARQgOALgSAAQgNAAgKgGQgFgDgHgJIAABAgAgegwQgEAMAAASQAAAOAEAKQAJATAVAAQAOAAAKgMQAKgNAAgXQAAgPgFgLQgIgVgVAAQgVAAgJAWg");
	this.shape_28.setTransform(191.9,130.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAWgNIAWgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgJAQQgEAJgBAQIgVAAQABgWAHgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgJAIgUAMIgPAJQgMAGgGAGQgNAKgDAMIBbAAIAAAUg");
	this.shape_29.setTransform(178.25,125.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgmA2QgMgMgCgUIAVAAQABALAEAGQAJAKASAAQANAAAIgFQAKgFAAgLQAAgIgHgEQgFgCgOgEIgQgFQgQgDgIgFQgNgIAAgPQAAgSAMgLQAOgLAVAAQAcAAAMARQAIAKAAANIgUAAQAAgHgEgHQgIgHgRgBQgNAAgGAFQgGAFAAAHQAAAIAIAFQAFADAJACIANAEQAYAFAHAEQAMAIABASQgBARgNAMQgMAMgaAAQgcAAgLgNg");
	this.shape_30.setTransform(145.75,128);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAWgNIAWgNQAPgHAGgHQAJgJAAgNQAAgPgIgIQgJgJgOAAQgVAAgJAQQgEAJAAAQIgWAAQAAgWAIgOQAOgYAiAAQAdAAANAPQANAQAAATQAAAUgOAOQgJAIgUAMIgQAJQgLAGgHAGQgLAKgEAMIBbAAIAAAUg");
	this.shape_31.setTransform(133,125.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgmA2QgMgMgCgUIAVAAQABALAEAGQAJAKASAAQAMAAAKgFQAJgFAAgLQAAgIgIgEQgEgCgOgEIgQgFQgQgDgIgFQgNgIAAgPQgBgSANgLQANgLAWAAQAcAAANARQAHAKABANIgVAAQAAgHgEgHQgIgHgSgBQgMAAgGAFQgGAFgBAHQAAAIAJAFQAFADAJACIANAEQAXAFAJAEQAMAIgBASQABARgNAMQgNAMgbAAQgbAAgLgNg");
	this.shape_32.setTransform(93.85,128);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAJBTIAAh1IgnAAIAAgRQAXgCAIgFQAJgFAEgTIARAAIAAClg");
	this.shape_33.setTransform(79.95,125.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag3BZIAAiuIAVAAIAAARQAHgJAHgEQALgHAOAAQAUAAAQAQQAOAQAAAfQAAAogVARQgNALgTAAQgNAAgJgGQgHgDgGgJIAABAgAgdgwQgFAMAAASQAAAOAFAKQAHATAWAAQAOAAAKgMQAKgNAAgXQAAgPgFgLQgHgVgWAAQgWAAgHAWg");
	this.shape_34.setTransform(376.8,39.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgsBGQgOgQAAgYIAXAAQABAQAFAIQAIANAVAAQAQAAAKgJQAKgJAAgOQAAgRgKgHQgLgHgSAAIgEAAIgFAAIAAgRIAGAAIAFAAQAKAAAIgEQANgGAAgRQAAgMgIgHQgJgHgMAAQgUAAgIAOQgFAIAAAOIgVAAQAAgTAHgNQANgXAhAAQAYAAAOALQAOAMAAAVQAAAQgIAJQgFAGgIAEQANADAHAKQAIAKAAAPQAAAYgQAPQgQAPgcAAQgeAAgNgQg");
	this.shape_35.setTransform(363.025,35.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnA2QgLgNgBgSIAUAAQABAKAEAGQAIAKAUAAQALAAAKgFQAJgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJAAgPQAAgSANgLQANgLAWAAQAcAAANARQAHAKABAMIgUAAQgBgGgEgGQgIgJgSABQgMgBgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIANAEQAXAFAJAEQAMAIgBARQABARgNAMQgNANgbAAQgbAAgMgNg");
	this.shape_36.setTransform(330.65,37.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgsBGQgOgQAAgYIAXAAQABAQAFAIQAIANAVAAQAQAAAKgJQAKgJAAgOQAAgRgKgHQgLgHgSAAIgEAAIgFAAIAAgRIAGAAIAFAAQAKAAAIgEQANgGAAgRQAAgMgIgHQgJgHgMAAQgUAAgIAOQgFAIAAAOIgVAAQAAgTAHgNQANgXAhAAQAYAAAOALQAOAMAAAVQAAAQgIAJQgFAGgIAEQANADAHAKQAIAKAAAPQAAAYgQAPQgQAPgcAAQgeAAgNgQg");
	this.shape_37.setTransform(317.775,35.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag2BZIAAiuIAVAAIAAARQAFgJAIgEQALgHANAAQAWAAAOAQQAPAQABAfQAAAogWARQgOALgSAAQgNAAgKgGQgFgDgHgJIAABAgAgegwQgEAMAAASQAAAOAEAKQAJATAVAAQAOAAAKgMQAKgNAAgXQAAgPgFgLQgIgVgVAAQgVAAgJAWg");
	this.shape_38.setTransform(191.9,39.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAWgNIAWgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgJAQQgEAJgBAQIgVAAQABgWAHgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgJAIgUAMIgPAJQgMAGgGAGQgNAKgDAMIBbAAIAAAUg");
	this.shape_39.setTransform(178.25,35.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgmA2QgMgNgCgSIAVAAQABAKAEAGQAJAKASAAQANAAAIgFQAKgFAAgLQAAgIgHgEQgFgDgOgDIgQgEQgQgFgIgDQgNgJAAgPQAAgSAMgLQAOgLAVAAQAcAAAMARQAIAKAAAMIgUAAQAAgGgEgGQgIgJgRABQgNgBgGAFQgGAFAAAHQAAAIAIAFQAFADAJACIANAEQAYAFAHAEQAMAIABARQgBARgNAMQgMANgaAAQgcAAgLgNg");
	this.shape_40.setTransform(145.75,37.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAWgNIAWgNQAPgHAGgHQAJgJAAgNQAAgPgIgIQgJgJgOAAQgVAAgJAQQgEAJAAAQIgWAAQAAgWAIgOQAOgYAiAAQAdAAANAPQANAQAAATQAAAUgOAOQgJAIgUAMIgQAJQgLAGgHAGQgLAKgEAMIBbAAIAAAUg");
	this.shape_41.setTransform(133,35.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgmA2QgMgNgCgSIAVAAQABAKAEAGQAJAKASAAQAMAAAKgFQAJgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgNgJAAgPQgBgSANgLQANgLAWAAQAcAAANARQAHAKABAMIgVAAQAAgGgEgGQgIgJgSABQgMgBgGAFQgGAFgBAHQAAAIAJAFQAFADAJACIANAEQAXAFAJAEQAMAIgBARQABARgNAMQgNANgbAAQgbAAgLgNg");
	this.shape_42.setTransform(93.85,37.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAJBUIAAh3IgnAAIAAgPQAXgDAIgFQAJgFAEgUIARAAIAACng");
	this.shape_43.setTransform(79.95,35.35);

	this.instance = new lib.arrowsone();
	this.instance.setTransform(458.65,360.65,0.288,0.288,0,180,0,0.1,-0.5);

	this.instance_1 = new lib.arrowsone();
	this.instance_1.setTransform(366.7,360.75,0.288,0.288,0,0,0,0.1,-0.5);

	this.instance_2 = new lib.arrowsboth();
	this.instance_2.setTransform(320.8,360.8,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_3 = new lib.arrowsboth();
	this.instance_3.setTransform(274.85,360.8,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_4 = new lib.arrowsboth();
	this.instance_4.setTransform(228.9,360.8,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_5 = new lib.arrowsboth();
	this.instance_5.setTransform(182.95,360.8,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_6 = new lib.arrowsboth();
	this.instance_6.setTransform(137,360.8,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_7 = new lib.arrowsboth();
	this.instance_7.setTransform(91.05,360.8,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_8 = new lib.arrowsone();
	this.instance_8.setTransform(412.7,360.75,0.288,0.288,0,0,0,0.1,-0.5);

	this.instance_9 = new lib.arrowsone();
	this.instance_9.setTransform(366.7,259.85,0.288,0.288,0,0,0,0.1,-0.5);

	this.instance_10 = new lib.arrowsboth();
	this.instance_10.setTransform(412.7,259.9,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_11 = new lib.arrowsboth();
	this.instance_11.setTransform(320.8,259.9,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_12 = new lib.arrowsboth();
	this.instance_12.setTransform(274.85,259.9,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_13 = new lib.arrowsboth();
	this.instance_13.setTransform(228.9,259.9,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_14 = new lib.arrowsboth();
	this.instance_14.setTransform(182.95,259.9,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_15 = new lib.arrowsboth();
	this.instance_15.setTransform(137,259.9,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_16 = new lib.arrowsboth();
	this.instance_16.setTransform(91.05,259.9,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_17 = new lib.arrowsone();
	this.instance_17.setTransform(412.65,73.35,0.288,0.288,0,0,0,0.1,-0.5);

	this.instance_18 = new lib.arrowsboth();
	this.instance_18.setTransform(320.8,73.4,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_19 = new lib.arrowsboth();
	this.instance_19.setTransform(274.85,73.4,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_20 = new lib.arrowsboth();
	this.instance_20.setTransform(228.9,73.4,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_21 = new lib.arrowsboth();
	this.instance_21.setTransform(182.95,73.4,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_22 = new lib.arrowsboth();
	this.instance_22.setTransform(137,73.4,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_23 = new lib.arrowsboth();
	this.instance_23.setTransform(91.05,73.4,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_24 = new lib.arrowsone();
	this.instance_24.setTransform(458.65,73.35,0.288,0.288,0,0,0,0.1,-0.5);

	this.instance_25 = new lib.arrowsone();
	this.instance_25.setTransform(412.65,163.25,0.288,0.288,0,0,0,0.1,-0.5);

	this.instance_26 = new lib.arrowsboth();
	this.instance_26.setTransform(366.75,163.3,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_27 = new lib.arrowsboth();
	this.instance_27.setTransform(320.8,163.3,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_28 = new lib.arrowsboth();
	this.instance_28.setTransform(274.85,163.3,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_29 = new lib.arrowsboth();
	this.instance_29.setTransform(228.9,163.3,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_30 = new lib.arrowsboth();
	this.instance_30.setTransform(182.95,163.3,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_31 = new lib.arrowsboth();
	this.instance_31.setTransform(137,163.3,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_32 = new lib.arrowsboth();
	this.instance_32.setTransform(91.05,163.3,0.288,0.288,0,0,0,0.4,-0.4);

	this.instance_33 = new lib.arrowsone();
	this.instance_33.setTransform(366.7,73.35,0.288,0.288,0,0,0,0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(311.1,223.2,166.59999999999997,156.60000000000002);
// library properties:
lib.properties = {
	id: '0F9B9F581DAF4019BC18150806A25354',
	width: 550,
	height: 400,
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