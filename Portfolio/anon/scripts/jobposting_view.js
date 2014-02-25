// JavaScript Document
	function reopen_func(job_id,job_title)
	{
		var r=confirm("Are are sure you want to re-open the job : "+job_title);
		if (r==true)
		{
			window.location.href="admin_jobposting_nonactive_view.php?job_id_reopen="+job_id;
			/*document.job_view.method="post";
			document.job_view.action="admin_jobposting_view.php";
			document.job_view.submit();*/
		}
	}
	function close_func(job_id,job_title)
	{
		var r=confirm("Are are sure you want to close the job : "+job_title);
		if (r==true)
		{
			window.location.href="admin_jobposting_view.php?job_id_close="+job_id;
			/*document.job_view.method="post";
			document.job_view.action="admin_jobposting_view.php";
			document.job_view.submit();*/
		}
	}

	function del_func(job_id,job_title)
	{
		var r=confirm("Are are sure you want to delete the job : "+job_title);
		if (r==true)
		{
			window.location.href="admin_jobposting_view.php?job_id_del="+job_id;
			/*document.job_view.method="post";
			document.job_view.action="admin_jobposting_view.php";
			document.job_view.submit();*/
		}
	}
