<?php
ini_set("display_errors",false);
require("../includes/functions.php");
getDB();
$contacts=$_REQUEST['contacts'];  //This is to display about contacts

//echo $fri_name=$_POST['fri_name'];
$fri_name=$_POST['fri_name'];
//echo $fri_email=$_POST['fri_email'];
$fri_email=$_POST['fri_email'];
//echo $your_name=$_POST['your_name'];
$your_name=$_POST['your_name'];
//echo $your_email=$_POST['your_email'];
$your_email=$_POST['your_email'];
//echo $your_mobile=$_POST['your_mobile'];
$your_mobile=$_POST['your_mobile'];
//echo $job_id=$_POST['jobid'];
$job_id=$_POST['jobid'];

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" type="text/css" href="style_contact.css" />
<script type="text/javascript" src="refer_a_friend.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>Refer a Friend</title>
</head>

<body>
        	
  
    
	<?php	
	if(isset($fri_email))
		{
		?>
			
             		
            					<table border="0" style="background:white;" width="95%" cellpadding="4" cellspacing="2">
		<?php
		
		
		//echo $to_admin="info@anonsolutions.in";
		$to_admin="info@anonsolutions.in";
		//echo $contact_subject="Job Details";
		$contact_subject="Job Details";
		//echo $fri_name=ucwords($fri_name);
		$fri_name=ucwords($fri_name);
		$jobs_query="select * from job where jobid='$job_id'";
		$jobs_result=mysql_query($jobs_query);
		$jobs_out=mysql_fetch_array($jobs_result);
		echo $contact_msg='<table border="0" width="600">
														<tr>
                                                          <td colspan="2" align="left"><div class="title" align="left">I was browsing through ‘Hot Openings’ in <a href="http://www.anonsolutions.in" target="_blank">www.anonsolutions.in</a> and found the below job which might suit your skill set. If you are interested, you can apply for the job using the link given below.<br><br/>
                                                          </div></td>
                                                        </tr>
                                                        <tr valign="top">
                                                          <td class="tdtext" width="25%">Job Title :</td>
                                                          <td class="tdtext" width="75%">'.$jobs_out['title'].'</td>
                                                        </tr>
														
														<tr valign="top">
                                                          <td class="tdtext">Experience Required:</td>
                                                          <td class="tdtext">'.$jobs_out['min_exp'].'-'.$jobs_out['max_exp'].'&nbsp; years</td>
														</tr>
														
														 <tr valign="top">
                                                          <td class="tdtext">Job Location :</td>

                                                          <td class="tdtext">'.$jobs_out['location'].'</td>
                                                        </tr>
														
                                                        <tr valign="top">
                                                          <td class="tdtext">Company : </td>
                                                          <td class="tdtext">'.$jobs_out['company'].'</td>
                                                        </tr>
														
														<tr valign="top">
                                                          <td colspan="2" class="tdtext">Job Description:</td>
                                                        </tr>
                                                        
														<tr valign="top">
                                                          <td colspan="2" class="tdtext">'.$jobs_out['description'].'<br/><br/></td>
                                                        </tr>
                                                        
                                                     	<tr valign="top">
                                                          <td class="tdtext" colspan="2" align="left">Apply Link :   &nbsp;&nbsp;&nbsp;<a href="http://www.anonsolutions.in/openings.php?job='.$job_id.'" target="_blank">http://www.anonsolutions.in/openings.php?job='.$job_id.'</a><br/><br/></td>
                                                        </tr>
														
														<tr valign="top">
                                                          <td class="tdtext">From,</td>
                                                        </tr>
														<tr valign="top">
                                                          <td class="tdtext">'.ucwords($your_name).'<br/><br/></td>
                                                        </tr>
														
														<tr valign="top">
                                                          <td colspan="2" class="tdtext">Disclaimer: This is an automated message generated from <a href="http://www.anonsolutions.in" target="_blank">www.anonsolutions.in</a> when you have been referred as friend by '.ucwords($your_name).'.
</td>
                                                        </tr>
														
													</table>';
												$headers = "MIME-Version: 1.0" . "\r\n";
												$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
												$headers .= "From: ".$your_email."\r\n";
		//echo $to_friend=$fri_email;
		$to_friend=$fri_email;
		//exit;
		$mail_confirm_admin=mail($to_admin,$contact_subject,$contact_msg,$headers);
		$mail_confirm_friend=mail($to_friend,$contact_subject,$contact_msg,$headers);
		if($mail_confirm_admin && $mail_confirm_friend)
		{
			redirect("refer_a_friend.php?contacts=msg");
		}
			else
			{
				redirect("refer_a_friend.php?contacts=err");			
			}
			?>
            			</table>
            	
			<?php
		}

		else
		{
			?>           		<table border="0" width="100%" align="center" height="580" cellpadding="20" cellspacing="8">
            			<tr>
                       	  <td>
                           <label style="color:#F00;"> <?php if($_GET['contacts']=="msg") echo "Your Mail has been sent.";?>
                            <?php if($_GET['contacts']=="err") echo "Sorry,Your Mail has not been sent."; //$job_id=2; ?></label>
            				<table  border="0" style="background:white;" width="600" cellpadding="4" cellspacing="2">

            						<tr>
            						  <td   colspan="2" class="contact_padding"><strong></strong></td>        						  
          						  </tr>
                                  <!--<tr>
                                  		<td class="contact_padding"><label style="font-family:Arial, Helvetica, sans-serif; color:#C03; font-size:14px; font-weight:bold">You can contact us using the below form:</label></td>
            						<tr>-->
                                    	    <td>
                                        	<table border="0" cellpadding="4">
                                              <form name="contact_page">
                                    			<tr>
			                                    	<td width="167" class="contact_padding"><label class="label_name">Friend's Name:</label></td>
            			                            <td width="282"><input size="32" type="text" name="fri_name" id="fri_name"/></td>
                        			           	</tr>
                                    			<tr>
                                    				<td class="contact_padding"><label class="label_name">Friend's E-mail:</label></td>
                                        			<td><input size="32" type="text" name="fri_email" id="fri_email"/></td>
                                   				</tr>
                                    			
                                                <tr>
                                    				<td class="contact_padding"><label class="label_name">Your Name:</label></td>
                                        			<td><input type="text" name="your_name" id="your_name" value="" size="32" /></td>
                                   				</tr>
                                                
                                                <tr>
                                    				<td class="contact_padding"><label class="label_name">Your E-mail:</label></td>
                                        			<td><input type="text" name="your_email" id="your_email" value="" size="32" /></td>
                                   				</tr>
                                    			<tr>
                                    				<td class="contact_padding"><label class="label_name">Friend's Contact Number:</label></td>
                                        			<td><input type="text" name="your_mobile" id="your_mobile" value="" size="32" />
                                                    <input type="hidden" name="jobid" id="jobid" value="<?php echo $job_id; ?>"/></td>
                                   				</tr>
                                    			<tr>
                                    				<td colspan="2" align="center"><input type="button" value="Send request" onclick="return contact_func()"/>
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
        <?php
        }
        ?>
 	</body>
</html>