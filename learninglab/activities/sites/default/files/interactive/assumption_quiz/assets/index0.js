// external js:
// http://masonry.desandro.com/masonry.pkgd.js

$(".hide").hide();

//cards info
//var assmpArray=["this is assumption placeholder1","this is assumption placeholder2","this is assumption placeholder3"];
var answerRight=answers;
var answerWrong=answers;
var cards=[];
var greenCards=[];
var redCards=[];
var blueCardsHistory=[];
var totalCardsHistory=[];

var choice;

var $container = $('.masonry').masonry({
  columnWidth: 60
});
//var $buttonGroup = $('#buttonGroup').masonry({
//  columnWidth: 60
//});

//init
$( function() {
  //create dummy data
  //for (var i = 0; i<10; i++){
  //  assmpArray[i] = "this is assumption placeholder "+(i+1);
  //  answerRight[i] = "this is answer right placeholder "+(i+1);
  //  answerWrong[i] = "this is answer wrong placeholder "+(i+1);
  //}
  makeCards();
  addChild(null,1)
});

//
//var counter=0;
//making the cards
function makeCards(){
  for (var i= 0; i<assmpArray.length; i++){
    var $elem = $("#00").clone();
    $elem.attr('id',"0"+(i+1))
    $elem.find('.title').text("#"+(i+1))
    $elem.find('p').html(assmpArray[i])
    cards[i]=[$elem];
  }
  for (var i= 0; i<answerRight.length; i++){
    var $elem = $("#02").clone();
    $elem.attr('id',"2"+(i+1))
    $elem.find('.title').text("You're right!")
    $elem.find('p').text(answerRight[i])
    greenCards[i]=[$elem];
  }
  for (var i= 0; i<assmpArray.length; i++){
    var $elem = $("#01").clone();
    $elem.attr('id',"1"+(i+1))
    $elem.find('.title').text("Hmm... think about this")
    $elem.find('p').text(answerWrong[i])
    redCards[i]=[$elem];
  }



}

function agree(context){
  //console.log("agreed");
  choice=true;
  $(context).parent().children(".disagree").hide();
  //$buttonGroup.masonry('remove', $(".masonry").children(".card:first-child") );
  //$buttonGroup.masonry();
  //
  //$buttonGroup.masonry('reloadItems');
  $(context).attr("onclick","").addClass("clicked",1500)

  addChild(context,1);
}

function disagree(context){
  choice=false;
  $(context).parent().children(".agree").hide();
  $(context).attr("onclick","").addClass("clicked",1500)

  addChild(context,1);
}

function getItemElement() {
  //var elem = document.createElement('div');
  var id=blueCardsHistory.length;

  var elem;

  if(choice==true){
    elem = redCards[id-1];
  }
  else if(choice == false){
    elem = greenCards[id-1];
  }
  else{
    if(id==cards.length)
    {
      elem = $("#03").clone();
    }else{
      elem = cards[id];
      blueCardsHistory.push(elem);
    }
  }

  //console.log(cards.length)
  //console.log(elem)
  totalCardsHistory.push(elem)
  //counter++;
  return elem;
}

function addChild(context,num){

  for (var i=0;i<num;i++) {
    setTimeout(function(){
    //console.log(i)
    //for animation purpose, create a placeholder div
    //var $placeholder = document.createElement('div');
    var elems = getItemElement()
    //$placeholder.className = "card holder";
    //$container.append($placeholder).masonry('appended', $placeholder);
    $container.append(elems).masonry('appended', elems);
      choice=null;


    $container.masonry('reloadItems'); //OP said it was also required
    $container.masonry()
    },100)

  }
    //setTimeout(function () {
    //  $(".card:nth-last-child(1)").show();
    //
    //  //delateHolder()
    //  //setTimeout(function () {
    //  //  if ($(".masonry").children().length > 2) {
    //  //    console.log("upper deleted")
    //  //    delateUpper()
    //  //  }
    //  //}, 500)
    //
    //}, 500)


  $(context).attr("onclick","").addClass("clicked",1500)
  lastCount=0;
}

function createNavBtn(){
  setTimeout(function(){
    var length = totalCardsHistory.length;
    if(length - 3 - lastCount>=0) {
      var $upper=$container.children(".card:first-child")
      var classes = $upper.attr("class").split(/\s/);
      var color=classes[1]
      console.log(color)
      if( $upper.hasClass("rotated"))
        $upper.children('img').attr("src", "assets/nav_down_"+color+".svg").transition({ rotate: '0deg' })
      else
        $upper.children('img').attr("src", "assets/nav_down_"+color+".svg").fadeIn("slow");
      $upper.children('img').attr("onclick","lastCard()");
    }
    if(lastCount>0) {
      var $lower=$container.children(".card:nth-last-child(1)")
      var classes = $lower.attr("class").split(/\s/);
      var color=classes[1]
      console.log(color)
      $lower.addClass("rotated").children('img').attr("src", "assets/nav_down_"+color+".svg").transition({ rotate: '180deg' })
      $lower.children('img').attr("onclick","nextCard()");

    }

  },1200)

}


var lastCount=0;
function lastCard(){
  var length = totalCardsHistory.length;
  if((length - 3 - lastCount)>=0) {
    var $elem = totalCardsHistory[(length - 3 - lastCount)];
    console.log("showing card is: " + (length - 3 - lastCount))
    console.log(" length is: "+length)
    lastCount++
    //elems.push( elem );
    console.log($elem)

    // prepend elements to container
    //// add and lay out newly prepended elements
    //$container.masonry('prepended', $elem)
    //
    //
    ////$container.prepended( elems ).masonry( 'prepended', elems );
    ////
    //$container.masonry('reloadItems'); //OP said it was also required
    //$container.masonry()

    $container.children(".card:first-child").before($elem);//------->problem
    $container.children(".card:first-child").show();
    //$container.prepended( $elem ).masonry( 'prepended', $elem );
    $container.masonry('reloadItems'); //OP said it was also required

    $container.masonry()

    delateLower();
  }
}

function nextCard(){
  var length = totalCardsHistory.length;
  if(lastCount>0) {
    var elems = totalCardsHistory[(length - lastCount)];
    console.log("showing card is: " + (length -  lastCount))
    console.log(" length is: "+length)

    lastCount--;
    $container.children(".card:nth-last-child(1)").after(elems)
    $container.masonry('reloadItems'); //OP said it was also required

    $container.masonry()
    $container.children(".card:nth-last-child(1)").show();
    delateUpper()
  }
}

function delateUpper(){
  //blueCardsHistory.shift();
  //for (var i=0; i<times; i++){
    $container.masonry( 'remove', $(".masonry").children(".card:first-child") );
    $container.masonry()
    $container.masonry('reloadItems'); //OP said it was also required
  //}
  createNavBtn()

}
function delateLower(){
  //blueCardsHistory.pop();
  $container.masonry( 'remove', $(".masonry").children(".card:nth-last-child(1)") );
  $container.masonry()
  $container.masonry('reloadItems'); //OP said it was also required
  createNavBtn()

}

function delateHolder(){
  //blueCardsHistory.pop();
  $container.masonry( 'remove', $(".holder") );
  $container.masonry()
  $container.masonry('reloadItems'); //OP said it was also required
  createNavBtn()

}

function refresh(){
  $container.masonry()
  $container.masonry('reloadItems'); //OP said it was also required

}

function reload(){
  location.reload();
}