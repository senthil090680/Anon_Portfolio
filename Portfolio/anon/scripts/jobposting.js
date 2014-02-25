// JavaScript Document


	function add_func()
	{
		var job_title=document.getElementById('job_title').value;
		var job_code=document.getElementById('job_code').value;
		//var job_desc=document.getElementById('job_desc').value;
		//alert(cat_brand);
		var client_name=document.getElementById('client_name').value;
		var client_alias=document.getElementById('client_alias').value;
		var rece_emails=document.getElementById('rece_emails').value;
		var skill_set=document.getElementById('skill_set').value;
		var job_location=document.getElementById('job_location').value;
		var min_exp=document.getElementById('min_exp').value;
		var max_exp=document.getElementById('max_exp').value;

		
		/*flag=false;
		for (i=0;i<document.jobposting_add.skill_set.length;i++) 
		{ 
		  if (document.jobposting_add.skill_set[i].checked) 
		  { 
				 var skill_set = document.jobposting_add.skill_set[i].value; 
				 flag=true;		 
		  }
		}*/
		
		if(job_title=='')
		{
			alert('Please enter job title');
			document.getElementById('job_title').focus();
		}
		else if(job_code=='')
		{
			alert('Please enter job code');
			document.getElementById('job_code').focus();
		}
		/*else if(job_desc=='')
		{
			alert('Please select job description');
			document.getElementById('job_desc').focus();
		}*/
		else if(client_name=='')
		{
			alert('Please enter client name');
			document.getElementById('client_name').focus();
		}
		else if(client_alias=='')
		{
			alert('Please enter client alias');
			document.getElementById('client_alias').focus();
		}
		else if(rece_emails=='')
		{
			alert('Please enter receive emails');
			document.getElementById('rece_emails').focus();
		}
		else if(document.jobposting_add.rece_emails.value.search(/^(\w+(?:\.\w+)*)@((?:\w+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
		{
			alert("Please enter valid e-mail");
			document.getElementById('rece_emails').focus();
			return false;
		}
		
		else if(job_location=='0')
		{
			alert('Please select job location');
			document.getElementById('job_location').focus();
		}
		
		else if(skill_set=='')
		{
			alert('Please enter skill set');
			document.getElementById('skill_set').focus();
		}
		/*else if(flag!=true)
		{
			alert("Please choose the skill set");
		}*/
		
		else if(min_exp=='')
		{
			alert('Please enter minimum experience');
			document.getElementById('min_exp').focus();
		}
		else if(isNaN(min_exp))
		{
			alert('Please enter only numbers in experience');
			document.getElementById('min_exp').focus();
		}

		else if(max_exp=='')
		{
			alert('Please enter maximum experience');
			document.getElementById('max_exp').focus();
		}
		else if(isNaN(max_exp))
		{
			alert('Please enter only numbers in experience');
			document.getElementById('max_exp').focus();
		}


		else
		{
			document.jobposting_add.action="admin_jobposting.php";
			document.jobposting_add.method="post";
			document.jobposting_add.submit();
		}
	}


	function job_focus()
	{
		document.getElementById('job_title').focus();
	}