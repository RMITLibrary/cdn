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
(lib.orbitaldiagram = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrows_copy_copy_copy
	this.instance = new lib.arrowsboth();
	this.instance.setTransform(452.1,406.9,0.2999,0.2999,0,0,0,0.1,-0.5);

	this.instance_1 = new lib.arrowsboth();
	this.instance_1.setTransform(402.4,406.9,0.2999,0.2999,0,0,0,0.1,-0.5);

	this.instance_2 = new lib.arrowsboth();
	this.instance_2.setTransform(352.7,406.9,0.2999,0.2999,0,0,0,0.1,-0.5);

	this.instance_3 = new lib.arrowsone();
	this.instance_3.setTransform(551.6,406.85,0.2999,0.2999,0,0,0,0.1,-0.7);

	this.instance_4 = new lib.arrowsone();
	this.instance_4.setTransform(501.8,406.85,0.2999,0.2999,0,0,0,0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},450).wait(101));

	// arrows_copy_copy
	this.instance_5 = new lib.arrowsboth();
	this.instance_5.setTransform(402.4,352.75,0.2999,0.2999,0,0,0,0.1,-0.5);

	this.instance_6 = new lib.arrowsboth();
	this.instance_6.setTransform(352.7,352.75,0.2999,0.2999,0,0,0,0.1,-0.5);

	this.instance_7 = new lib.arrowsone();
	this.instance_7.setTransform(452.1,352.7,0.2999,0.2999,0,0,0,0.1,-0.7);

	this.instance_8 = new lib.arrowsone();
	this.instance_8.setTransform(551.6,352.7,0.2999,0.2999,0,0,0,0.1,-0.7);

	this.instance_9 = new lib.arrowsone();
	this.instance_9.setTransform(501.8,352.7,0.2999,0.2999,0,0,0,0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},362).wait(189));

	// arrows_copy_copy
	this.instance_10 = new lib.arrowsboth();
	this.instance_10.setTransform(402.4,298.95,0.2999,0.2999,0,0,0,0.1,-0.5);

	this.instance_11 = new lib.arrowsboth();
	this.instance_11.setTransform(352.7,298.65,0.2999,0.2999,0,0,0,0.1,-0.5);

	this.instance_12 = new lib.arrowsone();
	this.instance_12.setTransform(501.8,298.9,0.2999,0.2999,0,0,0,0.1,-0.7);

	this.instance_13 = new lib.arrowsone();
	this.instance_13.setTransform(452.1,298.9,0.2999,0.2999,0,0,0,0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},272).wait(279));

	// arrows_copy
	this.instance_14 = new lib.arrowsboth();
	this.instance_14.setTransform(352.7,244.55,0.2999,0.2999,0,0,0,0.1,-0.5);

	this.instance_15 = new lib.arrowsone();
	this.instance_15.setTransform(402.4,244.5,0.2999,0.2999,0,0,0,0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14}]},182).wait(369));

	// arrows_copy
	this.instance_16 = new lib.arrowsboth();
	this.instance_16.setTransform(352.7,190.45,0.2999,0.2999,0,0,0,0.1,-0.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(91).to({_off:false},0).wait(460));

	// arrows
	this.instance_17 = new lib.arrowsone();
	this.instance_17.setTransform(352.7,136.3,0.2999,0.2999,0,0,0,0.1,-0.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(9).to({_off:false},0).wait(542));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJA3IAAgbIgvAAIAAgNIAxhFIAMAAIAABGIAQAAIAAAMIgQAAIAAAbgAgZAQIAiAAIAAgwg");
	this.shape.setTransform(242.075,402.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3BZIAAiuIAWAAIAAARQAFgJAIgEQALgHANAAQAWAAAOAQQAPAQABAfQgBAogVARQgOALgRAAQgOAAgKgGQgFgDgHgJIAABAgAgegwQgEAMAAASQAAAOAEAKQAJATAVAAQAOAAAKgMQAKgNAAgXQAAgPgEgLQgJgVgVAAQgVAAgJAWg");
	this.shape_1.setTransform(231.4,410.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAXgNIAVgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgIAQQgFAJgBAQIgVAAQAAgWAIgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgIAIgVAMIgPAJQgMAGgGAGQgNAKgDAMIBbAAIAAAUg");
	this.shape_2.setTransform(217.75,406.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglA3QABgOAFgLQAFgKAPgJIANgIQAKgFAEgEQAGgGAAgIQAAgKgFgGQgGgFgKAAQgNAAgFAKQgDAGAAAKIgOAAQAAgOAFgJQAJgQAWAAQASAAAJAKQAJALAAAMQAAANgKAIQgFAGgOAHIgJAGQgIAEgEAEQgIAHgCAIIA7AAIAAANg");
	this.shape_3.setTransform(200.175,402.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnA2QgMgNAAgSIAUAAQABAKAFAGQAHAKAUAAQAMAAAIgFQAKgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJAAgPQABgSANgLQAMgLAWAAQAcAAAMARQAJAKAAAMIgUAAQgBgGgFgGQgHgJgSABQgMgBgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIAOADQAWAGAIAEQAMAIAAASQAAAQgMAMQgNANgaAAQgcAAgMgNg");
	this.shape_4.setTransform(189.9,408.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAXgNIAVgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgIAQQgFAJgBAQIgVAAQABgWAHgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgIAIgWAMIgOAJQgMAGgGAGQgNAKgDAMIBbAAIAAAUg");
	this.shape_5.setTransform(177.15,406.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglA3QABgOAFgLQAFgKAPgJIANgIQAKgFAEgEQAGgGAAgIQAAgKgFgGQgGgFgKAAQgNAAgFAKQgDAGAAAKIgOAAQAAgOAFgJQAJgQAWAAQASAAAJAKQAJALAAAMQAAANgKAIQgFAGgOAHIgJAGQgIAEgEAEQgIAHgCAIIA7AAIAAANg");
	this.shape_6.setTransform(159.575,402.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnA2QgLgNgBgSIAUAAQABAKAEAGQAIAKAUAAQALAAAKgFQAJgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJAAgPQAAgSANgLQANgLAWAAQAcAAANARQAHAKABAMIgUAAQgBgGgFgGQgHgJgSABQgMgBgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIANADQAXAGAJAEQAMAIgBASQABAQgNAMQgNANgbAAQgbAAgMgNg");
	this.shape_7.setTransform(149.3,408.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAJBUIAAh3IgnAAIAAgPQAXgDAIgFQAJgFAFgUIAQAAIAACng");
	this.shape_8.setTransform(135.4,406.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcAtQgJgLAAgPIAOAAQABALADAFQAGAJANAAQAKAAAHgHQAGgFAAgJQAAgLgGgFQgHgEgMgBIgCAAIgDAAIAAgKIADAAIADAAQAHAAAFgCQAJgFAAgLQAAgIgGgEQgGgFgHAAQgNAAgFAJQgDAFgBAKIgNAAQAAgNAFgIQAIgPAVAAQAQAAAJAHQAJAIAAAOQAAAKgFAGQgEAEgFACQAJADAEAFQAFAHAAAJQAAAQgKAKQgKAKgSAAQgUAAgIgLg");
	this.shape_9.setTransform(241.975,348.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag3BZIAAiuIAWAAIAAARQAFgJAIgEQALgHANAAQAWAAAOAQQAPAQABAfQgBAogVARQgOALgRAAQgOAAgKgGQgFgDgHgJIAABAgAgegwQgEAMAAASQAAAOAEAKQAJATAVAAQAOAAAKgMQAKgNAAgXQAAgPgEgLQgJgVgVAAQgVAAgJAWg");
	this.shape_10.setTransform(231.4,356.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAXgNIAVgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgIAQQgFAJgBAQIgVAAQAAgWAIgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgIAIgVAMIgPAJQgMAGgGAGQgNAKgDAMIBbAAIAAAUg");
	this.shape_11.setTransform(217.75,352.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglA3QABgOAFgLQAFgKAPgJIANgIQAKgFAEgEQAGgGAAgIQAAgKgFgGQgGgFgKAAQgNAAgFAKQgDAGAAAKIgOAAQAAgOAFgJQAJgQAWAAQASAAAJAKQAJALAAAMQAAANgKAIQgFAGgOAHIgJAGQgIAEgEAEQgIAHgCAIIA7AAIAAANg");
	this.shape_12.setTransform(200.175,348.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgnA2QgMgNAAgSIAUAAQABAKAFAGQAHAKAUAAQAMAAAIgFQAKgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJAAgPQABgSANgLQAMgLAWAAQAcAAAMARQAJAKAAAMIgUAAQgBgGgFgGQgHgJgSABQgMgBgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIAOADQAWAGAIAEQAMAIAAASQAAAQgMAMQgNANgaAAQgcAAgMgNg");
	this.shape_13.setTransform(189.9,354.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAXgNIAVgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgIAQQgFAJgBAQIgVAAQABgWAHgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgIAIgWAMIgOAJQgMAGgGAGQgNAKgDAMIBbAAIAAAUg");
	this.shape_14.setTransform(177.15,352.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglA3QABgOAFgLQAFgKAPgJIANgIQAKgFAEgEQAGgGAAgIQAAgKgFgGQgGgFgKAAQgNAAgFAKQgDAGAAAKIgOAAQAAgOAFgJQAJgQAWAAQASAAAJAKQAJALAAAMQAAANgKAIQgFAGgOAHIgJAGQgIAEgEAEQgIAHgCAIIA7AAIAAANg");
	this.shape_15.setTransform(159.575,348.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnA2QgLgNgBgSIAUAAQABAKAEAGQAIAKAUAAQALAAAKgFQAJgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJAAgPQAAgSANgLQANgLAWAAQAcAAANARQAHAKABAMIgUAAQgBgGgFgGQgHgJgSABQgMgBgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIANADQAXAGAJAEQAMAIgBASQABAQgNAMQgNANgbAAQgbAAgMgNg");
	this.shape_16.setTransform(149.3,354.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAJBUIAAh3IgnAAIAAgPQAXgDAIgFQAJgFAFgUIAQAAIAACng");
	this.shape_17.setTransform(135.4,352.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglA3QABgOAFgLQAFgKAPgJIANgIQAKgFAEgEQAGgGAAgIQAAgKgFgGQgGgFgKAAQgNAAgFAKQgDAGAAAKIgOAAQAAgOAFgJQAJgQAWAAQASAAAJAKQAJALAAAMQAAANgKAIQgFAGgOAHIgJAGQgIAEgEAEQgIAHgCAIIA7AAIAAANg");
	this.shape_18.setTransform(242.075,294.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag3BZIAAiuIAWAAIAAARQAFgJAIgEQALgHANAAQAWAAAOAQQAPAQABAfQgBAogVARQgOALgRAAQgOAAgKgGQgFgDgHgJIAABAgAgegwQgEAMAAASQAAAOAEAKQAJATAVAAQAOAAAKgMQAKgNAAgXQAAgPgEgLQgJgVgVAAQgVAAgJAWg");
	this.shape_19.setTransform(231.4,302.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAXgNIAVgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgIAQQgFAJgBAQIgVAAQAAgWAIgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgIAIgVAMIgPAJQgMAGgGAGQgNAKgDAMIBbAAIAAAUg");
	this.shape_20.setTransform(217.75,298.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglA3QABgOAFgLQAFgKAPgJIANgIQAKgFAEgEQAGgGAAgIQAAgKgFgGQgGgFgKAAQgNAAgFAKQgDAGAAAKIgOAAQAAgOAFgJQAJgQAWAAQASAAAJAKQAJALAAAMQAAANgKAIQgFAGgOAHIgJAGQgIAEgEAEQgIAHgCAIIA7AAIAAANg");
	this.shape_21.setTransform(200.175,294.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgnA2QgMgNAAgSIAUAAQABAKAFAGQAHAKAUAAQAMAAAIgFQAKgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJAAgPQABgSANgLQAMgLAWAAQAcAAAMARQAJAKAAAMIgUAAQgBgGgFgGQgHgJgSABQgMgBgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIAOADQAWAGAIAEQAMAIAAASQAAAQgMAMQgNANgaAAQgcAAgMgNg");
	this.shape_22.setTransform(189.9,300.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAXgNIAVgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgIAQQgFAJgBAQIgVAAQABgWAHgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgIAIgWAMIgOAJQgMAGgGAGQgNAKgDAMIBbAAIAAAUg");
	this.shape_23.setTransform(177.15,298.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglA3QABgOAFgLQAFgKAPgJIANgIQAKgFAEgEQAGgGAAgIQAAgKgFgGQgGgFgKAAQgNAAgFAKQgDAGAAAKIgOAAQAAgOAFgJQAJgQAWAAQASAAAJAKQAJALAAAMQAAANgKAIQgFAGgOAHIgJAGQgIAEgEAEQgIAHgCAIIA7AAIAAANg");
	this.shape_24.setTransform(159.575,294.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgnA2QgLgNgBgSIAUAAQABAKAEAGQAIAKAUAAQALAAAKgFQAJgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJAAgPQAAgSANgLQANgLAWAAQAcAAANARQAHAKABAMIgUAAQgBgGgFgGQgHgJgSABQgMgBgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIANADQAXAGAJAEQAMAIgBASQABAQgNAMQgNANgbAAQgbAAgMgNg");
	this.shape_25.setTransform(149.3,300.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAJBUIAAh3IgnAAIAAgPQAXgDAIgFQAJgFAFgUIAQAAIAACng");
	this.shape_26.setTransform(135.4,298.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAGA2IAAhMIgZAAIAAgKQAPgCAEgDQAHgEACgMIALAAIAABrg");
	this.shape_27.setTransform(199.4,240.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgnA2QgMgNAAgSIAUAAQABAKAFAGQAHAKAUAAQAMAAAIgFQAKgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJAAgPQABgSANgLQAMgLAWAAQAcAAAMARQAJAKAAAMIgUAAQgBgGgFgGQgHgJgSABQgMgBgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIAOADQAWAGAIAEQAMAIAAARQAAARgMAMQgNANgaAAQgcAAgMgNg");
	this.shape_28.setTransform(189.9,246.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAXgNIAVgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgIAQQgFAJgBAQIgVAAQABgWAHgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgIAIgWAMIgOAJQgMAGgGAGQgNAKgDAMIBbAAIAAAUg");
	this.shape_29.setTransform(177.15,244.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AglA3QABgOAFgLQAFgKAPgJIANgIQAKgFAEgEQAGgGAAgIQAAgKgFgGQgGgFgKAAQgNAAgFAKQgDAGAAAKIgOAAQAAgOAFgJQAJgQAWAAQASAAAJAKQAJALAAAMQAAANgKAIQgFAGgOAHIgJAGQgIAEgEAEQgIAHgCAIIA7AAIAAANg");
	this.shape_30.setTransform(159.575,240.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgnA2QgLgNgBgSIAUAAQABAKAEAGQAIAKAUAAQALAAAKgFQAJgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJAAgPQAAgSANgLQANgLAWAAQAcAAANARQAHAKABAMIgUAAQgBgGgFgGQgHgJgSABQgMgBgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIANADQAXAGAJAEQAMAIgBARQABARgNAMQgNANgbAAQgbAAgMgNg");
	this.shape_31.setTransform(149.3,246.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAJBUIAAh3IgnAAIAAgPQAXgDAIgFQAJgFAFgTIAQAAIAACmg");
	this.shape_32.setTransform(135.4,244.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AglA3QABgOAFgLQAFgKAPgJIANgIQAKgFAEgEQAGgGAAgIQAAgKgFgGQgGgFgKAAQgNAAgFAKQgDAGAAAKIgOAAQAAgOAFgJQAJgQAWAAQASAAAJAKQAJALAAAMQAAANgKAIQgFAGgOAHIgJAGQgIAEgEAEQgIAHgCAIIA7AAIAAANg");
	this.shape_33.setTransform(159.575,186.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgnA2QgLgNgBgSIAUAAQABAKAEAGQAIAKAUAAQALAAAKgFQAJgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJAAgPQAAgSANgLQANgLAWAAQAcAAANARQAHAKABAMIgUAAQgBgGgFgGQgHgJgSABQgMgBgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIANADQAXAGAJAEQAMAIgBARQABARgNAMQgNANgbAAQgbAAgMgNg");
	this.shape_34.setTransform(149.3,192.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAJBUIAAh3IgnAAIAAgPQAXgDAIgFQAJgFAFgTIAQAAIAACmg");
	this.shape_35.setTransform(135.4,190.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAGA2IAAhMIgZAAIAAgKQAPgCAEgDQAGgEADgMIALAAIAABrg");
	this.shape_36.setTransform(158.8,132.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnA2QgLgNgBgSIAUAAQABAKAEAGQAIAKAUAAQALAAAKgFQAJgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJAAgPQAAgSANgLQANgLAWAAQAcAAANARQAHAKABAMIgUAAQgBgGgFgGQgHgJgSABQgMgBgGAFQgHAFAAAHQAAAIAJAFQAFADAJACIANADQAXAGAJAEQAMAIgBARQABARgNAMQgNANgbAAQgbAAgMgNg");
	this.shape_37.setTransform(149.3,138.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAJBUIAAh3IgnAAIAAgPQAXgDAIgFQAJgFAFgTIAQAAIAACmg");
	this.shape_38.setTransform(135.4,136.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag/BBQgUgaAAgmQAAgiARgZQAXggArAAQAtAAAWAeQARAWAAAkQAAAlgUAaQgXAegpAAQgoAAgXgagAgqgyQgRARAAAkQAAAcAPATQAOAVAggBQAeAAAOgWQAOgWAAgcQAAgegQgSQgQgTgbAAQgaAAgRATg");
	this.shape_39.setTransform(50.325,405.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AApBWIhWiKIAACKIgWAAIAAirIAbAAIBVCKIAAiKIAXAAIAACrg");
	this.shape_40.setTransform(49.625,351.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgwBJQgagYgBgyQABgmATgYQAWgbAlAAQAgAAASASQASARACAWIgXAAQgDgRgMgKQgMgJgUAAQgYAAgPASQgPARAAAkQgBAfAOASQAOATAbAAQAZAAANgTQAIgLADgRIAWAAQgCAbgRATQgVAWgiAAQgdAAgUgSg");
	this.shape_41.setTransform(49.6,297.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgKBWIAAh8IAVAAIAAB8gAgKg9IAAgYIAVAAIAAAYg");
	this.shape_42.setTransform(56.925,243.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag2BWIAAirIAXAAIAACXIBWAAIAAAUg");
	this.shape_43.setTransform(48.325,243.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgoAyQgQgSAAgfQAAgdAQgSQARgUAZABQANAAANAGQAMAGAHAKQAGAJACAOQACAIAAASIhaAAQAAATAJALQAIANARAAQAQAAAKgMQAFgGACgIIAVAAQgBAGgEAJQgFAJgGAFQgJAJgOADQgIACgIABQgYAAgQgRgAAjgKQgBgOgFgHQgIgQgUAAQgOAAgKALQgJAKgBAQIBEAAIAAAAg");
	this.shape_44.setTransform(64.825,192.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAsBWIAAhRIhXAAIAABRIgYAAIAAirIAYAAIAABHIBXAAIAAhHIAYAAIAACrg");
	this.shape_45.setTransform(49.675,189.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAsBWIAAhRIhXAAIAABRIgYAAIAAirIAYAAIAABHIBXAAIAAhHIAYAAIAACrg");
	this.shape_46.setTransform(49.675,135.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag3BZIAAiuIAVAAIAAARQAHgJAHgEQALgHAOAAQAUAAAQAQQAOAQAAAfQAAAogVARQgNALgTAAQgNAAgJgGQgHgDgGgJIAABAgAgdgwQgFAMAAASQAAAOAFAKQAHATAWAAQAOAAAKgMQAKgNAAgXQAAgPgFgLQgHgVgWAAQgWAAgHAWg");
	this.shape_47.setTransform(452.85,94.125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAWgNIAWgNQAPgHAGgHQAJgJAAgNQABgPgJgIQgJgJgOAAQgVAAgJAQQgEAJAAAQIgWAAQAAgWAIgOQAOgYAiAAQAcAAAOAPQANAQAAATQAAAUgOAOQgIAIgWAMIgPAJQgLAGgHAGQgMAKgCAMIBaAAIAAAUg");
	this.shape_48.setTransform(439.2,89.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgmA2QgMgMgBgTIAUAAQABAKAEAGQAIAKAUAAQALAAAKgFQAJgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJABgPQgBgSANgLQANgLAWAAQAcAAANARQAHALABALIgUAAQgBgHgFgFQgHgIgSAAQgMgBgGAFQgHAEAAAIQAAAIAJAFQAFADAJACIANAEQAXAFAJAEQAMAIgBASQABAQgNAMQgNANgbAAQgbAAgLgNg");
	this.shape_49.setTransform(406.7,91.85);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag5BUQABgVAIgQQAIgRAXgNIAVgNQAPgHAGgHQAKgJAAgNQAAgPgJgIQgJgJgPAAQgUAAgIAQQgFAJgBAQIgVAAQABgWAHgOQAOgYAhAAQAdAAAOAPQANAQAAATQAAAUgOAOQgJAIgVAMIgOAJQgMAGgGAGQgMAKgDAMIBaAAIAAAUg");
	this.shape_50.setTransform(393.95,89.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgnA2QgMgMAAgTIAUAAQABAKAFAGQAHAKAUAAQAMAAAIgFQAKgFAAgLQAAgIgIgEQgEgDgOgDIgQgEQgQgFgIgDQgOgJAAgPQAAgSAOgLQANgLAVAAQAcAAAMARQAJALgBALIgTAAQgBgHgFgFQgHgIgSAAQgMgBgGAFQgHAEABAIQgBAIAJAFQAEADAKACIAOAEQAWAFAIAEQANAIAAASQAAAQgOAMQgMANgaAAQgcAAgMgNg");
	this.shape_51.setTransform(354.8,91.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAIBTIAAh2IgmAAIAAgQQAXgBAIgGQAJgFAFgTIAQAAIAAClg");
	this.shape_52.setTransform(340.9,89.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AA5BBIAAhQQAAgHgCgFQgFgJgMAAQgNAAgGAMQgCAGAAAIIAABLIghAAIAAhLQAAgLgCgFQgFgKgMAAQgOAAgFAKQgDAFAAAKIAABMIgiAAIAAh+IAhAAIAAASQAGgKAFgEQAKgHAQAAQAOAAAIAGQAIAGADAKQAHgMAKgFQAKgFANAAQAIAAAIADQAIADAHAIQAFAHACAKQACAGAAANIgBBPg");
	this.shape_53.setTransform(501.875,47.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgvA6QgMgLAAgRQAAgYASgJQALgGATgDIALgBIAMgDQAIgDgBgGQAAgIgFgEQgFgDgKAAQgMAAgFAHQgDAEgCAHIggAAQABgQAJgLQANgRAggBQAUABAQAIQARAJAAAWIAAA6IAAAPQAAAGACADIAFAEIAAAFIgkAAIgDgIIgBgHQgGAHgKAFQgJAHgOgBQgSABgKgKgAANAEIgJADIgGABQgLACgFADQgHAFgBAJQABAJAEAEQAFADAHAAQAKAAAJgGQAJgGAAgRIAAgMg");
	this.shape_54.setTransform(484.6,48.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkBCIAAh/IAgAAIAAAWQAHgNAFgEQAKgJAPAAIABABIADAAIAAAiIgFAAIgEAAQgVgBgHANQgCAIAAAPIAAA9g");
	this.shape_55.setTransform(473.825,47.95);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgoBSQgQgKgBgTIAkAAQABAGADADQAGAEAMAAQASAAAGgMQAEgIAAgSIAAgIQgFAIgGAEQgKAIgOAAQgZAAgPgRQgPgSAAgcQAAgdAPgTQAOgUAaAAQAIAAAIADQAMAFAHAOIAAgSIAhAAIAAB4QAAAYgJANQgOAWgnAAQgZAAgPgKgAgWgtQgEAJAAANQAAALAEAJQAHAPAQAAQAMAAAIgJQAIgIAAgTQAAgSgIgKQgHgJgNAAQgRAAgGAQg");
	this.shape_56.setTransform(460.875,50.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgvA6QgMgLAAgRQAAgYASgJQAKgGAUgDIALgBIAMgDQAIgDgBgGQABgIgGgEQgFgDgKAAQgMAAgFAHQgEAEgBAHIggAAQABgQAJgLQANgRAggBQAUABAQAIQARAJAAAWIAAA6IAAAPQAAAGACADIAFAEIAAAFIgkAAIgDgIIgBgHQgHAHgIAFQgKAHgOgBQgSABgKgKgAANAEIgJADIgGABQgLACgFADQgHAFgBAJQABAJAEAEQAFADAHAAQAKAAAJgGQAJgGAAgRIAAgMg");
	this.shape_57.setTransform(447.35,48.15);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgQBXIAAh+IAhAAIAAB+gAgQg3IAAgfIAhAAIAAAfg");
	this.shape_58.setTransform(437.3,45.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AguBGQgPgSAAgcQAAggAPgTQAPgTAZAAQALAAAJAGQAJAFAFAJIAAg9IAiAAIAACrIggAAIAAgRQgIALgJAFQgJAFgMAAQgXAAgPgSgAgUgFQgHAKAAAQQAAASAHALQAHAKANAAQAOAAAIgKQAHgLAAgRQAAgWgMgKQgHgGgKAAQgNAAgHALg");
	this.shape_59.setTransform(426.325,46.075);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_60.setTransform(409.35,45.875);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgwA6QgLgLAAgRQAAgYASgJQAKgGATgDIAMgBIAMgDQAIgDgBgGQAAgIgFgEQgGgDgJAAQgMAAgFAHQgDAEgCAHIggAAQABgQAJgLQANgRAggBQAUABARAIQAQAJAAAWIAAA6IAAAPQAAAGACADIAFAEIAAAFIglAAIgCgIIgBgHQgGAHgKAFQgJAHgOgBQgRABgMgKgAANAEIgJADIgHABQgKACgFADQgHAFAAAJQAAAJAEAEQAFADAHAAQAKAAAJgGQAJgGAAgRIAAgMg");
	this.shape_61.setTransform(399.45,48.15);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgLBJQgGgFAAgMIAAhOIgSAAIAAgYIASAAIAAgjIAgAAIAAAjIAVAAIAAAYIgVAAIAABCQAAAIACACQACACAKAAIAEAAIADAAIAAAZIgQABIgDAAQgUAAgIgJg");
	this.shape_62.setTransform(388.625,46.5013);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgQBXIAAh+IAhAAIAAB+gAgQg3IAAgfIAhAAIAAAfg");
	this.shape_63.setTransform(381.45,45.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgQBRQgGgDgGgJIAAAQIghAAIAAisIAhAAIAAA9QAGgIAIgFQAJgGANAAQAaAAAOASQAOATAAAbQAAAegOAUQgOATgZAAQgPAAgKgHgAgZAAQgEAJAAAOQAAAQAIALQAHAKAOABQANAAAHgLQAHgLAAgQQAAgOgDgJQgHgQgRAAQgSAAgHAQg");
	this.shape_64.setTransform(371.175,46.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgkBCIAAh/IAgAAIAAAWQAHgNAFgEQAKgJAPAAIABABIADAAIAAAiIgFAAIgEAAQgVgBgHANQgCAIAAAPIAAA9g");
	this.shape_65.setTransform(359.425,47.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ag4BHQgagYAAgvQAAguAagYQAUgUAkAAQAlAAAUAUQAaAYAAAuQAAAvgaAYQgUAVglgBQgkABgUgVgAghgsQgNAQAAAcQAAAdANAQQAMAQAVAAQAVAAANgQQANgQAAgdQAAgcgNgQQgNgQgVAAQgVAAgMAQg");
	this.shape_66.setTransform(345.025,45.85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAXBCIAAhNQAAgKgCgGQgFgKgOAAQgQAAgGAPQgEAIABAMIAABEIgiAAIAAh/IAhAAIAAASQAGgJAGgEQAKgJAPAAQAUAAAMALQANAKAAAYIAABWg");
	this.shape_67.setTransform(274.5,47.95);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgwAwQgQgUAAgcQAAgbAQgUQAQgUAgAAQAhAAAQAUQAQAUAAAbQAAAcgQAUQgQAUghAAQggAAgQgUgAgVgdQgJALABASQgBATAJALQAHAKAOAAQAOAAAJgKQAHgLAAgTQAAgSgHgLQgJgKgOAAQgOAAgHAKg");
	this.shape_68.setTransform(259.8,48.125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgQBXIAAh+IAhAAIAAB+gAgQg3IAAgfIAhAAIAAAfg");
	this.shape_69.setTransform(249.15,45.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgLBJQgGgFAAgMIAAhOIgSAAIAAgYIASAAIAAgjIAgAAIAAAjIAVAAIAAAYIgVAAIAABCQAAAIACACQACACAKAAIAEAAIADAAIAAAZIgQABIgDAAQgUAAgIgJg");
	this.shape_70.setTransform(241.725,46.5013);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgwA6QgLgLAAgRQAAgYASgJQALgGASgDIAMgBIANgDQAGgDABgGQAAgIgGgEQgFgDgKAAQgMAAgFAHQgEAEgBAHIggAAQABgQAIgLQAOgRAggBQAUABARAIQAQAJAAAWIAAA6IAAAPQABAGABADIAFAEIAAAFIglAAIgBgIIgBgHQgIAHgJAFQgJAHgOgBQgSABgLgKgAANAEIgJADIgHABQgKACgFADQgIAFABAJQgBAJAFAEQAFADAHAAQAKAAAJgGQAKgGAAgRIAAgMg");
	this.shape_71.setTransform(231.3,48.15);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgkBCIAAh/IAgAAIAAAWQAHgNAFgEQAKgJAPAAIABABIADAAIAAAiIgFAAIgEAAQgVgBgHANQgCAIAAAPIAAA9g");
	this.shape_72.setTransform(220.525,47.95);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgzAtQgGgMABgVIAAhMIAiAAIAABMQAAAKADAGQAEAKAOAAQAQAAAFgOQAEgIAAgMIAAhEIAhAAIAAB+IgfAAIAAgSIgDAEIgFAFQgIAHgHACQgGADgKAAQgcAAgKgUg");
	this.shape_73.setTransform(207.85,48.275);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgoBSQgQgKgBgTIAkAAQABAGADADQAGAEAMAAQASAAAGgMQAEgIAAgSIAAgIQgFAIgGAEQgKAIgOAAQgZAAgPgRQgPgSAAgcQAAgdAPgTQAOgUAaAAQAIAAAIADQAMAFAHAOIAAgSIAhAAIAAB4QAAAYgJANQgOAWgnAAQgZAAgPgKgAgWgtQgEAJAAANQAAALAEAJQAHAPAQAAQAMAAAIgJQAIgIAAgTQAAgSgIgKQgHgJgNAAQgRAAgGAQg");
	this.shape_74.setTransform(192.925,50.575);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgQBXIAAh+IAhAAIAAB+gAgQg3IAAgfIAhAAIAAAfg");
	this.shape_75.setTransform(182.65,45.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgRBXIAAhmIgTAAIAAgXIASAAIAAgJQAAgUAHgIQAIgLAaAAIAGAAIAHAAIAAAcIgJgBQgHAAgCADQgDADAAAEIAAALIAWAAIAAAXIgWAAIAABmg");
	this.shape_76.setTransform(175.35,45.775);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAXBCIAAhNQAAgKgDgGQgEgKgOAAQgQAAgGAPQgDAIgBAMIAABEIghAAIAAh/IAhAAIAAASQAGgJAGgEQAKgJAPAAQATAAANALQAMAKAAAYIAABWg");
	this.shape_77.setTransform(164.1,47.95);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgwAwQgRgUAAgcQAAgbARgUQAQgUAgAAQAhAAAQAUQARAUAAAbQAAAcgRAUQgQAUghAAQggAAgQgUgAgWgdQgIALAAASQAAATAIALQAIAKAOAAQAOAAAIgKQAIgLAAgTQAAgSgIgLQgIgKgOAAQgOAAgIAKg");
	this.shape_78.setTransform(149.4,48.125);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgrAxQgPgSAAgdQAAggAQgSQAQgTAcAAQAYAAAPALQAPALADAbIgiAAQgBgHgEgGQgGgHgMAAQgQAAgGAQQgDAJAAAOQAAAOADAJQAGAQAQAAQAMAAAFgHQAEgGACgKIAiAAQgCAPgJAOQgQAWgfAAQgeAAgOgTg");
	this.shape_79.setTransform(135.525,48.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAXBCIAAhNQAAgKgCgGQgFgKgOAAQgQAAgGAPQgDAIAAAMIAABEIgiAAIAAh/IAhAAIAAASQAGgJAGgEQAKgJAPAAQATAAANALQAMAKAAAYIAABWg");
	this.shape_80.setTransform(114.85,47.95);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgwAwQgRgUAAgcQAAgbARgUQAQgUAgAAQAhAAAQAUQAQAUABAbQgBAcgQAUQgQAUghAAQggAAgQgUgAgVgdQgJALABASQgBATAJALQAHAKAOAAQAOAAAJgKQAHgLAAgTQAAgSgHgLQgJgKgOAAQgOAAgHAKg");
	this.shape_81.setTransform(100.15,48.125);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgkBCIAAh/IAgAAIAAAWQAHgNAFgEQAKgJAPAAIABABIADAAIAAAiIgFAAIgEAAQgVgBgHANQgCAIAAAPIAAA9g");
	this.shape_82.setTransform(88.775,47.95);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgLBJQgGgFAAgMIAAhOIgSAAIAAgYIASAAIAAgjIAgAAIAAAjIAVAAIAAAYIgVAAIAABCQAAAIACACQACACAKAAIAEAAIADAAIAAAZIgQABIgDAAQgUAAgIgJg");
	this.shape_83.setTransform(79.425,46.5013);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgrAxQgPgSAAgdQAAggAQgSQAQgTAcAAQAYAAAPALQAPALADAbIgiAAQgBgHgEgGQgGgHgMAAQgQAAgGAQQgDAJAAAOQAAAOADAJQAGAQAQAAQAMAAAFgHQAEgGACgKIAiAAQgCAPgJAOQgQAWgfAAQgeAAgOgTg");
	this.shape_84.setTransform(69.025,48.175);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgrA0QgTgQAAgjQAAggARgSQASgSAbAAQARAAANAGQANAGAJANQAIALACAPQACAJgBAQIhcAAQABATANAIQAHAFAKAAQAMAAAHgGQAEgEADgFIAiAAQgCALgLAMQgRATgfAAQgYAAgUgQgAAdgMQgBgOgIgGQgIgHgMAAQgMAAgHAHQgHAHgCANIA5AAIAAAAg");
	this.shape_85.setTransform(55.8813,48.175);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgPBWIAAirIAgAAIAACrg");
	this.shape_86.setTransform(45.65,45.875);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhABWIAAirIB9AAIAAAeIhaAAIAAAlIBTAAIAAAdIhTAAIAAAsIBeAAIAAAfg");
	this.shape_87.setTransform(34.825,45.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(551));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(324.3,264,247.2,162.7);
// library properties:
lib.properties = {
	id: 'DBA27166721C43FE804C514DBB489070',
	width: 600,
	height: 460,
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
an.compositions['DBA27166721C43FE804C514DBB489070'] = {
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