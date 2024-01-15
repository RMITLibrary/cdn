(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAWIAAglQAdgBAKgFIAAAmQgIAEgXABg");
	this.shape.setTransform(2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,4.1,4.4), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("ACrgeQAEgCAEADQAEADAAAFIAAAVQAAANg1AKQg2AJhMAAQhLAAg2gJQg1gKAAgNIAAgVQAAgFAEgDQAEgDAFACQAUAJAuAGQAvAFA4AAQA6AAAugFQAugGAVgJg");
	this.shape.setTransform(18.8,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiBAXQg1gKAAgNIAAgVQAAgFAEgDQAEgDAFACQAUAJAvAGQAuAFA4AAQA5AAAvgFQAugGAUgJQAFgCAEADQAEADAAAFIAAAVQAAANg1AKQg2AJhMAAQhLAAg2gJg");
	this.shape_1.setTransform(18.8,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(-0.5,-0.5,38.6,8.5), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiQAmQg8gQAAgWQAAgWA8gPQA8gQBUAAQBVAAA8AQQA8APAAAWQAAAWg8AQQg8AQhVAAQhUAAg8gQg");
	this.shape.setTransform(20.5,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,41.1,10.8), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEE5C8").s().p("AiQF7Qg8gPAAgQIAArmQAAAPA8ALQA8ALBUAAQBVAAA8gLQA8gLAAgPIAALmQAAAQg8APQhAAQhRAAQhQAAhAgQg");
	this.shape.setTransform(20.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0.1,41.1,79), null);


(lib.Hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A494A").s().p("AgjJfIAAw+IgjAnIg0gzIB2hzIAEAIIAIgIIByBzIgwAzIgngnIAAQ+g");
	this.shape.setTransform(12.3,60.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hand, new cjs.Rectangle(0,0,24.5,121.4), null);


(lib.Bottle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119).call(this.frame_119).wait(1));

	// Layer 5
	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(36.4,7.7,1,1,0,0,0,2,2.2);
	this.instance.alpha = 0.48;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.678)","rgba(255,255,255,0)"],[0,1],0,0,0,15.3).s().p("AAlFIQhJgHgXgQIAAp4QANAJAgAGQAgAHAqADIAAJ2g");
	this.shape.setTransform(14.1,41.7);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.1,6.2,1,1,0,0,0,18.8,3.7);
	this.instance_1.alpha = 0.82;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(120));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah+FqQg8gPAAgXIABgCIgBAAIAAoiQAAgWAOgPQAPgQAUgDIAAglQAAgMAugKQAwgJA9gBQA/ABAwAJQAuAKAAAMIAAAlQAUADAPAQQAOAPAAAWIAAIiIgBAAIABACQAAAXg8APQg9ARhVgBQhUABg8gRg");
	mask.setTransform(22.4,37.9);

	// Layer 3
	this.instance_2 = new lib.Path();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.1,115.2,1,1,0,0,0,20.5,39.6);
	this.instance_2.alpha = 0.75;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:39.5,y:114.5},0).wait(1).to({y:113.8},0).wait(1).to({y:113.2},0).wait(1).to({y:112.5},0).wait(1).to({y:111.9},0).wait(1).to({y:111.3},0).wait(1).to({y:110.6},0).wait(1).to({y:110},0).wait(1).to({y:109.3},0).wait(1).to({y:108.7},0).wait(1).to({y:108.1},0).wait(1).to({y:107.4},0).wait(1).to({y:106.8},0).wait(1).to({y:106.1},0).wait(1).to({y:105.5},0).wait(1).to({y:104.9},0).wait(1).to({y:104.2},0).wait(1).to({y:103.6},0).wait(1).to({y:102.9},0).wait(1).to({y:102.3},0).wait(1).to({y:101.7},0).wait(1).to({y:101},0).wait(1).to({y:100.4},0).wait(1).to({y:99.7},0).wait(1).to({y:99.1},0).wait(1).to({y:98.5},0).wait(1).to({y:97.8},0).wait(1).to({y:97.2},0).wait(1).to({y:96.5},0).wait(1).to({y:95.9},0).wait(1).to({y:95.3},0).wait(1).to({y:94.6},0).wait(1).to({y:94},0).wait(1).to({y:93.3},0).wait(1).to({y:92.7},0).wait(1).to({y:92.1},0).wait(1).to({y:91.4},0).wait(1).to({y:90.8},0).wait(1).to({y:90.1},0).wait(1).to({y:89.5},0).wait(1).to({y:88.9},0).wait(1).to({y:88.2},0).wait(1).to({y:87.6},0).wait(1).to({y:86.9},0).wait(1).to({y:86.3},0).wait(1).to({y:85.7},0).wait(1).to({y:85},0).wait(1).to({y:84.4},0).wait(1).to({y:83.7},0).wait(1).to({y:83.1},0).wait(1).to({y:82.5},0).wait(1).to({y:81.8},0).wait(1).to({y:81.2},0).wait(1).to({y:80.5},0).wait(1).to({y:79.9},0).wait(1).to({y:79.3},0).wait(1).to({y:78.6},0).wait(1).to({y:78},0).wait(1).to({y:77.3},0).wait(1).to({y:76.7},0).wait(1).to({y:76.1},0).wait(1).to({y:75.4},0).wait(1).to({y:74.8},0).wait(1).to({y:74.1},0).wait(1).to({y:73.5},0).wait(1).to({y:72.9},0).wait(1).to({y:72.2},0).wait(1).to({y:71.6},0).wait(1).to({y:70.9},0).wait(1).to({y:70.3},0).wait(1).to({y:69.7},0).wait(1).to({y:69},0).wait(1).to({y:68.4},0).wait(1).to({y:67.7},0).wait(1).to({y:67.1},0).wait(1).to({y:66.5},0).wait(1).to({y:65.8},0).wait(1).to({y:65.2},0).wait(1).to({y:64.5},0).wait(1).to({y:63.9},0).wait(1).to({y:63.3},0).wait(1).to({y:62.6},0).wait(1).to({y:62},0).wait(1).to({y:61.3},0).wait(1).to({y:60.7},0).wait(1).to({y:60.1},0).wait(1).to({y:59.4},0).wait(1).to({y:58.8},0).wait(1).to({y:58.1},0).wait(1).to({y:57.5},0).wait(1).to({y:56.9},0).wait(1).to({y:56.2},0).wait(1).to({y:55.6},0).wait(1).to({y:54.9},0).wait(1).to({y:54.3},0).wait(1).to({y:53.7},0).wait(1).to({y:53},0).wait(1).to({y:52.4},0).wait(1).to({y:51.7},0).wait(1).to({y:51.1},0).wait(1).to({y:50.5},0).wait(1).to({y:49.8},0).wait(1).to({y:49.2},0).wait(1).to({y:48.5},0).wait(1).to({y:47.9},0).wait(1).to({y:47.3},0).wait(1).to({y:46.6},0).wait(1).to({y:46},0).wait(1).to({y:45.3},0).wait(1).to({y:44.7},0).wait(1).to({y:44.1},0).wait(1).to({y:43.4},0).wait(1).to({y:42.8},0).wait(1).to({y:42.1},0).wait(1).to({y:41.5},0).wait(1).to({y:40.9},0).wait(1).to({y:40.2},0).wait(1).to({y:39.6},0).wait(1).to({y:39},0).wait(1));

	// Layer 3
	this.instance_3 = new lib.Path_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.1,70.3,1,1,0,0,0,20.5,5.4);
	this.instance_3.alpha = 0.102;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").p("ADxkAQAAgYgRgTQgRgSgYgCIAAgrQAAgMg1gJQg2gJhMAAQhLAAg2AJQg1AJAAAMIAAArQgYACgRASQgRATAAAYIAAI3IABAAIgBACQAAAhBHAYQBGAXBjAAQBkAABGgXQBHgYAAghg");
	this.shape_1.setTransform(24.1,39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AipFyQhGgYgBghIABgDIgBAAIAAo2QABgYARgTQAQgRAYgDIAAgrQAAgMA1gJQA3gJBKAAQBMAAA1AJQA2AJAAAMIAAArQAYADARARQAQATAAAYIAAI5QAAAhhGAYQhGAWhkAAQhiAAhHgWg");
	this.shape_2.setTransform(24.1,39.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_3}]}).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-1,51.2,80.5);


