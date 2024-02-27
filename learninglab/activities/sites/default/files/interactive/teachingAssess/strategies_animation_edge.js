/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Museo300, Museo500FF, Arial, sans-serif']='<link rel=\"stylesheet\" href=\"./assets/style.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'gear1',
                type: 'image',
                rect: ['-198px', '-264px','630px','640px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['93px', '38px','36px','48px','auto', 'auto'],
                text: "Include group work  in learning outcomes<br>",
                align: "center",
                font: ['Museo300, Museo500FF, Arial, sans-serif', 8, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'gear2',
                type: 'image',
                rect: ['-298px', '-254px','740px','760px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gear2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'gear3',
                type: 'image',
                rect: ['-369px', '-283px','950px','950px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gear3.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['28px', '125px','62px','48px','auto', 'auto'],
                text: "Teach group work skills",
                align: "center",
                font: ['Museo300, Museo500FF, Arial, sans-serif', 11, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['91px', '231px','62px','48px','auto', 'auto'],
                text: "Assess group work skills",
                align: "center",
                font: ['Museo300, Museo500FF, Arial, sans-serif', 12, "rgba(255,255,255,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_gear3}": [
                ["style", "top", '-222px'],
                ["transform", "scaleY", '0.14418'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.14418'],
                ["style", "opacity", '0'],
                ["style", "left", '-354px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '93px'],
                ["style", "font-size", '8px'],
                ["style", "top", '38px'],
                ["transform", "scaleY", '1'],
                ["style", "width", '36px'],
                ["style", "height", '48px'],
                ["style", "font-family", 'Museo300, Museo500FF, Arial, sans-serif'],
                ["style", "text-align", 'center'],
                ["transform", "scaleX", '1']
            ],
            "${_gear2}": [
                ["style", "top", '-235px'],
                ["transform", "scaleY", '0.14417'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.14417'],
                ["style", "opacity", '0'],
                ["style", "left", '-312px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '340px'],
                ["style", "width", '200px']
            ],
            "${_gear1}": [
                ["style", "top", '-261px'],
                ["transform", "scaleY", '0.14417'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.14417'],
                ["style", "opacity", '0'],
                ["style", "left", '-204px']
            ],
            "${_Text2}": [
                ["style", "top", '125px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '11px'],
                ["style", "font-family", 'Museo300, Museo500FF, Arial, sans-serif'],
                ["style", "left", '28px'],
                ["style", "width", '62px']
            ],
            "${_Text4}": [
                ["style", "top", '231px'],
                ["style", "width", '62px'],
                ["style", "height", '48px'],
                ["style", "font-family", 'Museo300, Museo500FF, Arial, sans-serif'],
                ["style", "left", '91px'],
                ["style", "font-size", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6667,
            autoPlay: true,
            timeline: [
                { id: "eid47", tween: [ "style", "${_gear2}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 250 },
                { id: "eid48", tween: [ "style", "${_gear3}", "opacity", '1', { fromValue: '0'}], position: 2667, duration: 250 },
                { id: "eid11", tween: [ "transform", "${_gear3}", "rotateZ", '410deg', { fromValue: '0deg'}], position: 2667, duration: 4000 },
                { id: "eid2", tween: [ "transform", "${_gear1}", "rotateZ", '900deg', { fromValue: '0deg'}], position: 0, duration: 6667 },
                { id: "eid43", tween: [ "style", "${_gear1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid4", tween: [ "transform", "${_gear2}", "rotateZ", '-720deg', { fromValue: '0deg'}], position: 1333, duration: 5334 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-333549322");
