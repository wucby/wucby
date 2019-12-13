function updatecompleteStatus(planId){
//	 "0"代表通过
	 var completeStatus = 0;
	$.post(
			"updateCompleteStatus.do",
			{"planId":planId,"completeStatus":completeStatus},
			function(data){
				
				location.href="queryproductionplan.do";
			}
	);
}