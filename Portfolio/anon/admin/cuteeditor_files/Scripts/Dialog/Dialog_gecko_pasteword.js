var OxOaed3=["onload","contentWindow","idSource","innerHTML","body","document","","designMode","on","contentEditable","fontFamily","style","Tahoma","fontSize","11px","color","black","background","white","length","\x22","\x3C$1$3"," ","\x26nbsp;","$1","\x3Ch$1\x3E","\x3C$1\x3E$2\x3C/$1\x3E","\x27"];var editor=Window_GetDialogArguments(window);function cancel(){Window_CloseDialog(window);} ;window[OxOaed3[0]]=function (){var iframe=document.getElementById(OxOaed3[2])[OxOaed3[1]];iframe[OxOaed3[5]][OxOaed3[4]][OxOaed3[3]]=OxOaed3[6];iframe[OxOaed3[5]][OxOaed3[7]]=OxOaed3[8];iframe[OxOaed3[5]][OxOaed3[4]][OxOaed3[9]]=true;iframe[OxOaed3[5]][OxOaed3[4]][OxOaed3[11]][OxOaed3[10]]=OxOaed3[12];iframe[OxOaed3[5]][OxOaed3[4]][OxOaed3[11]][OxOaed3[13]]=OxOaed3[14];iframe[OxOaed3[5]][OxOaed3[4]][OxOaed3[11]][OxOaed3[15]]=OxOaed3[16];iframe[OxOaed3[5]][OxOaed3[4]][OxOaed3[11]][OxOaed3[17]]=OxOaed3[18];iframe.focus();} ;function insertContent(){var iframe=document.getElementById(OxOaed3[2])[OxOaed3[1]];var Ox3b5=iframe[OxOaed3[5]][OxOaed3[4]][OxOaed3[3]];if(Ox3b5&&Ox3b5[OxOaed3[19]]>0){editor.PasteHTML(_RemoveWord(Ox3b5));Window_CloseDialog(window);} ;} ;function _RemoveWord(Ox45b){Ox45b=Ox45b.replace(/<[\/]?(base|meta|link|style|font|st1|shape|path|lock|imagedata|stroke|formulas|xml|del|ins|[ovwxp]:\w+)[^>]*?>/gi,OxOaed3[6]);Ox45b=Ox45b.replace(/\s*mso-[^:]+:[^;"]+;?/gi,OxOaed3[6]);Ox45b=Ox45b.replace(/<!--[\s\S]*?-->/gi,OxOaed3[6]);Ox45b=Ox45b.replace(/\s*MARGIN: 0cm 0cm 0pt\s*;/gi,OxOaed3[6]);Ox45b=Ox45b.replace(/\s*MARGIN: 0cm 0cm 0pt\s*"/gi,OxOaed3[20]);Ox45b=Ox45b.replace(/\s*TEXT-INDENT: 0cm\s*;/gi,OxOaed3[6]);Ox45b=Ox45b.replace(/\s*TEXT-INDENT: 0cm\s*"/gi,OxOaed3[20]);Ox45b=Ox45b.replace(/\s*TEXT-ALIGN: [^\s;]+;?"/gi,OxOaed3[20]);Ox45b=Ox45b.replace(/\s*PAGE-BREAK-BEFORE: [^\s;]+;?"/gi,OxOaed3[20]);Ox45b=Ox45b.replace(/\s*FONT-VARIANT: [^\s;]+;?"/gi,OxOaed3[20]);Ox45b=Ox45b.replace(/\s*tab-stops:[^;"]*;?/gi,OxOaed3[6]);Ox45b=Ox45b.replace(/\s*tab-stops:[^"]*/gi,OxOaed3[6]);Ox45b=Ox45b.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi,OxOaed3[21]);Ox45b=Ox45b.replace(/\s*style="\s*"/gi,OxOaed3[6]);Ox45b=Ox45b.replace(/<SPAN\s*[^>]*>\s* \s*<\/SPAN>/gi,OxOaed3[22]);Ox45b=Ox45b.replace(/<(\w+)[^>]*\sstyle="[^"]*DISPLAY\s?:\s?none(.*?)<\/\1>/ig,OxOaed3[6]);Ox45b=Ox45b.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/gi,OxOaed3[23]);Ox45b=Ox45b.replace(/<SPAN\s*[^>]*><\/SPAN>/gi,OxOaed3[6]);Ox45b=Ox45b.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi,OxOaed3[21]);Ox45b=Ox45b.replace(/<SPAN\s*>(.*?)<\/SPAN>/gi,OxOaed3[24]);Ox45b=Ox45b.replace(/<\/?\w+:[^>]*>/gi,OxOaed3[6]);Ox45b=Ox45b.replace(/<\!--.*?-->/g,OxOaed3[6]);Ox45b=Ox45b.replace(/<H\d>\s*<\/H\d>/gi,OxOaed3[6]);Ox45b=Ox45b.replace(/<(\w[^>]*) language=([^ |>]*)([^>]*)/gi,OxOaed3[21]);Ox45b=Ox45b.replace(/<(\w[^>]*) onmouseover="([^\"]*)"([^>]*)/gi,OxOaed3[21]);Ox45b=Ox45b.replace(/<(\w[^>]*) onmouseout="([^\"]*)"([^>]*)/gi,OxOaed3[21]);Ox45b=Ox45b.replace(/<H(\d)([^>]*)>/gi,OxOaed3[25]);Ox45b=Ox45b.replace(/<(H\d)><FONT[^>]*>(.*?)<\/FONT><\/\1>/gi,OxOaed3[26]);Ox45b=Ox45b.replace(/<(H\d)><EM>(.*?)<\/EM><\/\1>/gi,OxOaed3[26]);Ox45b=Ox45b.replace(/<a name="?OLE_LINK\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOaed3[24]);Ox45b=Ox45b.replace(/<a name="?_Hlt\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOaed3[24]);Ox45b=Ox45b.replace(/<a name="?_Toc\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOaed3[24]);Ox45b=Ox45b.replace(/[\\]/gi,OxOaed3[20]);Ox45b=Ox45b.replace(/[\\]/gi,OxOaed3[27]);return Ox45b;} ;