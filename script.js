const _0x364fc9=_0x4ffc;(function(_0xc62ce2,_0x4bf4c3){const _0x20b5b2=_0x4ffc,_0x5ae101=_0xc62ce2();while(!![]){try{const _0x183b2d=-parseInt(_0x20b5b2(0x207))/0x1*(-parseInt(_0x20b5b2(0x1f7))/0x2)+parseInt(_0x20b5b2(0x205))/0x3*(parseInt(_0x20b5b2(0x1ba))/0x4)+parseInt(_0x20b5b2(0x1e1))/0x5*(-parseInt(_0x20b5b2(0x1c0))/0x6)+-parseInt(_0x20b5b2(0x1c3))/0x7*(parseInt(_0x20b5b2(0x1bb))/0x8)+-parseInt(_0x20b5b2(0x1c4))/0x9+-parseInt(_0x20b5b2(0x1c1))/0xa*(-parseInt(_0x20b5b2(0x1ed))/0xb)+parseInt(_0x20b5b2(0x1de))/0xc;if(_0x183b2d===_0x4bf4c3)break;else _0x5ae101['push'](_0x5ae101['shift']());}catch(_0x1a7a84){_0x5ae101['push'](_0x5ae101['shift']());}}}(_0x1981,0x2c01b));let lastScrollTop=0x0;const stickBar=document[_0x364fc9(0x208)](_0x364fc9(0x1ca));window[_0x364fc9(0x1dc)](_0x364fc9(0x1d2),function(){const _0x43c285=_0x364fc9;let _0x27407c=window[_0x43c285(0x1f0)]||document['documentElement'][_0x43c285(0x1c7)];_0x27407c>lastScrollTop?stickBar[_0x43c285(0x206)][_0x43c285(0x1f3)]=_0x43c285(0x1ea):stickBar[_0x43c285(0x206)]['top']='0',lastScrollTop=_0x27407c;});function _0x4ffc(_0x5d357f,_0xf210e4){const _0x198104=_0x1981();return _0x4ffc=function(_0x4ffc1d,_0x9a2b9){_0x4ffc1d=_0x4ffc1d-0x1ba;let _0x277976=_0x198104[_0x4ffc1d];return _0x277976;},_0x4ffc(_0x5d357f,_0xf210e4);}let currentIndex=0x0,startX=0x0;const totalSlides=document[_0x364fc9(0x1ec)](_0x364fc9(0x1d6))[_0x364fc9(0x1d9)],slider=document[_0x364fc9(0x1e7)](_0x364fc9(0x1d4)),indicatorContainer=document['querySelector'](_0x364fc9(0x1d5)),searchInput=document[_0x364fc9(0x208)]('searchInput'),searchResultsContainer=document[_0x364fc9(0x208)](_0x364fc9(0x201));function navigateToPage(_0xa5494){const _0x2ded67=_0x364fc9;console[_0x2ded67(0x1e6)](_0x2ded67(0x20b)+_0xa5494);}function showSlide(_0x259a91){const _0x2ac596=_0x364fc9,_0x24858d=-_0x259a91*0x64+'%';slider[_0x2ac596(0x206)][_0x2ac596(0x1e2)]='translateX('+_0x24858d+')';}function updateIndicator(){const _0x27fd74=_0x364fc9,_0x408a8f=indicatorContainer['querySelectorAll']('.indicator-dot');_0x408a8f[_0x27fd74(0x1f1)]((_0x45223b,_0x5f4c1f)=>{const _0x17ff05=_0x27fd74;_0x45223b[_0x17ff05(0x1c5)][_0x17ff05(0x1f5)](_0x17ff05(0x1d7),_0x5f4c1f===currentIndex);});}function nextSlide(){currentIndex=(currentIndex+0x1)%totalSlides,showSlide(currentIndex),updateIndicator();}function prevSlide(){currentIndex=(currentIndex-0x1+totalSlides)%totalSlides,showSlide(currentIndex),updateIndicator();}function manualSlide(_0x497fe2){const _0x24b8d2=_0x364fc9;_0x497fe2===_0x24b8d2(0x209)?nextSlide():prevSlide();}function handleTouchStart(_0x50cdbc){const _0x24c25f=_0x364fc9;startX=_0x50cdbc[_0x24c25f(0x1e5)][0x0]['clientX'];}function handleTouchMove(_0x54488e){const _0x43134c=_0x364fc9,_0x3cc913=_0x54488e['touches'][0x0][_0x43134c(0x1e4)]-startX;if(_0x3cc913>0x32)prevSlide();else _0x3cc913<-0x32&&nextSlide();}function _0x1981(){const _0x1bf591=['appendChild','5NUQcKg','transform','className','clientX','touches','log','querySelector','hidden','load','-100px','substring','querySelectorAll','429YIembK','div','.loader-container','pageYOffset','forEach','touchstart','top','Name:\x20','toggle','.product','515774mKMfKl','indicator-dot','collabIdeas','add','Please\x20fill\x20in\x20all\x20fields.','innerHTML','Form\x20submitted\x20successfully!','href','getAttribute','documentElement','searchResults','visible','data-link','GET','9THiucp','style','1RDSGXc','getElementById','next','smooth','Navigating\x20to:\x20','-300px','onload','telegramPopupClosed','0px','telegramOverlay','45532hMHoGv','16JfHMrh','click','collabName','touchend','createElement','671214iYIQev','24370UKEPjA','touchmove','48006AZUjqi','2565621ELHVhk','classList','.main-menu\x20a','scrollTop','mainMenu','scrollIntoView','stickBar','setItem','none','%0AContact\x20Info:\x20','value','https://api.telegram.org/bot7009375703:AAF1VbCtq8tyDfMffyfc7cITr1VODMdj9eM/sendMessage?chat_id=-1001995038096&text=','true','open','scroll','getItem','.slider','.slide-indicator','.slide','active','flex','length','custom-popup','display','addEventListener','collabContact','2445912TJhWnS','left'];_0x1981=function(){return _0x1bf591;};return _0x1981();}function handleTouchEnd(){startX=0x0;}setInterval(nextSlide,0x1388);for(let i=0x0;i<totalSlides;i++){const dot=document['createElement'](_0x364fc9(0x1ee));dot['classList'][_0x364fc9(0x1fa)](_0x364fc9(0x1f8)),dot[_0x364fc9(0x1dc)](_0x364fc9(0x1bc),()=>{currentIndex=i,showSlide(currentIndex),updateIndicator();}),indicatorContainer[_0x364fc9(0x1e0)](dot);}updateIndicator(),slider[_0x364fc9(0x1dc)](_0x364fc9(0x1f2),handleTouchStart),slider[_0x364fc9(0x1dc)](_0x364fc9(0x1c2),handleTouchMove),slider[_0x364fc9(0x1dc)](_0x364fc9(0x1be),handleTouchEnd),document['querySelectorAll'](_0x364fc9(0x1f6))[_0x364fc9(0x1f1)](_0x22e18c=>{const _0x450d07=_0x364fc9;_0x22e18c[_0x450d07(0x1dc)](_0x450d07(0x1bc),()=>{const _0x381a2d=_0x450d07,_0x5d3989=_0x22e18c['getAttribute'](_0x381a2d(0x203));_0x5d3989&&(window['location'][_0x381a2d(0x1fe)]=_0x5d3989);});}),window[_0x364fc9(0x1dc)](_0x364fc9(0x1d2),function(){const _0x55afc3=_0x364fc9;var _0x4b082a=document[_0x55afc3(0x208)]('scrollToTopBtn');document['body'][_0x55afc3(0x1c7)]>0x14||document[_0x55afc3(0x200)]['scrollTop']>0x14?_0x4b082a['style'][_0x55afc3(0x1db)]='block':_0x4b082a[_0x55afc3(0x206)][_0x55afc3(0x1db)]=_0x55afc3(0x1cc);});function scrollToTop(){const _0x29a666=_0x364fc9;document['body']['scrollTop']=0x0,document[_0x29a666(0x200)][_0x29a666(0x1c7)]=0x0;}const menuIcon=document['getElementById']('menuIcon'),mainMenu=document[_0x364fc9(0x208)](_0x364fc9(0x1c8)),menuItems=document['querySelectorAll'](_0x364fc9(0x1c6));menuIcon[_0x364fc9(0x1dc)](_0x364fc9(0x1bc),toggleMainMenu),menuItems[_0x364fc9(0x1f1)](_0x2ca070=>{const _0x2dd85e=_0x364fc9;_0x2ca070[_0x2dd85e(0x1dc)](_0x2dd85e(0x1bc),function(){const _0x14982a=_0x2dd85e;closeMainMenu();const _0x56754d=this[_0x14982a(0x1ff)](_0x14982a(0x1fe))[_0x14982a(0x1eb)](0x1),_0x59c398=document['getElementById'](_0x56754d);_0x59c398&&_0x59c398[_0x14982a(0x1c9)]({'behavior':_0x14982a(0x20a)});});});function toggleMainMenu(){const _0x399471=_0x364fc9;mainMenu[_0x399471(0x206)][_0x399471(0x1df)]=mainMenu['style']['left']===_0x399471(0x20f)?_0x399471(0x20c):'0px';}function closeMainMenu(){const _0x35cee4=_0x364fc9;mainMenu[_0x35cee4(0x206)][_0x35cee4(0x1df)]='-300px';}function submitCollabForm(){const _0x3aeead=_0x364fc9;var _0x42ec96=document[_0x3aeead(0x208)](_0x3aeead(0x1bd))['value'],_0x281d08=document['getElementById'](_0x3aeead(0x1dd))[_0x3aeead(0x1ce)],_0x2e8c3c=document[_0x3aeead(0x208)](_0x3aeead(0x1f9))['value'];if(_0x42ec96&&_0x281d08&&_0x2e8c3c){var _0xb17c25=_0x3aeead(0x1f4)+_0x42ec96+_0x3aeead(0x1cd)+_0x281d08+'%0AProject\x20Ideas:\x20'+_0x2e8c3c,_0x3234cb=_0x3aeead(0x1cf)+_0xb17c25,_0x2bf323=new XMLHttpRequest();_0x2bf323[_0x3aeead(0x1d1)](_0x3aeead(0x204),_0x3234cb,!![]),_0x2bf323['send'](),resetCollabForm(),showPopup(_0x3aeead(0x1fd));}else showPopup(_0x3aeead(0x1fb));}function resetCollabForm(){const _0x488af1=_0x364fc9;document[_0x488af1(0x208)](_0x488af1(0x1bd))[_0x488af1(0x1ce)]='',document[_0x488af1(0x208)](_0x488af1(0x1dd))['value']='',document[_0x488af1(0x208)]('collabIdeas')['value']='';}function showPopup(_0x427827){const _0x5c5632=_0x364fc9;var _0x4f7499=document[_0x5c5632(0x1bf)](_0x5c5632(0x1ee));_0x4f7499[_0x5c5632(0x1e3)]=_0x5c5632(0x1da),_0x4f7499[_0x5c5632(0x1fc)]=_0x427827,document['body']['appendChild'](_0x4f7499),setTimeout(function(){_0x4f7499['remove']();},0xbb8);}function showLoadingAnimation(){const _0x2a0f63=_0x364fc9;document['querySelector'](_0x2a0f63(0x1ef))['style']['visibility']=_0x2a0f63(0x202);}function hideLoadingAnimation(){const _0x54d1b5=_0x364fc9;document[_0x54d1b5(0x1e7)](_0x54d1b5(0x1ef))[_0x54d1b5(0x206)]['visibility']=_0x54d1b5(0x1e8);}window[_0x364fc9(0x1dc)](_0x364fc9(0x1e9),function(){hideLoadingAnimation();}),setTimeout(function(){hideLoadingAnimation();},0x1c9c380);function showTelegramPopup(){const _0x43bd81=_0x364fc9;var _0xd22456=document[_0x43bd81(0x208)](_0x43bd81(0x210));_0xd22456[_0x43bd81(0x206)][_0x43bd81(0x1db)]=_0x43bd81(0x1d8);}function closeTelegramPopup(){const _0x5722a0=_0x364fc9;var _0x2a8c67=document[_0x5722a0(0x208)]('telegramOverlay');_0x2a8c67[_0x5722a0(0x206)][_0x5722a0(0x1db)]='none';}function visitedTelegramPage(){const _0x55001c=_0x364fc9;closeTelegramPopup(),localStorage[_0x55001c(0x1cb)]('telegramPopupClosed','true');}window[_0x364fc9(0x20d)]=function(){const _0x2f89f8=_0x364fc9;var _0x46118b=localStorage[_0x2f89f8(0x1d3)]('telegramPopupClosed');_0x46118b!==_0x2f89f8(0x1d0)&&showTelegramPopup();},window['onload']=function(){setTimeout(function(){const _0x34b8e9=_0x4ffc;var _0x331e7f=localStorage[_0x34b8e9(0x1d3)](_0x34b8e9(0x20e));_0x331e7f!==_0x34b8e9(0x1d0)&&showTelegramPopup();},0x2710);};