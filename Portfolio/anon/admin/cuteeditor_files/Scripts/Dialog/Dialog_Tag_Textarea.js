var OxOb3f5=["inp_name","inp_cols","inp_rows","inp_value","sel_Wrap","inp_id","inp_access","inp_index","inp_Disabled","inp_Readonly","Name","value","name","id","cols","","rows","checked","disabled","readOnly","wrap","tabIndex","accessKey","textContent"];var inp_name=Window_GetElement(window,OxOb3f5[0],true);var inp_cols=Window_GetElement(window,OxOb3f5[1],true);var inp_rows=Window_GetElement(window,OxOb3f5[2],true);var inp_value=Window_GetElement(window,OxOb3f5[3],true);var sel_Wrap=Window_GetElement(window,OxOb3f5[4],true);var inp_id=Window_GetElement(window,OxOb3f5[5],true);var inp_access=Window_GetElement(window,OxOb3f5[6],true);var inp_index=Window_GetElement(window,OxOb3f5[7],true);var inp_Disabled=Window_GetElement(window,OxOb3f5[8],true);var inp_Readonly=Window_GetElement(window,OxOb3f5[9],true);UpdateState=function UpdateState_Textarea(){} ;SyncToView=function SyncToView_Textarea(){if(element[OxOb3f5[10]]){inp_name[OxOb3f5[11]]=element[OxOb3f5[10]];} ;if(element[OxOb3f5[12]]){inp_name[OxOb3f5[11]]=element[OxOb3f5[12]];} ;inp_id[OxOb3f5[11]]=element[OxOb3f5[13]];inp_value[OxOb3f5[11]]=element[OxOb3f5[11]];if(element[OxOb3f5[14]]){if(element[OxOb3f5[14]]==20){inp_cols[OxOb3f5[11]]=OxOb3f5[15];} else {inp_cols[OxOb3f5[11]]=element[OxOb3f5[14]];} ;} ;if(element[OxOb3f5[16]]){if(element[OxOb3f5[16]]==2){inp_rows[OxOb3f5[11]]=OxOb3f5[15];} else {inp_rows[OxOb3f5[11]]=element[OxOb3f5[16]];} ;} ;inp_Disabled[OxOb3f5[17]]=element[OxOb3f5[18]];inp_Readonly[OxOb3f5[17]]=element[OxOb3f5[19]];sel_Wrap[OxOb3f5[11]]=element[OxOb3f5[20]];if(element[OxOb3f5[21]]==0){inp_index[OxOb3f5[11]]=OxOb3f5[15];} else {inp_index[OxOb3f5[11]]=element[OxOb3f5[21]];} ;if(element[OxOb3f5[22]]){inp_access[OxOb3f5[11]]=element[OxOb3f5[22]];} ;} ;SyncTo=function SyncTo_Textarea(element){element[OxOb3f5[12]]=inp_name[OxOb3f5[11]];if(element[OxOb3f5[10]]){element[OxOb3f5[10]]=inp_name[OxOb3f5[11]];} else {if(element[OxOb3f5[12]]){element.removeAttribute(OxOb3f5[12],0);element[OxOb3f5[10]]=inp_name[OxOb3f5[11]];} else {element[OxOb3f5[10]]=inp_name[OxOb3f5[11]];} ;} ;element[OxOb3f5[13]]=inp_id[OxOb3f5[11]];element[OxOb3f5[11]]=inp_value[OxOb3f5[11]];if(!Browser_IsWinIE()){try{element[OxOb3f5[23]]=inp_value[OxOb3f5[11]];} catch(x){} ;} ;element[OxOb3f5[21]]=inp_index[OxOb3f5[11]];element[OxOb3f5[18]]=inp_Disabled[OxOb3f5[17]];element[OxOb3f5[19]]=inp_Readonly[OxOb3f5[17]];element[OxOb3f5[22]]=inp_access[OxOb3f5[11]];if(inp_cols[OxOb3f5[11]]==OxOb3f5[15]){element[OxOb3f5[14]]=20;} else {element[OxOb3f5[14]]=inp_cols[OxOb3f5[11]];} ;if(inp_rows[OxOb3f5[11]]==OxOb3f5[15]){element[OxOb3f5[16]]=2;} else {element[OxOb3f5[16]]=inp_rows[OxOb3f5[11]];} ;try{element[OxOb3f5[20]]=sel_Wrap[OxOb3f5[11]];} catch(e){element.removeAttribute(OxOb3f5[20]);} ;element[OxOb3f5[21]]=inp_index[OxOb3f5[11]];if(element[OxOb3f5[21]]==OxOb3f5[15]){element.removeAttribute(OxOb3f5[21]);} ;if(element[OxOb3f5[22]]==OxOb3f5[15]){element.removeAttribute(OxOb3f5[22]);} ;} ;