<?php
function getConnection()
{
	return mysql_connect("localhost","root","");
}
function getDB()
{
	$con = getConnection();
	if(!($con))
	{
		die("connection could not be made");
	}
	 mysql_select_db("anondb",$con); // local DB 
	//mysql_select_db("anondb_0820",$con);  // online DB
}
	 
	 
	 function imageResize($width, $height, $target) { 

//takes the larger size of the width and height and applies the  formula accordingly...this is so this script will work  dynamically with any size image 
if ($width > $height) { 
$percentage = ($target / $width); 
} else { 
$percentage = ($target / $height); 
} 

//gets the new value and applies the percentage, then rounds the value 
$width = round($width * $percentage); 
$height = round($height * $percentage); 

//returns the new sizes in html image tag format...this is so you can plug this function inside an image tag and just get the 

return "width=\"$width\" height=\"$height\""; 

} 

function redirect($url)
{
	if(!(headers_sent()))
	{
		header('Location:'.$url);
	}
	else
	{
		echo '<script type="text/javascript">';
		echo 'window.location.href="'.$url.'";';
		echo '</script>';
	}
}


	 
	 
	 
	 
?>