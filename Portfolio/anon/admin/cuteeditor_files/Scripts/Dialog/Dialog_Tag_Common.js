var OxO2633=["inp_class","inp_width","inp_height","sel_align","sel_textalign","sel_float","inp_forecolor","img_forecolor","inp_backcolor","img_backcolor","inp_tooltip","value","className","width","style","height","align","styleFloat","cssFloat","textAlign","title","backgroundColor","color","","class","onclick"];var inp_class=Window_GetElement(window,OxO2633[0],true);var inp_width=Window_GetElement(window,OxO2633[1],true);var inp_height=Window_GetElement(window,OxO2633[2],true);var sel_align=Window_GetElement(window,OxO2633[3],true);var sel_textalign=Window_GetElement(window,OxO2633[4],true);var sel_float=Window_GetElement(window,OxO2633[5],true);var inp_forecolor=Window_GetElement(window,OxO2633[6],true);var img_forecolor=Window_GetElement(window,OxO2633[7],true);var inp_backcolor=Window_GetElement(window,OxO2633[8],true);var img_backcolor=Window_GetElement(window,OxO2633[9],true);var inp_tooltip=Window_GetElement(window,OxO2633[10],true);UpdateState=function UpdateState_Common(){} ;SyncToView=function SyncToView_Common(){inp_class[OxO2633[11]]=element[OxO2633[12]];inp_width[OxO2633[11]]=element[OxO2633[14]][OxO2633[13]];inp_height[OxO2633[11]]=element[OxO2633[14]][OxO2633[15]];sel_align[OxO2633[11]]=element[OxO2633[16]];if(Browser_IsWinIE()){sel_float[OxO2633[11]]=element[OxO2633[14]][OxO2633[17]];} else {sel_float[OxO2633[11]]=element[OxO2633[14]][OxO2633[18]];} ;sel_textalign[OxO2633[11]]=element[OxO2633[14]][OxO2633[19]];inp_tooltip[OxO2633[11]]=element[OxO2633[20]];inp_forecolor[OxO2633[11]]=revertColor(element[OxO2633[14]].color);inp_forecolor[OxO2633[14]][OxO2633[21]]=inp_forecolor[OxO2633[11]];img_forecolor[OxO2633[14]][OxO2633[21]]=inp_forecolor[OxO2633[11]];inp_backcolor[OxO2633[11]]=revertColor(element[OxO2633[14]].backgroundColor);inp_backcolor[OxO2633[14]][OxO2633[21]]=inp_backcolor[OxO2633[11]];img_backcolor[OxO2633[14]][OxO2633[21]]=inp_backcolor[OxO2633[11]];} ;SyncTo=function SyncTo_Common(element){element[OxO2633[12]]=inp_class[OxO2633[11]];try{element[OxO2633[14]][OxO2633[13]]=inp_width[OxO2633[11]];element[OxO2633[14]][OxO2633[15]]=inp_height[OxO2633[11]];} catch(x){} ;element[OxO2633[16]]=sel_align[OxO2633[11]];if(Browser_IsWinIE()){element[OxO2633[14]][OxO2633[17]]=sel_float[OxO2633[11]];} else {element[OxO2633[14]][OxO2633[18]]=sel_float[OxO2633[11]];} ;element[OxO2633[14]][OxO2633[19]]=sel_textalign[OxO2633[11]];element[OxO2633[20]]=inp_tooltip[OxO2633[11]];element[OxO2633[14]][OxO2633[22]]=inp_forecolor[OxO2633[11]];element[OxO2633[14]][OxO2633[21]]=inp_backcolor[OxO2633[11]];if(element[OxO2633[12]]==OxO2633[23]){element.removeAttribute(OxO2633[12]);} ;if(element[OxO2633[12]]==OxO2633[23]){element.removeAttribute(OxO2633[24]);} ;if(element[OxO2633[20]]==OxO2633[23]){element.removeAttribute(OxO2633[20]);} ;if(element[OxO2633[16]]==OxO2633[23]){element.removeAttribute(OxO2633[16]);} ;} ;img_forecolor[OxO2633[25]]=inp_forecolor[OxO2633[25]]=function inp_forecolor_onclick(){SelectColor(inp_forecolor,img_forecolor);} ;img_backcolor[OxO2633[25]]=inp_backcolor[OxO2633[25]]=function inp_backcolor_onclick(){SelectColor(inp_backcolor,img_backcolor);} ;