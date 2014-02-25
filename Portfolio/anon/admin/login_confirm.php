<?php
	session_start();
	ini_set("display_errors",false);
	require("../includes/functions.php");
?>
<html>
	<head>
		<title>Login Confirm</title>
			<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	</head>
<body>
    <?php
    $user_name=$_POST['user_name'];
    $pass_word=$_POST['pass_word'];
    /*$con=mysql_connect("localhost","root","");
    if(!($con))
	{
		die("connection could not be made");
	}
	 mysql_select_db("anondb",$con); 
	 
	 $result="select * from user where username='$user_name' and password='$pass_word'";

	$result_query = mysql_query($result);
	if(mysql_num_rows($result_query) > 0)
	{
		redirect("admin_cat_add.php");
	}
	else
	{
		$_SESSION['wrong']="Please enter correct username and password";
		redirect("index.php");
	}*/
	if(($user_name=="admin") && ($pass_word=="anon"))
	{
		$_SESSION['admin']="senthil";
		$_SESSION['timein']=time();
		redirect("admin_jobposting.php");
	}
	else
	{
		$_SESSION['wrong']="Please enter correct username and password";
		redirect("index.php");
	}
?>

</body>
</html>