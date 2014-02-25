<?php
	
	require("../includes/functions.php");
	require_once("cuteeditor_files/include_CuteEditor.php");
	getDB();
	require("header.php");	
	session_start();
	ini_set("display_errors",false);
	//ini_set("session_cache_expire",5);
	
	//echo $_SESSION['timein'];
	$_SESSION['timein'];
	//echo "<br/>";
	//echo $_SESSION['session_time'] = time(); //got the login time for user in second
	$_SESSION['session_time'] = time(); //got the login time for user in second
	//echo "<br/>";
	//echo $difference= $_SESSION['session_time'] - $_SESSION['timein'];
	$difference= $_SESSION['session_time'] - $_SESSION['timein'];
	//echo "<br/>";
	//exit;
	$session_logout = 30*60; //it means 5 minutes
	//$session_logout = 2; //it means 2 seconds.
	//and then cek the time session
	if($difference >= $session_logout){
		//user session time is up
       //destroy the session
      //session_destroy();
     //redirect to login page
	  $_SESSION['timed_out']="Your session has been timed out!  Please login again.";
     redirect("index.php");
    } 
	
	/*session_set_cookie_params(time()+5);*/
	
	/*$inactive = 600;
	echo time();
	echo "<br/>";
	echo $_session['timeout']=time();
	echo "<br/>";
	echo $session_life = time() - $_session['timeout'];
	echo "<br/>";

	//exit;
	if($session_life < $inactive)
	{ 
		session_destroy(); header("Location: index.php");
	}	*/
	
	
	/*ini_set('session.cookie_lifetime', 5);
	ini_set('session.gc_maxlifetime', 5);
	ini_set('session.gc_divisor', 1);*/

	

	
	/*ini_set('session.gc_maxlifetime', 5);
	$tie=ini_get('session.gc_maxlifetime');
	echo $tie;
	ini_set('session.gc_probability', 1);
	ini_set('session.gc_divisor', 1);*/

	/*ini_set('session.gc_probability', 1);
	ini_set('session.gc_divisor', 1);
	ini_set('session.gc_maxlifetime', 20);
	ini_set('session.cookie_lifetime', 20);
	ini_set('session.use_only_cookies', 1);
	ini_set('session.use_trans_sid', 0);*/
	
	
	/*ini_set('session.cookie_lifetime', 0); // browser cookie deletion on browser close
	ini_set('session.gc_maxlifetime', 5	); // 10 minutes
	ini_set('session.gc_probability', 1); // see next line...
	ini_set('session.gc_divisor', 100); // in combination with previous 
	ini_set, this will make GC run 
	on 1% of the requests*/
	
		$job_title=$_POST['job_title'];
		//echo "<br/>";
		$job_desc=$_POST['job_desc'];
		//echo "<br/>";
		$client_name=$_POST['client_name'];
		//echo "<br/>";
		$client_alias=$_POST['client_alias'];
		//echo "<br/>";
		$job_location=$_POST['job_location'];
		//echo "<br/>";
		
		
		$job_location_count=count($job_location);
		$job_location_count=$job_location_count-1;
		//exit;
		for($i=0;$i<count($job_location);$i++)
		{	
			$joblocation.= $job_location[$i];
			if($i<(count($job_location)-1))
			{
				$joblocation.=", ";
			}
		}
		$joblocation.= ".";
		//exit;
		
		
		
		$job_code=$_POST['job_code'];
		//echo "<br/>";
		//exit;
		$rece_emails=$_POST['rece_emails'];
		//echo "<br/>";
		$skill_set=$_POST['skill_set'];
		//echo "<br/>";
		$min_exp=$_POST['min_exp'];
		//echo "<br/>";
		$max_exp=$_POST['max_exp'];
	
		/*$skill_set_count=count($skill_set);
		$skill_set_count=$skill_set_count-1;
		//exit;
		for($i=0;$i<count($skill_set);$i++)
		{	
			$job_skillset.= $skill_set[$i];
			if($i<(count($skill_set)-1))
			{
				$job_skillset.=","."&nbsp;";
			}
		}
		//echo $job_skillset.= ".";
		//exit;*/
		
		
