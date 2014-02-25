var OxO6229=["onload","onclick","btnCancel","btnOK","onkeyup","txtHSB_Hue","onkeypress","txtHSB_Saturation","txtHSB_Brightness","txtRGB_Red","txtRGB_Green","txtRGB_Blue","txtHex","btnWebSafeColor","rdoHSB_Hue","rdoHSB_Saturation","rdoHSB_Brightness","pnlGradient_Top","onmousemove","onmousedown","onmouseup","pnlVertical_Top","pnlWebSafeColor","pnlWebSafeColorBorder","pnlOldColor","lblHSB_Hue","lblHSB_Saturation","lblHSB_Brightness","length","\x5C{","\x5C}","BadNumber","A number between {0} and {1} is required. Closest value inserted.","Title","Color Picker","SelectAColor","Select a color:","OKButton","OK","CancelButton","Cancel","AboutButton","About","Recent","WebSafeWarning","Warning: not a web safe color","WebSafeClick","Click to select web safe color","HsbHue","H:","HsbHueTooltip","Hue","HsbHueUnit","%","HsbSaturation","S:","HsbSaturationTooltip","Saturation","HsbSaturationUnit","HsbBrightness","B:","HsbBrightnessTooltip","Brightness","HsbBrightnessUnit","RgbRed","R:","RgbRedTooltip","Red","RgbGreen","G:","RgbGreenTooltip","Green","RgbBlue","RgbBlueTooltip","Blue","Hex","#","RecentTooltip","Recent:","\x0D\x0ALewies Color Pickerversion 1.1\x0D\x0A\x0D\x0AThis form was created by Lewis Moten in May of 2004.\x0D\x0AIt simulates the color picker in a popular graphics application.\x0D\x0AIt gives users a visual way to choose colors from a large and dynamic palette.\x0D\x0A\x0D\x0AVisit the authors web page?\x0D\x0Awww.lewismoten.com\x0D\x0A","lblSelectColorMessage","lblRecent","lblRGB_Red","lblRGB_Green","lblRGB_Blue","lblHex","lblUnitHSB_Hue","lblUnitHSB_Saturation","lblUnitHSB_Brightness","pnlHSB_Hue","pnlHSB_Saturation","pnlHSB_Brightness","pnlRGB_Red","pnlRGB_Green","pnlRGB_Blue","frmColorPicker","Color","","FFFFFF","value","checked","ColorMode","ColorType","RecentColors","pnlRecent","border","style","0px","http://www.lewismoten.com","_blank","backgroundColor","target","rgb","(",")",",","display","none","title","innerHTML","backgroundPosition","px ","px","pnlGradientHsbHue_Hue","pnlGradientHsbHue_Black","pnlGradientHsbHue_White","pnlVerticalHsbHue_Background","pnlVerticalHsbSaturation_Hue","pnlVerticalHsbSaturation_White","pnlVerticalHsbBrightness_Hue","pnlVerticalHsbBrightness_Black","pnlVerticalRgb_Start","pnlVerticalRgb_End","pnlGradientRgb_Base","pnlGradientRgb_Invert","pnlGradientRgb_Overlay1","pnlGradientRgb_Overlay2","src","imgGradient","../Images/cpns_ColorSpace1.png","../Images/cpns_ColorSpace2.png","../Images/cpns_Vertical1.png","#000000","../Images/cpns_Vertical2.png","#ffffff","01234567879","which","abcdef","01234567879ABCDEF","opener","pnlGradientPosition","pnlNewColor","0123456789ABCDEFabcdef","000000","0","id","top","pnlVerticalPosition","backgroundImage","url(../Images/cpns_GradientPositionDark.gif)","url(../Images/cpns_GradientPositionLight.gif)","cancelBubble","pageX","pageY","className","GradientNormal","GradientFullScreen","_isverdown","=","; path=/;"," expires=",";","cookie","search","location","\x26","00336699CCFF","0x","do_select","frm","__cphex"];var POSITIONADJUSTX=22;var POSITIONADJUSTY=52;var POSITIONADJUSTZ=48;var ColorMode=1;var GradientPositionDark= new Boolean(false);var frm= new Object();var msg= new Object();var _xmlDocs= new Array();var _xmlIndex=-1;var _xml=null;LoadLanguage();window[OxO6229[0]]=window_load;function initialize(){frm[OxO6229[2]][OxO6229[1]]=btnCancel_Click;frm[OxO6229[3]][OxO6229[1]]=btnOK_Click;frm[OxO6229[5]][OxO6229[4]]=Hsb_Changed;frm[OxO6229[5]][OxO6229[6]]=validateNumber;frm[OxO6229[7]][OxO6229[4]]=Hsb_Changed;frm[OxO6229[7]][OxO6229[6]]=validateNumber;frm[OxO6229[8]][OxO6229[4]]=Hsb_Changed;frm[OxO6229[8]][OxO6229[6]]=validateNumber;frm[OxO6229[9]][OxO6229[4]]=Rgb_Changed;frm[OxO6229[9]][OxO6229[6]]=validateNumber;frm[OxO6229[10]][OxO6229[4]]=Rgb_Changed;frm[OxO6229[10]][OxO6229[6]]=validateNumber;frm[OxO6229[11]][OxO6229[4]]=Rgb_Changed;frm[OxO6229[11]][OxO6229[6]]=validateNumber;frm[OxO6229[12]][OxO6229[4]]=Hex_Changed;frm[OxO6229[12]][OxO6229[6]]=validateHex;frm[OxO6229[13]][OxO6229[1]]=btnWebSafeColor_Click;frm[OxO6229[14]][OxO6229[1]]=rdoHsb_Hue_Click;frm[OxO6229[15]][OxO6229[1]]=rdoHsb_Saturation_Click;frm[OxO6229[16]][OxO6229[1]]=rdoHsb_Brightness_Click;document.getElementById(OxO6229[17])[OxO6229[1]]=pnlGradient_Top_Click;document.getElementById(OxO6229[17])[OxO6229[18]]=pnlGradient_Top_MouseMove;document.getElementById(OxO6229[17])[OxO6229[19]]=pnlGradient_Top_MouseDown;document.getElementById(OxO6229[17])[OxO6229[20]]=pnlGradient_Top_MouseUp;document.getElementById(OxO6229[21])[OxO6229[1]]=pnlVertical_Top_Click;document.getElementById(OxO6229[21])[OxO6229[18]]=pnlVertical_Top_MouseMove;document.getElementById(OxO6229[21])[OxO6229[19]]=pnlVertical_Top_MouseDown;document.getElementById(OxO6229[21])[OxO6229[20]]=pnlVertical_Top_MouseUp;document.getElementById(OxO6229[22])[OxO6229[1]]=btnWebSafeColor_Click;document.getElementById(OxO6229[23])[OxO6229[1]]=btnWebSafeColor_Click;document.getElementById(OxO6229[24])[OxO6229[1]]=pnlOldClick_Click;document.getElementById(OxO6229[25])[OxO6229[1]]=rdoHsb_Hue_Click;document.getElementById(OxO6229[26])[OxO6229[1]]=rdoHsb_Saturation_Click;document.getElementById(OxO6229[27])[OxO6229[1]]=rdoHsb_Brightness_Click;frm[OxO6229[5]].focus();window.focus();} ;function formatString(Ox3d0){Ox3d0= new String(Ox3d0);for(var i=1;i<arguments[OxO6229[28]];i++){Ox3d0=Ox3d0.replace( new RegExp(OxO6229[29]+(i-1)+OxO6229[30]),arguments[i]);} ;return Ox3d0;} ;function AddValue(Ox3d2,Ox246){Ox246= new String(Ox246).toLowerCase();for(var i=0;i<Ox3d2[OxO6229[28]];i++){if(Ox3d2[i]==Ox246){return ;} ;} ;Ox3d2[Ox3d2[OxO6229[28]]]=Ox246;} ;function SniffLanguage(Ox10){} ;function LoadNextLanguage(){} ;function LoadLanguage(){msg[OxO6229[31]]=OxO6229[32];msg[OxO6229[33]]=OxO6229[34];msg[OxO6229[35]]=OxO6229[36];msg[OxO6229[37]]=OxO6229[38];msg[OxO6229[39]]=OxO6229[40];msg[OxO6229[41]]=OxO6229[42];msg[OxO6229[43]]=OxO6229[43];msg[OxO6229[44]]=OxO6229[45];msg[OxO6229[46]]=OxO6229[47];msg[OxO6229[48]]=OxO6229[49];msg[OxO6229[50]]=OxO6229[51];msg[OxO6229[52]]=OxO6229[53];msg[OxO6229[54]]=OxO6229[55];msg[OxO6229[56]]=OxO6229[57];msg[OxO6229[58]]=OxO6229[53];msg[OxO6229[59]]=OxO6229[60];msg[OxO6229[61]]=OxO6229[62];msg[OxO6229[63]]=OxO6229[53];msg[OxO6229[64]]=OxO6229[65];msg[OxO6229[66]]=OxO6229[67];msg[OxO6229[68]]=OxO6229[69];msg[OxO6229[70]]=OxO6229[71];msg[OxO6229[72]]=OxO6229[60];msg[OxO6229[73]]=OxO6229[74];msg[OxO6229[75]]=OxO6229[76];msg[OxO6229[77]]=OxO6229[78];msg[OxO6229[42]]=OxO6229[79];} ;function AssignLanguage(){} ;function localize(){SetHTML(document.getElementById(OxO6229[80]),msg.SelectAColor,document.getElementById(OxO6229[81]),msg.Recent,document.getElementById(OxO6229[25]),msg.HsbHue,document.getElementById(OxO6229[26]),msg.HsbSaturation,document.getElementById(OxO6229[27]),msg.HsbBrightness,document.getElementById(OxO6229[82]),msg.RgbRed,document.getElementById(OxO6229[83]),msg.RgbGreen,document.getElementById(OxO6229[84]),msg.RgbBlue,document.getElementById(OxO6229[85]),msg.Hex,document.getElementById(OxO6229[86]),msg.HsbHueUnit,document.getElementById(OxO6229[87]),msg.HsbSaturationUnit,document.getElementById(OxO6229[88]),msg.HsbBrightnessUnit);SetValue(frm.btnCancel,msg.CancelButton,frm.btnOK,msg.OKButton,frm.btnAbout,msg.AboutButton);SetTitle(frm.btnWebSafeColor,msg.WebSafeWarning,document.getElementById(OxO6229[22]),msg.WebSafeClick,document.getElementById(OxO6229[89]),msg.HsbHueTooltip,document.getElementById(OxO6229[90]),msg.HsbSaturationTooltip,document.getElementById(OxO6229[91]),msg.HsbBrightnessTooltip,document.getElementById(OxO6229[92]),msg.RgbRedTooltip,document.getElementById(OxO6229[93]),msg.RgbGreenTooltip,document.getElementById(OxO6229[94]),msg.RgbBlueTooltip);} ;function window_load(Ox275){frm=document.getElementById(OxO6229[95]);localize();initialize();var Ox258=GetQuery(OxO6229[96]).toUpperCase();if(Ox258==OxO6229[97]){Ox258=OxO6229[98];} ;if(Ox258[OxO6229[28]]==7){Ox258=Ox258.substr(1,6);} ;frm[OxO6229[12]][OxO6229[99]]=Ox258;Hex_Changed(Ox275);Ox258=Form_Get_Hex();SetBg(document.getElementById(OxO6229[24]),Ox258);frm[OxO6229[102]][ new Number(GetCookie(OxO6229[101])||0)][OxO6229[100]]=true;ColorMode_Changed(Ox275);var Ox3c5=GetCookie(OxO6229[103])||OxO6229[97];var Ox3d7=msg[OxO6229[77]];for(var i=1;i<33;i++){if(Ox3c5[OxO6229[28]]/6>=i){Ox258=Ox3c5.substr((i-1)*6,6);var Ox3d8=HexToRgb(Ox258);var title=formatString(msg.RecentTooltip,Ox258,Ox3d8[0],Ox3d8[1],Ox3d8[2]);SetBg(document.getElementById(OxO6229[104]+i),Ox258);SetTitle(document.getElementById(OxO6229[104]+i),title);document.getElementById(OxO6229[104]+i)[OxO6229[1]]=pnlRecent_Click;} else {document.getElementById(OxO6229[104]+i)[OxO6229[106]][OxO6229[105]]=OxO6229[107];} ;} ;} ;function btnAbout_Click(){if(confirm(msg.About)){window.open(OxO6229[108],OxO6229[109]);} ;} ;function pnlRecent_Click(Ox275){var Ox253=Ox275[OxO6229[111]][OxO6229[106]][OxO6229[110]];if(Ox253.indexOf(OxO6229[112])!=-1){var Ox3d8= new Array();Ox253=Ox253.substr(Ox253.indexOf(OxO6229[113])+1);Ox253=Ox253.substr(0,Ox253.indexOf(OxO6229[114]));Ox3d8[0]= new Number(Ox253.substr(0,Ox253.indexOf(OxO6229[115])));Ox253=Ox253.substr(Ox253.indexOf(OxO6229[115])+1);Ox3d8[1]= new Number(Ox253.substr(0,Ox253.indexOf(OxO6229[115])));Ox3d8[2]= new Number(Ox253.substr(Ox253.indexOf(OxO6229[115])+1));Ox253=RgbToHex(Ox3d8);} else {Ox253=Ox253.substr(1,6).toUpperCase();} ;frm[OxO6229[12]][OxO6229[99]]=Ox253;Hex_Changed(Ox275);} ;function pnlOldClick_Click(Ox275){frm[OxO6229[12]][OxO6229[99]]=document.getElementById(OxO6229[24])[OxO6229[106]][OxO6229[110]].substr(1,6).toUpperCase();Hex_Changed(Ox275);} ;function rdoHsb_Hue_Click(Ox275){frm[OxO6229[14]][OxO6229[100]]=true;ColorMode_Changed(Ox275);} ;function rdoHsb_Saturation_Click(Ox275){frm[OxO6229[15]][OxO6229[100]]=true;ColorMode_Changed(Ox275);} ;function rdoHsb_Brightness_Click(Ox275){frm[OxO6229[16]][OxO6229[100]]=true;ColorMode_Changed(Ox275);} ;function Hide(){for(var i=0;i<arguments[OxO6229[28]];i++){if(arguments[i]){arguments[i][OxO6229[106]][OxO6229[116]]=OxO6229[117];} ;} ;} ;function Show(){for(var i=0;i<arguments[OxO6229[28]];i++){if(arguments[i]){arguments[i][OxO6229[106]][OxO6229[116]]=OxO6229[97];} ;} ;} ;function SetValue(){for(var i=0;i<arguments[OxO6229[28]];i+=2){arguments[i][OxO6229[99]]=arguments[i+1];} ;} ;function SetTitle(){for(var i=0;i<arguments[OxO6229[28]];i+=2){arguments[i][OxO6229[118]]=arguments[i+1];} ;} ;function SetHTML(){for(var i=0;i<arguments[OxO6229[28]];i+=2){arguments[i][OxO6229[119]]=arguments[i+1];} ;} ;function SetBg(){for(var i=0;i<arguments[OxO6229[28]];i+=2){if(arguments[i]){arguments[i][OxO6229[106]][OxO6229[110]]=OxO6229[76]+arguments[i+1];} ;} ;} ;function SetBgPosition(){for(var i=0;i<arguments[OxO6229[28]];i+=3){arguments[i][OxO6229[106]][OxO6229[120]]=arguments[i+1]+OxO6229[121]+arguments[i+2]+OxO6229[122];} ;} ;function ColorMode_Changed(Ox275){for(var i=0;i<3;i++){if(frm[OxO6229[102]][i][OxO6229[100]]){ColorMode=i;} ;} ;SetCookie(OxO6229[101],ColorMode,60*60*24*365);Hide(document.getElementById(OxO6229[123]),document.getElementById(OxO6229[124]),document.getElementById(OxO6229[125]),document.getElementById(OxO6229[126]),document.getElementById(OxO6229[127]),document.getElementById(OxO6229[128]),document.getElementById(OxO6229[129]),document.getElementById(OxO6229[130]),document.getElementById(OxO6229[131]),document.getElementById(OxO6229[132]),document.getElementById(OxO6229[133]),document.getElementById(OxO6229[134]),document.getElementById(OxO6229[135]),document.getElementById(OxO6229[136]));switch(ColorMode){case 0:document.getElementById(OxO6229[138])[OxO6229[137]]=OxO6229[139];Show(document.getElementById(OxO6229[123]),document.getElementById(OxO6229[124]),document.getElementById(OxO6229[125]),document.getElementById(OxO6229[126]));Hsb_Changed(Ox275);break ;;case 1:document.getElementById(OxO6229[138])[OxO6229[137]]=OxO6229[140];document.getElementById(OxO6229[127])[OxO6229[137]]=OxO6229[141];Show(document.getElementById(OxO6229[123]),document.getElementById(OxO6229[127]));document.getElementById(OxO6229[123])[OxO6229[106]][OxO6229[110]]=OxO6229[142];Hsb_Changed(Ox275);break ;;case 2:document.getElementById(OxO6229[138])[OxO6229[137]]=OxO6229[140];document.getElementById(OxO6229[127])[OxO6229[137]]=OxO6229[143];Show(document.getElementById(OxO6229[123]),document.getElementById(OxO6229[127]));document.getElementById(OxO6229[123])[OxO6229[106]][OxO6229[110]]=OxO6229[144];Hsb_Changed(Ox275);break ;;default:break ;;} ;} ;function btnWebSafeColor_Click(Ox275){var Ox3d8=HexToRgb(frm[OxO6229[12]].value);Ox3d8=RgbToWebSafeRgb(Ox3d8);frm[OxO6229[12]][OxO6229[99]]=RgbToHex(Ox3d8);Hex_Changed(Ox275);} ;function checkWebSafe(){var Ox3d8=Form_Get_Rgb();if(RgbIsWebSafe(Ox3d8)){Hide(frm.btnWebSafeColor,document.getElementById(OxO6229[22]),document.getElementById(OxO6229[23]));} else {Ox3d8=RgbToWebSafeRgb(Ox3d8);SetBg(document.getElementById(OxO6229[22]),RgbToHex(Ox3d8));Show(frm.btnWebSafeColor,document.getElementById(OxO6229[22]),document.getElementById(OxO6229[23]));} ;} ;function validateNumber(Ox275){var Ox3ed=String.fromCharCode(Ox275.which);if(IgnoreKey(Ox275)){return ;} ;if(OxO6229[145].indexOf(Ox3ed)!=-1){return ;} ;Ox275[OxO6229[146]]=0;} ;function validateHex(Ox275){if(IgnoreKey(Ox275)){return ;} ;var Ox3ed=String.fromCharCode(Ox275.which);if(OxO6229[147].indexOf(Ox3ed)!=-1){return ;} ;if(OxO6229[148].indexOf(Ox3ed)!=-1){return ;} ;} ;function IgnoreKey(Ox275){var Ox3ed=String.fromCharCode(Ox275.which);var Ox3f0= new Array(0,8,9,13,27);if(Ox3ed==null){return true;} ;for(var i=0;i<5;i++){if(Ox275[OxO6229[146]]==Ox3f0[i]){return true;} ;} ;return false;} ;function btnCancel_Click(){if(window[OxO6229[149]]){window[OxO6229[149]].focus();} ;top.close();} ;function btnOK_Click(){var Ox258= new String(frm[OxO6229[12]].value);if(window[OxO6229[149]]){try{window[OxO6229[149]].ColorPicker_Picked(Ox258);} catch(e){} ;window[OxO6229[149]].focus();} ;recent=GetCookie(OxO6229[103])||OxO6229[97];for(var i=0;i<recent[OxO6229[28]];i+=6){if(recent.substr(i,6)==Ox258){recent=recent.substr(0,i)+recent.substr(i+6);i-=6;} ;} ;if(recent[OxO6229[28]]>31*6){recent=recent.substr(0,31*6);} ;recent=frm[OxO6229[12]][OxO6229[99]]+recent;SetCookie(OxO6229[103],recent,60*60*24*365);top.close();} ;function SetGradientPosition(Ox275,Ox324,Ox2f4){Ox324=Ox324-POSITIONADJUSTX+5;Ox2f4=Ox2f4-POSITIONADJUSTY+5;Ox324-=7;Ox2f4-=27;Ox324=Ox324<0?0:Ox324>255?255:Ox324;Ox2f4=Ox2f4<0?0:Ox2f4>255?255:Ox2f4;SetBgPosition(document.getElementById(OxO6229[150]),Ox324-5,Ox2f4-5);switch(ColorMode){case 0:var Ox3f4= new Array(0,0,0);Ox3f4[1]=Ox324/255;Ox3f4[2]=1-(Ox2f4/255);frm[OxO6229[7]][OxO6229[99]]=Math.round(Ox3f4[1]*100);frm[OxO6229[8]][OxO6229[99]]=Math.round(Ox3f4[2]*100);Hsb_Changed(Ox275);break ;;case 1:var Ox3f4= new Array(0,0,0);Ox3f4[0]=Ox324/255;Ox3f4[2]=1-(Ox2f4/255);frm[OxO6229[5]][OxO6229[99]]=Ox3f4[0]==1?0:Math.round(Ox3f4[0]*360);frm[OxO6229[8]][OxO6229[99]]=Math.round(Ox3f4[2]*100);Hsb_Changed(Ox275);break ;;case 2:var Ox3f4= new Array(0,0,0);Ox3f4[0]=Ox324/255;Ox3f4[1]=1-(Ox2f4/255);frm[OxO6229[5]][OxO6229[99]]=Ox3f4[0]==1?0:Math.round(Ox3f4[0]*360);frm[OxO6229[7]][OxO6229[99]]=Math.round(Ox3f4[1]*100);Hsb_Changed(Ox275);break ;;} ;} ;function Hex_Changed(Ox275){var Ox258=Form_Get_Hex();var Ox3d8=HexToRgb(Ox258);var Ox3f4=RgbToHsb(Ox3d8);Form_Set_Rgb(Ox3d8);Form_Set_Hsb(Ox3f4);SetBg(document.getElementById(OxO6229[151]),Ox258);SetupCursors(Ox275);SetupGradients();checkWebSafe();} ;function Rgb_Changed(Ox275){var Ox3d8=Form_Get_Rgb();var Ox3f4=RgbToHsb(Ox3d8);var Ox258=RgbToHex(Ox3d8);Form_Set_Hsb(Ox3f4);Form_Set_Hex(Ox258);SetBg(document.getElementById(OxO6229[151]),Ox258);SetupCursors(Ox275);SetupGradients();checkWebSafe();} ;function Hsb_Changed(Ox275){var Ox3f4=Form_Get_Hsb();var Ox3d8=HsbToRgb(Ox3f4);var Ox258=RgbToHex(Ox3d8);Form_Set_Rgb(Ox3d8);Form_Set_Hex(Ox258);SetBg(document.getElementById(OxO6229[151]),Ox258);SetupCursors(Ox275);SetupGradients();checkWebSafe();} ;function Form_Set_Hex(Ox258){frm[OxO6229[12]][OxO6229[99]]=Ox258;} ;function Form_Get_Hex(){var Ox258= new String(frm[OxO6229[12]].value);for(var i=0;i<Ox258[OxO6229[28]];i++){if(OxO6229[152].indexOf(Ox258.substr(i,1))==-1){Ox258=OxO6229[153];frm[OxO6229[12]][OxO6229[99]]=Ox258;alert(formatString(msg.BadNumber,OxO6229[153],OxO6229[98]));break ;} ;} ;while(Ox258[OxO6229[28]]<6){Ox258=OxO6229[154]+Ox258;} ;return Ox258;} ;function Form_Get_Hsb(){var Ox3f4= new Array(0,0,0);Ox3f4[0]= new Number(frm[OxO6229[5]].value)/360;Ox3f4[1]= new Number(frm[OxO6229[7]].value)/100;Ox3f4[2]= new Number(frm[OxO6229[8]].value)/100;if(Ox3f4[0]>1||isNaN(Ox3f4[0])){Ox3f4[0]=1;frm[OxO6229[5]][OxO6229[99]]=360;alert(formatString(msg.BadNumber,0,360));} ;if(Ox3f4[1]>1||isNaN(Ox3f4[1])){Ox3f4[1]=1;frm[OxO6229[7]][OxO6229[99]]=100;alert(formatString(msg.BadNumber,0,100));} ;if(Ox3f4[2]>1||isNaN(Ox3f4[2])){Ox3f4[2]=1;frm[OxO6229[8]][OxO6229[99]]=100;alert(formatString(msg.BadNumber,0,100));} ;return Ox3f4;} ;function Form_Set_Hsb(Ox3f4){SetValue(frm.txtHSB_Hue,Math.round(Ox3f4[0]*360),frm.txtHSB_Saturation,Math.round(Ox3f4[1]*100),frm.txtHSB_Brightness,Math.round(Ox3f4[2]*100));} ;function Form_Get_Rgb(){var Ox3d8= new Array(0,0,0);Ox3d8[0]= new Number(frm[OxO6229[9]].value);Ox3d8[1]= new Number(frm[OxO6229[10]].value);Ox3d8[2]= new Number(frm[OxO6229[11]].value);if(Ox3d8[0]>255||isNaN(Ox3d8[0])||Ox3d8[0]!=Math.round(Ox3d8[0])){Ox3d8[0]=255;frm[OxO6229[9]][OxO6229[99]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox3d8[1]>255||isNaN(Ox3d8[1])||Ox3d8[1]!=Math.round(Ox3d8[1])){Ox3d8[1]=255;frm[OxO6229[10]][OxO6229[99]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox3d8[2]>255||isNaN(Ox3d8[2])||Ox3d8[2]!=Math.round(Ox3d8[2])){Ox3d8[2]=255;frm[OxO6229[11]][OxO6229[99]]=255;alert(formatString(msg.BadNumber,0,255));} ;return Ox3d8;} ;function Form_Set_Rgb(Ox3d8){frm[OxO6229[9]][OxO6229[99]]=Ox3d8[0];frm[OxO6229[10]][OxO6229[99]]=Ox3d8[1];frm[OxO6229[11]][OxO6229[99]]=Ox3d8[2];} ;function SetupCursors(Ox275){var Ox3f4=Form_Get_Hsb();var Ox3d8=Form_Get_Rgb();if(RgbToYuv(Ox3d8)[0]>=0.5){SetGradientPositionDark();} else {SetGradientPositionLight();} ;if(Ox275[OxO6229[111]]!=null){if(Ox275[OxO6229[111]][OxO6229[155]]==OxO6229[17]){return ;} ;if(Ox275[OxO6229[111]][OxO6229[155]]==OxO6229[21]){return ;} ;} ;var Ox324;var Ox2f4;var Ox3ff;if(ColorMode>=0&&ColorMode<=2){for(var i=0;i<3;i++){Ox3f4[i]*=255;} ;} ;switch(ColorMode){case 0:Ox324=Ox3f4[1];Ox2f4=Ox3f4[2];Ox3ff=Ox3f4[0]==0?1:Ox3f4[0];break ;;case 1:Ox324=Ox3f4[0]==0?1:Ox3f4[0];Ox2f4=Ox3f4[2];Ox3ff=Ox3f4[1];break ;;case 2:Ox324=Ox3f4[0]==0?1:Ox3f4[0];Ox2f4=Ox3f4[1];Ox3ff=Ox3f4[2];break ;;} ;Ox2f4=255-Ox2f4;Ox3ff=255-Ox3ff;SetBgPosition(document.getElementById(OxO6229[150]),Ox324-5,Ox2f4-5);document.getElementById(OxO6229[157])[OxO6229[106]][OxO6229[156]]=(Ox3ff+27)+OxO6229[122];} ;function SetupGradients(){var Ox3f4=Form_Get_Hsb();var Ox3d8=Form_Get_Rgb();switch(ColorMode){case 0:SetBg(document.getElementById(OxO6229[123]),RgbToHex(HueToRgb(Ox3f4[0])));break ;;case 1:SetBg(document.getElementById(OxO6229[127]),RgbToHex(HsbToRgb( new Array(Ox3f4[0],1,Ox3f4[2]))));break ;;case 2:SetBg(document.getElementById(OxO6229[127]),RgbToHex(HsbToRgb( new Array(Ox3f4[0],Ox3f4[1],1))));break ;;default:;} ;} ;function SetGradientPositionDark(){if(GradientPositionDark){return ;} ;GradientPositionDark=true;document.getElementById(OxO6229[150])[OxO6229[106]][OxO6229[158]]=OxO6229[159];} ;function SetGradientPositionLight(){if(!GradientPositionDark){return ;} ;GradientPositionDark=false;document.getElementById(OxO6229[150])[OxO6229[106]][OxO6229[158]]=OxO6229[160];} ;function pnlGradient_Top_Click(Ox275){Ox275[OxO6229[161]]=true;SetGradientPosition(Ox275,Ox275[OxO6229[162]]-5,Ox275[OxO6229[163]]-5);document.getElementById(OxO6229[17])[OxO6229[164]]=OxO6229[165];_down=false;} ;var _down=false;function pnlGradient_Top_MouseMove(Ox275){Ox275[OxO6229[161]]=true;if(!_down){return ;} ;SetGradientPosition(Ox275,Ox275[OxO6229[162]]-5,Ox275[OxO6229[163]]-5);} ;function pnlGradient_Top_MouseDown(Ox275){Ox275[OxO6229[161]]=true;_down=true;SetGradientPosition(Ox275,Ox275[OxO6229[162]]-5,Ox275[OxO6229[163]]-5);document.getElementById(OxO6229[17])[OxO6229[164]]=OxO6229[166];} ;function pnlGradient_Top_MouseUp(Ox275){_down=false;Ox275[OxO6229[161]]=true;SetGradientPosition(Ox275,Ox275[OxO6229[162]]-5,Ox275[OxO6229[163]]-5);document.getElementById(OxO6229[17])[OxO6229[164]]=OxO6229[165];} ;function Document_MouseUp(){e[OxO6229[161]]=true;document.getElementById(OxO6229[17])[OxO6229[164]]=OxO6229[165];} ;function SetVerticalPosition(Ox275,Ox3ff){var Ox3ff=Ox3ff-POSITIONADJUSTZ;if(Ox3ff<27){Ox3ff=27;} ;if(Ox3ff>282){Ox3ff=282;} ;document.getElementById(OxO6229[157])[OxO6229[106]][OxO6229[156]]=Ox3ff+OxO6229[122];Ox3ff=1-((Ox3ff-27)/255);switch(ColorMode){case 0:if(Ox3ff==1){Ox3ff=0;} ;frm[OxO6229[5]][OxO6229[99]]=Math.round(Ox3ff*360);Hsb_Changed(Ox275);break ;;case 1:frm[OxO6229[7]][OxO6229[99]]=Math.round(Ox3ff*100);Hsb_Changed(Ox275);break ;;case 2:frm[OxO6229[8]][OxO6229[99]]=Math.round(Ox3ff*100);Hsb_Changed(Ox275);break ;;} ;} ;function pnlVertical_Top_Click(Ox275){SetVerticalPosition(Ox275,Ox275[OxO6229[163]]-5);Ox275[OxO6229[161]]=true;} ;function pnlVertical_Top_MouseMove(Ox275){if(!window[OxO6229[167]]){return ;} ;if(Ox275[OxO6229[146]]!=1){return ;} ;SetVerticalPosition(Ox275,Ox275[OxO6229[163]]-5);Ox275[OxO6229[161]]=true;} ;function pnlVertical_Top_MouseDown(Ox275){window[OxO6229[167]]=true;SetVerticalPosition(Ox275,Ox275[OxO6229[163]]-5);Ox275[OxO6229[161]]=true;} ;function pnlVertical_Top_MouseUp(Ox275){window[OxO6229[167]]=false;SetVerticalPosition(Ox275,Ox275[OxO6229[163]]-5);Ox275[OxO6229[161]]=true;} ;function SetCookie(name,Ox246,Ox247){var Ox248=name+OxO6229[168]+escape(Ox246)+OxO6229[169];if(Ox247){var Ox22f= new Date();Ox22f.setSeconds(Ox22f.getSeconds()+Ox247);Ox248+=OxO6229[170]+Ox22f.toUTCString()+OxO6229[171];} ;document[OxO6229[172]]=Ox248;} ;function GetCookie(name){var Ox24a=document[OxO6229[172]].split(OxO6229[171]);for(var i=0;i<Ox24a[OxO6229[28]];i++){var Ox24b=Ox24a[i].split(OxO6229[168]);if(name==Ox24b[0].replace(/\s/g,OxO6229[97])){return unescape(Ox24b[1]);} ;} ;} ;function GetCookieDictionary(){var Ox24d={};var Ox24a=document[OxO6229[172]].split(OxO6229[171]);for(var i=0;i<Ox24a[OxO6229[28]];i++){var Ox24b=Ox24a[i].split(OxO6229[168]);Ox24d[Ox24b[0].replace(/\s/g,OxO6229[97])]=unescape(Ox24b[1]);} ;return Ox24d;} ;function GetQuery(name){var i=0;while(window[OxO6229[174]][OxO6229[173]].indexOf(name+OxO6229[168],i)!=-1){var Ox246=window[OxO6229[174]][OxO6229[173]].substr(window[OxO6229[174]][OxO6229[173]].indexOf(name+OxO6229[168],i));Ox246=Ox246.substr(name[OxO6229[28]]+1);if(Ox246.indexOf(OxO6229[175])!=-1){if(Ox246.indexOf(OxO6229[175])==0){Ox246=OxO6229[97];} else {Ox246=Ox246.substr(0,Ox246.indexOf(OxO6229[175]));} ;} ;return unescape(Ox246);} ;return OxO6229[97];} ;function RgbIsWebSafe(Ox3d8){var Ox258=RgbToHex(Ox3d8);for(var i=0;i<3;i++){if(OxO6229[176].indexOf(Ox258.substr(i*2,2))==-1){return false;} ;} ;return true;} ;function RgbToWebSafeRgb(Ox3d8){var Ox40f= new Array(Ox3d8[0],Ox3d8[1],Ox3d8[2]);if(RgbIsWebSafe(Ox3d8)){return Ox40f;} ;var Ox410= new Array(0x00,0x33,0x66,0x99,0xCC,0xFF);for(var i=0;i<3;i++){for(var Ox1e9=1;Ox1e9<6;Ox1e9++){if(Ox40f[i]>Ox410[Ox1e9-1]&&Ox40f[i]<Ox410[Ox1e9]){if(Ox40f[i]-Ox410[Ox1e9-1]>Ox410[Ox1e9]-Ox40f[i]){Ox40f[i]=Ox410[Ox1e9];} else {Ox40f[i]=Ox410[Ox1e9-1];} ;break ;} ;} ;} ;return Ox40f;} ;function RgbToYuv(Ox3d8){var Ox412= new Array();Ox412[0]=(Ox3d8[0]*0.299+Ox3d8[1]*0.587+Ox3d8[2]*0.114)/255;Ox412[1]=(Ox3d8[0]*-0.169+Ox3d8[1]*-0.332+Ox3d8[2]*0.500+128)/255;Ox412[2]=(Ox3d8[0]*0.500+Ox3d8[1]*-0.419+Ox3d8[2]*-0.0813+128)/255;return Ox412;} ;function RgbToHsb(Ox3d8){var Ox414= new Array(Ox3d8[0],Ox3d8[1],Ox3d8[2]);var Ox415= new Number(1);var Ox416= new Number(0);var Ox417= new Number(1);var Ox3f4= new Array(0,0,0);var Ox418= new Array();for(var i=0;i<3;i++){Ox414[i]=Ox3d8[i]/255;if(Ox414[i]<Ox415){Ox415=Ox414[i];} ;if(Ox414[i]>Ox416){Ox416=Ox414[i];} ;} ;Ox417=Ox416-Ox415;Ox3f4[2]=Ox416;if(Ox417==0){return Ox3f4;} ;Ox3f4[1]=Ox417/Ox416;for(var i=0;i<3;i++){Ox418[i]=(((Ox416-Ox414[i])/6)+(Ox417/2))/Ox417;} ;if(Ox414[0]==Ox416){Ox3f4[0]=Ox418[2]-Ox418[1];} else {if(Ox414[1]==Ox416){Ox3f4[0]=(1/3)+Ox418[0]-Ox418[2];} else {if(Ox414[2]==Ox416){Ox3f4[0]=(2/3)+Ox418[1]-Ox418[0];} ;} ;} ;if(Ox3f4[0]<0){Ox3f4[0]+=1;} else {if(Ox3f4[0]>1){Ox3f4[0]-=1;} ;} ;return Ox3f4;} ;function HsbToRgb(Ox3f4){var Ox3d8=HueToRgb(Ox3f4[0]);var Ox1f1=Ox3f4[2]*255;for(var i=0;i<3;i++){Ox3d8[i]=Ox3d8[i]*Ox3f4[2];Ox3d8[i]=((Ox3d8[i]-Ox1f1)*Ox3f4[1])+Ox1f1;Ox3d8[i]=Math.round(Ox3d8[i]);} ;return Ox3d8;} ;function RgbToHex(Ox3d8){var Ox258= new String();for(var i=0;i<3;i++){Ox3d8[2-i]=Math.round(Ox3d8[2-i]);Ox258=Ox3d8[2-i].toString(16)+Ox258;if(Ox258[OxO6229[28]]%2==1){Ox258=OxO6229[154]+Ox258;} ;} ;return Ox258.toUpperCase();} ;function HexToRgb(Ox258){var Ox3d8= new Array();for(var i=0;i<3;i++){Ox3d8[i]= new Number(OxO6229[177]+Ox258.substr(i*2,2));} ;return Ox3d8;} ;function HueToRgb(Ox41d){var Ox41e=Ox41d*360;var Ox3d8= new Array(0,0,0);var Ox41f=(Ox41e%60)/60;if(Ox41e<60){Ox3d8[0]=255;Ox3d8[1]=Ox41f*255;} else {if(Ox41e<120){Ox3d8[1]=255;Ox3d8[0]=(1-Ox41f)*255;} else {if(Ox41e<180){Ox3d8[1]=255;Ox3d8[2]=Ox41f*255;} else {if(Ox41e<240){Ox3d8[2]=255;Ox3d8[1]=(1-Ox41f)*255;} else {if(Ox41e<300){Ox3d8[2]=255;Ox3d8[0]=Ox41f*255;} else {if(Ox41e<360){Ox3d8[0]=255;Ox3d8[2]=(1-Ox41f)*255;} ;} ;} ;} ;} ;} ;return Ox3d8;} ;function CheckHexSelect(){if(window[OxO6229[178]]&&window[OxO6229[179]]&&frm[OxO6229[12]]){var Ox253=OxO6229[76]+frm[OxO6229[12]][OxO6229[99]];if(Ox253[OxO6229[28]]==7){if(window[OxO6229[180]]!=Ox253){window[OxO6229[180]]=Ox253;window.do_select(Ox253);} ;} ;} ;} ;setInterval(CheckHexSelect,10);