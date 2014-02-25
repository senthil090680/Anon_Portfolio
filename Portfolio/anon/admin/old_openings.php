<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Anon Solutions - Staffing Services</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="../../../wamp/www/anon09/css/style.css" rel="stylesheet" type="text/css">
<style>
.outerDiv{width:600px;}
.innerDiv{width:600px; height:400px; background-color:#ffffff; border-left:1px solid #797301; border-right:1px solid #797301;}
.rtop *,.rbottom *{display:block; height:1px; overflow:hidden;}
.r1{border-left:2px solid; border-right:2px solid; background-color:#797301; border-color:#797301; margin-left:7px; margin-right:7px;}
.r2{border-left:2px solid; border-right:2px solid; margin-left:5px; margin-right:5px;}
.r3{border-left:1px solid; border-right:1px solid; margin-left:4px; margin-right:4px;}
.r4{border-left:1px solid; border-right:1px solid; margin-left:3px; margin-right:3px;}
.r5{border-left:1px solid; border-right:1px solid; margin-left:2px; margin-right:2px;}
.r6{border-left:1px solid; border-right:1px solid; margin-left:1px; margin-right:1px; height:2px;}
.r7{border-left:1px solid; border-right:1px solid; height:2px;}
.r2,.r3,.r4,.r5,.r6,.r7{border-color:#797301; background-color:#797301}
</style>
<script type="text/javascript" language="javascript">
function page_ref()
{
	var can_name=document.forms.profile.name;
	var can_mobno=document.forms.profile.mobno;	
	var can_emailid=document.forms.profile.emailid;		
	var can_total_exp=document.forms.profile.total_exp;			
	var can_rel_exp=document.forms.profile.rel_exp;				
	var can_profile1=document.forms.profile.profile;
	var can_profile2=document.forms.profile.resume;	
	if(can_name.value=='')
	{
		alert('Please enter your name');
		can_name.focus();
		return false;
	}
	if(can_emailid.value=='')
	{
		alert('Please Enter your Emailid');
		can_emailid.focus();
		return false;
	
	}
	if(can_emailid.value!='')
	{
		var arr=can_emailid.value.split("@");
		if(arr[0]!=null && arr[0]!="" && arr[1]!=null && arr[1]!="" )
		{
			var arr1=arr[1].split(".");
			if(arr1[0]!=null && arr1[0]!="" && arr1[1]!=null && arr1[1]!="" )
		{
	}
	else
	{
		alert('invalid email');
		can_emailid.focus();
		return false;
	}
	}
	else
	{
		alert('invalid email');
		can_emailid.focus();
		return false;
	}
	}
	if(can_mobno.value=='')
	{
		alert('Please enter your mobile no');
		can_mobno.focus();
		return false;
	}
	if(isNaN(can_mobno.value))
	{
		alert('Contact No should contain only numbers');
		can_mobno.focus();
		return false;
	}
	if(can_mobno.value.length<10)
	{
		alert('Enter 10 digit mobile number');
		can_mobno.focus();
		return false;
	}
	if(can_total_exp.value=='')
	{
		alert('Please enter your total exp');
		can_total_exp.focus();
		return false;
	}
	if(isNaN(can_total_exp.value))
	{
		alert('Total experience should contain only numbers');
		can_total_exp.focus();
		return false;
	}
	if(can_rel_exp.value=='')
	{
		alert('Please Enter your relavent exp');
		can_rel_exp.focus();
		return false;
	
	}
	if(isNaN(can_rel_exp.value))
	{
		alert('Relavent experience should contain only numbers');
		can_rel_exp.focus();
		return false;
	}

	if(can_profile1.value=='' && can_profile2.value=='')
	{
		alert('Please attach or paste your profile');
		can_profile1.focus();
		return false;
	}

	document.forms.profile.action="apply.php";
	document.forms.profile.method="post";
	document.forms.profile.submit();
}
function validation()
{
	var skills=document.forms.job_search.skills;
	var experience=document.forms.job_search.experience;
	var location=document.forms.job_search.location;
	if(skills.value=='')
	{
		alert('Please enter the skills');
		skills.focus();
		return false;	
	}
	if(skills.value.indexOf(" ")>=1)
	{
		alert("Please use ',' to separate your skill search avoid space in betwwen skills ");
		skills.focus();
		return false;
	}
	if(isNaN(experience.value))
	{
		alert('Please avoid characters in experience field');
		experience.focus();
		return false;	
	}
	if(location.selectedIndex<1)
	{
		alert('Please select Job location');
		location.focus();
		return false;
	}
	document.forms.job_search.action="openings1.php?search="+true;
	document.forms.job_search.method="post";
	document.forms.job_search.submit();
}
</script>
<?php
include("functions.php");
$con=getConnection();
if(!($con))
{
	die("connection could not be made");
}
mysql_select_db("anondb",$con);
?>
</head>

<body bgcolor="#E0E0E0" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<table width="900" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
   <td bgcolor="#FFFFFF"><?php
   include('header.php');
   ?></td>
  </tr>
  <tr>
   <td bgcolor="#ffffff">
	<table width="900" border="0" cellspacing="0" cellpadding="0">    
     <tr> 
      <td>
       <table width="900" border="0" cellspacing="0" cellpadding="0">
        <tr> 
          <td valign="top">
             <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr> 
                  <td height="174" align="left" valign="top" background="../../../wamp/www/anon09/images/redbg.jpg"> 
                   <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="642" height="174">
                             <param name="movie" value="../../../wamp/www/anon09/swf/openings.swf">
                              <param name="quality" value="high">
                              <embed src="../../../wamp/www/anon09/swf/openings.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="642" height="174"></embed>
                   </object>
                 </td>
                </tr>
                <tr> 
                 <td height="3">&nbsp;</td>
                </tr>
                <tr> 
                 <td><?php include('staffing_menu.php');?></td>
                </tr>
                <tr> 
                 <td>&nbsp;</td>
                </tr>
               </table>
          </td>
          <td width="249" height="245" align="center" valign="top">
			<table width="100%" border="0" cellpadding="0" cellspacing="0" bordercolor="#666600">
             <tr>
               <td>
               <form name="job_search">
               <table width="100%" border="0" cellspacing="0" cellpadding="10">
                  <tr align="center" class="tdtext"> 
                    <td colspan="2" class="title">Search Job</td>
                  </tr>
                  <tr bgcolor="#FF9900" class="tdtext"> 
                    <td width="30%">Enter Skill*</td>
                    <td> <input name="skills" type="text" class="tdtext" value="" size="20" id="skills">
                      <br>
                      (use comma)</td>
                  </tr>
                  <tr bgcolor="#FF9900" class="tdtext"> 
                    <td width="30%">Experience</td>
                    <td> <input name="experience" type="text" class="tdtext" value="" size="5" id="exp"></td>
                  </tr>
                  <tr bgcolor="#FF9900" class="tdtext"> 
                    <td width="30%">Location</td>
                    <td>
                     <?php
                     $location_query="select * from location order by locid asc";
                     $location_result=mysql_query($location_query);
                     if(mysql_num_rows($location_result)>0)
                     {?>
                     <select name="location" class="tdtext">
                    <?php
                     while($location_row=mysql_fetch_array($location_result))
                     {
                     ?>
                     <option value='<?php echo $location_row['location']?>'><?php echo $location_row['location']?></option>
                     <?php
                     }
                     }
                    ?>
                    </select>
                    </td>
                  </tr>
                  <tr align="center"> 
                    <td colspan="2"> 
                    <input type="hidden" name="remove_session" value="1">
                    <input type="button" name="Submit" value="Search" class="tdtext" onClick="validation();"> 
                    </td>
                  </tr>
                </table>
                </form> 
                </td>
              </tr>
            </table>
           </td>
           <td width="9" valign="top">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr> 
                <td><img src="../../../wamp/www/anon09/images/redsideline.jpg"></td>
              </tr>
              <tr> 
	            <td>&nbsp;</td>
              </tr>
              <tr> 
                <td><img src="../../../wamp/www/anon09/images/blacksideline.jpg"></td>
              </tr>
            </table>
           </td>
         </tr>
         <tr> 
           <td valign="top">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
             <tr> 
              <td width="10">&nbsp;</td>
                <td colspan="2" align="left" valign="top"> 
                  <table width="632" border="0" cellspacing="0" cellpadding="0">
                    <tr> 
                      <td colspan="2"><img src="../../../wamp/www/anon09/images/openingssubhead.jpg"></td>
                     </tr>
                      <tr> 
                            <td height="3" valign="top">&nbsp;</td>
                            <td align="left" valign="top">&nbsp;</td>
                      </tr>
                          <tr> 
                            <td colspan="2" valign="top" class="tdtext">
                             <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr> 
                                <td> 
                                 <?php
								if(isset($_GET["job"]) && ($_GET["job"]!="" || $_GET["job"]!=NULL))
								{
								?>
                                    <br> <table width="95%" border="0" align="center" cellpadding="2" cellspacing="0">
                                      <?php 
										$job_search=1;
									    $jobid=$_GET["job"];
										if(isset($_GET["job_search"]))
										{
											$job_search=$_GET["job_search"];
										}
										$seljobrow=mysql_fetch_array(mysql_query("select * from job where jobid=".$jobid));
										$job_id=$seljobrow['jobid'];
										$job_title=$seljobrow['title'];
										$job_desc=$seljobrow['description'];
										$job_skillset=$seljobrow['skillset'];
										$job_location=$seljobrow['location'];
										$job_company=$seljobrow['company_alias'];
										$job_exp=$seljobrow['min_exp']."-".$seljobrow['max_exp'].' Years';
		                            ?>
                                      <tr> 
                                        <td> <div class="outerDiv"> <b class="rtop"><b class="r1"></b><b class="r2"></b><b class="r3"></b><b class="r4"></b><b class="r6"></b><b class="rtop"><b class="r5"></b></b><b class="r7"></b></b> 
                                            <div class="innerDiv"> 
                                              <form name="profile" enctype="multipart/form-data">
                                                <table width="550" border="0" align="center" cellpadding="6" cellspacing="0">
                                                <?php 
		 										if($job_search==1)
												{

												 ?>
                                                  <tr> 
                                                    <td colspan="2"><div align="center" class="title">Job 
                                                        Details<br />
                                                      </div></td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td width="25%" class="tdtext">Title</td>
                                                    <td width="75%" class="tdtext"><?php echo $job_title?> 
                                                    </td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td class="tdtext">Job Description</td>
                                                    <td class="tdtext"><?php echo $job_desc?></td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td class="tdtext">Skills</td>
                                                    <td class="tdtext"><?php echo $job_skillset?></td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td class="tdtext">Experience</td>
                                                    <td class="tdtext"><?php echo $job_exp?></td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td class="tdtext">Company</td>
                                                    <td class="tdtext"><?php echo $job_company?></td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td class="tdtext">Location</td>
                                                    <td class="tdtext"><?php echo $job_location?></td>
                                                  </tr>
                                                  <tr> 
                                                    <td>&nbsp;</td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td colspan="2" bgcolor="#797301" class="tdtext" height="1"></td>
                                                  </tr>
                                                 <?php 
												 }
												 ?> 
                                                  <tr valign="top"> 
                                                    <td colspan="2" align="center" class="title"><div align="center">Fill 
                                                        the below form to Apply</div></td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td class="tdtext">Name</td>
                                                    <td><input type="text" name="name" id="name" class="tdtext"></td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td class="tdtext">EmailId</td>
                                                    <td><input type="text" name="emailid" id="emailid" class="tdtext"></td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td class="tdtext">Mobile 
                                                      No</td>
                                                    <td><input type="text" name="mobno" id="mobno" class="tdtext"></td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td class="tdtext">Experience</td>
                                                    <td class="tdtext">Total: 
                                                      <input name="total_exp" type="text" id="total_exp" size="5" maxlength="4" class="tdtext">&nbsp;
                                                      Relevant: <input name="rel_exp" type="text" id="rel_exp" size="5" maxlength="4" class="tdtext"></td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td class="tdtext">Attach 
                                                      your profile</td>
                                                    <td><input type="file" name="profile" id="profile" class="tdtext"></td>
                                                  </tr>
                                                  <tr valign="top"> 
                                                    <td class="tdtext">Paste Your 
                                                      Profile</td>
                                                    <td> <textarea name="resume" type="text" class="tdtext" id="resume" cols="50" rows="10"> </textarea>
                                                    </td>
                                                  </tr>
                                                  <tr> 
                                                    <td colspan="2"> <div align="center"> 
                                                        <input type="hidden" name="title" value='<?php echo $job_title?>'>
                                                        <input type="hidden" name="loc" value='<?php echo $job_location?>'>
                                                        <input type="hidden" name="exp" value='<?php echo $job_exp?>'>
                                                        <a href="#" onClick="page_ref();"><img src="../../../wamp/www/anon09/images/apply.jpg" border="0" /></a><br/>
                                                      </div></td>
                                                  </tr>
                                                </table>
                                              </form>
                                            </div>
                                            <b class="rbottom"><b class="r7"></b><b class="r6"></b><b class="r5"></b><b class="r4"></b><b class="r3"></b><b class="r2"></b><b class="r1"></b></b> 
                                          </div></td>
                                      </tr>
                                    </table>
	                               <?php }
								   elseif(isset($_GET['search']) && $_GET['search']==true)
								   {
									session_start();									
									$skills=$_POST["skills"];
									$exp=$_POST["experience"];
									$location=$_POST["location"];
									if(isset($_POST["remove_session"]) && $_POST["remove_session"]==1)
									{
										session_unset(); 
									}
										
									if(isset($_SESSION["skills"]) && isset($_SESSION["exp"]) && isset($_SESSION["location"]))
									{
										$skills=$_SESSION["skills"];
										$exp=$_SESSION["exp"];
										$location=$_SESSION["location"];
									}
									$_SESSION["skills"]=$skills;
									$_SESSION["exp"]=$exp;
									$_SESSION["location"]=$location;
									$exp_str="AND (min_exp<=".$exp."  AND  max_exp>=".$exp.")";
									$location_str="AND location='".$location."'";
									if(strstr($skills,','))
									{
										$skills_arr=split(',',$skills);
										for($i=0;$i<count($skills_arr);$i++)
										{
											$skill_str=$skill_str."( ( (title like '%".$skills_arr[$i]."%') OR (skillset like'%".$skills_arr[$i]."%') ) AND ( description like '%".$skills_arr[$i]."%') ) AND";
										}
									}
									else
									{
										$skill_str="( ( (title like '%".$skills."%') OR (skillset like'%".$skills."%') ) AND ( description like '%".$skills."%') ) AND";
									}
									$skill_str=substr($skill_str,0,strlen($skill_str)-4);
									//Paging coding
									if($exp==NULL)
									{
										$exp_str="";
									}								
									if($location=='Anywhere')
									{
										$location_str="";		
									}	
									$search_query="select * from job where ".$skill_str.$exp_str.$location_str;									
									$rowsPerPage = 1;
									$pageNum = 1;
									if(isset($_GET['page']))
									{
										$pageNum = $_GET['page'];
									}
									$offset = ($pageNum - 1) * $rowsPerPage;
									$search_result=mysql_query($search_query." LIMIT $offset, $rowsPerPage");
									if(mysql_num_rows($search_result)>0)
									{?>

                                        <table width="95%" border="0" align="center" cellpadding="2" cellspacing="0">									
								 <?php  while($search_row=mysql_fetch_array($search_result))
										{
										$job_id=$search_row['jobid'];
										$job_title=$search_row['title'];
										$job_location=$search_row['location'];
										$job_company=$search_row['company_alias'];
										$job_exp=$search_row['min_exp']."-".$search_row['max_exp'].' Years';
										?>
                                         <tr> 
                                            <td valign="top" class="title style1"><a href="#" class="title style1" onClick="window.location.href='openings1.php?job=<?php echo $job_id?>'"><?php echo $job_title?></a><span class="exp"><?php echo "(".$job_exp.")" ?></span></td>
                                            <td width="74" align="right" valign="top" class="title"><a href="#" onClick="window.location.href='openings1.php?job=<?php echo $job_id?>'"><img src="../../../wamp/www/anon09/images/view.jpg" border="0"></a></td>
                                          </tr>
                                          <tr> 
                                            <td colspan="2" class="menutext"><?php echo $job_company?></td>
                                          </tr>
                                          <tr> 
                                            <td colspan="2" class="menutext"><?php echo $job_location?></td>
                                          </tr>
                                          <tr> 
                                            <td colspan="2">&nbsp;</td>
                                          </tr>
                                          <tr> 
                                            <td colspan="2" height="1" bgcolor="#797301"></td>
                                          </tr>
                                          <tr> 
                                            <td colspan="2">&nbsp;</td>
                                          </tr>
									<?php }
										$search_result=mysql_query($search_query);	                                   
									    $numrows=mysql_num_rows($search_result);
										$maxPage = ceil($numrows/$rowsPerPage);
										$self = $_SERVER['PHP_SELF']."?search=".true;
										$nav  = '';
										for($page = 1; $page <= $maxPage; $page++)
										{
										   if ($page == $pageNum)
										   {
											  $nav .= "<font color=\"#999999\"> $page</font> "; // no need to create a link to current page
										   }
										   else
										   {
											  $nav .= " <a href=\"$self&page=$page\"><font color=\"#000000\">$page</font></a> ";
										   } 
										}
										if ($pageNum > 1)
										{
										   $page  = $pageNum - 1;
										   $prev  = " <a href=\"$self&page=$page\"><font color=\"#000000\">[Prev]</font></a> ";
										   $first = " <a href=\"$self&page=1\"><font color=\"#000000\">[First Page]</font></a> ";
										} 
										else
										{
										   $prev  = '&nbsp;'; // we're on page one, don't print previous link
										   $first = '&nbsp;'; // nor the first page link
										}
										
										if ($pageNum < $maxPage)
										{
										   $page = $pageNum + 1;
										   $next = " <a href=\"$self&page=$page\"><font color=\"#000000\">[Next]</font></a> ";
										
										   $last = " <a href=\"$self&page=$maxPage\"><font color=\"#000000\">[Last Page]</font></a> ";
										} 
										else
										{
										   $next = '&nbsp;'; // we're on the last page, don't print next link
										   $last = '&nbsp;'; // nor the last page link
										}?>
										<tr>
                                        	<td class="tdtext">
                                            <?php echo $first . $prev ." ". $nav ." " . $next . $last;?>
	                                       </td>
                                        </tr>
									 </table>										
								<?php }	
									else
									{?>
										<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0">
                                        <tr>
                                        <td class="tdtext">
										No Job found for the given search criteria. <br><br>Please try using different search criteria or <a href="../../../wamp/www/anon09/openings1.php?job=%270%27&job_search=<?php echo false?>">Click Here</a> to register with us. We would send you details on future jobs that matches your profile. 			
                                        </td>
                                        </tr>
                                       </table> 
									<?php }
								 }
								 else
								 {?>
                                      <?php 
										$seljobresult=mysql_query("select * from job order by(jobid) asc");
										if(mysql_num_rows($seljobresult)>0)
										{?>
                                    <table width="95%" border="0" align="center" cellpadding="2" cellspacing="0">
									<?php
										while($seljobrow=mysql_fetch_array($seljobresult))
										{
										$job_id=$seljobrow['jobid'];
										$job_title=$seljobrow['title'];
										$job_location=$seljobrow['location'];
										$job_company=$seljobrow['company_alias'];
										$job_exp=$seljobrow['min_exp']."-".$seljobrow['max_exp'].' Years';
                                    ?>
                                      <tr> 
                                        <td valign="top" class="title style1"><a href="#" class="title style1" onClick="window.location.href='openings1.php?job=<?php echo $job_id?>'"><?php echo $job_title?></a><span class="exp"><?php echo "(".$job_exp.")" ?></span></td>
                                        <td width="74" align="right" valign="top" class="title"><a href="#" onClick="window.location.href='openings1.php?job=<?php echo $job_id?>'"><img src="../../../wamp/www/anon09/images/view.jpg" border="0"></a></td>
                                      </tr>
                                      <tr> 
                                        <td colspan="2" class="menutext"><?php echo $job_company?></td>
                                      </tr>
                                      <tr> 
                                        <td colspan="2" class="menutext"><?php echo $job_location?></td>
                                      </tr>
                                      <tr> 
                                        <td colspan="2">&nbsp;</td>
                                      </tr>
                                      <tr> 
                                        <td colspan="2" height="1" bgcolor="#797301"></td>
                                      </tr>
                                      <tr> 
                                        <td colspan="2">&nbsp;</td>
                                      </tr>
											
										<?php 	}?>
                                    </table>										
										<?php }
									
									}
										?>
                                  </td>
                                </tr>
                              </table></td>
                          </tr>
                          <tr> 
                            <td width="50%">&nbsp;</td>
                            <td width="50%">&nbsp;</td>
                          </tr>
                        </table></td>
                    </tr>
                  </table></td>
                <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr> 
                      <td>&nbsp;</td>
                    </tr>
                    <tr> 
                      <td align="center"><img src="../../../wamp/www/anon09/images/whintro.jpg"></td>
                    </tr>
                    <tr> 
                      <td>&nbsp;</td>
                    </tr>
                    <tr> 
                      <td> <table width="80%" border="0" align="center" cellpadding="0" cellspacing="0">
                          <tr> 
                            <td class="testi"><P class="namehg">Services include:<br>
                              </p>                              
                              Domain Registration, Domain Name Creation, Unlimited 
                              Web Space, unlimited transfer, Database Access, 
                              and Hosting Web Server<br>
                              <br>
                              Our unlimited bandwidth services ensure fast  loading of your web pages.<br>
                            <br>
							<p align="right"><a href="../../../wamp/www/anon09/webhosting.php"><img src="../../../wamp/www/anon09/images/readmore.jpg" border="0"></a></p>	                       </td>
                          </tr>
                        </table></td>
                    </tr>
                    <tr> 
                      <td><div align="right"></div></td>
                    </tr>
                    
                </table></td>
                <td width="9">&nbsp;</td>
              </tr>
              <tr> 
                <td colspan="3" height="10"></td>
              </tr>
              <tr> 
                <td colspan="3" align="center" valign="middle" class="copytxt"><?php include('copywrite.html');?></td>
              </tr>
	         </table>
          </td>
        </tr>
      </table>
      </td>
  </tr>
</table>
</body>
</html>