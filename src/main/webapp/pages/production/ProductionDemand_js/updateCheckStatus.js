function updateCheckStatus(demandId){
//	 "0"代表通过
	
	 var checkStatus = 0;
	$.post(
			"updateCheckStatusbyProductionDemand.do",
			{"DemandId":demandId,"checkStatus":checkStatus},
			function(data){
				
				location.href="queryproductiondemand.do";
			}
	);
}



function updateCheckStatus2(demandId){
//	 "1"代表未通过
	 var checkStatus = 1;
	$.post(
			"updateCheckStatusbyProductionDemand.do",
			{"DemandId":demandId,"checkStatus":checkStatus},
			function(data){
				location.href="queryproductiondemand.do";
			}
	);
}