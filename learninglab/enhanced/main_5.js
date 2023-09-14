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

    $('.list-group-item').click(function(){
        $('.list-group-item').removeClass('active')
        $(this).addClass('active').find('input').prop('checked',true)
    })
    
    //show answers
    $("#show_btn").click(function() {
        $('#check_btn').prop('disabled',true)
        $('#show_btn').prop('disabled',true)

        $('#clear_btn').prop("disabled",false)
        $('.list-group-item').removeClass('active')
        var $q = $("#q"+currentIndex)
        var answer = $q.find('.options').attr('answer')
        console.log(answer)
        $q.find("[order='"+answer+"']").prop('checked',true).parent().addClass('color2-h color2')
        $q.find('.list-group-item').addClass('disabled')
        $q.find('input').prop('disabled',true)

        $q.find(".fa").remove()
    })


    //clear answers
    var clear = function(){
        console.log("clear answer");
        
        var $q = $("#q"+currentIndex)
        $q.find(".fa").remove()
        $('#check_btn').prop('disabled',false).show()
        $('#show_btn').prop('disabled',false).show()
$('.list-group-item').removeClass('active')
        $('#clear_btn').prop('disabled',false)
        $q.find(".color2").removeClass('color2 color2-h')
        $q.find(".color4").removeClass('color4 color4-h')
        $q.find('.list-group-item').removeClass('disabled')
        $q.find("input").prop("checked",false).prop("disabled",false)
    }
    $("#clear_btn").click(function() {
        clear()
    })


    //check answer
    $("#check_btn").click( function(){
        var correctCount = 0
        var $q = $("#q"+currentIndex)

        $q.find(".fa").remove()
        $q.find(".color2").removeClass('color2 color2-h')
        $q.find(".color4").removeClass('color4 color4-h')
$('.list-group-item').removeClass('active')
        var answer = $q.find('.options').attr('answer')
        var selected = $q.find('input:checked').attr('order')

        if(answer==selected){
            $q.find('input:checked').parent().addClass('color2 color2-h').append('<i class="fa fa-check" aria-hidden="true"></i>')
            $q.find('input').prop('disabled',true)

            $q.find('.list-group-item').addClass('disabled')
            $('.prog .circle:nth-of-type(' + currentIndex + ')').find(".label").html('<i class="fa fa-check" style="color:#fff"></i>')
            $('.prog .circle:nth-of-type(' + currentIndex + ')').removeClass("active",100).addClass('done',300);
            $('.prog .bar:nth-of-type(' + currentIndex + ')').addClass('active');
            if(currentIndex>1)
                $('.prog .bar:nth-of-type(' + (currentIndex-1) + ')').removeClass('active').addClass('done');

            data.questions[currentIndex-1].answered=true

            $("#check_btn").prop("disabled",true)
            $("#show_btn").prop("disabled",true)
            $("#clear_btn").prop("disabled",true)

        }else{
            $q.find('input:checked').parent().addClass('color4 color4-h').append('<i class="fa fa-times" aria-hidden="true"></i>')
        }

    })


})(jQuery);