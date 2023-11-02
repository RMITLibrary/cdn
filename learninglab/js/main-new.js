window.onload = function(){
    jQuery("#crossword").css("max-width",jQuery("#content-area").innerWidth()+"px")

            var wordNum = wordList.length;
            // words[i] correlates to clues[i]
            var words = [];
            var clues = [];
            var randomWords = []

            for (var i=0; i<10; i++){
                var random = Math.floor(Math.random() * (wordNum - 1)) + 1;
                var word = wordList[random]
                if(randomWords.indexOf(word)<0){
                    randomWords.push(word)
                    words.push(word.word)
                    clues.push(word.definition)
                }
            }

            console.log(randomWords)
            jQuery("#debug").text(words)


            // Create crossword object with the words and clues
            var cw = new Crossword(words, clues);

            // create the crossword grid (try to make it have a 1:1 width to height ratio in 10 tries)
            var tries = 10; 
            var grid = cw.getSquareGrid(tries);

            // report a problem with the words in the crossword
            if(grid == null){
                var bad_words = cw.getBadWords();
                var str = [];
                for(var i = 0; i < bad_words.length; i++){
                    str.push(bad_words[i].word);
                }
                alert("Shoot! A grid could not be created with these words:\n" + str.join("\n"));
                return;
            }

            // turn the crossword grid into HTML
            var show_answers = true;
            document.getElementById("crossword").innerHTML = CrosswordUtils.toHtml(grid, show_answers);

            // make a nice legend for the clues
            var legend = cw.getLegend(grid);
            addLegendToPage(legend);

            //make it functional
            jQuery("#crossword td").each(function(){
                if(!jQuery(this).hasClass("no-border")){
                    //                    console.log(jQuery(this).text())
                    var key = jQuery(this).text()
                    var attr = ""
                    //                    var attr = jQuery(this).attr('placeholder');
                    if (typeof attr !== typeof undefined && attr !== false) {
                        jQuery(this).html("<input maxlength='1' key='"+key+"' placeholder='"+attr+"'/>")
                    }else{
                        jQuery(this).html("<input maxlength='1' key='"+key+"' />")
                    }
                }
            })


            var across,down = ""
            jQuery("#crossword td input").click(function(){
                var $td = jQuery(this).parent()
                across = $td.attr("across")
                down = $td.attr("down")
                jQuery(".color1").removeClass("color1-h color1")
                if (typeof across !== typeof undefined && across !== false) {
                    jQuery("td[across='"+across+"'] input").addClass("color1-h color1").parent().removeClass("incorrect")
                }
                else if (typeof down !== typeof undefined && down !== false) {
                    jQuery("td[down='"+down+"'] input").addClass("color1-h color1").parent().removeClass("incorrect")
                }
                jQuery(this).select()

                jQuery("#check_this_btn").prop("disabled",false)
                jQuery("#show_this_btn").prop("disabled",false)
                jQuery("#clear_this_btn").prop("disabled",false)

                var clueId=jQuery(".color1").attr("placeholder")
                jQuery("#"+clueId).addClass("color1 color1-h")

            }).keydown(function(event){
                event.preventDefault();
                var pos = jQuery(this).parent().attr("pos").split(", ")
                var x=parseInt(pos[1]), y = parseInt(pos[0])
                if(event.which == 8){
                    jQuery(this).val('')
                    if (typeof across !== typeof undefined && across !== false) {
                        jQuery("td[pos='"+y+", "+(x-1)+"']").children().focus().select()
                    }
                    else if (typeof down !== typeof undefined && down !== false) {
                        jQuery("td[pos='"+(y-1)+", "+x+"']").children().focus().select()
                    }
                }else{
                    var value = String.fromCharCode(event.keyCode).toLowerCase();
                    jQuery(this).val(value)
                    if (jQuery(this).val().length == 1 ){
                        if (typeof across !== typeof undefined && across !== false) {
                            jQuery("td[pos='"+y+", "+(x+1)+"']").children().focus().select()
                        }
                        else if (typeof down !== typeof undefined && down !== false) {
                            jQuery("td[pos='"+(y+1)+", "+x+"']").children().focus().select()
                        }
                    }
                }

            })

            jQuery("#clues li").click(function(){
                var id=jQuery(this).attr("id")
                var $td = jQuery("td[placeholder='"+id+"']")
                 across = $td.attr("across")
                 down = $td.attr("down")
                console.log("td[across='"+across+"']","td[down='"+down+"']")
                jQuery(".color1").removeClass("color1-h color1")
                if (typeof across !== typeof undefined && across !== false) {
                    jQuery("td[across='"+across+"'] input").addClass("color1-h color1").parent().removeClass("incorrect")
                }
                else if (typeof down !== typeof undefined && down !== false) {
                    jQuery("td[down='"+down+"'] input").addClass("color1-h color1").parent().removeClass("incorrect")
                }

                jQuery("#check_this_btn").prop("disabled",false)
                jQuery("#show_this_btn").prop("disabled",false)
                jQuery("#clear_this_btn").prop("disabled",false)

                jQuery(this).addClass("color1 color1-h")
                $td.children().focus().select()
            })
        };

        jQuery(document).click(function(e) {
            var target = e.target;

            if (!jQuery(target).is('input')&&!jQuery(target).is('button')&&!jQuery(target).is('#clues li')) {
                jQuery(".color1").removeClass("color1-h color1")
                jQuery("#check_this_btn").prop("disabled",true)
                jQuery("#show_this_btn").prop("disabled",true)
                jQuery("#clear_this_btn").prop("disabled",true)
            }
        });

        function addLegendToPage(groups){
            for(var k in groups){
                var html = [];
                for(var i = 0; i < groups[k].length; i++){
                    html.push("<li id='"+groups[k][i]['position']+"'><strong>" + groups[k][i]['position'] + ".</strong> " + groups[k][i]['clue'] + "</li>");
                }
                document.getElementById(k).innerHTML = html.join("\n");
            }
        }

        jQuery("#show_btn").click(function(){
            jQuery("#check_btn").prop("disabled",true)
            jQuery("#show_btn").prop("disabled",true)
            jQuery("#clear_btn").prop("disabled",false)
            jQuery("#check_this_btn").prop("disabled",true)
            jQuery("#show_this_btn").prop("disabled",true)
            jQuery("#clear_this_btn").prop("disabled",true)

            jQuery("#crossword td input").val(function(){
                jQuery(this).parent().removeClass("correct incorrect")
                return jQuery(this).attr("key")
            }).prop("disabled",true)
        })

        jQuery("#show_this_btn").click(function(){
            //            jQuery("#check_this_btn").prop("disabled",true)
            //            jQuery("#show_this_btn").prop("disabled",true)
            //            jQuery("#clear_this_btn").prop("disabled",false)

            jQuery("#crossword .color1").val(function(){
                jQuery(this).parent().removeClass("correct incorrect").addClass("shown")
                return jQuery(this).attr("key")
            })
        })

        jQuery("#clear_btn").click(function(){
            jQuery("#check_btn").prop("disabled",false)
            jQuery("#show_btn").prop("disabled",false)
            jQuery("#clear_btn").prop("disabled",false)
            jQuery("#check_this_btn").prop("disabled",true)
            jQuery("#show_this_btn").prop("disabled",true)
            jQuery("#clear_this_btn").prop("disabled",true)

            jQuery(".color1").removeClass("color1-h color1")
            jQuery("#crossword td").removeClass("correct incorrect")
            jQuery("#crossword td input").val("").prop("disabled",false)
            jQuery(".element-animation").removeClass("element-animation")
        })

        jQuery("#clear_this_btn").click(function(){
            //            jQuery("#check_btn").prop("disabled",false)
            //            jQuery("#show_btn").prop("disabled",false)
            //            jQuery("#clear_btn").prop("disabled",false)

            jQuery("#crossword .color1").parent().removeClass("correct incorrect")
            jQuery("#crossword .color1").val("").prop("disabled",false)
            jQuery(".color1").removeClass("color1-h color1")
            jQuery(".element-animation").removeClass("element-animation")
        })

        jQuery("#check_btn").click(function(){
            jQuery("#check_btn").prop("disabled",false)
            jQuery("#show_btn").prop("disabled",false)
            jQuery("#clear_btn").prop("disabled",false)


            jQuery("#crossword td input").each(function(){
                jQuery(this).parent().removeClass("correct incorrect")
                var key = jQuery(this).attr("key").trim()
                var val = jQuery(this).val().trim()
                console.log(key,val)
                if(val==key){
                    jQuery(this).parent().addClass("correct")
                }else{
                    jQuery(this).parent().addClass("incorrect")
                }
            })

            checkComplete()

        })


        jQuery("#check_this_btn").click(function(){
            jQuery("#crossword .color1").each(function(){
                jQuery(this).parent().removeClass("correct incorrect")
                var key = jQuery(this).attr("key").trim()
                var val = jQuery(this).val().trim()
                console.log(key,val)
                if(val==key){
                    jQuery(this).parent().addClass("correct")
                }else{
                    jQuery(this).parent().addClass("incorrect")
                }
            })
            checkComplete()
        })


        var checkComplete = function(){
            if(jQuery("#crossword .correct").length==jQuery("#crossword td input").length){
                jQuery("#check_btn").prop("disabled",true)
                $("#replayBtn").fadeIn()
                jQuery("#crossword td").not(".no-border").each(function(i){
                    var $this = jQuery(this).children()
                    setTimeout(function(){
                        console.log("ele")
                        $this.addClass(" element-animation")
                    },i*50)
                })
            }
        }

        $("#replayBtn").click(function(){
            location.reload();
        })
