/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Museo300, Museo500FF, Arial, sans-serif']='<link rel=\"stylesheet\" href=\"../assets/style.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />';

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
                id: 'Group',
                type: 'group',
                rect: ['159', '50','308','95','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect2',
                    type: 'rect',
                    rect: ['0px', '0px','308px','95px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(226,236,205,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text2',
                    type: 'text',
                    tag: 'p',
                    rect: ['30px', '12px','253px','46px','auto', 'auto'],
                    text: "• Contributions of group members<br>• Impact of individual group members on group dynamic.<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 15, "rgba(68,68,68,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Group2',
                type: 'group',
                rect: ['159', '188','308','95','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect2Copy',
                    type: 'rect',
                    rect: ['0px', '0px','308px','95px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(226,236,205,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text2Copy',
                    type: 'text',
                    tag: 'p',
                    rect: ['30px', '38px','272px','15px','auto', 'auto'],
                    text: "• Report, case study, essay, model etc.",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 15, "rgba(68,68,68,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Group3',
                type: 'group',
                rect: ['52', '50','128','106','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect',
                    type: 'rect',
                    rect: ['0px', '0px','128px','106px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(200,220,160,0.99)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'Text',
                    type: 'text',
                    tag: 'h2',
                    rect: ['19px', '38px','auto','auto','auto', 'auto'],
                    text: "Process",
                    font: ['Museo300, Museo500FF, Arial, sans-serif', 24, "rgba(68,68,68,1.00)", "700", "none", ""]
                }]
            },
            {
                id: 'Group4',
                type: 'group',
                rect: ['52', '188','128','106','auto', 'auto'],
                c: [
                {
                    id: 'RoundRectCopy',
                    type: 'rect',
                    rect: ['0px', '0px','128px','106px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(200,220,160,0.99)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'TextCopy',
                    type: 'text',
                    tag: 'h2',
                    rect: ['19px', '38px','auto','auto','auto', 'auto'],
                    text: "Product",
                    font: ['Museo300, Museo500FF, Arial, sans-serif', 24, "rgba(68,68,68,1.00)", "700", "none", ""]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Group3}": [
                ["style", "top", '9px'],
                ["style", "opacity", '0'],
                ["style", "left", '-128px']
            ],
            "${_RoundRect2Copy}": [
                ["color", "background-color", 'rgba(226,236,205,1.00)'],
                ["style", "height", '95px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '308px']
            ],
            "${_Group2}": [
                ["style", "top", '147px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_Text2}": [
                ["style", "top", '12px'],
                ["style", "width", '253px'],
                ["style", "line-height", '23px'],
                ["color", "color", 'rgba(68,68,68,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '30px'],
                ["style", "font-size", '15px']
            ],
            "${_RoundRect2}": [
                ["color", "background-color", 'rgba(226,236,205,1.00)'],
                ["style", "height", '95px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '308px']
            ],
            "${_RoundRectCopy}": [
                ["color", "background-color", 'rgba(200,220,160,0.99)'],
                ["style", "height", '106px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '128px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(200,220,160,0.99)'],
                ["style", "top", '0px'],
                ["style", "height", '106px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '128px']
            ],
            "${_Text}": [
                ["style", "top", '38px'],
                ["color", "color", 'rgba(68,68,68,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '19px'],
                ["style", "font-family", 'Museo300, Museo500FF, Arial, sans-serif']
            ],
            "${_Group4}": [
                ["style", "top", '147px'],
                ["style", "opacity", '0'],
                ["style", "left", '-128px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '450px'],
                ["style", "height", '272px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Group}": [
                ["style", "top", '9px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_TextCopy}": [
                ["style", "top", '38px'],
                ["color", "color", 'rgba(68,68,68,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '19px'],
                ["style", "font-family", 'Museo300, Museo500FF, Arial, sans-serif']
            ],
            "${_Text2Copy}": [
                ["style", "top", '38px'],
                ["style", "font-size", '15px'],
                ["color", "color", 'rgba(68,68,68,1.00)'],
                ["style", "height", '15px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '30px'],
                ["style", "width", '272px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "style", "${_Group4}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
                { id: "eid10", tween: [ "style", "${_Group}", "left", '127px', { fromValue: '0px'}], position: 500, duration: 750, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_Group2}", "top", '147px', { fromValue: '147px'}], position: 2250, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Group3}", "left", '12px', { fromValue: '-128px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
                { id: "eid6", tween: [ "style", "${_Group3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutQuad" },
                { id: "eid14", tween: [ "style", "${_Group2}", "left", '127px', { fromValue: '0px'}], position: 1500, duration: 750, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_Group4}", "left", '12px', { fromValue: '-128px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid11", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 750, easing: "easeOutQuad" },
                { id: "eid15", tween: [ "style", "${_Group2}", "opacity", '0.87', { fromValue: '0'}], position: 1500, duration: 750, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-148540046");
