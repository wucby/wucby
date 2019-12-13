$(document).ready(function(){
	linkmanId();
	
});
function linkmanId(){
	 var today = new Date(); 
	 	var ss = today.getSeconds();
	 	var mm = today.getMinutes()<10 ? "0"+ today.getMinutes():today.getDate().toString();
	 	var HH = today.getHours();
	    var dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate().toString();  
	    var MM = today.getMonth()+1 < 10 ? "0" + (today.getMonth()+1) : today.getMonth()+1;  
	    var yyyy = today.getFullYear().toString();
//	    var ct = yyyy+'-'+MM+'-'+dd+' '+HH+':'+mm+':'+ss;
	    var li = yyyy+MM+dd+HH+mm+ss;
	  $("#linkmanId").val(li);
	 
}



function linkmanNameCheck(){
	var linkmanName = $("#linkmanName").val();
	var linkmanNameMsg = $("#linkmanNameMsg");
	
	var reg =/^\w{6,8}$/; 
	
	if(linkmanName == null || reg.test(linkmanName) || "" == linkmanName){ 

		linkmanNameMsg.html("姓名不能为空");
		return false;
	}

	if(linkmanName.length<2){
		linkmanNameMsg.html("姓名为4-8个中文字符");
		return false;
	}else{
		linkmanNameMsg.html("");
		return true;
	}
	
}

function linkmanTelNoCheck(){
		var linkmanTelNo = $("#linkmanTelNo").val();
		var linkmanTelNoMsg =  $("#linkmanTelNoMsg");
		var reg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/; 
		if(reg.test(linkmanTelNo)){
			linkmanTelNoMsg.html("");
			return true;
		}else{
			linkmanTelNoMsg.html("请输入正确的办公电话号码！");
			return false;
		}
}


function linkmanPhoneNoCheck(){
	var linkmanPhoneNo = $("#linkmanPhoneNo").val();
	var linkmanPhoneNoMsg =  $("#linkmanPhoneNoMsg");
	var reg = /^1[3|4|5|8][0-9]\d{4,8}$/; 
	if(reg.test(linkmanPhoneNo)){
		linkmanPhoneNoMsg.html("");
		return true;
	}else{
		linkmanPhoneNoMsg.html("请输入正确的11位手机号码！");
		return false;
	}
	
}

function check(){
	if(linkmanNameCheck() && linkmanTelNoCheck() && linkmanPhoneNoCheck()) {
		return true;
	}else{
		return false;
	}
	
}
		

