
(function(compId){var _=null,y=true,n=false,x11='break-word',x2='5.0.0',e31='${Stage}',g='image',e34='${authoritativeDesc}',x='text',e29='${comprehensiveDesc}',i='none',x3='6.0.0.400',p='px',w='width',e33='${accurateDesc}',h='height',e30='${objectiveDesc}',tp='top',d='display',x8='Arial, Helvetica, sans-serif',x15='nowrap',l='normal',x1='6.0.0',x10='none solid rgb(255, 255, 255)',x28='rgba(255,255,255,1)',x7='14',x14='16',x4='rgba(0,0,0,0)',x9='100',e32='${currentDesc}';var g26='authoritativeTitleBg.svg',g23='objectiveTitleBg.svg',g20='currentTitleBg.svg',g12='comprehensiveTitleBg.svg',g5='dottedRing.svg',g17='accurateTitleBg.svg';var s25="Has the article been published in a reputable journal? Be careful to check the publisher especially when using web resources? Has it been peer reviewed?",s21="Current?",s24="Objective?",s27="Authoritative?",s22="Is the perspective balanced? Is it biased? Is the language emotional or highly persuasive? Are dissenting points of view acknowledged?",s6="Does the article/report adequately cover its topic? Does it include significant conflicting data?<br>",s18="Accurate?",s16="Are the mathematical calculations, specifications, etc., correct? Are the quotations accurate?<br>Are the descriptions or summaries of primary sources accurate?<br>",s13="Comprehensive?",s19="When was the article published? Rapidly changing technologies and practices may mean that information can quickly become dated or obsolete.";var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'dottedGreenRing',t:g,r:['196px','77px','208px','196px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'comprehensiveDesc',v:i,t:x,r:['215px','144px','178px','61px','auto','auto'],text:s6,align:"left",n:[x8,[x7,p],"rgba(0,0,0,1.00)",x9,x10,l,x11,""]},{id:'comprehensiveGroup',t:'group',r:['330','283','170','45','auto','auto'],cu:'default',c:[{id:'comprehensiveTitleBg',t:g,r:['0px','0px','170px','45px','auto','auto'],cu:'default',f:[x4,im+g12,'0px','0px']},{id:'comprehensiveTitle',t:x,r:['24px','14px','auto','auto','auto','auto'],cu:'default',text:s13,align:"center",n:[x8,[x14,p],"rgba(255,255,255,1)",x9,x10,l,x11,x15]}]},{id:'accurateDesc',v:i,t:x,r:['215px','122px','178px','112px','auto','auto'],text:s16,align:"left",n:[x8,[x7,p],"rgba(0,0,0,1.00)",x9,x10,l,x11,""]},{id:'accurateGroup',t:'group',r:['115','283px','170','45','auto','auto'],cu:'default',c:[{id:'accurateTitleBg',t:g,r:['0px','0px','170px','45px','auto','auto'],cu:'default',f:[x4,im+g17,'0px','0px']},{id:'accurateTitle',t:x,r:['49px','14px','auto','auto','auto','auto'],cu:'default',text:s18,align:"center",n:[x8,[x14,p],"rgba(255,255,255,1)",x9,x10,l,x11,x15]}]},{id:'currentDesc',v:i,t:x,r:['215px','127px','170px','95px','auto','auto'],text:s19,align:"left",n:[x8,[x7,p],"rgba(0,0,0,1.00)",x9,x10,l,x11,""]},{id:'currentGroup',t:'group',r:['414','152px','170','45','auto','auto'],cu:'default',c:[{id:'currentTitleBg',t:g,r:['0px','0px','170px','45px','auto','auto'],cu:'default',f:[x4,im+g20,'0px','0px']},{id:'currentTitle',t:x,r:['54px','14px','auto','auto','auto','auto'],cu:'default',text:s21,align:"center",n:[x8,[x14,p],"rgba(255,255,255,1)",x9,x10,l,x11,x15]}]},{id:'objectiveDesc',v:i,t:x,r:['215px','127px','170px','95px','auto','auto'],text:s22,align:"left",n:[x8,[x7,p],"rgba(0,0,0,1.00)",x9,x10,l,x11,""]},{id:'objectiveGroup',t:'group',r:['16','152px','170','45','auto','auto'],cu:'default',c:[{id:'objectiveTitleBg',t:g,r:['0px','0px','170px','45px','auto','auto'],cu:'default',f:[x4,im+g23,'0px','0px']},{id:'objectiveTitle',t:x,r:['47px','14px','auto','auto','auto','auto'],cu:'default',text:s24,align:"center",n:[x8,[x14,p],"rgba(255,255,255,1)",x9,x10,l,x11,x15]}]},{id:'authoritativeDesc',v:i,t:x,r:['215px','118px','170px','113px','auto','auto'],text:s25,align:"left",n:[x8,[x7,p],"rgba(0,0,0,1.00)",x9,x10,l,x11,""]},{id:'authoritativeGroup',t:'group',r:['215','22px','170','45','auto','auto'],cu:'default',c:[{id:'authoritativeTitleBg',t:g,r:['0px','0px','170px','45px','auto','auto'],cu:'default',f:[x4,im+g26,'0px','0px']},{id:'authoritativeTitle',t:x,r:['36px','14px','auto','auto','auto','auto'],cu:'default',text:s27,align:"center",n:[x8,[x14,p],"rgba(255,255,255,1)",x9,x10,l,x11,x15]}]}],style:{'${Stage}':{isStage:true,r:['null','null','600px','350px','auto','auto'],overflow:'hidden',f:[x28]}}},tt:{d:0,a:y,data:[["eid31",d,0,0,"linear",e29,i,i],["eid44",tp,0,0,"linear",e30,'127px','127px'],["eid29",h,0,0,"linear",e31,'350px','350px'],["eid37",tp,0,0,"linear",e32,'127px','127px'],["eid27",h,0,0,"linear",e33,'112px','112px'],["eid19",d,0,0,"linear",e34,i,i],["eid26",w,0,0,"linear",e33,'178px','178px'],["eid34",h,0,0,"linear",e29,'61px','61px'],["eid41",tp,0,0,"linear",e33,'122px','122px'],["eid32",tp,0,0,"linear",e29,'144px','144px'],["eid23",d,0,0,"linear",e33,i,i],["eid22",d,0,0,"linear",e32,i,i],["eid20",d,0,0,"linear",e30,i,i],["eid33",w,0,0,"linear",e29,'178px','178px'],["eid35",tp,0,0,"linear",e34,'118px','118px'],["eid43",h,0,0,"linear",e30,'95px','95px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-6870951");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${authoritativeGroup}","mouseover",function(sym,e){sym.$("authoritativeDesc").show();sym.$("authoritativeTitle").css("opacity","0.5");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${authoritativeGroup}","mouseleave",function(sym,e){sym.$("authoritativeDesc").hide();sym.$("authoritativeTitle").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${objectiveGroup}","mouseover",function(sym,e){sym.$("objectiveDesc").show();sym.$("objectiveTitle").css("opacity","0.5");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${objectiveGroup}","mouseleave",function(sym,e){sym.$("objectiveDesc").hide();sym.$("objectiveTitle").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${currentGroup}","mouseover",function(sym,e){sym.$("currentDesc").show();sym.$("currentTitle").css("opacity","0.5");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${currentGroup}","mouseleave",function(sym,e){sym.$("currentDesc").hide();sym.$("currentTitle").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${accurateGroup}","mouseover",function(sym,e){sym.$("accurateDesc").show();sym.$("accurateTitle").css("opacity","0.5");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${accurateGroup}","mouseleave",function(sym,e){sym.$("accurateDesc").hide();sym.$("accurateTitle").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${comprehensiveGroup}","mouseover",function(sym,e){sym.$("comprehensiveDesc").show();sym.$("comprehensiveTitle").css("opacity","0.5");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${comprehensiveGroup}","mouseleave",function(sym,e){sym.$("comprehensiveDesc").hide();sym.$("comprehensiveTitle").css("opacity","1");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-6870951");