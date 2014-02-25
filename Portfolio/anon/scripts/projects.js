// JavaScript Document


function completed_func()
{
				document.getElementById('completed').style.display="block";
				document.getElementById('upcoming').style.display="none";
				document.getElementById('completed_click').style.background="#F60";
				document.getElementById('upcoming_click').style.background="000";
				document.getElementById('upcoming_click').style.color="#F60";
				document.getElementById('completed_click').style.color="#000";
}
function upcoming_func()
{
				document.getElementById('completed').style.display="none";
				document.getElementById('upcoming').style.display="block";
				document.getElementById('upcoming_click').style.background="#F60";
				document.getElementById('completed_click').style.background="000";
				document.getElementById('completed_click').style.color="#F60";
				document.getElementById('upcoming_click').style.color="#000";
}