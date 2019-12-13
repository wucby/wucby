$(document).ready(function(){
	initId();
	
});
function initId(){
	var today = new Date(); 
	 	var ss = today.getSeconds();
	 	var mm = today.getMinutes()<10 ? "0"+ today.getMinutes():today.getDate().toString();
	 	var HH = today.getHours();
	    var dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate().toString();  
	    var MM = today.getMonth()+1 < 10 ? "0" + (today.getMonth()+1) : today.getMonth()+1;  
	    var yyyy = today.getFullYear().toString();	   
	    var ct = yyyy+'-'+MM+'-'+dd+' '+HH+':'+mm+':'+ss;
	    var si = yyyy+MM+dd+HH+mm+ss;
	  $("#serviceId").val(si);
	  $("#createTime").val(ct);
}


function serviceRequestCheck(){
	var reg = /^[\u4E00-\u9FA5]{4,10}$/;
	var serviceRequest = $("#serviceRequest").val();
	var serviceRequestMsg = $("#serviceRequestMsg");
	if(reg.test(serviceRequest)){
		serviceRequestMsg.html("");
		return true;
	}else{
		serviceRequestMsg.html("请输入6-10位中文字符！");
		return false;
	}
}

function check(){
	if(serviceRequestCheck()) {
		return true;
	}else{
		return false;
	}
	
}
		

