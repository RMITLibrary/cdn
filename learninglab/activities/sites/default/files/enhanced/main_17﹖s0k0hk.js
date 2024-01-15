for(i = 0; i < data.length; i++) {

        var section = "";

        /* Create section statement and answer buttons */
        section = section + "<div class='section'><form class='ac-custom ac-radio ac-circle' autocomplete='off'><h4>" + data[i].statement + "</h4><ul show='true'><li><input id='r"+i+"1' type='radio' name='r"+i+"' value='True'><label for='r"+i+"1'>True</label></li><li><input id='r"+i+"2' type='radio' name='r"+i+"' value='False'><label for='r"+i+"2'>False</label></li></ul></form>";

        /* Create headings */
        var subSection = "<div class='collapse' id='s"+i+"'><div class='well'><button class='fb btn active'>Feedback</button><button class='hw btn'>Useful resources</button>";

        subSection += "<h3 class='printOnly'>Feedback:</h3><ul class='fb'>"

        /* Append statement feedback */
        subSection += "<p class='feedback'>"+data[i].feedback+"</p>";

        /* Links */
        subSection += "</ul><ul class='tfs'>";
        for(j=0;j<data[i].links.length;j++){
            if (data[i].links[j] == null) {
                subSection += "<li>No resources</li>";
            }else if (data[i].links[j].new == true) { 
                subSection += "<li><a class='new-window' href='"+data[i].links[j].url+"'>"+data[i].links[j].text+"</a></li>"
            } else {
                subSection += "<li><a href='"+data[i].links[j].url+"'>"+data[i].links[j].text+"</a></li>"
            }
        }

        subSection += "</ul><ul class='tft'>";

        subSection += "</ul></div></div></div>";

        jQuery(".wrapper").append(section+subSection);
    }

    jQuery(".well").each(function(){
        jQuery(this).find("ul:first-of-type").show();
    })

    jQuery('.well .btn').click(function(){
        var index = jQuery( this).index()+1;
        var $parent = jQuery(this).parents('.well');
        jQuery(this).parents('.well').find('button').removeClass('active');
        jQuery(this).addClass('active');
        $parent.find("ul").hide();
        $parent.find("ul:nth-of-type("+index+")").show();
    })

    jQuery("input[type='radio']").click(function(){

        var $parent = jQuery(this).parents('.section');
        var val = "true";
        var show = jQuery(this).parents('ul').attr('show');
        
        /* If icon exists already, remove it */
        $parent.find(".fa").remove();
        $parent.find(".green").remove();
        $parent.find(".red").remove();

        /* Append tick or cross */
        if (jQuery(this).next("label").text() == "True") {
            jQuery(this).next("label").append("<span class='red'><i class='fa fa-times' aria-hidden='true'></i></span>");
        } else {
            jQuery(this).next("label").append("<span class='green'><i class='fa fa-check' aria-hidden='true'></i></span>");
        }

        if(val == show) {
            $parent.find('.collapse').collapse('show');
        } else {
            $parent.find('.collapse').collapse('hide');
        }
            
    });