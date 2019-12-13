$(document).ready(function(){
	customerIdCheck();
	
});
function customerIdCheck(){
	 var today = new Date(); 
	 	var ss = today.getSeconds();
	 	var mm = today.getMinutes()<10 ? "0"+ today.getMinutes():today.getDate().toString();
	 	var hh = today.getHours();
	    var dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate().toString();  
	    var MM = today.getMonth()+1 < 10 ? "0" + (today.getMonth()+1) : today.getMonth()+1;  
	    var yyyy = today.getFullYear().toString();
	    var no = yyyy+MM+dd+hh+mm+ss;
	    $("#customerId").val(no);
	    $("#linkmanId").val(no);
}
	



function companyNameCheck(){
	var companyName = $("#companyName").val();
	var companyNameMsg = $("#companyNameMsg");
	
	var reg =/^\w{8,12}$/; 
	
	if(companyName == null || reg.test(companyName) || "" == companyName){ 

		companyNameMsg.html("客户公司名称不能为空");
		return false;
	}

	if(companyName.length<10 || companyName.length>20){
		companyNameMsg.html("客户公司名称必须10-20个字符");
		return false;
	}else{
		companyNameMsg.html("");
		return true;
	}
	
}



function customerEmailCheck(){
	var reg=/^([a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9])*[a-z0-9]+.){1,63}[a-z0-9]+$/;
	var customerEmail = $("#customerEmail").val();
	var customerEmailMsg = $("#customerEmailMsg");
	if(reg.test(customerEmail)){
		customerEmailMsg.html("");
		return true;
	}else{
		customerEmailMsg.html("邮箱格式不正确！");
		return false;
	}
}



function customerAddressCheck(){
	var customerAddress = $("#customerAddress").val();
	var customerAddressMsg = $("#customerAddressMsg");
	
	var reg =/^\w{8,12}$/; 
	
	if(customerAddress == null || reg.test(customerAddress) || "" == customerAddress){ 

		customerAddressMsg.html("客户公地址不能为空");
		return false;
	}

	if(customerAddress.length<12 || customerAddress.length>22){
		customerAddressMsg.html("客户公地址必须12-22个字符");
		return false;
	}else{
		customerAddressMsg.html("");
		return true;
	}
}


function check(){
	if( telephoneCheck() &&  companyNameCheck() && customerEmailCheck() && customerAddressCheck()) {
		alert("添加成功！");
		return true;
	}else{
		alert("添加失败！");
		return false;
	}
	
}