?>
		<html>
			<head>
				<title>Add Jobs</title>
					<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
                    <meta http-equiv="refresh" content="1800;">
						<script type="text/javascript" src="../scripts/jobposting.js"></script>
					<link href="../css/anon_jobhosting.css" rel="stylesheet" type="text/css"/>
			</head>
				<body onLoad="job_focus();">
			<?php
			if(isset($job_title) && isset($client_name))
			{
				
				$job_query="select * from job where title='$job_title' and company='$client_name'";
				$job_result=mysql_query($job_query);
				$noofrows=mysql_num_rows($job_result);
					
				if($noofrows>0)
				{
					//echo "hello";
					//$job_update_query="update job set 						title='$job_title',description='$job_desc',company='$client_name',company_alias='$client_alias',min_exp='$min_exp',max_exp='$max_exp',location='$job_location',skillset='$skillsets' where jobid='$jobid'";
					$job_update_result=mysql_query($job_update_query);
			?>
			<table border="0" height="200">
				<tr>
                	<td valign="top">
						<?php
							echo "This job is added already";
							echo "&nbsp;";
							echo "&nbsp;";
						?>
						<a class="admin_link" href="admin_jobposting.php">Go to job posting page</a></td></tr></table>
						<?php
				}
				else
				{
					//echo "hello1";
					$job_active=1;
					$job_add_query="insert into job (job_code,title,description,company,company_alias,receive_emails_at,min_exp,max_exp,location,skillset,job_active) values('$job_code','$job_title','$job_desc','$client_name','$client_alias','$rece_emails','$min_exp','$max_exp','$joblocation','$skill_set','$job_active')";
					//exit;
					$job_add_result=mysql_query($job_add_query);
		
					if($job_add_result)
					{
						//echo "hello2";
						?>
						<table border="0" height="200">
							<tr>
                        		<td valign="top">
									<?php
                                    	echo "Job is added successfully";
										$jobid_query="select jobid from job where title='$job_title' and company='$client_name'";
										$jobid_result=mysql_query($jobid_query);
										$jobid_out=mysql_fetch_array($jobid_result);
										$jobid=$jobid_out['jobid'];
										echo "&nbsp;";
										echo "&nbsp;";
									?>
									<a class="admin_link" href="admin_jobposting.php">Go to job posting add page</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a class="admin_link" href="admin_jobposting_view.php">Go to job posting view page</a>
                              	</td>
                         	</tr>
                   	</table>
									<?php
					}
					else
					{
						//echo "hello3";
									?>
						<table border="0" height="200">
							<tr>
                            	<td valign="top">
									<?php
										echo "Job not added";
										echo "&nbsp;";
										echo "&nbsp;";
									?>
									<a class="admin_link" href="admin_jobposting.php">Go to job posting add page</a></td></tr></table>
									<?php
					}
				}
			}
			else
			{
									?>
				<table border="3" align="center" style="border-collapse:collapse">
					<form name="jobposting_add" enctype="multipart/form-data">
						<tr>
                        	<td><label class="label_class">Job Title</label></td>
							<td><input type="text" name="job_title" size="125" id="job_title"/></td>
                       	</tr>
						<tr>
						  <td><label class="label_class">Job Code</label></td>
						  <td><input type="text" name="job_code" size="125" id="job_code"/></td>
					  </tr>
						<tr>
                        	<td><label class="label_class">Job Description</label></td>
                            <td><?php    
								//Step 2: Create Editor object.    
								$editor=new CuteEditor();    
								$editor->Text="Type here";     
								//Step 3: Set a unique ID to Editor    
								$editor->ID="job_desc";     
								//Step 4: Render Editor    
								$editor->Draw();    
					            ?>
                           	</td>
							<!--<td><textarea cols="31" rows="5" size="60" name="job_desc" id="job_desc"></textarea></td>-->                      	</tr>
						<tr>
                        	<td><label class="label_class">Client Name</label></td>
							<td><input type="text" name="client_name" size="125" id="client_name"/></td>
                      	</tr>
						<tr>
                        	<td><label class="label_class">Client Alias Name</label></td>
							<td><input type="text" name="client_alias" size="125" id="client_alias"/></td>
                      	</tr>
                        <tr>
                        	<td><label class="label_class">Receive Emails At</label></td>
							<td><input type="text" name="rece_emails" size="125" id="rece_emails"/></td>
                      	</tr>
						<tr>
                        	<td><label class="label_class">Location</label></td>
							<td><select name="job_location[]" id="job_location" class="testi" multiple>
									<option value="">Select Location</option>
										<?php
										  $location_query="select * from location where root_location = 0 order by locid asc";
										  $clrs=mysql_query($location_query);
										  while($rec = mysql_fetch_array($clrs))
										  {
								 		  ?>
                    			          	<optgroup  STYLE="BACKGROUND:#D0E0F1;COLOR:#000;font-size:11px" label="-----<?php echo $rec["location"]?>-----"></optgroup>
                              			  	<?php             
										  $location_query="select * from location where root_location = ".$rec["locid"]." order by locid asc";
										  $locrs=mysql_query($location_query);
										  while($l_rec = mysql_fetch_array($locrs))
										  {
										  ?>
											<option value="<?php echo $l_rec["location"]?>"><?php echo $l_rec["location"]?></option>
											<?php
										   }
			     						  }
								?>
					</select>

                            
                            <!--<select style="width:275px;" name="job_location" id="job_location">
                                    <option value="0">Select Location</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Kolkatta">Kolkatta</option>
                                    <option value="Bengaluru">Bengaluru</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Hyderabad">Hyderabad</option>
								</select>-->
                          	</td>
                      	</tr>
						<tr>
                        	<td><label class="label_class">Skill Set</label></td>
							<td><textarea cols="31" rows="5" size="125" name="skill_set" id="skill_set"></textarea></td>
                      	</tr>
						<tr>
                        	<td><label class="label_class">Minimum Experience</label></td>
							<td><input type="text" name="min_exp" size="125" id="min_exp"/></td>
                      	</tr>
						<tr>
                        	<td><label class="label_class">Maximum Experience</label></td>
							<td><input type="text" name="max_exp" size="125" id="max_exp"/></td>
                     	</tr>
						<tr>
                        	<td align="center"><input type="button" value="Add Jobs" onClick="add_func()"></td>
							<td align="center"><input type="reset" value="Refresh" onClick="job_focus()"></td>
                     	</tr>
					</form>
				</table>
				<?php
		}
				?>
					</td>
	  			</tr>
			</table>
        </body>
  	</html>
  	