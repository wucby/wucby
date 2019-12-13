function updateCheckStatus(planId){
//	 "0"代表通过
	 var checkStatus = 0;
	$.post(
			"updateCheckStatus.do",
			{"planId":planId,"checkStatus":checkStatus},
			function(data){
				
				location.href="queryproductionplan.do";
			}
	);
}



function updateCheckStatus2(planId){
//	 "1"代表未通过
	 var checkStatus = 1;
	$.post(
			"updateCheckStatus.do",
			{"planId":planId,"checkStatus":checkStatus},
			function(data){
				location.href="queryproductionplan.do";
			}
	);
}