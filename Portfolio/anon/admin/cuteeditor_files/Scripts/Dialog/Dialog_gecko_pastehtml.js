var OxOd843=["onload","contentWindow","idSource","innerHTML","body","document","","designMode","on","contentEditable","fontFamily","style","Tahoma","fontSize","11px","color","black","background","white","length","\x3C$1$3","\x26nbsp;","\x22","\x27","$1","\x26amp;","\x26lt;","\x26gt;","\x26#39;","\x26quot;"];var editor=Window_GetDialogArguments(window);function cancel(){Window_CloseDialog(window);} ;window[OxOd843[0]]=function (){var iframe=document.getElementById(OxOd843[2])[OxOd843[1]];iframe[OxOd843[5]][OxOd843[4]][OxOd843[3]]=OxOd843[6];iframe[OxOd843[5]][OxOd843[7]]=OxOd843[8];iframe[OxOd843[5]][OxOd843[4]][OxOd843[9]]=true;iframe[OxOd843[5]][OxOd843[4]][OxOd843[11]][OxOd843[10]]=OxOd843[12];iframe[OxOd843[5]][OxOd843[4]][OxOd843[11]][OxOd843[13]]=OxOd843[14];iframe[OxOd843[5]][OxOd843[4]][OxOd843[11]][OxOd843[15]]=OxOd843[16];iframe[OxOd843[5]][OxOd843[4]][OxOd843[11]][OxOd843[17]]=OxOd843[18];iframe.focus();} ;function insertContent(){var iframe=document.getElementById(OxOd843[2])[OxOd843[1]];var Ox3b5=iframe[OxOd843[5]][OxOd843[4]][OxOd843[3]];if(Ox3b5&&Ox3b5[OxOd843[19]]>0){Ox3b5=_CleanCode(Ox3b5);if(Ox3b5.match(/<*>/g)){Ox3b5=String_HtmlEncode(Ox3b5);} ;editor.PasteHTML(Ox3b5);Window_CloseDialog(window);} ;} ;function _CleanCode(Ox45b){Ox45b=Ox45b.replace(/<\\?\??xml[^>]>/gi,OxOd843[6]);Ox45b=Ox45b.replace(/<([\w]+) class=([^ |>]*)([^>]*)/gi,OxOd843[20]);Ox45b=Ox45b.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi,OxOd843[20]);Ox45b=Ox45b.replace(/\s*mso-[^:]+:[^;"]+;?/gi,OxOd843[6]);Ox45b=Ox45b.replace(/<o:p>\s*<\/o:p>/g,OxOd843[6]);Ox45b=Ox45b.replace(/<o:p>.*?<\/o:p>/g,OxOd843[21]);Ox45b=Ox45b.replace(/<\/?\w+:[^>]*>/gi,OxOd843[6]);Ox45b=Ox45b.replace(/<\!--.*-->/g,OxOd843[6]);Ox45b=Ox45b.replace(/[\\]/gi,OxOd843[22]);Ox45b=Ox45b.replace(/[\\]/gi,OxOd843[23]);Ox45b=Ox45b.replace(/<\\?\?xml[^>]*>/gi,OxOd843[6]);Ox45b=Ox45b.replace(/<(\w+)[^>]*\sstyle="[^"]*DISPLAY\s?:\s?none(.*?)<\/\1>/ig,OxOd843[6]);Ox45b=Ox45b.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/gi,OxOd843[21]);Ox45b=Ox45b.replace(/<span\s*[^>]*><\/span>/gi,OxOd843[6]);Ox45b=Ox45b.replace(/\s*style="\s*"/gi,OxOd843[6]);Ox45b=Ox45b.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxOd843[6]);Ox45b=Ox45b.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxOd843[6]);Ox45b=Ox45b.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxOd843[6]);while(Ox45b.match(/<span\s*>(.*?)<\/span>/gi)){Ox45b=Ox45b.replace(/<span\s*>(.*?)<\/span>/gi,OxOd843[24]);} ;while(Ox45b.match(/<font\s*>(.*?)<\/font>/gi)){Ox45b=Ox45b.replace(/<font\s*>(.*?)<\/font>/gi,OxOd843[24]);} ;Ox45b=Ox45b.replace(/<a name="?OLE_LINK\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOd843[24]);Ox45b=Ox45b.replace(/<a name="?_Hlt\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOd843[24]);Ox45b=Ox45b.replace(/<a name="?_Toc\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOd843[24]);Ox45b=Ox45b.replace(/<p([^>])*>(&nbsp;)*\s*<\/p>/gi,OxOd843[6]);Ox45b=Ox45b.replace(/<p([^>])*>(&nbsp;)<\/p>/gi,OxOd843[6]);return Ox45b;} ;function String_HtmlEncode(Ox3a4){if(Ox3a4==null){return OxOd843[6];} ;Ox3a4=Ox3a4.replace(/&/g,OxOd843[25]);Ox3a4=Ox3a4.replace(/</g,OxOd843[26]);Ox3a4=Ox3a4.replace(/>/g,OxOd843[27]);Ox3a4=Ox3a4.replace(/'/g,OxOd843[28]);Ox3a4=Ox3a4.replace(/\x22/g,OxOd843[29]);return Ox3a4;} ;