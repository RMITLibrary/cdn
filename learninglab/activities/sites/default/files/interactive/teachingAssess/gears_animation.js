(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 339,
	height: 373,
	fps: 32,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4A4B7").s().p("AjTGuIAbiJQgrgbglgpIiDArQgRgZgPggQgNgZgMggIBxhPIgCgMQgIgtADgsIh7g/QAMg/Acg6ICIAaQAegtAngiIgriEQAdgTAbgNQAdgOAdgKIBPBxIALgDQAxgIApADIA+h7QA9ALA9AdIgaCJQApAZAnAqICDgqQAPAYASAiQAPAeAIAaIhxBOIACAMQAJAxgDApIB7A/QgMA9gdA8IiIgaQgZApgrAmIAqCEQgbARgeAQQgcAOgcAJIhOhxIgNADQgwAIgqgDIg+B7Qg9gMg9gcg");
	this.shape.setTransform(107.5,107.6,2.286,2.286);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215,215.3);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2D798").s().p("AgcEOQg/gFg3gkIheA6Qgwgoggg1IBIhVQgOgfgFgcQgFgcABghIhhg1QAKg8Aeg3IBtATQApg0A2gdIgDhvQAfgKAdgGQAegFAfgBIAjBoQA9AGA4AjIBfg5QAxApAfA0IhGBUIAMAkIAGAYQACAMABAOIABAiIBhA2QgLA+gfA2IhtgVQgnA3g3AaIADBwQgdAKgeAGQgiAGgbAAg");
	this.shape.setTransform(84.6,85.9,2.286,2.286);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,169.2,171.8);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9DD8F2").s().p("AgYDkQg1gEgugeIhQAxQgpghgaguIA8hIQgLgZgFgZQgEgXABgcIhSgtQAIgxAagwIBcAQQAigrAugZIgCheQAXgIAcgGQAcgFAXAAIAdBYQA0AFAwAeIBQgxQApAlAaAqIg7BHIAJAeQAEAKACALIACAWQACANAAAPIBRAuQgJA0gZAuIhdgRQggAtgvAXIACBeQgZAJgYAEQgbAGgaAAg");
	this.shape.setTransform(71.5,72.6,2.286,2.286);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143,145.3);


