var quiz_data;
var current_question = 1;
//var feedback_object;

(function ($) {

    $(document).ready(function()
    {
        //================== INIT =========================
        quiz_data = $.parseJSON(quiz);
        //feedback_object = $.parseJSON(feedback);

        submit_state_validate();

        if(slideshow_state)
        {
            quiz_page_update();
        }
        
        //================== EVENT HANDLERS =========================
        
        $("#multiple-choice_quiz").submit(function()
            {
                var form_data = $(this).serializeArray();

                var question;
                var questions_to_count = 0;
                var correct_count = 0;
                var questions_total = quiz_data.length;
                var result_str = "<div class='learning-lab-quiz-feedback'>";
                var count = 0;
                var q_id = "";

                //validate the submitted values
                $.each(quiz_data, function() {

                    question = this;
                    count++;
                    q_id = "q" + count;

                    if(slideshow_state)
                    {
                       questions_to_count = 1;
                    }
                    else
                    {
                       questions_to_count++;
                    }


                    var current_id = "q" + current_question;

                    $.each(form_data,function() {
                        
                        if(question.id == this.name){

                            if(slideshow_state)
                            {
                                if(current_id == q_id)
                                {
                                    if(question.correct == parseInt(this.value))
                                    {
                                        correct_count++;
                                        result_str += "<p> " + question.feedback_correct + "</p>";
                                    }
                                    else
                                    {
                                         result_str += "<p> " + question.feedback_incorrect + "</p>";
                                    }
                                }
                            }
                            else
                            {
                                count_str = "";
                                
                                if(questions_total > 1)
                                {
                                    count_str = questions_to_count + ") : ";
                                }

                                if(question.correct == parseInt(this.value))
                                {
                                    correct_count++;
                                    result_str += "<p> " + count_str + question.feedback_correct + "</p>";
                                }
                                else
                                {
                                     result_str += "<p> " + count_str + question.feedback_incorrect + "</p>";
                                }
                            }
                        }
                    });
                });

                if(form_data.length == 0)
                {
                   result_str += "<p class='no-selection'>No answer selected. Please make a selection and try again.</p>";
                }

                result_str += "</div>";

                feedback(questions_to_count,correct_count,result_str);

                return false;
            });

            $(".multiple-choice-next").click(function()
            {
               //window.location.href = first_url;
               
               newQ = current_question + 1;

                if(newQ <= question_count)
                {
                    current_question = newQ;
                    quiz_page_update();
                }

                if(newQ == question_count)
                {
                    $(".multiple-choice-next").attr('disabled','disabled');
                }

                feedback(0,0,"&nbsp;");

            });

            $("#multiple-choice-reset").click(function()
            {
               if(slideshow_state)
               {
                    current_question = 1;
                    quiz_page_update();
                    $(".multiple-choice-next").removeAttr('disabled');
               }
            });

            //================== SUPPORT FUNCTIONS =========================

            function quiz_page_update()
            {
                $('.multiple-choice-question-container').each(function(index)
                {
                    var n = "q" + current_question;

                    if(this.id != n)
                    {
                        $(this).addClass('slideshow-question-hidden');
                    }
                    else
                    {
                        $(this).removeClass('slideshow-question-hidden');
                    }

                    //learning-lab-progress-counter
                    $('.learning-lab-progress-counter').html("Question " + current_question + " of " + question_count);
                });

                //$("#multiple-choice-next").attr('disabled','disabled');
            }

            function submit_state_validate()
            {
                $("#multiple-choice-submit").removeAttr('disabled');
            }

            function feedback(questions_to_count,correct_count,question)
            {
                $(".learning-lab-quiz-feedback-dialog").remove();

                //var close_link_text = "Close";
                //var retry_link_text = "Retry";

                //radio_btn_set_state(false);

                //$("#learning-lab-submit").attr("disabled", 'disabled');

                var str = "<div class='learning-lab-quiz-feedback-dialog'>";
                
                if(!slideshow_state)
                {
                    str += "<div class='learning-lab-quiz-score-text'> You scored :</div>";
                    str += "<div class='learning-lab-quiz-score'>" + correct_count +  "/" + questions_to_count + "</div>";
                }
                /*
                else
                {

                    str += "<div class='learning-lab-quiz-progress'>Question " + current_question +  " of " + question_count + "</div>";
                }
                */
                str += "<div class='learning-lab-quiz-feedback'>" + question + "</div>";
                
                str += "</div>";

                $(".learning-lab-activity-feedback").append(str);
                
            }

            function radio_btn_set_state(state)
            {
                $('.multiple-choice-answer').each(function(index)
                {
                    if(state)
                    {
                        $(this).removeAttr('disabled');
                    }
                    else
                    {
                        $(this).attr('disabled','disabled');
                    }

                });
            }
    });

}(jQuery));