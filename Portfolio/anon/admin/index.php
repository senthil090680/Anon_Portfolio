<?php
session_start();
ini_set("display_errors",false);
require("../includes/functions.php");
require("header.php");
//echo $_SESSION['timed_out'];
if(isset($_SESSION['wrong']))
{
	?>
	<!--<script>
	alert('<?php echo $_SESSION['wrong']; ?>');
	</script>-->
    <label style="color:#F00;">
	<?php echo $_SESSION['wrong']; ?>
    </label>
	<?php
	session_unset();
	session_destroy();
}
if(isset($_SESSION['timed_out']))
{	
	?>
    <label style="color:#F00;">
	<?php echo $_SESSION['timed_out']; ?>
    </label>
    <?php
	session_unset();
	//session_destroy();
	echo $_SESSION['timed_out'];
}

?>
<html>
	<head>
		<title>Admin Login</title>
			<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
				<!--<link rel="stylesheet" href="../css/general.css" type="text/css"/>-->
				<script type="text/javascript">
					function validate_func()
					{
						if(document.getElementById('user_name').value=="")
							{	
								alert("Please enter the username");	
								document.getElementById('user_name').focus();
							}
							else if(document.getElementById('pass_word').value=="")
							{
								alert("Please enter the password");
								document.getElementById('pass_word').focus();
							}
							else
							{
								document.form1.method="post";
								document.form1.action="login_confirm.php";
								document.form1.submit();
							}
					}
					function user_focus()
					{
						document.getElementById('user_name').focus();
					}
				</script>
	</head>
<body onLoad="user_focus()">
	<table border="0" align="center">
		<tr>
			<td valign="bottom">
        		<table border="0" align="center" width="100%">
            		<tr class="title"><th colspan=2 align="center">Admin Login</th></tr>
						<form name="form1">
							<tr>
                				<td>
                                	<label class="label_class" name="username">User Name</label>
                                </td>
								<td>
                                	<input type="text" name="user_name" id="user_name" style = "width:10em;"/>
                              	</td>
                			</tr>
						    <tr>
                				<td>
                                	<label class="label_class" name="passw">Password</label>
                              	</td>
								<td>
                                	<input type="password" name="pass_word" id="pass_word" style = "width:10em;" onKeyDown="if (event.keyCode==13){return validate_func();}"/>
                              	</td>
              				</tr>
							<tr>
                				 <td colspan="2" align="center">
                                 	<input type="button" value="Login" onClick="validate_func()">
                                 </td>
               				</tr>
						</form>
					</table>
				</td>
			</tr>
		</table>
	
    </td>
  </tr>
</table>
</body>
</html>
