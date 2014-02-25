var OxOff72=["onerror","onload","onclick","btnCancel","btnOK","onkeyup","txtHSB_Hue","onkeypress","txtHSB_Saturation","txtHSB_Brightness","txtRGB_Red","txtRGB_Green","txtRGB_Blue","txtHex","btnWebSafeColor","rdoHSB_Hue","rdoHSB_Saturation","rdoHSB_Brightness","rdoRGB_Red","rdoRGB_Green","rdoRGB_Blue","onmousemove","onmousedown","onmouseup","{format}","length","\x5C{","\x5C}","BadNumber","A number between {0} and {1} is required. Closest value inserted.","Title","Color Picker","SelectAColor","Select a color:","OKButton","OK","CancelButton","Cancel","AboutButton","About","Recent","WebSafeWarning","Warning: not a web safe color","WebSafeClick","Click to select web safe color","HsbHue","H:","HsbHueTooltip","Hue","HsbHueUnit","%","HsbSaturation","S:","HsbSaturationTooltip","Saturation","HsbSaturationUnit","HsbBrightness","B:","HsbBrightnessTooltip","Brightness","HsbBrightnessUnit","RgbRed","R:","RgbRedTooltip","Red","RgbGreen","G:","RgbGreenTooltip","Green","RgbBlue","RgbBlueTooltip","Blue","Hex","#","RecentTooltip","Recent:","\x0D\x0ALewies Color Pickerversion 1.1\x0D\x0A\x0D\x0AThis form was created by Lewis Moten in May of 2004.\x0D\x0AIt simulates the color picker in a popular graphics application.\x0D\x0AIt gives users a visual way to choose colors from a large and dynamic palette.\x0D\x0A\x0D\x0AVisit the authors web page?\x0D\x0Awww.lewismoten.com\x0D\x0A","UNDEFINED","FFFFFF","value","checked","ColorMode","ColorType","RecentColors","","pnlRecent","all","border","style","0px","backgroundColor","srcElement","display","none","title","innerHTML","backgroundPosition","px ","px","000000","zIndex","01234567879","keyCode","abcdef","01234567879ABCDEF","returnValue","0123456789ABCDEFabcdef","0","id","pnlGradient_Top","pnlVertical_Top","top","opacity","filters","backgroundImage","url(../Images/cpie_GradientPositionDark.gif)","url(../Images/cpie_GradientPositionLight.gif)","cancelBubble","clientX","clientY","className","GradientNormal","button","GradientFullScreen","=","; path=/;"," expires=",";","cookie","00336699CCFF","0x","do_select","frm","__cphex"];var POSITIONADJUSTX=21;var POSITIONADJUSTY=46;var POSITIONADJUSTZ=43;var msg= new Object();window[OxOff72[0]]=alert;var ColorMode=1;var GradientPositionDark= new Boolean(false);var frm= new Object();window[OxOff72[1]]=window_load;function initialize(){frm[OxOff72[3]][OxOff72[2]]=btnCancel_Click;frm[OxOff72[4]][OxOff72[2]]=btnOK_Click;frm[OxOff72[6]][OxOff72[5]]=Hsb_Changed;frm[OxOff72[6]][OxOff72[7]]=validateNumber;frm[OxOff72[8]][OxOff72[5]]=Hsb_Changed;frm[OxOff72[8]][OxOff72[7]]=validateNumber;frm[OxOff72[9]][OxOff72[5]]=Hsb_Changed;frm[OxOff72[9]][OxOff72[7]]=validateNumber;frm[OxOff72[10]][OxOff72[5]]=Rgb_Changed;frm[OxOff72[10]][OxOff72[7]]=validateNumber;frm[OxOff72[11]][OxOff72[5]]=Rgb_Changed;frm[OxOff72[11]][OxOff72[7]]=validateNumber;frm[OxOff72[12]][OxOff72[5]]=Rgb_Changed;frm[OxOff72[12]][OxOff72[7]]=validateNumber;frm[OxOff72[13]][OxOff72[5]]=Hex_Changed;frm[OxOff72[13]][OxOff72[7]]=validateHex;frm[OxOff72[14]][OxOff72[2]]=btnWebSafeColor_Click;frm[OxOff72[15]][OxOff72[2]]=rdoHsb_Hue_Click;frm[OxOff72[16]][OxOff72[2]]=rdoHsb_Saturation_Click;frm[OxOff72[17]][OxOff72[2]]=rdoHsb_Brightness_Click;frm[OxOff72[18]][OxOff72[2]]=rdoRgb_Red_Click;frm[OxOff72[19]][OxOff72[2]]=rdoRgb_Green_Click;frm[OxOff72[20]][OxOff72[2]]=rdoRgb_Blue_Click;pnlGradient_Top[OxOff72[2]]=pnlGradient_Top_Click;pnlGradient_Top[OxOff72[21]]=pnlGradient_Top_MouseMove;pnlGradient_Top[OxOff72[22]]=pnlGradient_Top_MouseDown;pnlGradient_Top[OxOff72[23]]=pnlGradient_Top_MouseUp;pnlVertical_Top[OxOff72[2]]=pnlVertical_Top_Click;pnlVertical_Top[OxOff72[21]]=pnlVertical_Top_MouseMove;pnlVertical_Top[OxOff72[22]]=pnlVertical_Top_MouseDown;pnlVertical_Top[OxOff72[23]]=pnlVertical_Top_MouseUp;pnlWebSafeColor[OxOff72[2]]=btnWebSafeColor_Click;pnlWebSafeColorBorder[OxOff72[2]]=btnWebSafeColor_Click;pnlOldColor[OxOff72[2]]=pnlOldClick_Click;lblHSB_Hue[OxOff72[2]]=rdoHsb_Hue_Click;lblHSB_Saturation[OxOff72[2]]=rdoHsb_Saturation_Click;lblHSB_Brightness[OxOff72[2]]=rdoHsb_Brightness_Click;lblRGB_Red[OxOff72[2]]=rdoRgb_Red_Click;lblRGB_Green[OxOff72[2]]=rdoRgb_Green_Click;lblRGB_Blue[OxOff72[2]]=rdoRgb_Blue_Click;pnlGradient_Top.focus();} ;function formatString(Ox3d0){if(!Ox3d0){return OxOff72[24];} ;for(var i=1;i<arguments[OxOff72[25]];i++){Ox3d0=Ox3d0.replace( new RegExp(OxOff72[26]+(i-1)+OxOff72[27]),arguments[i]);} ;return Ox3d0;} ;function AddValue(Ox3d2,Ox246){Ox246=Ox246.toLowerCase();for(var i=0;i<Ox3d2[OxOff72[25]];i++){if(Ox3d2[i]==Ox246){return ;} ;} ;Ox3d2[Ox3d2[OxOff72[25]]]=Ox246;} ;function SniffLanguage(Ox10){} ;function LoadLanguage(){msg[OxOff72[28]]=OxOff72[29];msg[OxOff72[30]]=OxOff72[31];msg[OxOff72[32]]=OxOff72[33];msg[OxOff72[34]]=OxOff72[35];msg[OxOff72[36]]=OxOff72[37];msg[OxOff72[38]]=OxOff72[39];msg[OxOff72[40]]=OxOff72[40];msg[OxOff72[41]]=OxOff72[42];msg[OxOff72[43]]=OxOff72[44];msg[OxOff72[45]]=OxOff72[46];msg[OxOff72[47]]=OxOff72[48];msg[OxOff72[49]]=OxOff72[50];msg[OxOff72[51]]=OxOff72[52];msg[OxOff72[53]]=OxOff72[54];msg[OxOff72[55]]=OxOff72[50];msg[OxOff72[56]]=OxOff72[57];msg[OxOff72[58]]=OxOff72[59];msg[OxOff72[60]]=OxOff72[50];msg[OxOff72[61]]=OxOff72[62];msg[OxOff72[63]]=OxOff72[64];msg[OxOff72[65]]=OxOff72[66];msg[OxOff72[67]]=OxOff72[68];msg[OxOff72[69]]=OxOff72[57];msg[OxOff72[70]]=OxOff72[71];msg[OxOff72[72]]=OxOff72[73];msg[OxOff72[74]]=OxOff72[75];msg[OxOff72[39]]=OxOff72[76];} ;function localize(){} ;function window_load(){frm=frmColorPicker;LoadLanguage();localize();initialize();var Ox258=OxOff72[77];if(Ox258==OxOff72[77]){Ox258=OxOff72[78];} ;if(Ox258[OxOff72[25]]==7){Ox258=Ox258.substr(1,6);} ;frm[OxOff72[13]][OxOff72[79]]=Ox258;Hex_Changed();Ox258=Form_Get_Hex();SetBg(pnlOldColor,Ox258);frm[OxOff72[82]][ new Number(GetCookie(OxOff72[81])||0)][OxOff72[80]]=true;ColorMode_Changed();var Ox3c5=GetCookie(OxOff72[83])||OxOff72[84];var Ox3d7=msg[OxOff72[74]];for(var i=1;i<33;i++){if(Ox3c5[OxOff72[25]]/6>=i){Ox258=Ox3c5.substr((i-1)*6,6);var Ox3d8=HexToRgb(Ox258);var title=formatString(msg.RecentTooltip,Ox258,Ox3d8[0],Ox3d8[1],Ox3d8[2]);SetBg(document[OxOff72[86]][OxOff72[85]+i],Ox258);SetTitle(document[OxOff72[86]][OxOff72[85]+i],title);document[OxOff72[86]][OxOff72[85]+i][OxOff72[2]]=pnlRecent_Click;} else {document[OxOff72[86]][OxOff72[85]+i][OxOff72[88]][OxOff72[87]]=OxOff72[89];} ;} ;} ;function pnlRecent_Click(){frm[OxOff72[13]][OxOff72[79]]=event[OxOff72[91]][OxOff72[88]][OxOff72[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function pnlOldClick_Click(){frm[OxOff72[13]][OxOff72[79]]=pnlOldColor[OxOff72[88]][OxOff72[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function rdoHsb_Hue_Click(){frm[OxOff72[15]][OxOff72[80]]=true;ColorMode_Changed();} ;function rdoHsb_Saturation_Click(){frm[OxOff72[16]][OxOff72[80]]=true;ColorMode_Changed();} ;function rdoHsb_Brightness_Click(){frm[OxOff72[17]][OxOff72[80]]=true;ColorMode_Changed();} ;function rdoRgb_Red_Click(){frm[OxOff72[18]][OxOff72[80]]=true;ColorMode_Changed();} ;function rdoRgb_Green_Click(){frm[OxOff72[19]][OxOff72[80]]=true;ColorMode_Changed();} ;function rdoRgb_Blue_Click(){frm[OxOff72[20]][OxOff72[80]]=true;ColorMode_Changed();} ;function Hide(){for(var i=0;i<arguments[OxOff72[25]];i++){arguments[i][OxOff72[88]][OxOff72[92]]=OxOff72[93];} ;} ;function Show(){for(var i=0;i<arguments[OxOff72[25]];i++){arguments[i][OxOff72[88]][OxOff72[92]]=OxOff72[84];} ;} ;function SetValue(){for(var i=0;i<arguments[OxOff72[25]];i+=2){arguments[i][OxOff72[79]]=arguments[i+1];} ;} ;function SetTitle(){for(var i=0;i<arguments[OxOff72[25]];i+=2){arguments[i][OxOff72[94]]=arguments[i+1];} ;} ;function SetHTML(){for(var i=0;i<arguments[OxOff72[25]];i+=2){arguments[i][OxOff72[95]]=arguments[i+1];} ;} ;function SetBg(){for(var i=0;i<arguments[OxOff72[25]];i+=2){arguments[i][OxOff72[88]][OxOff72[90]]=OxOff72[73]+arguments[i+1];} ;} ;function SetBgPosition(){for(var i=0;i<arguments[OxOff72[25]];i+=3){arguments[i][OxOff72[88]][OxOff72[96]]=arguments[i+1]+OxOff72[97]+arguments[i+2]+OxOff72[98];} ;} ;function ColorMode_Changed(){for(var i=0;i<6;i++){if(frm[OxOff72[82]][i][OxOff72[80]]){ColorMode=i;} ;} ;SetCookie(OxOff72[81],ColorMode,60*60*24*365);Hide(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background,pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);switch(ColorMode){case 0:Show(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background);Hsb_Changed();break ;;case 1:Show(pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxOff72[78],pnlGradientRgb_Overlay2,OxOff72[99]);pnlGradientRgb_Overlay1[OxOff72[88]][OxOff72[100]]=5;pnlGradientRgb_Overlay2[OxOff72[88]][OxOff72[100]]=6;Hsb_Changed();break ;;case 2:Show(pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxOff72[99],pnlGradientRgb_Overlay2,OxOff72[78]);pnlGradientRgb_Overlay1[OxOff72[88]][OxOff72[100]]=6;pnlGradientRgb_Overlay2[OxOff72[88]][OxOff72[100]]=5;Hsb_Changed();break ;;case 3:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,0,pnlGradientRgb_Invert,256,0);Rgb_Changed();break ;;case 4:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,0,256,pnlGradientRgb_Invert,0,256);Rgb_Changed();break ;;case 5:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,256,pnlGradientRgb_Invert,256,256);Rgb_Changed();break ;;default:break ;;} ;} ;function btnWebSafeColor_Click(){var Ox3d8=HexToRgb(frm[OxOff72[13]].value);Ox3d8=RgbToWebSafeRgb(Ox3d8);frm[OxOff72[13]][OxOff72[79]]=RgbToHex(Ox3d8);Hex_Changed();} ;function checkWebSafe(){var Ox3d8=Form_Get_Rgb();if(RgbIsWebSafe(Ox3d8)){Hide(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} else {Ox3d8=RgbToWebSafeRgb(Ox3d8);SetBg(pnlWebSafeColor,RgbToHex(Ox3d8));Show(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} ;} ;function validateNumber(){var Ox3ed=String.fromCharCode(event.keyCode);if(IgnoreKey()){return ;} ;if(OxOff72[101].indexOf(Ox3ed)!=-1){return ;} ;event[OxOff72[102]]=0;} ;function validateHex(){if(IgnoreKey()){return ;} ;var Ox3ed=String.fromCharCode(event.keyCode);if(OxOff72[103].indexOf(Ox3ed)!=-1){event[OxOff72[102]]=Ox3ed.toUpperCase().charCodeAt(0);return ;} ;if(OxOff72[104].indexOf(Ox3ed)!=-1){return ;} ;event[OxOff72[102]]=0;} ;function IgnoreKey(){var Ox3ed=String.fromCharCode(event.keyCode);var Ox3f0= new Array(0,8,9,13,27);if(Ox3ed==null){return true;} ;for(var i=0;i<5;i++){if(event[OxOff72[102]]==Ox3f0[i]){return true;} ;} ;return false;} ;function btnCancel_Click(){top.close();} ;function btnOK_Click(){var Ox258= new String(frm[OxOff72[13]].value);try{window[OxOff72[105]]=Ox258;} catch(e){} ;recent=GetCookie(OxOff72[83])||OxOff72[84];for(var i=0;i<recent[OxOff72[25]];i+=6){if(recent.substr(i,6)==Ox258){recent=recent.substr(0,i)+recent.substr(i+6);i-=6;} ;} ;if(recent[OxOff72[25]]>31*6){recent=recent.substr(0,31*6);} ;recent=frm[OxOff72[13]][OxOff72[79]]+recent;SetCookie(OxOff72[83],recent,60*60*24*365);top.close();} ;function SetGradientPosition(Ox324,Ox2f4){Ox324=Ox324-POSITIONADJUSTX+5;Ox2f4=Ox2f4-POSITIONADJUSTY+5;Ox324-=7;Ox2f4-=27;Ox324=Ox324<0?0:Ox324>255?255:Ox324;Ox2f4=Ox2f4<0?0:Ox2f4>255?255:Ox2f4;SetBgPosition(pnlGradientPosition,Ox324-5,Ox2f4-5);switch(ColorMode){case 0:var Ox3f4= new Array(0,0,0);Ox3f4[1]=Ox324/255;Ox3f4[2]=1-(Ox2f4/255);frm[OxOff72[8]][OxOff72[79]]=Math.round(Ox3f4[1]*100);frm[OxOff72[9]][OxOff72[79]]=Math.round(Ox3f4[2]*100);Hsb_Changed();break ;;case 1:var Ox3f4= new Array(0,0,0);Ox3f4[0]=Ox324/255;Ox3f4[2]=1-(Ox2f4/255);frm[OxOff72[6]][OxOff72[79]]=Ox3f4[0]==1?0:Math.round(Ox3f4[0]*360);frm[OxOff72[9]][OxOff72[79]]=Math.round(Ox3f4[2]*100);Hsb_Changed();break ;;case 2:var Ox3f4= new Array(0,0,0);Ox3f4[0]=Ox324/255;Ox3f4[1]=1-(Ox2f4/255);frm[OxOff72[6]][OxOff72[79]]=Ox3f4[0]==1?0:Math.round(Ox3f4[0]*360);frm[OxOff72[8]][OxOff72[79]]=Math.round(Ox3f4[1]*100);Hsb_Changed();break ;;case 3:var Ox3d8= new Array(0,0,0);Ox3d8[1]=255-Ox2f4;Ox3d8[2]=Ox324;frm[OxOff72[11]][OxOff72[79]]=Ox3d8[1];frm[OxOff72[12]][OxOff72[79]]=Ox3d8[2];Rgb_Changed();break ;;case 4:var Ox3d8= new Array(0,0,0);Ox3d8[0]=255-Ox2f4;Ox3d8[2]=Ox324;frm[OxOff72[10]][OxOff72[79]]=Ox3d8[0];frm[OxOff72[12]][OxOff72[79]]=Ox3d8[2];Rgb_Changed();break ;;case 5:var Ox3d8= new Array(0,0,0);Ox3d8[0]=Ox324;Ox3d8[1]=255-Ox2f4;frm[OxOff72[10]][OxOff72[79]]=Ox3d8[0];frm[OxOff72[11]][OxOff72[79]]=Ox3d8[1];Rgb_Changed();break ;;} ;} ;function Hex_Changed(){var Ox258=Form_Get_Hex();var Ox3d8=HexToRgb(Ox258);var Ox3f4=RgbToHsb(Ox3d8);Form_Set_Rgb(Ox3d8);Form_Set_Hsb(Ox3f4);SetBg(pnlNewColor,Ox258);SetupCursors();SetupGradients();checkWebSafe();} ;function Rgb_Changed(){var Ox3d8=Form_Get_Rgb();var Ox3f4=RgbToHsb(Ox3d8);var Ox258=RgbToHex(Ox3d8);Form_Set_Hsb(Ox3f4);Form_Set_Hex(Ox258);SetBg(pnlNewColor,Ox258);SetupCursors();SetupGradients();checkWebSafe();} ;function Hsb_Changed(){var Ox3f4=Form_Get_Hsb();var Ox3d8=HsbToRgb(Ox3f4);var Ox258=RgbToHex(Ox3d8);Form_Set_Rgb(Ox3d8);Form_Set_Hex(Ox258);SetBg(pnlNewColor,Ox258);SetupCursors();SetupGradients();checkWebSafe();} ;function Form_Set_Hex(Ox258){frm[OxOff72[13]][OxOff72[79]]=Ox258;} ;function Form_Get_Hex(){var Ox258= new String(frm[OxOff72[13]].value);for(var i=0;i<Ox258[OxOff72[25]];i++){if(OxOff72[106].indexOf(Ox258.substr(i,1))==-1){Ox258=OxOff72[99];frm[OxOff72[13]][OxOff72[79]]=Ox258;alert(formatString(msg.BadNumber,OxOff72[99],OxOff72[78]));break ;} ;} ;while(Ox258[OxOff72[25]]<6){Ox258=OxOff72[107]+Ox258;} ;return Ox258;} ;function Form_Get_Hsb(){var Ox3f4= new Array(0,0,0);Ox3f4[0]= new Number(frm[OxOff72[6]].value)/360;Ox3f4[1]= new Number(frm[OxOff72[8]].value)/100;Ox3f4[2]= new Number(frm[OxOff72[9]].value)/100;if(Ox3f4[0]>1||isNaN(Ox3f4[0])){Ox3f4[0]=1;frm[OxOff72[6]][OxOff72[79]]=360;alert(formatString(msg.BadNumber,0,360));} ;if(Ox3f4[1]>1||isNaN(Ox3f4[1])){Ox3f4[1]=1;frm[OxOff72[8]][OxOff72[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;if(Ox3f4[2]>1||isNaN(Ox3f4[2])){Ox3f4[2]=1;frm[OxOff72[9]][OxOff72[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;return Ox3f4;} ;function Form_Set_Hsb(Ox3f4){SetValue(frm.txtHSB_Hue,Math.round(Ox3f4[0]*360),frm.txtHSB_Saturation,Math.round(Ox3f4[1]*100),frm.txtHSB_Brightness,Math.round(Ox3f4[2]*100));} ;function Form_Get_Rgb(){var Ox3d8= new Array(0,0,0);Ox3d8[0]= new Number(frm[OxOff72[10]].value);Ox3d8[1]= new Number(frm[OxOff72[11]].value);Ox3d8[2]= new Number(frm[OxOff72[12]].value);if(Ox3d8[0]>255||isNaN(Ox3d8[0])||Ox3d8[0]!=Math.round(Ox3d8[0])){Ox3d8[0]=255;frm[OxOff72[10]][OxOff72[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox3d8[1]>255||isNaN(Ox3d8[1])||Ox3d8[1]!=Math.round(Ox3d8[1])){Ox3d8[1]=255;frm[OxOff72[11]][OxOff72[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox3d8[2]>255||isNaN(Ox3d8[2])||Ox3d8[2]!=Math.round(Ox3d8[2])){Ox3d8[2]=255;frm[OxOff72[12]][OxOff72[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;return Ox3d8;} ;function Form_Set_Rgb(Ox3d8){frm[OxOff72[10]][OxOff72[79]]=Ox3d8[0];frm[OxOff72[11]][OxOff72[79]]=Ox3d8[1];frm[OxOff72[12]][OxOff72[79]]=Ox3d8[2];} ;function SetupCursors(){var Ox3f4=Form_Get_Hsb();var Ox3d8=Form_Get_Rgb();if(RgbToYuv(Ox3d8)[0]>=0.5){SetGradientPositionDark();} else {SetGradientPositionLight();} ;if(event[OxOff72[91]]!=null){if(event[OxOff72[91]][OxOff72[108]]==OxOff72[109]){return ;} ;if(event[OxOff72[91]][OxOff72[108]]==OxOff72[110]){return ;} ;} ;var Ox324;var Ox2f4;var Ox3ff;if(ColorMode>=0&&ColorMode<=2){for(var i=0;i<3;i++){Ox3f4[i]*=255;} ;} ;switch(ColorMode){case 0:Ox324=Ox3f4[1];Ox2f4=Ox3f4[2];Ox3ff=Ox3f4[0]==0?1:Ox3f4[0];break ;;case 1:Ox324=Ox3f4[0]==0?1:Ox3f4[0];Ox2f4=Ox3f4[2];Ox3ff=Ox3f4[1];break ;;case 2:Ox324=Ox3f4[0]==0?1:Ox3f4[0];Ox2f4=Ox3f4[1];Ox3ff=Ox3f4[2];break ;;case 3:Ox324=Ox3d8[2];Ox2f4=Ox3d8[1];Ox3ff=Ox3d8[0];break ;;case 4:Ox324=Ox3d8[2];Ox2f4=Ox3d8[0];Ox3ff=Ox3d8[1];break ;;case 5:Ox324=Ox3d8[0];Ox2f4=Ox3d8[1];Ox3ff=Ox3d8[2];break ;;} ;Ox2f4=255-Ox2f4;Ox3ff=255-Ox3ff;SetBgPosition(pnlGradientPosition,Ox324-5,Ox2f4-5);pnlVerticalPosition[OxOff72[88]][OxOff72[111]]=(Ox3ff+27)+OxOff72[98];} ;function SetupGradients(){var Ox3f4=Form_Get_Hsb();var Ox3d8=Form_Get_Rgb();switch(ColorMode){case 0:SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox3f4[0])));break ;;case 1:var Ox1f= new Array();for(var i=0;i<3;i++){Ox1f[i]=Math.round(Ox3f4[2]*255);} ;SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox3f4[0])),pnlVerticalHsbSaturation_Hue,RgbToHex(HsbToRgb( new Array(Ox3f4[0],1,Ox3f4[2]))),pnlVerticalHsbSaturation_White,RgbToHex(Ox1f));pnlGradientRgb_Overlay1[OxOff72[113]][0][OxOff72[112]]=(100-Math.round(Ox3f4[1]*100));break ;;case 2:SetBg(pnlVerticalHsbBrightness_Hue,RgbToHex(HsbToRgb( new Array(Ox3f4[0],Ox3f4[1],1))));pnlGradientRgb_Overlay1[OxOff72[113]][0][OxOff72[112]]=(100-Math.round(Ox3f4[2]*100));break ;;case 3:pnlGradientRgb_Invert[OxOff72[113]][3][OxOff72[112]]=100-Math.round((Ox3d8[0]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(0xFF,Ox3d8[1],Ox3d8[2])),pnlVerticalRgb_End,RgbToHex( new Array(0x00,Ox3d8[1],Ox3d8[2])));break ;;case 4:pnlGradientRgb_Invert[OxOff72[113]][3][OxOff72[112]]=100-Math.round((Ox3d8[1]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox3d8[0],0xFF,Ox3d8[2])),pnlVerticalRgb_End,RgbToHex( new Array(Ox3d8[0],0x00,Ox3d8[2])));break ;;case 5:pnlGradientRgb_Invert[OxOff72[113]][3][OxOff72[112]]=100-Math.round((Ox3d8[2]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox3d8[0],Ox3d8[1],0xFF)),pnlVerticalRgb_End,RgbToHex( new Array(Ox3d8[0],Ox3d8[1],0x00)));break ;;default:;} ;} ;function SetGradientPositionDark(){if(GradientPositionDark){return ;} ;GradientPositionDark=true;pnlGradientPosition[OxOff72[88]][OxOff72[114]]=OxOff72[115];} ;function SetGradientPositionLight(){if(!GradientPositionDark){return ;} ;GradientPositionDark=false;pnlGradientPosition[OxOff72[88]][OxOff72[114]]=OxOff72[116];} ;function pnlGradient_Top_Click(){event[OxOff72[117]]=true;SetGradientPosition(event[OxOff72[118]]-5,event[OxOff72[119]]-5);pnlGradient_Top[OxOff72[120]]=OxOff72[121];} ;function pnlGradient_Top_MouseMove(){event[OxOff72[117]]=true;if(event[OxOff72[122]]!=1){return ;} ;SetGradientPosition(event[OxOff72[118]]-5,event[OxOff72[119]]-5);} ;function pnlGradient_Top_MouseDown(){event[OxOff72[117]]=true;SetGradientPosition(event[OxOff72[118]]-5,event[OxOff72[119]]-5);pnlGradient_Top[OxOff72[120]]=OxOff72[123];} ;function pnlGradient_Top_MouseUp(){event[OxOff72[117]]=true;SetGradientPosition(event[OxOff72[118]]-5,event[OxOff72[119]]-5);pnlGradient_Top[OxOff72[120]]=OxOff72[121];} ;function Document_MouseUp(){event[OxOff72[117]]=true;pnlGradient_Top[OxOff72[120]]=OxOff72[121];} ;function SetVerticalPosition(Ox3ff){var Ox3ff=Ox3ff-POSITIONADJUSTZ;if(Ox3ff<27){Ox3ff=27;} ;if(Ox3ff>282){Ox3ff=282;} ;pnlVerticalPosition[OxOff72[88]][OxOff72[111]]=Ox3ff+OxOff72[98];Ox3ff=1-((Ox3ff-27)/255);switch(ColorMode){case 0:if(Ox3ff==1){Ox3ff=0;} ;frm[OxOff72[6]][OxOff72[79]]=Math.round(Ox3ff*360);Hsb_Changed();break ;;case 1:frm[OxOff72[8]][OxOff72[79]]=Math.round(Ox3ff*100);Hsb_Changed();break ;;case 2:frm[OxOff72[9]][OxOff72[79]]=Math.round(Ox3ff*100);Hsb_Changed();break ;;case 3:frm[OxOff72[10]][OxOff72[79]]=Math.round(Ox3ff*255);Rgb_Changed();break ;;case 4:frm[OxOff72[11]][OxOff72[79]]=Math.round(Ox3ff*255);Rgb_Changed();break ;;case 5:frm[OxOff72[12]][OxOff72[79]]=Math.round(Ox3ff*255);Rgb_Changed();break ;;} ;} ;function pnlVertical_Top_Click(){SetVerticalPosition(event[OxOff72[119]]-5);event[OxOff72[117]]=true;} ;function pnlVertical_Top_MouseMove(){if(event[OxOff72[122]]!=1){return ;} ;SetVerticalPosition(event[OxOff72[119]]-5);event[OxOff72[117]]=true;} ;function pnlVertical_Top_MouseDown(){SetVerticalPosition(event[OxOff72[119]]-5);event[OxOff72[117]]=true;} ;function pnlVertical_Top_MouseUp(){SetVerticalPosition(event[OxOff72[119]]-5);event[OxOff72[117]]=true;} ;function SetCookie(name,Ox246,Ox247){var Ox248=name+OxOff72[124]+escape(Ox246)+OxOff72[125];if(Ox247){var Ox22f= new Date();Ox22f.setSeconds(Ox22f.getSeconds()+Ox247);Ox248+=OxOff72[126]+Ox22f.toUTCString()+OxOff72[127];} ;document[OxOff72[128]]=Ox248;} ;function GetCookie(name){var Ox24a=document[OxOff72[128]].split(OxOff72[127]);for(var i=0;i<Ox24a[OxOff72[25]];i++){var Ox24b=Ox24a[i].split(OxOff72[124]);if(name==Ox24b[0].replace(/\s/g,OxOff72[84])){return unescape(Ox24b[1]);} ;} ;} ;function GetCookieDictionary(){var Ox24d={};var Ox24a=document[OxOff72[128]].split(OxOff72[127]);for(var i=0;i<Ox24a[OxOff72[25]];i++){var Ox24b=Ox24a[i].split(OxOff72[124]);Ox24d[Ox24b[0].replace(/\s/g,OxOff72[84])]=unescape(Ox24b[1]);} ;return Ox24d;} ;function RgbIsWebSafe(Ox3d8){var Ox258=RgbToHex(Ox3d8);for(var i=0;i<3;i++){if(OxOff72[129].indexOf(Ox258.substr(i*2,2))==-1){return false;} ;} ;return true;} ;function RgbToWebSafeRgb(Ox3d8){var Ox40f= new Array(Ox3d8[0],Ox3d8[1],Ox3d8[2]);if(RgbIsWebSafe(Ox3d8)){return Ox40f;} ;var Ox410= new Array(0x00,0x33,0x66,0x99,0xCC,0xFF);for(var i=0;i<3;i++){for(var Ox1e9=1;Ox1e9<6;Ox1e9++){if(Ox40f[i]>Ox410[Ox1e9-1]&&Ox40f[i]<Ox410[Ox1e9]){if(Ox40f[i]-Ox410[Ox1e9-1]>Ox410[Ox1e9]-Ox40f[i]){Ox40f[i]=Ox410[Ox1e9];} else {Ox40f[i]=Ox410[Ox1e9-1];} ;break ;} ;} ;} ;return Ox40f;} ;function RgbToYuv(Ox3d8){var Ox412= new Array();Ox412[0]=(Ox3d8[0]*0.299+Ox3d8[1]*0.587+Ox3d8[2]*0.114)/255;Ox412[1]=(Ox3d8[0]*-0.169+Ox3d8[1]*-0.332+Ox3d8[2]*0.500+128)/255;Ox412[2]=(Ox3d8[0]*0.500+Ox3d8[1]*-0.419+Ox3d8[2]*-0.0813+128)/255;return Ox412;} ;function RgbToHsb(Ox3d8){var Ox414= new Array(Ox3d8[0],Ox3d8[1],Ox3d8[2]);var Ox415= new Number(1);var Ox416= new Number(0);var Ox417= new Number(1);var Ox3f4= new Array(0,0,0);var Ox418= new Array();for(var i=0;i<3;i++){Ox414[i]=Ox3d8[i]/255;if(Ox414[i]<Ox415){Ox415=Ox414[i];} ;if(Ox414[i]>Ox416){Ox416=Ox414[i];} ;} ;Ox417=Ox416-Ox415;Ox3f4[2]=Ox416;if(Ox417==0){return Ox3f4;} ;Ox3f4[1]=Ox417/Ox416;for(var i=0;i<3;i++){Ox418[i]=(((Ox416-Ox414[i])/6)+(Ox417/2))/Ox417;} ;if(Ox414[0]==Ox416){Ox3f4[0]=Ox418[2]-Ox418[1];} else {if(Ox414[1]==Ox416){Ox3f4[0]=(1/3)+Ox418[0]-Ox418[2];} else {if(Ox414[2]==Ox416){Ox3f4[0]=(2/3)+Ox418[1]-Ox418[0];} ;} ;} ;if(Ox3f4[0]<0){Ox3f4[0]+=1;} else {if(Ox3f4[0]>1){Ox3f4[0]-=1;} ;} ;return Ox3f4;} ;function HsbToRgb(Ox3f4){var Ox3d8=HueToRgb(Ox3f4[0]);var Ox1f1=Ox3f4[2]*255;for(var i=0;i<3;i++){Ox3d8[i]=Ox3d8[i]*Ox3f4[2];Ox3d8[i]=((Ox3d8[i]-Ox1f1)*Ox3f4[1])+Ox1f1;Ox3d8[i]=Math.round(Ox3d8[i]);} ;return Ox3d8;} ;function RgbToHex(Ox3d8){var Ox258= new String();for(var i=0;i<3;i++){Ox3d8[2-i]=Math.round(Ox3d8[2-i]);Ox258=Ox3d8[2-i].toString(16)+Ox258;if(Ox258[OxOff72[25]]%2==1){Ox258=OxOff72[107]+Ox258;} ;} ;return Ox258.toUpperCase();} ;function HexToRgb(Ox258){var Ox3d8= new Array();for(var i=0;i<3;i++){Ox3d8[i]= new Number(OxOff72[130]+Ox258.substr(i*2,2));} ;return Ox3d8;} ;function HueToRgb(Ox41d){var Ox41e=Ox41d*360;var Ox3d8= new Array(0,0,0);var Ox41f=(Ox41e%60)/60;if(Ox41e<60){Ox3d8[0]=255;Ox3d8[1]=Ox41f*255;} else {if(Ox41e<120){Ox3d8[1]=255;Ox3d8[0]=(1-Ox41f)*255;} else {if(Ox41e<180){Ox3d8[1]=255;Ox3d8[2]=Ox41f*255;} else {if(Ox41e<240){Ox3d8[2]=255;Ox3d8[1]=(1-Ox41f)*255;} else {if(Ox41e<300){Ox3d8[2]=255;Ox3d8[0]=Ox41f*255;} else {if(Ox41e<360){Ox3d8[0]=255;Ox3d8[2]=(1-Ox41f)*255;} ;} ;} ;} ;} ;} ;return Ox3d8;} ;function CheckHexSelect(){if(window[OxOff72[131]]&&window[OxOff72[132]]&&frm[OxOff72[13]]){var Ox253=OxOff72[73]+frm[OxOff72[13]][OxOff72[79]];if(Ox253[OxOff72[25]]==7){if(window[OxOff72[133]]!=Ox253){window[OxOff72[133]]=Ox253;window.do_select(Ox253);} ;} ;} ;} ;setInterval(CheckHexSelect,10);