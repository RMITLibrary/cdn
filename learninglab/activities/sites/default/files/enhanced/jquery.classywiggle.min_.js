/*!
 * jQuery ClassyWiggle
 * www.class.pm
 *
 * Written by Marius Stanciu - Sergiu <marius@class.pm>
 * Licensed under the MIT license www.class.pm/LICENSE-MIT
 * Version 1.2.0
 *
 */(function(b){b.fn.ClassyWiggle=function(g,c){c=b.extend({degrees:"2 4 2 0 -2 -4 -2 0".split(" "),delay:35,limit:null,randomStart:!0,onWiggle:function(a){},onWiggleStart:function(a){},onWiggleStop:function(a){}},c);var f={wiggle:function(a,d){void 0===d&&(d=c.randomStart?Math.floor(Math.random()*c.degrees.length):0);b(a).hasClass("wiggling")||b(a).addClass("wiggling");var e=c.degrees[d];b(a).css({"-webkit-transform":"rotate("+e+"deg)","-moz-transform":"rotate("+e+"deg)","-ms-transform":"rotate("+e+ "deg)","-o-transform":"rotate("+e+"deg)","-sand-transform":"rotate("+e+"deg)",transform:"rotate("+e+"deg)"});d===c.degrees.length-1&&(d=0,void 0===b(a).data("wiggles")?b(a).data("wiggles",1):b(a).data("wiggles",b(a).data("wiggles")+1),c.onWiggle(a));if(c.limit&&b(a).data("wiggles")==c.limit)return f.stop(a);a.timeout=setTimeout(function(){f.wiggle(a,d+1)},c.delay)},stop:function(a){b(a).data("wiggles",0);b(a).css({"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)", "-o-transform":"rotate(0deg)","-sand-transform":"rotate(0deg)",transform:"rotate(0deg)"});b(a).hasClass("wiggling")&&b(a).removeClass("wiggling");clearTimeout(a.timeout);a.timeout=null;c.onWiggleStop(a)},isWiggling:function(a){return a.timeout?!0:!1}};if("isWiggling"===g&&1===this.length)return f.isWiggling(this[0]);this.each(function(){"start"!==g&&void 0!==g||this.timeout?"stop"===g&&f.stop(this):(f.wiggle(this),c.onWiggleStart(this))});return this}})(jQuery);