// stage content:
(lib.gears_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gear1.visible = true;
		this.gear2.visible = false;
		this.gear3.visible = false;
		this.t1.visible = true;
		this.t2.visible = false;
		this.t3.visible = false;
	}
	this.frame_24 = function() {
		this.gear1.visible = true;
		this.gear2.visible = true;
		this.gear3.visible = false;
		this.t1.visible = true;
		this.t2.visible = true;
		this.t3.visible = false;
	}
	this.frame_49 = function() {
		this.gear1.visible = true;
		this.gear2.visible = true;
		this.gear3.visible = true;
		this.t1.visible = true;
		this.t2.visible = true;
		this.t3.visible = true;
	}
	this.frame_125 = function() {
		this.gear1.visible = false;
		this.gear2.visible = false;
		this.gear3.visible = false;
		this.t1.visible = false;
		this.t2.visible = false;
		this.t3.visible = false;
		
		/* Fade In Movie Clip
		Fades in the symbol instance by increasing its alpha property within an Tick event until it is fully visible.
		
		Instructions:
		1. To change the speed at which the symbol instance fades in, change the 0.01 value below (the number must be greater than 0 and less than or equal to 1). Higher values cause faster fade in.
		2. Because the animation uses an Tick event, it progresses only when the playhead moves to a new frame. The speed of the animation is also affected by the document frame rate.
		*/
		
		/*this.addEventListener('tick', fl_FadeSymbolOut.bind(this));
		this.gear1.alpha = 100;
		this.gear2.alpha = 100;
		this.gear3.alpha = 100;
		this.t1.alpha = 100;
		this.t2.alpha = 100;
		this.t3.alpha = 100;
		function fl_FadeSymbolIn()
		{
			this.gear1.alpha -= 0.01;
			this.gear2.alpha -= 0.01;
			this.gear3.alpha -= 0.01;
			this.t1.alpha -= 0.01;
			this.t2.alpha -= 0.01;
			this.t3.alpha -= 0.01;
			if(this.t3.alpha <= 0)
			{
				this.removeEventListener('tick', fl_FadeSymbolOut.bind(this));
			}
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(76).call(this.frame_125).wait(25));

	// Layer 4
	this.t3 = new cjs.Text("Assess group work skills", "15px 'Helvetica'", "#FFFFFF");
	this.t3.name = "t3";
	this.t3.textAlign = "center";
	this.t3.lineHeight = 17;
	this.t3.lineWidth = 83;
	this.t3.setTransform(176.5,239.1,0.757,0.757);

	this.t2 = new cjs.Text("Teach group work skills", "15px 'Helvetica'", "#FFFFFF");
	this.t2.name = "t2";
	this.t2.textAlign = "center";
	this.t2.lineHeight = 17;
	this.t2.lineWidth = 83;
	this.t2.setTransform(97.8,125.6,0.757,0.757);

	this.t1 = new cjs.Text("Include group work  in learning outcomes", "15px 'Helvetica'", "#FFFFFF");
	this.t1.name = "t1";
	this.t1.textAlign = "center";
	this.t1.lineHeight = 17;
	this.t1.lineWidth = 83;
	this.t1.setTransform(202.6,60.5,0.757,0.757);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(150));

	// Layer 1
	this.gear3 = new lib.Symbol3();
	this.gear3.setTransform(176,258,0.757,0.757,0,0,0,107.5,107.6);

	this.timeline.addTween(cjs.Tween.get(this.gear3).wait(1).to({rotation:-1.8,x:175.9},0).wait(1).to({rotation:-3.6,x:176},0).wait(1).to({rotation:-5.4,x:175.9},0).wait(1).to({rotation:-7.2,x:176},0).wait(1).to({rotation:-9.1,x:175.9},0).wait(1).to({rotation:-10.9},0).wait(1).to({rotation:-12.7},0).wait(1).to({rotation:-14.5},0).wait(1).to({rotation:-16.3},0).wait(1).to({rotation:-18.1},0).wait(1).to({rotation:-19.9},0).wait(1).to({rotation:-21.7,x:176,y:257.9},0).wait(1).to({rotation:-23.6,x:175.9},0).wait(1).to({rotation:-25.4,y:258},0).wait(1).to({rotation:-27.2,y:257.9},0).wait(1).to({rotation:-29,x:176,y:258},0).wait(1).to({rotation:-30.8,x:175.9,y:257.9},0).wait(1).to({rotation:-32.6,y:258},0).wait(1).to({rotation:-34.4},0).wait(1).to({rotation:-36.2},0).wait(1).to({rotation:-38.1},0).wait(1).to({rotation:-39.9},0).wait(1).to({rotation:-41.7},0).wait(1).to({rotation:-43.5},0).wait(1).to({rotation:-45.3},0).wait(1).to({rotation:-47.1,x:176},0).wait(1).to({rotation:-48.9,x:175.9,y:257.9},0).wait(1).to({rotation:-50.7,y:258},0).wait(1).to({rotation:-52.6},0).wait(1).to({rotation:-54.4,y:257.9},0).wait(1).to({rotation:-56.2,x:176,y:258},0).wait(1).to({rotation:-58},0).wait(1).to({rotation:-59.8,x:175.9},0).wait(1).to({rotation:-61.6},0).wait(1).to({rotation:-63.4},0).wait(1).to({rotation:-65.2,y:257.9},0).wait(1).to({rotation:-67},0).wait(1).to({rotation:-68.9,x:176,y:258},0).wait(1).to({rotation:-70.7,x:175.9},0).wait(1).to({rotation:-72.5,x:176},0).wait(1).to({rotation:-74.3,x:175.9},0).wait(1).to({rotation:-76.1,x:176},0).wait(1).to({rotation:-77.9,x:175.9},0).wait(1).to({rotation:-79.7,y:257.9},0).wait(1).to({rotation:-81.5,y:258},0).wait(1).to({rotation:-83.4},0).wait(1).to({rotation:-85.2},0).wait(1).to({rotation:-87,y:257.9},0).wait(1).to({rotation:-88.8,y:258},0).wait(1).to({rotation:-90.6},0).wait(1).to({rotation:-92.4},0).wait(1).to({rotation:-94.2},0).wait(1).to({rotation:-96},0).wait(1).to({rotation:-97.9,x:176},0).wait(1).to({rotation:-99.7,x:175.9},0).wait(1).to({rotation:-101.5},0).wait(1).to({rotation:-103.3,x:176},0).wait(1).to({rotation:-105.1,x:175.9},0).wait(1).to({rotation:-106.9},0).wait(1).to({rotation:-108.7,y:257.9},0).wait(1).to({rotation:-110.5,x:176,y:258},0).wait(1).to({rotation:-112.3,x:175.9},0).wait(1).to({rotation:-114.2,x:176},0).wait(1).to({rotation:-116,x:175.9},0).wait(1).to({rotation:-117.8},0).wait(1).to({rotation:-119.6,x:176},0).wait(1).to({rotation:-121.4},0).wait(1).to({rotation:-123.2,x:175.9,y:257.9},0).wait(1).to({rotation:-125,x:176,y:258},0).wait(1).to({rotation:-126.8,y:257.9},0).wait(1).to({rotation:-128.7,x:175.9,y:258},0).wait(1).to({rotation:-130.5},0).wait(1).to({rotation:-132.3},0).wait(1).to({rotation:-134.1},0).wait(1).to({rotation:-135.9,x:176},0).wait(1).to({rotation:-137.7,x:175.9},0).wait(1).to({rotation:-139.5},0).wait(1).to({rotation:-141.3,x:176},0).wait(1).to({rotation:-143.2,x:175.9},0).wait(1).to({rotation:-145},0).wait(1).to({rotation:-146.8},0).wait(1).to({rotation:-148.6},0).wait(1).to({rotation:-150.4,x:176,y:257.9},0).wait(1).to({rotation:-152.2,x:175.9,y:258},0).wait(1).to({rotation:-154,x:176,y:257.9},0).wait(1).to({rotation:-155.8,y:258},0).wait(1).to({rotation:-157.7},0).wait(1).to({rotation:-159.5},0).wait(1).to({rotation:-161.3,x:175.9,y:257.9},0).wait(1).to({rotation:-163.1,x:176},0).wait(1).to({rotation:-164.9,x:175.9,y:258},0).wait(1).to({rotation:-166.7},0).wait(1).to({rotation:-168.5,y:257.9},0).wait(1).to({rotation:-170.3,y:258},0).wait(1).to({rotation:-172.1,x:176},0).wait(1).to({rotation:-174,x:175.9},0).wait(1).to({rotation:-175.8,x:176},0).wait(1).to({rotation:-177.6,y:257.9},0).wait(1).to({rotation:-179.4,x:175.9,y:258},0).wait(1).to({rotation:-181.2,x:176,y:257.9},0).wait(1).to({rotation:-183,x:175.9,y:258},0).wait(1).to({rotation:-184.8,x:176},0).wait(1).to({rotation:-186.6,x:175.9},0).wait(1).to({rotation:-188.5,y:257.9},0).wait(1).to({rotation:-190.3,y:258},0).wait(1).to({rotation:-192.1},0).wait(1).to({rotation:-193.9,x:176},0).wait(1).to({rotation:-195.7,x:175.9},0).wait(1).to({rotation:-197.5,x:176},0).wait(1).to({rotation:-199.3},0).wait(1).to({rotation:-201.1,x:175.9,y:257.9},0).wait(1).to({rotation:-203,x:176,y:258},0).wait(1).to({rotation:-204.8},0).wait(1).to({rotation:-206.6,x:175.9},0).wait(1).to({rotation:-208.4},0).wait(1).to({rotation:-210.2},0).wait(1).to({rotation:-212,y:257.9},0).wait(1).to({rotation:-213.8,x:176},0).wait(1).to({rotation:-215.6,y:258},0).wait(1).to({rotation:-217.4,x:175.9},0).wait(1).to({rotation:-219.3,x:176},0).wait(1).to({rotation:-221.1},0).wait(1).to({rotation:-222.9,x:175.9},0).wait(1).to({rotation:-224.7},0).wait(1).to({rotation:-226.5,x:176},0).wait(1).to({rotation:-228.3},0).wait(1).to({rotation:-230.1,x:175.9},0).wait(1).to({rotation:-231.9,x:176},0).wait(1).to({rotation:-233.8},0).wait(1).to({rotation:-235.6},0).wait(1).to({rotation:-237.4},0).wait(1).to({rotation:-239.2,x:175.9},0).wait(1).to({rotation:-241},0).wait(1).to({rotation:-242.8},0).wait(1).to({rotation:-244.6,x:176},0).wait(1).to({rotation:-246.4,x:175.9},0).wait(1).to({rotation:-248.3,x:176,y:257.9},0).wait(1).to({rotation:-250.1,x:175.9,y:258},0).wait(1).to({rotation:-251.9,x:176,y:257.9},0).wait(1).to({rotation:-253.7,x:175.9},0).wait(1).to({rotation:-255.5,x:176,y:258},0).wait(1).to({rotation:-257.3,x:175.9},0).wait(1).to({rotation:-259.1},0).wait(1).to({rotation:-260.9,x:176,y:257.9},0).wait(1).to({rotation:-262.8,y:258},0).wait(1).to({rotation:-264.6,x:175.9},0).wait(1).to({rotation:-266.4},0).wait(1).to({rotation:-268.2,x:176},0).wait(1).to({rotation:-270},0).wait(1));

	// Layer 1
	this.gear2 = new lib.Symbol2();
	this.gear2.setTransform(97.8,141,0.757,0.757,0,0,0,84.6,85.9);

	this.timeline.addTween(cjs.Tween.get(this.gear2).wait(1).to({rotation:2.4},0).wait(1).to({rotation:4.8,y:140.9},0).wait(1).to({rotation:7.2},0).wait(1).to({rotation:9.7},0).wait(1).to({rotation:12.1},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:16.9},0).wait(1).to({rotation:19.3},0).wait(1).to({rotation:21.7},0).wait(1).to({rotation:24.2},0).wait(1).to({rotation:26.6},0).wait(1).to({rotation:29,y:141},0).wait(1).to({rotation:31.4,y:140.9},0).wait(1).to({rotation:33.8,y:141},0).wait(1).to({rotation:36.2,y:140.9},0).wait(1).to({rotation:38.7},0).wait(1).to({rotation:41.1,y:141},0).wait(1).to({rotation:43.5},0).wait(1).to({rotation:45.9,y:140.9},0).wait(1).to({rotation:48.3,y:141},0).wait(1).to({rotation:50.7,y:140.9},0).wait(1).to({rotation:53.2},0).wait(1).to({rotation:55.6},0).wait(1).to({rotation:58},0).wait(1).to({rotation:60.4},0).wait(1).to({rotation:62.8},0).wait(1).to({rotation:65.2},0).wait(1).to({rotation:67.7,y:141},0).wait(1).to({rotation:70.1,y:140.9},0).wait(1).to({rotation:72.5},0).wait(1).to({rotation:74.9,y:141},0).wait(1).to({rotation:77.3},0).wait(1).to({rotation:79.7},0).wait(1).to({rotation:82.1,y:140.9},0).wait(1).to({rotation:84.6},0).wait(1).to({rotation:87},0).wait(1).to({rotation:89.4,y:141},0).wait(1).to({rotation:91.8,y:140.9},0).wait(1).to({rotation:94.2,y:141},0).wait(1).to({rotation:96.6,y:140.9},0).wait(1).to({rotation:99.1},0).wait(1).to({rotation:101.5},0).wait(1).to({rotation:103.9,y:141},0).wait(1).to({rotation:106.3,y:140.9},0).wait(1).to({rotation:108.7},0).wait(1).to({rotation:111.1,y:141},0).wait(1).to({rotation:113.6,y:140.9},0).wait(1).to({rotation:116},0).wait(1).to({rotation:118.4,y:141},0).wait(1).to({rotation:120.8,y:140.9},0).wait(1).to({rotation:123.2},0).wait(1).to({rotation:125.6},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:130.5,y:141},0).wait(1).to({rotation:132.9},0).wait(1).to({rotation:135.3,y:140.9},0).wait(1).to({rotation:137.7,y:141},0).wait(1).to({rotation:140.1,y:140.9},0).wait(1).to({rotation:142.6},0).wait(1).to({rotation:145},0).wait(1).to({rotation:147.4},0).wait(1).to({rotation:149.8},0).wait(1).to({rotation:152.2},0).wait(1).to({rotation:154.6,y:141},0).wait(1).to({rotation:157,y:140.9},0).wait(1).to({rotation:159.5},0).wait(1).to({rotation:161.9},0).wait(1).to({rotation:164.3,y:141},0).wait(1).to({rotation:166.7,y:140.9},0).wait(1).to({rotation:169.1,y:141},0).wait(1).to({rotation:171.5,y:140.9},0).wait(1).to({rotation:174,y:141},0).wait(1).to({rotation:176.4,y:140.9},0).wait(1).to({rotation:178.8,y:141},0).wait(1).to({rotation:181.2},0).wait(1).to({rotation:183.6,y:140.9},0).wait(1).to({rotation:186,y:141},0).wait(1).to({rotation:188.5,y:140.9},0).wait(1).to({rotation:190.9},0).wait(1).to({rotation:193.3,y:141},0).wait(1).to({rotation:195.7,y:140.9},0).wait(1).to({rotation:198.1,y:141},0).wait(1).to({rotation:200.5},0).wait(1).to({rotation:203,y:140.9},0).wait(1).to({rotation:205.4},0).wait(1).to({rotation:207.8},0).wait(1).to({rotation:210.2,y:141},0).wait(1).to({rotation:212.6,y:140.9},0).wait(1).to({rotation:215,y:141},0).wait(1).to({rotation:217.4,y:140.9},0).wait(1).to({rotation:219.9,y:141},0).wait(1).to({rotation:222.3,y:140.9},0).wait(1).to({rotation:224.7},0).wait(1).to({rotation:227.1},0).wait(1).to({rotation:229.5},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:234.4},0).wait(1).to({rotation:236.8},0).wait(1).to({rotation:239.2,y:141},0).wait(1).to({rotation:241.6},0).wait(1).to({rotation:244,y:140.9},0).wait(1).to({rotation:246.4},0).wait(1).to({rotation:248.9},0).wait(1).to({rotation:251.3},0).wait(1).to({rotation:253.7,y:141},0).wait(1).to({rotation:256.1,y:140.9},0).wait(1).to({rotation:258.5},0).wait(1).to({rotation:260.9},0).wait(1).to({rotation:263.4,y:141},0).wait(1).to({rotation:265.8,y:140.9},0).wait(1).to({rotation:268.2,y:141},0).wait(1).to({rotation:270.6,y:140.9},0).wait(1).to({rotation:273,y:141},0).wait(1).to({rotation:275.4,y:140.9},0).wait(1).to({rotation:277.9,y:141},0).wait(1).to({rotation:280.3,y:140.9},0).wait(1).to({rotation:282.7},0).wait(1).to({rotation:285.1},0).wait(1).to({rotation:287.5},0).wait(1).to({rotation:289.9},0).wait(1).to({rotation:292.3},0).wait(1).to({rotation:294.8,y:141},0).wait(1).to({rotation:297.2,y:140.9},0).wait(1).to({rotation:299.6},0).wait(1).to({rotation:302,y:141},0).wait(1).to({rotation:304.4,y:140.9},0).wait(1).to({rotation:306.8},0).wait(1).to({rotation:309.3},0).wait(1).to({rotation:311.7},0).wait(1).to({rotation:314.1},0).wait(1).to({rotation:316.5},0).wait(1).to({rotation:318.9},0).wait(1).to({rotation:321.3,y:141},0).wait(1).to({rotation:323.8,y:140.9},0).wait(1).to({rotation:326.2,y:141},0).wait(1).to({rotation:328.6,y:140.9},0).wait(1).to({rotation:331},0).wait(1).to({rotation:333.4},0).wait(1).to({rotation:335.8,y:141},0).wait(1).to({rotation:338.3,y:140.9},0).wait(1).to({rotation:340.7},0).wait(1).to({rotation:343.1},0).wait(1).to({rotation:345.5},0).wait(1).to({rotation:347.9},0).wait(1).to({rotation:350.3},0).wait(1).to({rotation:352.8},0).wait(1).to({rotation:355.2},0).wait(1).to({rotation:357.6,y:141},0).wait(1).to({rotation:360,y:140.9},0).wait(1));

	// Layer 1
	this.gear1 = new lib.Symbol1();
	this.gear1.setTransform(201.8,89,0.757,0.757,0,0,0,71.5,72.6);

	this.timeline.addTween(cjs.Tween.get(this.gear1).wait(1).to({rotation:-2.4,x:201.7},0).wait(1).to({rotation:-4.8,x:201.8},0).wait(1).to({rotation:-7.2,x:201.7},0).wait(1).to({rotation:-9.7},0).wait(1).to({rotation:-12.1},0).wait(1).to({rotation:-14.5},0).wait(1).to({rotation:-16.9},0).wait(1).to({rotation:-19.3,x:201.8},0).wait(1).to({rotation:-21.7,x:201.7},0).wait(1).to({rotation:-24.2},0).wait(1).to({rotation:-26.6},0).wait(1).to({rotation:-29},0).wait(1).to({rotation:-31.4},0).wait(1).to({rotation:-33.8},0).wait(1).to({rotation:-36.2},0).wait(1).to({rotation:-38.7},0).wait(1).to({rotation:-41.1},0).wait(1).to({rotation:-43.5},0).wait(1).to({rotation:-45.9},0).wait(1).to({rotation:-48.3},0).wait(1).to({rotation:-50.7},0).wait(1).to({rotation:-53.2},0).wait(1).to({rotation:-55.6},0).wait(1).to({rotation:-58},0).wait(1).to({rotation:-60.4},0).wait(1).to({rotation:-62.8},0).wait(1).to({rotation:-65.2},0).wait(1).to({rotation:-67.7},0).wait(1).to({rotation:-70.1},0).wait(1).to({rotation:-72.5},0).wait(1).to({rotation:-74.9},0).wait(1).to({rotation:-77.3},0).wait(1).to({rotation:-79.7},0).wait(1).to({rotation:-82.1},0).wait(1).to({rotation:-84.6},0).wait(1).to({rotation:-87},0).wait(1).to({rotation:-89.4},0).wait(1).to({rotation:-91.8},0).wait(1).to({rotation:-94.2},0).wait(1).to({rotation:-96.6},0).wait(1).to({rotation:-99.1},0).wait(1).to({rotation:-101.5},0).wait(1).to({rotation:-103.9},0).wait(1).to({rotation:-106.3},0).wait(1).to({rotation:-108.7},0).wait(1).to({rotation:-111.1},0).wait(1).to({rotation:-113.6},0).wait(1).to({rotation:-116},0).wait(1).to({rotation:-118.4},0).wait(1).to({rotation:-120.8},0).wait(1).to({rotation:-123.2},0).wait(1).to({rotation:-125.6,x:201.6},0).wait(1).to({rotation:-128.1,x:201.7,y:88.9},0).wait(1).to({rotation:-130.5,x:201.6},0).wait(1).to({rotation:-132.9,y:89},0).wait(1).to({rotation:-135.3},0).wait(1).to({rotation:-137.7,x:201.7},0).wait(1).to({rotation:-140.1},0).wait(1).to({rotation:-142.6,x:201.6},0).wait(1).to({rotation:-145},0).wait(1).to({rotation:-147.4,x:201.7},0).wait(1).to({rotation:-149.8,x:201.6},0).wait(1).to({rotation:-152.2},0).wait(1).to({rotation:-154.6,x:201.7},0).wait(1).to({rotation:-157},0).wait(1).to({rotation:-159.5},0).wait(1).to({rotation:-161.9},0).wait(1).to({rotation:-164.3},0).wait(1).to({rotation:-166.7},0).wait(1).to({rotation:-169.1},0).wait(1).to({rotation:-171.5},0).wait(1).to({rotation:-174},0).wait(1).to({rotation:-176.4},0).wait(1).to({rotation:-178.8},0).wait(1).to({rotation:-181.2},0).wait(1).to({rotation:-183.6},0).wait(1).to({rotation:-186,x:201.6},0).wait(1).to({rotation:-188.5},0).wait(1).to({rotation:-190.9,x:201.7},0).wait(1).to({rotation:-193.3,x:201.6},0).wait(1).to({rotation:-195.7},0).wait(1).to({rotation:-198.1,x:201.7},0).wait(1).to({rotation:-200.5,x:201.6,y:89.1},0).wait(1).to({rotation:-203,y:89},0).wait(1).to({rotation:-205.4,x:201.7,y:89.1},0).wait(1).to({rotation:-207.8,y:89},0).wait(1).to({rotation:-210.2,x:201.6,y:89.1},0).wait(1).to({rotation:-212.6},0).wait(1).to({rotation:-215},0).wait(1).to({rotation:-217.4,x:201.7,y:89},0).wait(1).to({rotation:-219.9,x:201.6},0).wait(1).to({rotation:-222.3},0).wait(1).to({rotation:-224.7,x:201.7},0).wait(1).to({rotation:-227.1},0).wait(1).to({rotation:-229.5},0).wait(1).to({rotation:-231.9,y:89.1},0).wait(1).to({rotation:-234.4,y:89},0).wait(1).to({rotation:-236.8,y:89.1},0).wait(1).to({rotation:-239.2},0).wait(1).to({rotation:-241.6,y:89},0).wait(1).to({rotation:-244,y:89.1},0).wait(1).to({rotation:-246.4,y:89},0).wait(1).to({rotation:-248.9,y:89.1},0).wait(1).to({rotation:-251.3,y:89},0).wait(1).to({rotation:-253.7},0).wait(1).to({rotation:-256.1,y:89.1},0).wait(1).to({rotation:-258.5,y:89},0).wait(1).to({rotation:-260.9,y:89.1},0).wait(1).to({rotation:-263.4,y:89},0).wait(1).to({rotation:-265.8,y:89.1},0).wait(1).to({rotation:-268.2,y:89},0).wait(1).to({rotation:-270.6,y:89.1},0).wait(1).to({rotation:-273,y:89},0).wait(1).to({rotation:-275.4,y:89.1},0).wait(1).to({rotation:-277.9},0).wait(1).to({rotation:-280.3,y:89},0).wait(1).to({rotation:-282.7},0).wait(1).to({rotation:-285.1},0).wait(1).to({rotation:-287.5},0).wait(1).to({rotation:-289.9,y:89.1},0).wait(1).to({rotation:-292.3,y:89},0).wait(1).to({rotation:-294.8},0).wait(1).to({rotation:-297.2},0).wait(1).to({rotation:-299.6},0).wait(1).to({rotation:-302,y:89.1},0).wait(1).to({rotation:-304.4},0).wait(1).to({rotation:-306.8,y:89},0).wait(1).to({rotation:-309.3},0).wait(1).to({rotation:-311.7,y:89.1},0).wait(1).to({rotation:-314.1},0).wait(1).to({rotation:-316.5},0).wait(1).to({rotation:-318.9,y:89},0).wait(1).to({rotation:-321.3},0).wait(1).to({rotation:-323.8,y:89.1},0).wait(1).to({rotation:-326.2,y:89},0).wait(1).to({rotation:-328.6},0).wait(1).to({rotation:-331,y:89.1},0).wait(1).to({rotation:-333.4,y:89},0).wait(1).to({rotation:-335.8},0).wait(1).to({rotation:-338.3,x:201.8},0).wait(1).to({rotation:-340.7,x:201.7},0).wait(1).to({rotation:-343.1},0).wait(1).to({rotation:-345.5},0).wait(1).to({rotation:-347.9,x:201.8},0).wait(1).to({rotation:-350.3,x:201.7},0).wait(1).to({rotation:-352.8,y:89.1},0).wait(1).to({rotation:-355.2,y:89},0).wait(1).to({rotation:-357.6,x:201.8},0).wait(1).to({rotation:-360,x:201.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(203.3,220.6,223.6,305.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;