// stage content:
(lib._7aanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//console.log(this.bottle1)
		
		var stage = this;
		
		var i = 19; //  set your counter to 1
		
		function firstPlay(){
			setTimeout(function () {
				stage.bottle20.play();
			},100)
			
		}
		firstPlay();
		
		
		function myLoop() { //  create a loop function
			setTimeout(function () { //  call a 2s setTimeout when the loop is called
				var bottleId = "bottle" + i;
				stage[bottleId].play();
				console.log(i, bottleId); //  your code here
				i--; 
				if (i > 0) { //  if the counter < 10, call the loop function
					myLoop(); //  ..  again which will trigger another 
				} //  ..  setTimeout()
			}, 2000)
		}
		
		myLoop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AFaiLIqzIvIAAkYIKzovg");
	this.shape.setTransform(310.1,140.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlZCMIKzovIAAEYIqzIvg");
	this.shape_1.setTransform(310.1,140.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("AUiCNMgpDgACIAAkXMApDAACg");
	this.shape_2.setTransform(144.3,168.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A0gCLIAAkXMApBAACIAAEXg");
	this.shape_3.setTransform(144.3,168.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bottles
	this.bottle20 = new lib.Bottle();
	this.bottle20.parent = this;
	this.bottle20.setTransform(264.1,138.2,1,1,0,0,0,23.2,38.4);

	this.bottle19 = new lib.Bottle();
	this.bottle19.parent = this;
	this.bottle19.setTransform(211.5,138.2,1,1,0,0,0,23.2,38.4);

	this.bottle18 = new lib.Bottle();
	this.bottle18.parent = this;
	this.bottle18.setTransform(159.1,138.2,1,1,0,0,0,23.2,38.4);

	this.bottle17 = new lib.Bottle();
	this.bottle17.parent = this;
	this.bottle17.setTransform(106.6,138.2,1,1,0,0,0,23.2,38.4);

	this.bottle16 = new lib.Bottle();
	this.bottle16.parent = this;
	this.bottle16.setTransform(54.2,138.2,1,1,0,0,0,23.2,38.4);

	this.bottle15 = new lib.Bottle();
	this.bottle15.parent = this;
	this.bottle15.setTransform(280.1,124.2,1,1,0,0,0,23.2,38.4);

	this.bottle14 = new lib.Bottle();
	this.bottle14.parent = this;
	this.bottle14.setTransform(227.5,124.2,1,1,0,0,0,23.2,38.4);

	this.bottle13 = new lib.Bottle();
	this.bottle13.parent = this;
	this.bottle13.setTransform(175.1,124.2,1,1,0,0,0,23.2,38.4);

	this.bottle12 = new lib.Bottle();
	this.bottle12.parent = this;
	this.bottle12.setTransform(122.6,124.2,1,1,0,0,0,23.2,38.4);

	this.bottle11 = new lib.Bottle();
	this.bottle11.parent = this;
	this.bottle11.setTransform(70.2,124.2,1,1,0,0,0,23.2,38.4);

	this.bottle10 = new lib.Bottle();
	this.bottle10.parent = this;
	this.bottle10.setTransform(297.1,110.2,1,1,0,0,0,23.2,38.4);

	this.bottle9 = new lib.Bottle();
	this.bottle9.parent = this;
	this.bottle9.setTransform(244.5,110.2,1,1,0,0,0,23.2,38.4);

	this.bottle8 = new lib.Bottle();
	this.bottle8.parent = this;
	this.bottle8.setTransform(192.1,110.2,1,1,0,0,0,23.2,38.4);

	this.bottle7 = new lib.Bottle();
	this.bottle7.parent = this;
	this.bottle7.setTransform(139.6,110.2,1,1,0,0,0,23.2,38.4);

	this.bottle6 = new lib.Bottle();
	this.bottle6.parent = this;
	this.bottle6.setTransform(87.2,110.2,1,1,0,0,0,23.2,38.4);

	this.bottle5 = new lib.Bottle();
	this.bottle5.parent = this;
	this.bottle5.setTransform(311.1,98.2,1,1,0,0,0,23.2,38.4);

	this.bottle4 = new lib.Bottle();
	this.bottle4.parent = this;
	this.bottle4.setTransform(258.5,98.2,1,1,0,0,0,23.2,38.4);

	this.bottle3 = new lib.Bottle();
	this.bottle3.parent = this;
	this.bottle3.setTransform(206.1,98.2,1,1,0,0,0,23.2,38.4);

	this.bottle2 = new lib.Bottle();
	this.bottle2.parent = this;
	this.bottle2.setTransform(153.6,98.2,1,1,0,0,0,23.2,38.4);

	this.bottle1 = new lib.Bottle();
	this.bottle1.parent = this;
	this.bottle1.setTransform(101.2,98.2,1,1,0,0,0,23.2,38.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottle1},{t:this.bottle2},{t:this.bottle3},{t:this.bottle4},{t:this.bottle5},{t:this.bottle6},{t:this.bottle7},{t:this.bottle8},{t:this.bottle9},{t:this.bottle10},{t:this.bottle11},{t:this.bottle12},{t:this.bottle13},{t:this.bottle14},{t:this.bottle15},{t:this.bottle16},{t:this.bottle17},{t:this.bottle18},{t:this.bottle19},{t:this.bottle20}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("AUeCNMgo7gACIAAkXMAo7AACg");
	this.shape_4.setTransform(213.8,111.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A0dCLIAAkXMAo6AACIAAEXg");
	this.shape_5.setTransform(213.8,111.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").p("AFaiLIqzIvIAAkYIKzovg");
	this.shape_6.setTransform(48.4,139.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlZCMIKzovIAAEYIqzIvg");
	this.shape_7.setTransform(48.4,139.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(190.9,172.8,333.8,195.1);
// library properties:
lib.properties = {
	width: 358,
	height: 227,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;