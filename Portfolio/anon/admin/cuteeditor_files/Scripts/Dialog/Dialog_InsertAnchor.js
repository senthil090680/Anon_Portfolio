var OxO16a3=["nodeName","INPUT","TEXTAREA","BUTTON","IMG","SELECT","TABLE","position","style","absolute","relative","|H1|H2|H3|H4|H5|H6|P|PRE|LI|TD|DIV|BLOCKQUOTE|DT|DD|TABLE|HR|IMG|","|","body","document","allanchors","anchor_name","editor","window","name","value","ValidName","options","length","anchors","OPTION","text","#","images","className","cetempAnchor","anchorname"];function Element_IsBlockControl(element){var name=element[OxO16a3[0]];if(name==OxO16a3[1]){return true;} ;if(name==OxO16a3[2]){return true;} ;if(name==OxO16a3[3]){return true;} ;if(name==OxO16a3[4]){return true;} ;if(name==OxO16a3[5]){return true;} ;if(name==OxO16a3[6]){return true;} ;var Ox22b=element[OxO16a3[8]][OxO16a3[7]];if(Ox22b==OxO16a3[9]||Ox22b==OxO16a3[10]){return true;} ;return false;} ;function Element_CUtil_IsBlock(Ox492){var Ox493=OxO16a3[11];return (Ox492!=null)&&(Ox493.indexOf(OxO16a3[12]+Ox492[OxO16a3[0]]+OxO16a3[12])!=-1);} ;function Window_SelectElement(Ox2c6,element){if(Browser_UseIESelection()){if(Element_IsBlockControl(element)){var Ox25b=Ox2c6[OxO16a3[14]][OxO16a3[13]].createControlRange();Ox25b.add(element);Ox25b.select();} else {var Ox345=Ox2c6[OxO16a3[14]][OxO16a3[13]].createTextRange();Ox345.moveToElementText(element);Ox345.select();} ;} else {var Ox345=Ox2c6[OxO16a3[14]].createRange();try{Ox345.selectNode(element);} catch(x){Ox345.selectNodeContents(element);} ;var Ox25c=Ox2c6.getSelection();Ox25c.removeAllRanges();Ox25c.addRange(Ox345);} ;} ;var allanchors=Window_GetElement(window,OxO16a3[15],true);var anchor_name=Window_GetElement(window,OxO16a3[16],true);var obj=Window_GetDialogArguments(window);var editor=obj[OxO16a3[17]];var editwin=obj[OxO16a3[18]];var editdoc=obj[OxO16a3[14]];var name=obj[OxO16a3[19]];function insert_link(){var Ox498=anchor_name[OxO16a3[20]];var Ox499=/[^a-z\d]/i;if(Ox499.test(Ox498)){alert(CE_GetStr(OxO16a3[21]));} else {Window_SetDialogReturnValue(window,Ox498);Window_CloseDialog(window);} ;} ;function updateList(){while(allanchors[OxO16a3[22]][OxO16a3[23]]!=0){allanchors[OxO16a3[22]].remove(allanchors.options(0));} ;if(Browser_IsWinIE()){for(var i=0;i<editdoc[OxO16a3[24]][OxO16a3[23]];i++){var Ox49b=document.createElement(OxO16a3[25]);Ox49b[OxO16a3[26]]=OxO16a3[27]+editdoc[OxO16a3[24]][i][OxO16a3[19]];Ox49b[OxO16a3[20]]=editdoc[OxO16a3[24]][i][OxO16a3[19]];allanchors[OxO16a3[22]].add(Ox49b);} ;} else {var Ox49c=editdoc[OxO16a3[28]];if(Ox49c){for(var Ox1e9=0;Ox1e9<Ox49c[OxO16a3[23]];Ox1e9++){var img=Ox49c[Ox1e9];if(img[OxO16a3[29]]==OxO16a3[30]){var Ox49b=document.createElement(OxO16a3[25]);Ox49b[OxO16a3[26]]=OxO16a3[27]+img.getAttribute(OxO16a3[31]);Ox49b[OxO16a3[20]]=img.getAttribute(OxO16a3[31]);allanchors[OxO16a3[22]].add(Ox49b);} ;} ;} ;} ;} ;function selectAnchor(Ox49e){editor.FocusDocument();for(var i=0;i<editdoc[OxO16a3[24]][OxO16a3[23]];i++){if(editdoc[OxO16a3[24]][i][OxO16a3[19]]==Ox49e){anchor_name[OxO16a3[20]]=Ox49e;Window_SelectElement(editwin,editdoc[OxO16a3[24]][i]);} ;} ;} ;if(name){anchor_name[OxO16a3[20]]=name;} ;updateList();