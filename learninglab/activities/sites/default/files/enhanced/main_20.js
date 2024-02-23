(function($) {

    var qNum = data.questions.length
    //set up the questions and progress bar
    for(var i=0;i<qNum;i++){
        var question = data.questions[i]
        $(".prog").append('<div class="circle"><span class="label">'+(i+1)+'</span><span class="title">25%</span></div>')
        if(i!=qNum-1){
            $(".prog").append('<span class="bar"></span>')
        }
        $("#questions").append('<div id="q'+(i+1)+'" class="question">'+question.markup+'</div>')
        $("#q1").show()
        $('.prog .circle:first-child').addClass('active',400);
    }

    var barLength = ($(".prog").width()-40*qNum)/(qNum-1)
    $(".prog").append("<style>.prog .bar{width:"+barLength+"px}</style>")

    var currentIndex = 1

    var loadQuestion = function(index){
        //if has been answered, disable the buttons
        if(data.questions[currentIndex-1].answered){
            $('#show_btn').prop("disabled",true);
            $('#clear_btn').prop("disabled",true)
            $("#check_btn").prop("disabled",true)
        }else{
            $('#show_btn').prop("disabled",false);
            $('#clear_btn').prop("disabled",false)
            $("#check_btn").prop("disabled",false)
        } 

        //if has been shown answer, disable the buttons
        if($("#q"+currentIndex).find("select").is('[disabled=disabled]')){
            $('#show_btn').prop("disabled",true);
            $('#clear_btn').prop("disabled",false)
            $("#check_btn").prop("disabled",true)
        }else{
            $('#show_btn').prop("disabled",false);
            $('#clear_btn').prop("disabled",false)
            $("#check_btn").prop("disabled",false)
        } 

        //display the right question
        $(".question").hide();
        $("#q"+index).fadeIn(300)
        $('.prog .circle').removeClass('active')
        $('.prog .circle:nth-of-type(' + index + ')').addClass('active',400);

        //back/next button control
        if(currentIndex==qNum)$("#next_btn").prop("disabled",true); else $("#next_btn").prop("disabled",false);
        if(currentIndex==1)$("#back_btn").prop("disabled",true); else $("#back_btn").prop("disabled",false)


            }

    $("#next_btn").click(function(){
        currentIndex++
        loadQuestion(currentIndex)
    })

    $("#back_btn").click(function(){
        currentIndex--
        loadQuestion(currentIndex)
    })


    //show answers
    $("#show_btn").click(function() {
        $('#check_btn').prop('disabled',true)
        $('#show_btn').prop('disabled',true)

        $('#clear_btn').prop("disabled",false)
        $("#q"+currentIndex).find(".well").show('fast')
        $("#q"+currentIndex).find(".fa").remove()
    })


    //clear answers
    $("#clear_btn").click(   function() {
        console.log("clear answer");
        //                $(".question").find('span').remove()
        $("#q"+currentIndex).find(".fa").remove()
        $('#check_btn').prop('disabled',false).show()
        $('#show_btn').prop('disabled',false).show()

        $('#clear_btn').prop('disabled',false)
        $("#q"+currentIndex).find(".well").hide('fast')
        $("#q"+currentIndex).find("input").val('')
    }
                         )




})(jQuery);