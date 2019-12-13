function checkinterviewerId(){
	var success =true;
	
	var data=$("#interviewerId").val();
	
	
		$.ajax({
			
			url:"addinterviewrecord.do",
			data:{"interviewerId":data},
			async:false,
			success:function(data){
				
				if(data=="true"){
					$("#interviewerId").text("用户名以存在");
					success= false;
				}else{
					$("#interviewerId").text("ok");
					success= true;
				}
	
			}		
		}
				
		);
		return success;
}
