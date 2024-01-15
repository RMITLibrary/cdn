 var wordNum = wordList.length;
        var random = Math.floor(Math.random() * (wordNum - 1)) + 1;
        var word = wordList[random]

        var chars = word.split('');

        //        console.log(word,chars)
        var innerHTML = ""
        for(var i=0; i<chars.length; i++){
            innerHTML +="<div key='"+chars[i]+"'>&nbsp;</div>"
        }
        jQuery("#word-field").html(innerHTML)
        jQuery("#face").html(faces[0].svg)

        var attamps = 0;

        var pressKey = function(keyPressed){
            var found = false;
            var $this = jQuery("button[letter='"+keyPressed+"']")
            $this.prop("disabled",true)
            jQuery("#word-field div").each(function(){
                if(jQuery(this).attr("key")==keyPressed){
                    jQuery(this).text(keyPressed).addClass("shown")
                    found = true
                }
            })
            if(jQuery(".shown").length == jQuery("#word-field div").length){
                jQuery("#face").html(winFace).addClass("element-animation")
                jQuery("#replayBtn").fadeIn()
            }else{
                if(!found){
                    attamps++;
                    console.log(attamps)
                    if(attamps<9){
                        jQuery("#face").html(faces[attamps].svg)
                    }
                    if(attamps==8){
                        jQuery("#word-field div").each(function(){
                            jQuery(this).text(jQuery(this).attr("key"))
                        })
                        jQuery("#keyboard .btn").prop("disabled",true)
                        jQuery("#replayBtn").fadeIn()
                    }

                }
            }
            updateHP();
        }

        jQuery(" #keyboard .btn").click(function(){
            var keyPressed = jQuery(this).text().toLowerCase();
            pressKey(keyPressed)
        })

        jQuery(document).keypress(function(event) {
            var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
            if (/[a-zA-Z]/.test(keyPressed)&&!jQuery("button[letter='"+keyPressed+"']").prop("disabled"))
                pressKey(keyPressed)
                console.log(keyPressed)
        });
        
        jQuery("#replayBtn").click(function(){
            location.reload();
        })

        var updateHP = function(){
            var percent = (8-attamps)/8*100
            jQuery(".prog div").css("width",percent+"%")
            if(percent<50 && percent>=20){
                jQuery(".prog div").css("background-color","#F3601F")
            }
            else if(percent<20){
                jQuery(".prog div").css("background-color","#DC2B27")
            }else{
                jQuery(".prog div").css("background-color","#C7E755")
            }
        }