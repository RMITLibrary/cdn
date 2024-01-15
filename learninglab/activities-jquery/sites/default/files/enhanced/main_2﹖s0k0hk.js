for(i=0;i<data.length;i++){
        var section = ""
        section = section + "<div class='section'><form class='ac-custom ac-radio ac-circle' autocomplete='off'><h4>"+data[i].question+"</h4><ul show='"+data[i].show+"'><li><input id='r"+i+"1' type='radio' name='r"+i+"' value='Yes'><label for='r"+i+"1'>Yes</label></li><li><input id='r"+i+"2' type='radio' name='r"+i+"' value='No'><label for='r"+i+"2'>No</label></li></ul></form>";

        var subSection="<div class='collapse' id='s"+i+"'><div class='well'><button class='pr btn active'>Possible reasons</button><button class='mi btn'>May indicate</button><button class='tfs btn'>Tips for students</button><button class='tft btn'>Tips for teachers</button>"
        subSection += "<h3 class='printOnly'>Possible reasons:</h3><ul class='pr'>"
        for(j=0;j<data[i].reasons.length;j++){
            subSection += "<li>"+data[i].reasons[j]+"</li>"
        }
        subSection += "</ul><p class='printOnly'>May indicate:</p><ul class='mi'>"
        for(j=0;j<data[i].indicate.length;j++){
            subSection += "<li>"+data[i].indicate[j]+"</li>"
        }
        subSection += "</ul><ul class='tfs'>"
        for(j=0;j<data[i].students.length;j++){
            if(data[i].students[j]==null){
                subSection += "<li>No tips</li>"
            }else{ 
                subSection += "<li><a class='new-window' href='"+data[i].students[j].link+"'>"+data[i].students[j].text+"</a></li>"
            }
        }
        subSection += "</ul><ul class='tft'>"
        for(j=0;j<data[i].teachers.length;j++){
            if(data[i].teachers[j]==null){
                subSection += "<li>No tips</li>"
            }else{     
                subSection += "<li><a target='_blank' href='"+data[i].teachers[j].link+"'>"+data[i].teachers[j].text+"</a></li>"
            }
        }
        subSection += "</ul></div></div></div>"

        jQuery(".wrapper").append(section+subSection)
    }


    jQuery(".well").each(function(){
        jQuery(this).find("ul:first-of-type").show()
    })

    jQuery('.well .btn').click(function(){
        var index = jQuery( this).index()+1;
        var $parent = jQuery(this).parents('.well')
        jQuery(this).parents('.well').find('button').removeClass('active')
        jQuery(this).addClass('active')
        console.log(index+1)
        $parent.find("ul").hide()
        $parent.find("ul:nth-of-type("+index+")").show()
    })


    jQuery("input[type='radio']").click(function(){
        var $parent = jQuery(this).parents('.section')
        var val = jQuery(this).val()
        var show = jQuery(this).parents('ul').attr('show')
        console.log(val,show)
        if(val==show)
            $parent.find('.collapse').collapse('show')
            else
                $parent.find('.collapse').collapse('hide')
                })