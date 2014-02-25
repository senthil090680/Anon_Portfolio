// JavaScript Document



function update_job_func()
				{
					var job_title_update=document.getElementById('job_title_update').value;
					var job_desc_update=document.getElementById('job_desc_update').value;
					var client_name_update=document.getElementById('client_name_update').value;
					var client_alias_update=document.getElementById('client_alias_update').value;
					var rece_emails_update=document.getElementById('rece_emails_update').value;
					var min_exp_update=document.getElementById('min_exp_update').value;
					var max_exp_update=document.getElementById('max_exp_update').value;
					var job_location_update=document.getElementById('job_location_update').value;
					var skill_set_update=document.getElementById('skill_set_update').value;
		
		
					if(job_title_update=="")
					{
						alert("Please enter the job title");
						document.getElementById('job_title_update').focus();
					}
					else if(job_desc_update=="")
					{
						alert("Please enter the job description");
						document.getElementById('job_desc_update').focus();
					}
					else if(client_name_update=="")
					{
						alert("Please enter the client name");
						document.getElementById('client_name_update').focus();
					}
					else if(client_alias_update=="")
					{
						alert("Please enter the client alias");
						document.getElementById('client_alias_update').focus();
					}
					else if(rece_emails_update=="")
					{
						alert("Please enter the receive emails");
						document.getElementById('rece_emails_update').focus();
					}
					else if(document.job_edit.rece_emails_update.value.search(/^(\w+(?:\.\w+)*)@((?:\w+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
					{
						alert("Please enter valid e-mail");
						document.getElementById('rece_emails_update').focus();
						return false;
					}
					else if(min_exp_update=="")
					{
						alert("Please enter the minimum experience");
						document.getElementById('min_exp_update').focus();
					}
					else if(max_exp_update=="")
					{
						alert("Please enter the maximum experience");
						document.getElementById('max_exp_update').focus();
					}
					else if(job_location_update=="")
					{
						alert("Please enter the job location");
						document.getElementById('job_location_update').focus();
					}
					else if(skill_set_update=="")
					{
						alert("Please enter the skill set");
						document.getElementById('skill_set_update').focus();
					}

					else
					{
						document.job_edit.method="post";
						document.job_edit.action="admin_jobposting_nonactive_edit.php";
						document.job_edit.submit();
					}
					//window.location.href="admin_product_edit.php?pro_name="+pro_name+"&pro_id="+pro_id;
 				}
				function job_edit_focus()
				{
					document.getElementById('job_title_update').focus();
				}