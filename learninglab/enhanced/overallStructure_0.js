jQuery(".menu").click(function () {

    if (!jQuery(this).hasClass('active')) {
        jQuery(".menu").removeClass('active')
        var id = jQuery(this).attr("class").split(' ')[0];
        // console.log(id)
        jQuery(this).addClass('active');
        jQuery(".part").removeClass("active")
        jQuery("#" + id).addClass('active')
        var height = jQuery("#" + id).height();
        jQuery(".struc-content").height(function () {
            return height < 530 ? 530 : height
        })
    }
    return jQuery('.structure').hasClass('init')? jQuery('.structure').removeClass('init') : ''
})
jQuery(".structure").stick_in_parent()

jQuery(".section").click(function () {
    jQuery(".section.active").removeClass('active')
    jQuery(this).addClass('active')
})


 var modes = ['method','procedure','relevant','participant']    
        var mode = ''
        jQuery(".legends button").click(function(){
            var id = jQuery(this).attr("id")
            mode = id.slice(0,id.length-4).toLowerCase();
            var color= "color"+(modes.indexOf(mode)+1)
            dehighlight()
            highlight(mode,color)
        })

        jQuery("#show_btn").click(function(){
            if(jQuery(this).text()=='Show all'){
                for(var i=1;i<8;i++){
                    var color = "color"+i
                    highlight(modes[i-1],color)
                }
                jQuery(this).text('Hide all')
            }else{
                dehighlight()
                jQuery(this).text('Show all')
            }

        })

        var highlight = function(mode,color){
            jQuery("."+mode).addClass(color+"-h "+color)
            jQuery("#"+mode+"_btn").addClass(color+"-h "+color+" "+color+"-b")
        }

        var dehighlight = function(){
            jQuery("#activity span, #activity button").removeClass(function(){
                var classes =''
                for(var i=1;i<8;i++){
                    classes+="color"+i+" color"+i+"-h "+'color'+i+"-b "
                }
                return classes;
            })
        }

        var targetHeight = 300
        jQuery(".paragraph").height(targetHeight+60)
        jQuery(".scrollBtn").click(function (){
            var $parent = jQuery(this).parents(".paragraph")
            //            console.log($parent)
            if($parent.find("#para1").position().top<-200){
                $parent.find("p").animate({"top":0});
                $parent.find("#up").hide()
                $parent.find("#down").show()
            }else{
                $parent.find("p").animate({"top":-targetHeight+40});
                $parent.find("#up").show()
                $parent.find("#down").hide()
            }

        })