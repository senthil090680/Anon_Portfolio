var OxOed27=["inp_src","box1","box2","box3","box4","box5","box6","box7","box8","box9","inp_start","CustomBullet","nodeName","LI","parentNode","none","decimal","upper-roman","upper-alpha","lower-alpha","lower-roman","disc","circle","square","listStyleType","style","border","solid 2px #708090","listStyleImage","","value","visibility","hidden","length","start","url(\x27","\x27)","visible","UL","OL","document","firstChild","element","solid 2px #ffffff","solid 2px #ECECF6","onclick"];var inp_src=Window_GetElement(window,OxOed27[0],true);var box1=Window_GetElement(window,OxOed27[1],true);var box2=Window_GetElement(window,OxOed27[2],true);var box3=Window_GetElement(window,OxOed27[3],true);var box4=Window_GetElement(window,OxOed27[4],true);var box5=Window_GetElement(window,OxOed27[5],true);var box6=Window_GetElement(window,OxOed27[6],true);var box7=Window_GetElement(window,OxOed27[7],true);var box8=Window_GetElement(window,OxOed27[8],true);var box9=Window_GetElement(window,OxOed27[9],true);var inp_start=Window_GetElement(window,OxOed27[10],true);var CustomBullet=Window_GetElement(window,OxOed27[11],true);OriginalnodeName=element[OxOed27[12]];if(element[OxOed27[12]]&&element[OxOed27[12]]==OxOed27[13]){OriginalnodeName=(element[OxOed27[14]])[OxOed27[12]];} ;var OriginalnodeName,CurrentnodeName,selectedObject;SyncToView=function SyncToView_LI(){if(element[OxOed27[12]]==OxOed27[13]){element=element[OxOed27[14]];} ;switch((element[OxOed27[25]][OxOed27[24]]).toLowerCase()){case OxOed27[15]:selectedObject=box1;break ;;case OxOed27[16]:selectedObject=box2;break ;;case OxOed27[17]:selectedObject=box3;break ;;case OxOed27[18]:selectedObject=box4;break ;;case OxOed27[19]:selectedObject=box5;break ;;case OxOed27[20]:selectedObject=box6;break ;;case OxOed27[21]:selectedObject=box7;break ;;case OxOed27[22]:selectedObject=box8;break ;;case OxOed27[23]:selectedObject=box9;break ;;default:selectedObject=box1;break ;;} ;selectedObject[OxOed27[25]][OxOed27[26]]=OxOed27[27];if(element[OxOed27[25]][OxOed27[28]]==OxOed27[29]){inp_src[OxOed27[30]]=OxOed27[29];CustomBullet[OxOed27[25]][OxOed27[31]]=OxOed27[32];} else {var Ox1f1;Ox1f1=element[OxOed27[25]][OxOed27[28]];Ox1f1=Ox1f1.substring(4,Ox1f1[OxOed27[33]]-1);inp_src[OxOed27[30]]=Ox1f1;} ;} ;SyncTo=function SyncTo_LI(element){switch(selectedObject){case box1:;case box2:;case box3:;case box4:;case box5:;case box6:try{element.setAttribute(OxOed27[34],inp_start.value);} catch(er){} ;break ;;case box7:;case box8:;case box9:break ;;} ;if(inp_src[OxOed27[30]]){element[OxOed27[25]][OxOed27[28]]=OxOed27[35]+inp_src[OxOed27[30]]+OxOed27[36];} ;} ;function ToggleCustomBullet(){if(CustomBullet[OxOed27[25]][OxOed27[31]]==OxOed27[32]){CustomBullet[OxOed27[25]][OxOed27[31]]=OxOed27[37];} else {CustomBullet[OxOed27[25]][OxOed27[31]]=OxOed27[32];} ;} ;function doClick1(Ox492){if(element[OxOed27[12]]==OxOed27[13]){element=element[OxOed27[14]];} ;selectedObject=Ox492;switch(selectedObject){case box1:element[OxOed27[25]][OxOed27[24]]=OxOed27[15];break ;;case box2:element[OxOed27[25]][OxOed27[24]]=OxOed27[16];break ;;case box3:element[OxOed27[25]][OxOed27[24]]=OxOed27[17];break ;;case box4:element[OxOed27[25]][OxOed27[24]]=OxOed27[18];break ;;case box5:element[OxOed27[25]][OxOed27[24]]=OxOed27[19];break ;;case box6:element[OxOed27[25]][OxOed27[24]]=OxOed27[20];break ;;case box7:element[OxOed27[25]][OxOed27[24]]=OxOed27[21];break ;;case box8:element[OxOed27[25]][OxOed27[24]]=OxOed27[22];break ;;case box9:element[OxOed27[25]][OxOed27[24]]=OxOed27[23];break ;;} ;var Ox523=false;switch(selectedObject){case box1:;case box2:;case box3:;case box4:;case box5:;case box6:if(OriginalnodeName==OxOed27[38]){OriginalnodeName=OxOed27[39];Ox523=true;} ;break ;;case box7:;case box8:;case box9:if(OriginalnodeName==OxOed27[39]){OriginalnodeName=OxOed27[38];Ox523=true;} ;break ;;} ;if(Ox523){var Ox688=editwin[OxOed27[40]].createElement(OriginalnodeName);while(element[OxOed27[41]]){Ox688.appendChild(element.firstChild);} ;element[OxOed27[14]].insertBefore(Ox688,element);element[OxOed27[14]].removeChild(element);var arg=Window_FindDialogArguments(window);arg[OxOed27[42]]=element=Ox688;} ;box1[OxOed27[25]][OxOed27[26]]=OxOed27[43];box2[OxOed27[25]][OxOed27[26]]=OxOed27[43];box3[OxOed27[25]][OxOed27[26]]=OxOed27[43];box4[OxOed27[25]][OxOed27[26]]=OxOed27[43];box5[OxOed27[25]][OxOed27[26]]=OxOed27[43];box6[OxOed27[25]][OxOed27[26]]=OxOed27[43];box7[OxOed27[25]][OxOed27[26]]=OxOed27[43];box8[OxOed27[25]][OxOed27[26]]=OxOed27[43];box9[OxOed27[25]][OxOed27[26]]=OxOed27[43];selectedObject[OxOed27[25]][OxOed27[26]]=OxOed27[27];inp_src[OxOed27[30]]=OxOed27[29];SyncTo();} ;function doMouseOut(Ox492){if(Ox492==selectedObject){Ox492[OxOed27[25]][OxOed27[26]]=OxOed27[27];} else {Ox492[OxOed27[25]][OxOed27[26]]=OxOed27[43];} ;} ;function doMouseOver(Ox492){Ox492[OxOed27[25]][OxOed27[26]]=OxOed27[44];} ;btnbrowse[OxOed27[45]]=function btnbrowse_onclick(){function Ox47e(Ox263){if(Ox263){inp_src[OxOed27[30]]=Ox263;SyncTo(element);} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox47e,inp_src.value,inp_src);} else {editor.ShowSelectImageDialog(Ox47e,inp_src.value);} ;} ;