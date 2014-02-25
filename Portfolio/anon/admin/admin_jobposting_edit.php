<?php
session_start();
ini_set('session.gc_maxlifetime', 20);
ini_set('session.gc_divisor', 1);
ini_set('display_errors',false);
require_once("cuteeditor_files/include_CuteEditor.php");
require("../includes/functions.php");
getDB();
require("header.php");

	//echo $_SESSION['timein'];
	$_SESSION['timein'];
	//echo "<br/>";
	//echo $_SESSION['session_time'] = time(); //got the login time for user in second
	$_SESSION['session_time'] = time(); //got the login time for user in second
	//echo "<br/>";
	//echo $difference= $_SESSION['session_time'] - $_SESSION['timein'];
	$difference= $_SESSION['session_time'] - $_SESSION['timein'];
	//echo "<br/>";
	
	$session_logout = 30*60; //it means 15 minutes.
	//and then cek the time session
	if($difference >= $session_logout)
	{
		//user session time is up
       //destroy the session
      //session_destroy();
     //redirect to login page
	  $_SESSION['timed_out']="Your session has been timed out!  Please login again.";
     redirect("index.php");
    }
	
	$job_id_edit=$_GET['job_id_edit'];
	$job_id_update=$_POST['job_id_update'];
	$job_title_update=$_POST['job_title_update'];	
	$job_desc_update=$_POST['job_desc_update'];
	$client_name_update=$_POST['client_name_update'];
	$client_alias_update=$_POST['client_alias_update'];
	$rece_emails_update=$_POST['rece_emails_update'];
	$min_exp_update=$_POST['min_exp_update'];
	$max_exp_update=$_POST['max_exp_update'];
	$job_location_update=$_POST['job_location_update'];
	$skill_set_update=$_POST['skill_set_update'];
?>
	<html>
		<head>
			<title>Job Edit</title>
			<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
            <meta http-equiv="refresh" content="1800;">
				<script type="text/javascript" src="../scripts/jobposting_edit.js"></script>
		</head>
		<body onLoad="job_edit_focus()">
			<?php
				if(isset($job_id_update))
				{
					//echo "hai";
					$job_update_query="update job set title='$job_title_update',description='$job_desc_update',company='$client_name_update',company_alias='$client_alias_update',receive_emails_at='$rece_emails_update',min_exp='$min_exp_update',max_exp='$max_exp_update',location='$job_location_update',skillset='$skill_set_update' where jobid='$job_id_update'";
					$job_update_result=mysql_query($job_update_query);
					if($job_update_result)
					{
			?>
        	<table border="0" height="200">
        		<tr>
            		<td valign="top" style="color:#F00;">
						<?php
							echo "Datas updated successfully";
							echo "&nbsp;";
							echo "&nbsp;";
						?>
            		</td>
					<td valign="top"><a class="admin_link" href="admin_jobposting_view.php">Go to View Page</a></td>
              	</tr>
           	</table>
			<?php
					}	
				}
				else
				{
					$job_edit_query="select * from job where jobid='$job_id_edit'";
					$job_edit_result = mysql_query($job_edit_query);
			?>
			<form name="job_edit">
				<table height="1" border="1" align="center">
					<tr>
                    	<th colspan="7" align="center">Job Edit</th>
                  	</tr>
					<?php
						if($job_edit_result)
						{
					 		while($job_edit_out=mysql_fetch_object($job_edit_result))
	 						{
								$job_id_update=$job_edit_out->jobid;
								$job_title_update=$job_edit_out->title;
								$job_desc_update=$job_edit_out->description;
								$client_name_update=$job_edit_out->company;
								$client_alias_update=$job_edit_out->company_alias;
								$rece_emails_update=$job_edit_out->receive_emails_at;
								$min_exp_update=$job_edit_out->min_exp;
								$max_exp_update=$job_edit_out->max_exp;
								$job_location_update=$job_edit_out->location;
								$skill_set_update=$job_edit_out->skillset;
					?>
					<tr>
                    	<td><label class="label_class">Job Title</label></td>
						<td><input type="text" name="job_title_update" id="job_title_update" size="53" value="<?php echo $job_title_update; ?>"/>
							<input type="hidden" name="job_id_update" id="job_id_update" value="<?php echo $job_id_update; ?>"/>
						</td>
                  	</tr>
					<tr>
                    	<td><label class="label_class">Job Description</label></td>
						<td><?php    
								//Step 2: Create Editor object.    
								$editor=new CuteEditor();    
								$editor->Text=$job_desc_update;     
								//Step 3: Set a unique ID to Editor    
								$editor->ID="job_desc_update";     
								//Step 4: Render Editor    
								$editor->Draw();    
					            ?>
                        </td>
                  	</tr>
                	<tr>
                    	<td><label class="label_class">Client Name</label></td>
						<td><input type="text" size="53" name="client_name_update" id="client_name_update" value="<?php echo $client_name_update; ?>"/>
                        </td>
                  	</tr>

					<tr>
                    	<td><label class="label_class">Client Alias</label></td>
						<td><input type="text" size="53" name="client_alias_update" id="client_alias_update" value="<?php echo $client_alias_update; ?>"/>
                        </td>
                  	</tr>
                    
                    <tr>
                    	<td><label class="label_class">Receive Emails At</label></td>
						<td><input type="text" size="53" name="rece_emails_update" id="rece_emails_update" value="<?php echo $rece_emails_update; ?>"/>
                        </td>
                  	</tr>

					<tr>
                    	<td><label class="label_class">Location</label></td>
						<td><input type="text" size="53" name="job_location_update" id="job_location_update" value="<?php echo $job_location_update; ?>"/>
                        </td>
                  	</tr>
					
					<tr>
                    	<td><label class="label_class">Skill Set</label></td>
						<td><textarea cols="40" rows="10" size="70" name="skill_set_update" id="skill_set_update"><?php echo $skill_set_update; ?></textarea>
                        </td>
                  	</tr>
                    
                    <tr>
                      <td><label class="label_class">Min Experience</label></td>
                      <td><input type="text" size="53" name="min_exp_update" id="min_exp_update" value="<?php echo $min_exp_update; ?>"/></td>
				  </tr>
                  <tr>
                    <td><label class="label_class">Max Experience</label></td>
                    <td><input type="text" size="53" name="max_exp_update" id="max_exp_update" value="<?php echo $max_exp_update; ?>"/></td>
                    </tr>
                  
                	<?php	
			 				}
						}
					?>
					<tr>
                    	<td align="center" colspan="2"><input type="button" value="Update" onClick="update_job_func()"/></td>
                   	</tr>
				</table>
</form>
				<?php
				}
				?>
    				</td>
 				 </tr>
			</table>
		</body>
	</html>
