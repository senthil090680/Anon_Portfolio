// JavaScript Document


	function contact_func()
	{
		
		//alert(document.getElementById('contact_mobile').value.length);
		
	if(document.getElementById('fri_name').value=="")
	{
		alert("Please enter friend's name");
		document.getElementById('fri_name').focus();
		return false;
	}
	else if(document.getElementById('fri_email').value=="")
	{
		alert("Please enter friend's E-mail");
		document.getElementById('fri_email').focus();
		return false;
	}
	else if(document.contact_page.fri_email.value.search(/^(\w+(?:\.\w+)*)@((?:\w+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
	{
		alert("Please enter valid e-mail");
		document.getElementById('fri_email').focus();
		return false;
	}
	else if(document.getElementById('your_name').value=="")
	{
		alert("Please enter your name");
		document.getElementById('your_name').focus();
		return false;
	}
	else if(document.getElementById('your_email').value=="")
	{
		alert("Please enter your E-mail");
		document.getElementById('your_email').focus();
		return false;
	}
	else if(document.contact_page.your_email.value.search(/^(\w+(?:\.\w+)*)@((?:\w+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
	{
		alert("Please enter valid e-mail");
		document.getElementById('your_email').focus();
		return false;
	}
	
	else if(document.getElementById('your_mobile').value=="")
	{
		alert("Please enter the mobile number");
		document.getElementById('your_mobile').focus();
		return false;
	}
	else if(isNaN(document.getElementById('your_mobile').value))
	{
		alert("Please enter only numbers");
		document.getElementById('your_mobile').focus();
		return false;
	}
	
	else if(document.getElementById('your_mobile').value.length!=10)
	{
		alert("Please enter 10 digit mobile number");
		document.getElementById('your_mobile').focus();
		return false;
	}
	else
	{
	document.contact_page.method="post";
	document.contact_page.action="refer_a_friend.php";
	document.contact_page.submit();
	}
	}
	

