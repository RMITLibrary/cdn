var comp;
var compId = 'EDGE-415008110', width = "620", height="627"

var loadEdgeAnimation = function(){
    console.log("loading animation")
    AdobeEdge.loadComposition('../sites/default/files/enhanced/organic_structure', compId , {
        //AdobeEdge.loadComposition('web/organic_structure', 'EDGE-415008110', {
        scaleToFit: "width",
        centerStage: "none",
        minW: "0",
        maxW: "undefined",
        width: width+"px",
        height: height+"px",
        bScaleToParent: true
    }, {"dom":{}}, {"dom":{}});


    AdobeEdge.bootstrapCallback(function(compId) {
        comp = AdobeEdge.getComposition(compId).getStage();
        AdobeEdge.Symbol.bindTimelineAction(compId, "stage", "Default Timeline", "stop", function() {  
            console.log("play")
            var pos = comp.getPosition()
            console.log(pos)
            if(pos<500){
                jQuery('#vc_back').prop('disabled',true)
            }else if (pos>=500 && pos<=4501){
                jQuery('#vc_back').prop('disabled',false)
                jQuery('#vc_next').prop('disabled',false)
                jQuery('#showClear').prop('disabled',false)
            }else {
                jQuery('#vc_next').prop('disabled',true)
                jQuery('#showClear').prop('disabled',true)
            }
        });
    });
}

loadEdgeAnimation()
jQuery("#custom-tabs-0 a").click(function(){
    console.log("clicked")

    if(jQuery(this).text()=="Organic structure"){
        jQuery(".flow-wrapper").width(width).height(height)
        jQuery(".center-wrapper").width(width).height(height)
        jQuery("."+compId).css("transform",'scale(1)')
    }
})

jQuery("#vc_back").click(function (){
    comp.playReverse();
})

jQuery("#vc_next").click(function (){
    comp.play();jQuery('#vc_back').prop('disabled',false);
})

jQuery("#showClear").click(function (){
    var $this = jQuery('#showClear')
    if ($this.text()=='show all'){
        comp.stop(5000);$this.text("reset");
        jQuery('#vc_back').prop('disabled',true)
        jQuery('#vc_next').prop('disabled',true)
        jQuery('#showClear').prop('disabled',false)
    }else{
        comp.stop(0);$this.text("show all");
        jQuery('#vc_back').prop('disabled',true)
        jQuery('#vc_next').prop('disabled',false)
        jQuery('#showClear').prop('disabled',false)
    }
})
