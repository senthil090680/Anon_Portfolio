var OxOec3a=["rowSpan","removeNode","parentNode","firstChild","colSpan","nodeName","TABLE","Map","rowIndex","rows","length","cells","cellIndex","innerHTML","cell","\x26nbsp;","Can\x27t Get The Position ?","RowCount","ColCount","Unknown Error , pos ",":"," already have cell","Unknown Error , Unable to find bestpos","tbody","uniqueID","richDropDown","list_Templates","subcolumns","addcolumns","subcolspan","addcolspan","btn_row_dialog","btn_cell_dialog","inp_cell_width","inp_cell_height","btn_cell_editcell","tabledesign","subrows","addrows","subrowspan","addrowspan","display","style","none","disabled","value","width","height","ValidNumber","","\x3Ctable\x3E\x3Ctr\x3E\x3Ctd height=\x2224\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctable\x3E\x3Ctr\x3E\x3Ctd\x3E\x3C/td\x3E\x3Ctd\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctable\x3E\x3Ctr\x3E\x3Ctd\x3E\x3C/td\x3E\x3Ctd\x3E\x3C/td\x3E\x3Ctd\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctable border=\x220\x22 cellpadding=\x220\x22 cellspacing=\x220\x22\x3E\x3Ctr\x3E\x3Ctd valign=\x22top\x22 colspan=\x222\x22\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22 rowspan=\x222\x22\x3E\x3C/td\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3Ctd valign=\x22top\x22 rowspan=\x222\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3Ctr\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctable border=\x220\x22 cellpadding=\x220\x22 cellspacing=\x220\x22\x3E\x3Ctr\x3E\x3Ctd valign=\x22top\x22 colspan=\x223\x22\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22 colspan=\x223\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","DIV","onclick","bgColor","#d4d0c8","onmouseover","onmouseout","ondblclick","contains","ToggleBorder","backgroundColor","highlight","cssText","runtimeStyle","background-color:gray","onload","body","document","csstext","font:normal 11px Tahoma;background-color:windowtext;","isOpen"];function Table_GetCellFromMap(Ox60d,Ox60e,Ox60f){var Ox610=Ox60d[Ox60e];if(Ox610){return Ox610[Ox60f];} ;} ;function Table_CanSubRowSpan(Oxa){return Oxa[OxOec3a[0]]>1;} ;function Element_RemoveNode(element,Ox613){if(element[OxOec3a[1]]){element.removeNode(Ox613);return ;} ;var p=element[OxOec3a[2]];if(!p){return ;} ;if(Ox613){p.removeChild(element);return ;} ;while(true){var Ox365=element[OxOec3a[3]];if(!Ox365){break ;} ;p.insertBefore(Ox365,element);} ;p.removeChild(element);} ;function Table_CanSubColSpan(Oxa){return Oxa[OxOec3a[4]]>1;} ;function Table_GetTable(Ox275){for(;Ox275!=null;Ox275=Ox275[OxOec3a[2]]){if(Ox275[OxOec3a[5]]==OxOec3a[6]){return Ox275;} ;} ;return null;} ;function Table_SubRowSpan(Oxa){var Ox7=Table_GetTable(Oxa);var Ox34e=Table_CalculateTableInfo(Ox7);var Ox60d=Ox34e[OxOec3a[7]];var Ox22b=Table_GetCellPositionFromMap(Ox60d,Oxa);var Ox617=Ox7[OxOec3a[9]].item(Oxa[OxOec3a[2]][OxOec3a[8]]+Oxa[OxOec3a[0]]-1);var Ox618=0;for(var i=0;i<Ox617[OxOec3a[11]][OxOec3a[10]];i++){var Ox619=Ox617[OxOec3a[11]].item(i);var Ox61a=Table_GetCellPositionFromMap(Ox60d,Ox619);if(Ox61a[OxOec3a[12]]<Ox22b[OxOec3a[12]]){Ox618=i+1;} ;} ;for(var i=0;i<Oxa[OxOec3a[4]];i++){var Ox365=Ox617.insertCell(Ox618);if(Browser_IsOpera()){Ox365[OxOec3a[13]]=OxOec3a[14];} else {if(Browser_IsGecko()||Browser_IsSafari()){Ox365[OxOec3a[13]]=OxOec3a[15];} ;} ;} ;Oxa[OxOec3a[0]]--;} ;function Table_GetCellPositionFromMap(Ox60d,Oxa){for(var Ox2f4=0;Ox2f4<Ox60d[OxOec3a[10]];Ox2f4++){var Ox610=Ox60d[Ox2f4];for(var Ox324=0;Ox324<Ox610[OxOec3a[10]];Ox324++){if(Ox610[Ox324]==Oxa){return {rowIndex:Ox2f4,cellIndex:Ox324};} ;} ;} ;throw ( new Error(-1,OxOec3a[16]));} ;function Table_GetCellMap(Ox7){return Table_CalculateTableInfo(Ox7)[OxOec3a[7]];} ;function Table_GetRowCount(Ox275){return Table_CalculateTableInfo(Ox275)[OxOec3a[17]];} ;function Table_GetColCount(Ox275){return Table_CalculateTableInfo(Ox275)[OxOec3a[18]];} ;function Table_CalculateTableInfo(Ox275){var Ox7=Table_GetTable(Ox275);var Ox620=Ox7[OxOec3a[9]];for(var Ox29=Ox620[OxOec3a[10]]-1;Ox29>=0;Ox29--){var Ox621=Ox620.item(Ox29);if(Ox621[OxOec3a[11]][OxOec3a[10]]==0){Element_RemoveNode(Ox621,true);continue ;} ;} ;var Ox622=Ox620[OxOec3a[10]];var Ox623=0;var Ox624= new Array(Ox620.length);for(var Ox625=0;Ox625<Ox622;Ox625++){Ox624[Ox625]=[];} ;function Ox626(Ox29,Ox365,Oxa){while(Ox29>=Ox622){Ox624[Ox622]=[];Ox622++;} ;var Ox627=Ox624[Ox29];if(Ox365>=Ox623){Ox623=Ox365+1;} ;if(Ox627[Ox365]!=null){throw ( new Error(-1,OxOec3a[19]+Ox29+OxOec3a[20]+Ox365+OxOec3a[21]));} ;Ox627[Ox365]=Oxa;} ;function Ox628(Ox29,Ox365){var Ox627=Ox624[Ox29];if(Ox627){return Ox627[Ox365];} ;} ;for(var Ox625=0;Ox625<Ox620[OxOec3a[10]];Ox625++){var Ox621=Ox620.item(Ox625);var Ox629=Ox621[OxOec3a[11]];for(var Ox14=0;Ox14<Ox629[OxOec3a[10]];Ox14++){var Oxa=Ox629.item(Ox14);var Ox62a=Oxa[OxOec3a[0]];var Ox62b=Oxa[OxOec3a[4]];var Ox627=Ox624[Ox625];var Ox62c=-1;for(var Ox62d=0;Ox62d<Ox623+Ox62b+1;Ox62d++){if(Ox62a==1&&Ox62b==1){if(Ox627[Ox62d]==null){Ox62c=Ox62d;break ;} ;} else {var Ox62e=true;for(var Ox62f=0;Ox62f<Ox62a;Ox62f++){for(var Ox630=0;Ox630<Ox62b;Ox630++){if(Ox628(Ox625+Ox62f,Ox62d+Ox630)!=null){Ox62e=false;break ;} ;} ;} ;if(Ox62e){Ox62c=Ox62d;break ;} ;} ;} ;if(Ox62c==-1){throw ( new Error(-1,OxOec3a[22]));} ;if(Ox62a==1&&Ox62b==1){Ox626(Ox625,Ox62c,Oxa);} else {for(var Ox62f=0;Ox62f<Ox62a;Ox62f++){for(var Ox630=0;Ox630<Ox62b;Ox630++){Ox626(Ox625+Ox62f,Ox62c+Ox630,Oxa);} ;} ;} ;} ;} ;var Ox263={};Ox263[OxOec3a[17]]=Ox622;Ox263[OxOec3a[18]]=Ox623;Ox263[OxOec3a[7]]=Ox624;for(var Ox29=0;Ox29<Ox622;Ox29++){var Ox627=Ox624[Ox29];for(var Ox365=0;Ox365<Ox623;Ox365++){} ;} ;return Ox263;} ;function Table_SubColSpan(Oxa){var Ox7=Table_GetTable(Oxa);Oxa[OxOec3a[2]].insertCell(Oxa[OxOec3a[12]]+1)[OxOec3a[0]]=Oxa[OxOec3a[0]];Oxa[OxOec3a[4]]--;} ;function Table_CanAddRowSpan(Oxa){var Ox7=Table_GetTable(Oxa);var Ox34e=Table_CalculateTableInfo(Ox7);var Ox60d=Ox34e[OxOec3a[7]];var Ox22b=Table_GetCellPositionFromMap(Ox60d,Oxa);var Ox633=0;for(var Ox365=0;Ox365<Oxa[OxOec3a[4]];Ox365++){var Ox634=Table_GetCellFromMap(Ox60d,Ox22b[OxOec3a[8]]+Oxa[OxOec3a[0]],Ox22b[OxOec3a[12]]+Ox365);if(Ox634==null){return false;} ;if(Ox633!=0&&Ox633!=Ox634[OxOec3a[0]]){return false;} ;Ox633=Ox634[OxOec3a[0]];var Ox635=Table_GetCellPositionFromMap(Ox60d,Ox634);if(Ox635[OxOec3a[12]]<Ox22b[OxOec3a[12]]){return false;} ;if(Ox635[OxOec3a[12]]+Ox634[OxOec3a[4]]>Ox22b[OxOec3a[12]]+Oxa[OxOec3a[4]]){return false;} ;} ;return true;} ;function Table_AddRow(Oxa){var Ox7=Table_GetTable(Oxa);var Ox34e=Table_CalculateTableInfo(Ox7);var Ox60d=Ox34e[OxOec3a[7]];var Ox623=Ox34e[OxOec3a[18]];var Ox622=Ox34e[OxOec3a[17]];var Ox621;if(!Browser_IsSafari()){Ox621=Ox7.insertRow(-1);} else {var Ox342=document.createElement(OxOec3a[23]);Ox7.appendChild(Ox342);Ox621=Ox342.insertRow(-1);} ;for(var i=0;i<Ox623;i++){var Ox365=Ox621.insertCell(-1);if(Browser_IsOpera()){Ox365[OxOec3a[13]]=OxOec3a[14];} else {if(Browser_IsGecko()||Browser_IsSafari()){Ox365[OxOec3a[13]]=OxOec3a[15];} ;} ;} ;} ;function Table_AddCol(Oxa){var Ox7=Table_GetTable(Oxa);for(var Ox29=0;Ox29<Ox7[OxOec3a[9]][OxOec3a[10]];Ox29++){var Ox621=Ox7[OxOec3a[9]].item(Ox29);var Ox365=Ox621.insertCell(-1);if(Browser_IsOpera()){Ox365[OxOec3a[13]]=OxOec3a[14];} else {if(Browser_IsGecko()||Browser_IsSafari()){Ox365[OxOec3a[13]]=OxOec3a[15];} ;} ;} ;} ;function Table_CleanUpTableInfo(Ox7,Ox34e){var Ox620=Ox7[OxOec3a[9]];for(var Ox29=Ox620[OxOec3a[10]]-1;Ox29>=0;Ox29--){var Ox621=Ox620.item(Ox29);if(Ox621[OxOec3a[11]][OxOec3a[10]]==0){Element_RemoveNode(Ox621,true);continue ;} ;} ;var Ox60d=Ox34e[OxOec3a[7]];var Ox623=Ox34e[OxOec3a[18]];var Ox622=Ox34e[OxOec3a[17]];for(var Ox625=1;Ox625<Ox622;Ox625++){var Ox639=true;for(var Ox14=0;Ox14<Ox623;Ox14++){if(Table_GetCellFromMap(Ox60d,Ox625-1,Ox14)!=Table_GetCellFromMap(Ox60d,Ox625,Ox14)){Ox639=false;break ;} ;} ;if(Ox639){for(var Ox14=0;Ox14<Ox623;Ox14++){var Oxa=Table_GetCellFromMap(Ox60d,Ox625,Ox14);if(Oxa){if(Oxa[OxOec3a[0]]>1){Oxa[OxOec3a[0]]=Oxa[OxOec3a[0]]-1;} ;Ox14+=Oxa[OxOec3a[4]]-1;} ;} ;} ;} ;for(var Ox14=1;Ox14<Ox623;Ox14++){var Ox639=true;for(var Ox625=0;Ox625<Ox622;Ox625++){if(Table_GetCellFromMap(Ox60d,Ox625,Ox14-1)!=Table_GetCellFromMap(Ox60d,Ox625,Ox14)){Ox639=false;break ;} ;} ;if(Ox639){for(var Ox625=0;Ox625<Ox622;Ox625++){var Oxa=Table_GetCellFromMap(Ox60d,Ox625,Ox14);if(Oxa){if(Oxa[OxOec3a[4]]>1){Oxa[OxOec3a[4]]=Oxa[OxOec3a[4]]-1;} ;Ox625+=Oxa[OxOec3a[0]]-1;} ;} ;} ;} ;} ;function Table_SubRow(Oxa){var Ox7=Table_GetTable(Oxa);var Ox34e=Table_CalculateTableInfo(Ox7);var Ox60d=Ox34e[OxOec3a[7]];var Ox623=Ox34e[OxOec3a[18]];var Ox622=Ox34e[OxOec3a[17]];if(Ox622==0){return ;} ;var Ox63b={};var Ox625=Ox622-1;for(var Ox14=0;Ox14<Ox623;Ox14++){var Oxa=Table_GetCellFromMap(Ox60d,Ox625,Ox14);if(Oxa){if(Ox63b[Oxa[OxOec3a[24]]]){continue ;} ;Ox63b[Oxa[OxOec3a[24]]]=true;if(Oxa[OxOec3a[0]]==1){Element_RemoveNode(Oxa,true);} else {Oxa[OxOec3a[0]]=Oxa[OxOec3a[0]]-1;} ;} ;} ;Ox34e[OxOec3a[17]]--;Table_CleanUpTableInfo(Ox7,Ox34e);} ;function Table_CanAddColSpan(Oxa){var Ox7=Table_GetTable(Oxa);var Ox34e=Table_CalculateTableInfo(Ox7);var Ox60d=Ox34e[OxOec3a[7]];var Ox22b=Table_GetCellPositionFromMap(Ox60d,Oxa);var Ox63d=0;for(var Ox29=0;Ox29<Oxa[OxOec3a[0]];Ox29++){var Ox634=Table_GetCellFromMap(Ox60d,Ox22b[OxOec3a[8]]+Ox29,Ox22b[OxOec3a[12]]+Oxa[OxOec3a[4]]);if(Ox634==null){return false;} ;if(Ox63d!=0&&Ox63d!=Ox634[OxOec3a[4]]){return false;} ;Ox63d=Ox634[OxOec3a[4]];var Ox635=Table_GetCellPositionFromMap(Ox60d,Ox634);if(Ox635[OxOec3a[8]]<Ox22b[OxOec3a[8]]){return false;} ;if(Ox635[OxOec3a[8]]+Ox634[OxOec3a[0]]>Ox22b[OxOec3a[8]]+Oxa[OxOec3a[0]]){return false;} ;} ;return true;} ;function Table_AddRowSpan(Oxa){var Ox7=Table_GetTable(Oxa);var Ox34e=Table_CalculateTableInfo(Ox7);var Ox60d=Ox34e[OxOec3a[7]];var Ox22b=Table_GetCellPositionFromMap(Ox60d,Oxa);var Ox633=0;for(var Ox365=0;Ox365<Oxa[OxOec3a[4]];Ox365++){var Ox634=Table_GetCellFromMap(Ox60d,Ox22b[OxOec3a[8]]+Oxa[OxOec3a[0]],Ox22b[OxOec3a[12]]+Ox365);if(Ox633==0){Ox633=Ox634[OxOec3a[0]];} ;Element_RemoveNode(Ox634,true);} ;Oxa[OxOec3a[0]]=Oxa[OxOec3a[0]]+Ox633;for(var Ox625=0;Ox625<Oxa[OxOec3a[0]];Ox625++){for(var Ox14=0;Ox14<Oxa[OxOec3a[4]];Ox14++){Ox34e[OxOec3a[7]][Ox22b[OxOec3a[8]]+Ox625][Ox22b[OxOec3a[12]]+Ox14]=Oxa;} ;} ;Table_CleanUpTableInfo(Ox7,Ox34e);} ;function Table_AddColSpan(Oxa){var Ox7=Table_GetTable(Oxa);var Ox34e=Table_CalculateTableInfo(Ox7);var Ox60d=Ox34e[OxOec3a[7]];var Ox22b=Table_GetCellPositionFromMap(Ox60d,Oxa);var Ox63d=0;for(var Ox29=0;Ox29<Oxa[OxOec3a[0]];Ox29++){var Ox634=Table_GetCellFromMap(Ox60d,Ox22b[OxOec3a[8]]+Ox29,Ox22b[OxOec3a[12]]+Oxa[OxOec3a[4]]);if(Ox63d==0){Ox63d=Ox634[OxOec3a[4]];} ;Element_RemoveNode(Ox634,true);} ;Oxa[OxOec3a[4]]+=Ox63d;for(var Ox625=0;Ox625<Oxa[OxOec3a[0]];Ox625++){for(var Ox14=0;Ox14<Oxa[OxOec3a[4]];Ox14++){Ox34e[OxOec3a[7]][Ox22b[OxOec3a[8]]+Ox625][Ox22b[OxOec3a[12]]+Ox14]=Oxa;} ;} ;Table_CleanUpTableInfo(Ox7,Ox34e);} ;function Table_SubCol(Oxa){var Ox7=Table_GetTable(Oxa);var Ox34e=Table_CalculateTableInfo(Ox7);var Ox60d=Ox34e[OxOec3a[7]];var Ox623=Ox34e[OxOec3a[18]];var Ox622=Ox34e[OxOec3a[17]];if(Ox622==0){return ;} ;var Ox63b={};var Ox14=Ox623-1;for(var Ox625=0;Ox625<Ox622;Ox625++){var Oxa=Table_GetCellFromMap(Ox60d,Ox625,Ox14);if(Ox63b[Oxa[OxOec3a[24]]]){continue ;} ;Ox63b[Oxa[OxOec3a[24]]]=true;if(Oxa[OxOec3a[4]]==1){Element_RemoveNode(Oxa,true);} else {Oxa[OxOec3a[4]]=Oxa[OxOec3a[4]]-1;} ;} ;Ox34e[OxOec3a[18]]--;Table_CleanUpTableInfo(Ox7,Ox34e);} ;var richDropDown=Window_GetElement(window,OxOec3a[25],true);var list_Templates=Window_GetElement(window,OxOec3a[26],true);var subcolumns=Window_GetElement(window,OxOec3a[27],true);var addcolumns=Window_GetElement(window,OxOec3a[28],true);var subcolspan=Window_GetElement(window,OxOec3a[29],true);var addcolspan=Window_GetElement(window,OxOec3a[30],true);var btn_row_dialog=Window_GetElement(window,OxOec3a[31],true);var btn_cell_dialog=Window_GetElement(window,OxOec3a[32],true);var inp_cell_width=Window_GetElement(window,OxOec3a[33],true);var inp_cell_height=Window_GetElement(window,OxOec3a[34],true);var btn_cell_editcell=Window_GetElement(window,OxOec3a[35],true);var tabledesign=Window_GetElement(window,OxOec3a[36],true);var subrows=Window_GetElement(window,OxOec3a[37],true);var addrows=Window_GetElement(window,OxOec3a[38],true);var subrowspan=Window_GetElement(window,OxOec3a[39],true);var addrowspan=Window_GetElement(window,OxOec3a[40],true);btn_cell_editcell[OxOec3a[42]][OxOec3a[41]]=OxOec3a[43];UpdateState=function UpdateState_InsertTable(){btn_cell_editcell[OxOec3a[44]]=btn_row_dialog[OxOec3a[44]]=btn_cell_dialog[OxOec3a[44]]=GetElementCell()==null;} ;SyncToView=function SyncToView_InsertTable(){var Ox653=GetElementCell();if(Ox653){inp_cell_width[OxOec3a[45]]=Ox653[OxOec3a[46]];inp_cell_height[OxOec3a[45]]=Ox653[OxOec3a[47]];} ;} ;SyncTo=function SyncTo_InsertTable(element){var Ox653=GetElementCell();if(Ox653){try{Ox653[OxOec3a[46]]=inp_cell_width[OxOec3a[45]];Ox653[OxOec3a[47]]=inp_cell_height[OxOec3a[45]];} catch(er){alert(CE_GetStr(OxOec3a[48]));} ;} ;} ;function selectTemplate(Ox2e0){var Ox656=OxOec3a[49];switch(Ox2e0){case 1:Ox656=OxOec3a[50];break ;;case 2:Ox656=OxOec3a[51];break ;;case 3:Ox656=OxOec3a[52];break ;;case 4:Ox656=OxOec3a[53];Ox656=Ox656+OxOec3a[54];Ox656=Ox656+OxOec3a[55];break ;;case 5:Ox656=OxOec3a[53];Ox656=Ox656+OxOec3a[56];break ;;case 6:Ox656=OxOec3a[57];Ox656=Ox656+OxOec3a[58];Ox656=Ox656+OxOec3a[59];break ;;default:break ;;} ;try{var Ox268=document.createElement(OxOec3a[60]);Ox268[OxOec3a[13]]=Ox656;var Ox7=Ox268.children(0);ApplyTable(Ox7,element);ApplyTable(Ox7,tabledesign);HandleTableChanged();hidePopup();} catch(x){} ;} ;subcolumns[OxOec3a[61]]=function subcolumns_onclick(){Table_SubCol(GetElementCell());Table_SubCol(currentcell);HandleTableChanged();} ;addcolumns[OxOec3a[61]]=function addcolumns_onclick(){Table_AddCol(GetElementCell());Table_AddCol(currentcell);HandleTableChanged();} ;subrows[OxOec3a[61]]=function subrows_onclick(){Table_SubRow(GetElementCell());Table_SubRow(currentcell);HandleTableChanged();} ;addrows[OxOec3a[61]]=function addrows_onclick(){Table_AddRow(currentcell);Table_AddRow(GetElementCell());HandleTableChanged();} ;subcolspan[OxOec3a[61]]=function subcolspan_onclick(){Table_SubColSpan(GetElementCell());Table_SubColSpan(currentcell);HandleTableChanged();} ;addcolspan[OxOec3a[61]]=function addcolspan_onclick(){Table_AddColSpan(GetElementCell());Table_AddColSpan(currentcell);HandleTableChanged();} ;subrowspan[OxOec3a[61]]=function subrowspan_onclick(){Table_SubRowSpan(GetElementCell());Table_SubRowSpan(currentcell);HandleTableChanged();} ;addrowspan[OxOec3a[61]]=function addrowspan_onclick(){Table_AddRowSpan(GetElementCell());Table_AddRowSpan(currentcell);HandleTableChanged();} ;function InitDesignTableCells(){for(var Ox29=0;Ox29<tabledesign[OxOec3a[9]][OxOec3a[10]];Ox29++){var Ox621=tabledesign[OxOec3a[9]][Ox29];for(var Ox365=0;Ox365<Ox621[OxOec3a[11]][OxOec3a[10]];Ox365++){var Oxa=Ox621[OxOec3a[11]][Ox365];Oxa.removeAttribute(OxOec3a[46]);Oxa.removeAttribute(OxOec3a[47]);Oxa[OxOec3a[46]]=OxOec3a[49];Oxa[OxOec3a[47]]=OxOec3a[49];Oxa[OxOec3a[62]]=OxOec3a[63];Oxa[OxOec3a[64]]=cell_mouseover;Oxa[OxOec3a[65]]=cell_mouseout;Oxa[OxOec3a[61]]=cell_click;Oxa[OxOec3a[66]]=cell_dblclick;} ;} ;} ;function Element_Contains(element,Ox29f){if(!Browser_IsOpera()){if(element[OxOec3a[67]]){return element.contains(Ox29f);} ;} ;for(;Ox29f!=null;Ox29f=Ox29f[OxOec3a[2]]){if(element==Ox29f){return true;} ;} ;return false;} ;function HandleTableChanged(){if(!Element_Contains(tabledesign,currentcell)){SetCurrentCell(tabledesign.rows(0).cells(0));} ;InitDesignTableCells();UpdateButtonStates();editor.ExecCommand(OxOec3a[68]);editor.ExecCommand(OxOec3a[68]);} ;function cell_mouseover(){var Oxa=this;Oxa[OxOec3a[42]][OxOec3a[69]]=OxOec3a[70];} ;function cell_mouseout(){var Oxa=this;Oxa[OxOec3a[42]][OxOec3a[69]]=OxOec3a[63];} ;function cell_click(){var Oxa=this;SetCurrentCell(Oxa);} ;function cell_dblclick(){var Oxa=this;SetCurrentCell(Oxa);} ;btn_cell_editcell[OxOec3a[61]]=function btn_cell_editcell_onclick(){var Oxa=GetElementCell();var Ox3a4=editor.EditInWindow(Oxa.innerHTML,window);if(Ox3a4!=null&&Ox3a4!==false){Oxa[OxOec3a[13]]=Ox3a4;} ;} ;btn_cell_dialog[OxOec3a[61]]=function btn_cell_dialog_onclick(){editor.SetNextDialogWindow(window);editor.ShowTagDialogWithNoCancellable(GetElementCell());} ;btn_row_dialog[OxOec3a[61]]=function btn_row_dialog_onclick(){editor.SetNextDialogWindow(window);editor.ShowTagDialogWithNoCancellable(GetElementCell().parentNode);} ;btn_row_dialog[OxOec3a[42]][OxOec3a[41]]=btn_cell_dialog[OxOec3a[42]][OxOec3a[41]]=OxOec3a[43];var currentcell=null;function GetElementCell(){if(currentcell==null){return null;} ;return element[OxOec3a[9]][currentcell[OxOec3a[2]][OxOec3a[8]]][OxOec3a[11]][currentcell[OxOec3a[12]]];} ;function SetCurrentCell(Oxa){if(currentcell!=null){if(Browser_IsWinIE()){currentcell[OxOec3a[72]][OxOec3a[71]]=OxOec3a[49];} else {currentcell[OxOec3a[42]][OxOec3a[71]]=OxOec3a[49];} ;} ;currentcell=Oxa;if(Browser_IsWinIE()){currentcell[OxOec3a[72]][OxOec3a[71]]=OxOec3a[73];} else {currentcell[OxOec3a[42]][OxOec3a[71]]=OxOec3a[73];} ;UpdateButtonStates();SyncToViewInternal();} ;function UpdateButtonStates(){subcolspan[OxOec3a[44]]=!Table_CanSubColSpan(currentcell);addcolspan[OxOec3a[44]]=!Table_CanAddColSpan(currentcell);subrowspan[OxOec3a[44]]=!Table_CanSubRowSpan(currentcell);addrowspan[OxOec3a[44]]=!Table_CanAddRowSpan(currentcell);subrows[OxOec3a[44]]=Table_GetRowCount(currentcell)<2;subcolumns[OxOec3a[44]]=Table_GetColCount(currentcell)<2;} ;function ApplyTable(src,Ox66d){if(Browser_IsSafari()){Ox66d[OxOec3a[42]][OxOec3a[47]]=OxOec3a[49];} ;for(var Ox29=Ox66d[OxOec3a[9]][OxOec3a[10]]-1;Ox29>=0;Ox29--){Ox66d[OxOec3a[9]][Ox29].removeNode(true);} ;for(var Ox29=0;Ox29<src[OxOec3a[9]][OxOec3a[10]];Ox29++){var Ox66e=src[OxOec3a[9]][Ox29];var Ox66f;if(!Browser_IsSafari()){Ox66f=Ox66d.insertRow(-1);} else {var Ox342=document.createElement(OxOec3a[23]);Ox66d.appendChild(Ox342);Ox66f=Ox342.insertRow(-1);} ;Ox66f[OxOec3a[42]][OxOec3a[71]]=Ox66e[OxOec3a[42]][OxOec3a[71]];for(var Ox365=0;Ox365<Ox66e[OxOec3a[11]][OxOec3a[10]];Ox365++){var Ox670=Ox66e[OxOec3a[11]][Ox365];var Ox671=Ox66f.insertCell(-1);Ox671[OxOec3a[0]]=Ox670[OxOec3a[0]];Ox671[OxOec3a[4]]=Ox670[OxOec3a[4]];Ox671[OxOec3a[42]][OxOec3a[71]]=Ox670[OxOec3a[42]][OxOec3a[71]];if(Browser_IsOpera()){Ox671[OxOec3a[13]]=OxOec3a[14];} else {if(Browser_IsGecko()||Browser_IsSafari()){Ox671[OxOec3a[13]]=OxOec3a[15];} ;} ;} ;} ;} ;window[OxOec3a[74]]=function window_onload(){ApplyTable(element,tabledesign);InitDesignTableCells();SetCurrentCell(tabledesign[OxOec3a[9]][0][OxOec3a[11]][0]);} ;function updateList(){} ;var oPopup;if(Browser_IsWinIE()){oPopup=window.createPopup();} else {richDropDown[OxOec3a[42]][OxOec3a[41]]=OxOec3a[43];} ;function selectTemplates(){if(Browser_IsWinIE()){oPopup[OxOec3a[76]][OxOec3a[75]][OxOec3a[13]]=list_Templates[OxOec3a[13]];oPopup[OxOec3a[76]][OxOec3a[75]][OxOec3a[42]][OxOec3a[77]]=OxOec3a[78];oPopup.show(0,32,380,220,richDropDown);} ;} ;function hidePopup(){if(Browser_IsWinIE()){if(oPopup){if(oPopup[OxOec3a[79]]){oPopup.hide();} ;} ;} ;} ;