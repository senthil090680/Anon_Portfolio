var OxO6308=["is_spring_image","1","gid","zIndex","style","srcImg","documentElement","body","getBoundingClientRect","left","top","getBoxObjectFor","x","y","offsetWidth","offsetHeight","offsetLeft","offsetTop","offsetParent","R","width","px","height","M","spring_expand(\x27","id","\x27)","lastActiveElement","spring_collapse(\x27","display","none","copy","parentNode","block","hidetip","src","url","className","spring_image_popup","void(0)","expand","collapse","onmouseout","onmouseover","onclick","tooltip","click","prototype","MouseEvents","ownerDocument","addEventListener","scroll","attachEvent","onscroll"];function hidetip(){} ;function render_spring_image(Oxd){if(Oxd.getAttribute(OxO6308[0])==OxO6308[1]){return ;} ;Oxd.setAttribute(OxO6308[0],OxO6308[1]);render_spring_image[OxO6308[2]]=render_spring_image[OxO6308[2]]||1;render_spring_image[OxO6308[2]]++;function Ox445(){clearTimeout(this.M);render_spring_image[OxO6308[2]]++;this[OxO6308[4]][OxO6308[3]]=1000000+render_spring_image[OxO6308[2]];var Ox446=this[OxO6308[5]];var Ox447,Ox448,Ox449,Ox44a;Ox449=Math.max(document[OxO6308[6]].scrollTop,document[OxO6308[7]].scrollTop);Ox44a=Math.max(document[OxO6308[6]].scrollLeft,document[OxO6308[7]].scrollLeft);if(Ox446[OxO6308[8]]){Ox447=Ox446.getBoundingClientRect()[OxO6308[9]];Ox448=Ox446.getBoundingClientRect()[OxO6308[10]];} else {if(document[OxO6308[11]]){Ox447=document.getBoxObjectFor(Ox446)[OxO6308[12]]-Ox44a;Ox448=document.getBoxObjectFor(Ox446)[OxO6308[13]]-Ox449;} else {var Ox44b=Ox44c(Ox446);Ox447=Ox44b[OxO6308[12]]-Ox44a;Ox448=Ox44b[OxO6308[13]]-Ox449;} ;} ;function Ox44c(element){var Ox44b={x:0,y:0,width:element[OxO6308[14]],height:element[OxO6308[15]]};while(element){Ox44b[OxO6308[12]]+=element[OxO6308[16]];Ox44b[OxO6308[13]]+=element[OxO6308[17]];element=element[OxO6308[18]];} ;return Ox44b;} ;if(this[OxO6308[19]]<1.35){this[OxO6308[19]]+=0.1;this[OxO6308[4]][OxO6308[20]]=Math.floor(Ox446[OxO6308[14]]*this[OxO6308[19]])+OxO6308[21];this[OxO6308[4]][OxO6308[22]]=Math.floor(Ox446[OxO6308[15]]*this[OxO6308[19]])+OxO6308[21];Ox448=Math.floor(Ox448+Ox449-(this[OxO6308[14]]-Ox446[OxO6308[14]])/2)+OxO6308[21];;;Ox447=Math.floor(Ox447+Ox44a-(this[OxO6308[15]]-Ox446[OxO6308[15]])/2)+OxO6308[21];this[OxO6308[4]][OxO6308[10]]=Ox448;this[OxO6308[4]][OxO6308[9]]=Ox447;this[OxO6308[23]]=setTimeout(OxO6308[24]+this[OxO6308[25]]+OxO6308[26],20);} else {if(render_spring_image[OxO6308[27]]!=this){this[OxO6308[23]]=setTimeout(OxO6308[28]+this[OxO6308[25]]+OxO6308[26],20);} ;} ;} ;function Ox44d(){clearTimeout(this.M);var Ox446=this[OxO6308[5]];var Ox447,Ox448,Ox449,Ox44a;Ox449=Math.max(document[OxO6308[6]].scrollTop,document[OxO6308[7]].scrollTop);Ox44a=Math.max(document[OxO6308[6]].scrollLeft,document[OxO6308[7]].scrollLeft);if(Ox446[OxO6308[8]]){Ox447=Ox446.getBoundingClientRect()[OxO6308[9]];Ox448=Ox446.getBoundingClientRect()[OxO6308[10]];} else {if(document[OxO6308[11]]){Ox447=document.getBoxObjectFor(Ox446)[OxO6308[12]]-Ox44a;Ox448=document.getBoxObjectFor(Ox446)[OxO6308[13]]-Ox449;} ;} ;if(this[OxO6308[19]]>1){this[OxO6308[19]]-=0.1;this[OxO6308[4]][OxO6308[20]]=Math.ceil(Ox446[OxO6308[14]]*this[OxO6308[19]])+OxO6308[21];this[OxO6308[4]][OxO6308[22]]=Math.ceil(Ox446[OxO6308[15]]*this[OxO6308[19]])+OxO6308[21];Ox448=Math.ceil(Ox448+Ox449-(this[OxO6308[14]]-Ox446[OxO6308[14]])/2)+OxO6308[21];;;Ox447=Math.ceil(Ox447+Ox44a-(this[OxO6308[15]]-Ox446[OxO6308[15]])/2)+OxO6308[21];this[OxO6308[4]][OxO6308[10]]=Ox448;this[OxO6308[4]][OxO6308[9]]=Ox447;this[OxO6308[23]]=setTimeout(OxO6308[28]+this[OxO6308[25]]+OxO6308[26],0);} else {this[OxO6308[4]][OxO6308[29]]=OxO6308[30];} ;} ;function Ox44e(){var Ox44f=this[OxO6308[31]];if(Ox44f[OxO6308[32]]==null){document[OxO6308[7]].appendChild(Ox44f);} ;if((render_spring_image[OxO6308[27]]!=null)&&(render_spring_image[OxO6308[27]]!=this)){render_spring_image[OxO6308[27]][OxO6308[23]]=setTimeout(OxO6308[28]+render_spring_image[OxO6308[27]][OxO6308[25]]+OxO6308[26],0);} ;render_spring_image[OxO6308[27]]=Ox44f;Ox44f[OxO6308[4]][OxO6308[29]]=OxO6308[33];Ox44f.expand();} ;function Ox450(){try{if(window[OxO6308[34]]){hidetip();} ;this.collapse();} catch(x){} ;} ;Oxd[OxO6308[31]]= new Image();Oxd[OxO6308[31]][OxO6308[35]]=Oxd.getAttribute(OxO6308[36])||Oxd[OxO6308[35]];Oxd[OxO6308[31]][OxO6308[37]]=OxO6308[38];Oxd[OxO6308[31]][OxO6308[25]]=OxO6308[38]+render_spring_image[OxO6308[2]];Oxd[OxO6308[31]][OxO6308[23]]=setTimeout(OxO6308[39],0);Oxd[OxO6308[31]][OxO6308[19]]=1;Oxd[OxO6308[31]][OxO6308[5]]=Oxd;Oxd[OxO6308[31]][OxO6308[40]]=Ox445;Oxd[OxO6308[31]][OxO6308[41]]=Ox44d;Oxd[OxO6308[31]][OxO6308[42]]=Ox450;Oxd[OxO6308[31]][OxO6308[43]]=Ox451;Oxd[OxO6308[31]][OxO6308[44]]=function (){insert(Oxd.src);} ;function Ox451(){var Ox452=Oxd.getAttribute(OxO6308[45]);showTooltip(Ox452,this);} ;try{Oxd[OxO6308[43]]=Ox44e;} catch(x){} ;} ;if(document[OxO6308[11]]!=null){HTMLElement[OxO6308[47]][OxO6308[46]]=function (){var Ox453=this[OxO6308[49]].createEvent(OxO6308[48]);Ox453.initMouseEvent(OxO6308[46],true,true,this[OxO6308[49]].defaultView,1,0,0,0,0,false,false,false,false,0,null);this.dispatchEvent(Ox453);} ;} ;function spring_image_scrcoll(){render_spring_image[OxO6308[27]]=null;} ;if(window[OxO6308[50]]){window.addEventListener(OxO6308[51],spring_image_scrcoll,true);} else {if(window[OxO6308[52]]){window.attachEvent(OxO6308[53],spring_image_scrcoll);} ;} ;function spring_expand(Ox2e0){var Oxd=document.getElementById(Ox2e0);if(Oxd){Oxd.expand();} ;} ;function spring_collapse(Ox2e0){var Oxd=document.getElementById(Ox2e0);if(Oxd){Oxd.collapse();} ;} ;