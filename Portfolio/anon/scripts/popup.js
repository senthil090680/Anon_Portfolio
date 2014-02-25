// JavaScript Document


/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(div_id){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$(div_id).fadeIn("slow");
		popupStatus = 1;
	}
}

//disabling popup with jQuery magic!
function disablePopup(div_id){
	//disables popup only if it is enabled
	if(popupStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		$(div_id).fadeOut("slow");
		popupStatus = 0;
	}
}

//centering popup
function centerPopup(div_id){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $(div_id).height();
	var popupWidth = $(div_id).width();
	//centering
	$("#popupContact").css({
		"position": "absolute",
		//"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2,
		"top":windowHeight/2.8-200
	});
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING POPUP
	//Click the button event!
	$("#button").click(function(){
		//centering with css
		centerPopup();
		//load popup
		loadPopup();
	});
				
	//CLOSING POPUP
	//Click the x event!
	//$("#popupContactClose").click(function(){
		//disablePopup();
	//});
	//Click out event!
	$("#backgroundPopup").click(function(){
		disablePopup(div_id);
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		   for(i=1;i<=9;i++)
		   {
			   document.getElementById(i).style.display = 'none';
			   //document.getElementById('launch'+i).style.display = 'none';
		   }
   document.getElementById('popupContact').style.display = 'none';

			popupStatus = 0;
		}
	});

});

function popup(div_id)
	{
		var div_id=div_id;
		centerPopup(div_id);
		
		//load popup
		loadPopup(div_id);
				}
	function close_popup(div_id)
	{
		disablePopup(div_id);
		//load popup
		
				}                
                
    