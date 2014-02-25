<?php	
session_start();
ini_set('session.gc_maxlifetime', 20);
ini_set('session.gc_probability', 1);
ini_set('session.gc_divisor', 1);
ini_set('display_errors',false);
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
	if($difference >= $session_logout){
		//user session time is up
       //destroy the session
      //session_destroy();
     //redirect to login page
	  $_SESSION['timed_out']="Your session has been timed out!  Please login again.";
     redirect("index.php");
    }
	
$job_id_del=$_GET['job_id_del'];
$job_id_reopen=$_GET['job_id_reopen'];
?>
	<html>
		<head>
			<title>Job View</title>
				<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
                <meta http-equiv="refresh" content="1800;">
					<script type="text/javascript" src="../scripts/jobposting_view.js"></script>
					    <link href="../css/anon_jobhosting.css" type="text/css" rel="stylesheet"/>
		</head>
		<body>
			<?php
				if(isset($job_id_del))
				{
					$del_name_query="select title from job where jobid='$job_id_del'";
					$del_name_result = mysql_query($del_name_query);
					$del_name_out = mysql_fetch_array($del_name_result);
					$del_name=$del_name_out['title'];
					$del_query="delete from job where jobid='$job_id_del'";
					$del_result = mysql_query($del_query);
					if($del_result)
					{	
						?>
                        <table border="0" width="100%">
                        	<tr>
                        		<td>
									<?php echo "Job : $del_name is deleted successfully"; ?>&nbsp;&nbsp;<a class="admin_link" href="admin_jobposting_nonactive_view.php">Go to job view page</a>
                               	</td>
                       
					<?php					
					}
				}
				else if(isset($job_id_reopen))
				{
					$reopen_name_query="select title from job where jobid='$job_id_reopen'";
					$reopen_name_result = mysql_query($reopen_name_query);
					$reopen_name_out = mysql_fetch_array($reopen_name_result);
					$reopen_name=$reopen_name_out['title'];
					$reopen_query="update job set job_active=1 where jobid='$job_id_reopen'";
					$reopen_result = mysql_query($reopen_query);
					if($reopen_result)
					{	
						?>
                        <table border="0" width="100%">
                        	<tr>
                        		<td>
									<?php echo "Job : $close_name is re-opened successfully"; ?>&nbsp;&nbsp;<a class="admin_link" href="admin_jobposting_nonactive_view.php">Go to job view page</a>
                               	</td>
                       
					<?php					
					}
				}
				else
				{
					$result_query="select * from job where job_active='0'";
		 	?>
			<table border="1" align="center">
				<tr>
                	<th class="title" colspan="15" align="center">Jobs</th>
                </tr>
				<tr class="sub_title"><th>Job Title</th>
                					  <!--<th>Job Description</th>-->
                                      <th>Client Name</th>
                                      <th>Client Alias</th>
                                      <!--<th>Receive Emails At</th>-->
                                      <th>Location</th>
                                      <th>Skill Set</th>
                                      <th>Minimum Experience</th>
                                      <th>Maximum Experience</th>
                                      <th>Edit</th>
                                      <th>Delete</th>
                                      <th>Reopen Job</th>
              	</tr>
				<?php 
					$result_query = mysql_query($result_query);
				?>
			    <form name="job_view">
					<?php
						while($row=mysql_fetch_array($result_query))
						{
							$job_id=$row['jobid'];
							$job_title=$row['title'];
							//echo $job_desc=$row['description'];
							$client_name=$row['company'];
							$client_alias=$row['company_alias'];
							$rece_emails=$row['receive_emails_at'];
							//exit;
							$min_exp=$row['min_exp'];
							$max_exp=$row['max_exp'];
							$job_location=$row['location'];
							$skill_set=$row['skillset'];
					?>
				<tr>
                	<td colspan="11" align="center"><input type="hidden" name="job_id" id="job_id" value="<?php echo $job_id; ?>"/></td>
                </tr>
				<tr>
                	<td><input type="hidden" name="job_title" id="job_title" value="<?php echo $job_title; ?>"/>
							<label class="label_class" ><?php echo $job_title; ?></label>
                    </td>
					<!--<td><label class="label_class"><?php echo $job_desc; ?></label>
					 	 <input type="hidden" name="job_desc" id="job_desc" value="<?php echo $job_desc; ?>"/>
                   	</td>-->
					<td><label class="label_class"><?php echo $client_name; ?></label>
							<input type="hidden" name="client_name" id="client_name" value="<?php echo $client_name; ?>"/>
                    </td>
					<td><label class="label_class"><?php echo $client_alias; ?></label>
							<input type="hidden" name="client_alias" id="client_alias" value="<?php echo $client_alias; ?>"/>
                   	</td>
					<!--<td><label class="label_class"><?php echo $rece_emails; ?></label>
							<input type="hidden" name="rece_emails" id="rece_emails" value="<?php echo $rece_emails; ?>"/>
                   	</td>-->

					<td><label class="label_class"><?php echo $job_location; ?></label>
							<input type="hidden" name="job_location" id="job_location" value="<?php echo $job_location; ?>"/>
                   	</td>
    				<td><label class="label_class"><?php echo $skill_set; ?></label>
							<input type="hidden" name="skill_set" id="skill_set" value="<?php echo $skill_set; ?>"/>
                    </td>
					<td><label class="label_class"><?php echo $min_exp; ?></label>
							<input type="hidden" name="min_exp" id="min_exp" value="<?php echo $min_exp; ?>"/>
                    </td>	
    				<td><label class="label_class"><?php echo $max_exp; ?></label>
							<input type="hidden" name="max_exp" id="max_exp" value="<?php echo $max_exp; ?>"/>
                    </td>
    				<td>
                    	<a class="admin_link" href="admin_jobposting_nonactive_edit.php?job_id_edit=<?php echo $job_id; ?>">Edit</a>
                    </td>
					<td>
                    	<a class="admin_link" href="javascript:del_func('<?php echo $job_id; ?>','<?php echo $job_title; ?>')" >Delete</a>
                    </td>
                    <td>
                    	<a class="admin_link" href="javascript:reopen_func('<?php echo $job_id; ?>','<?php echo $job_title; ?>')" >Reopen Job</a>
                    </td>
            	</tr>
				<?php	
				}
				?>
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