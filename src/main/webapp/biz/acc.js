
//删除
function deleteAccounting(inDocId){
	var f =confirm("你确定删除吗？")
	if (f) { 
		$.post(
				"deletefinance.do",
				{"inDocId":inDocId},
				function(data){					
						location.href="sell.jsp";
					
				}
		);
	}
	
}



//主页分页查询
function Accounting(indexpage){
	
	var inDocId = $("#inDocId").val();
	$.post(
		"queryRequest.do",
		{"indexpage":indexpage,"inDocId":inDocId},
		function(data){
			
			var content = $("#contest");
			var sumitem = "";
				
				for(var i= 0;i < data.listDatas.length;i++){
					var item = "<tr class='odd gradeX'>";
					item += "<td class='hidden-480'>"+data.listDatas[i].inDocId+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].customerId+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].subjectId+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].inAmount+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].inDate+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].inEmployeeId +"</td>";
					
					if (data.listDatas[i].inStatus == 0) {
						item += "<td class='hidden-480'>待付款</td>";
					}
					if (data.listDatas[i].inStatus == 1) {
						item += "<td class='hidden-480'>已支付</td>";
					}
					item += "<td class='hidden-480'>"+data.listDatas[i].inDesc +"</td>";
					item += "<td><a href='of_ell.jsp?"+data.listDatas[i].customerId+"' class='btn blue mini'>收款明细</a>"+
								 "<a href='Financial.jsp?inDocId="+data.listDatas[i].inDocId+"&customerId="+data.listDatas[i].customerId+"&subjectId="+data.listDatas[i].subjectId+"' class='btn blue mini'>修改</a>"+
								 "<a href='#' onclick='deleteAccounting(\""+data.listDatas[i].inDocId+"\")' class='btn blue mini'>删除</a></td>";	
					item += "</tr>";
					
					sumitem += item;
			}
				
			content.html(sumitem);
			
//			---------------加载分页组件------------------
			var pagecontent = $("#pagination");
			var pageitem ="";
			pageitem += "<li><a  onclick='Accounting(1)'>«</a></li>";
			if(data.singerData.pagecount < 4){
				for (var i = 1; i <= data.singerData.pagecount; i++) {
					pageitem +="<li><a  onclick='Accounting("+i+")'>"+i+"</a></li>";
				}
			}else if(data.singerData.pagecount-data.indexpage < 4){
				for (var i = data.singerData.indexpage; i <= data.singerData.pagecount; i++) {
					pageitem +="<li><a  onclick='Accounting("+i+")'>"+i+"</a></li>";
				}
			}else{
				for (var i = data.singerData.indexpage; i <= 4; i++) {
					pageitem +="<li><a  onclick='Accounting("+i+")'>"+i+"</a></li>";
				}
			}
			
			pageitem +="<li><a onclick='Accounting(\""+(data.singerData.indexpage + 1)+"\")'>»</a></li>";
		
			pagecontent.html(pageitem);
			
		
		}
		 
	);		
}

//根据客户编号查询收款明细
function queryfinanceBycustomerId(indexpage){
	
	
	
	var id = location.search;
	var customerId = id.substring(id.lastIndexOf("?")+1);
	
	var financeReceiptId = $("#financeReceiptId").val();
	
	
	
	$.post(
			"queryRequestBycustomerId.do",
			{"indexpage":indexpage,"financeReceiptId":financeReceiptId},
			function(data){
				var contest = $("#tscontest");
				var sumitem = "";
				
			
					for(var i=0;i< data.listDatas.length;i++){
						var item = "<tr class='odd gradeX'>";
						item += "<td class='hidden-480'>"+data.listDatas[i].financeReceiptId+"</td>";
						item += "<td class='hidden-480'>"+data.listDatas[i].payrollId+"</td>";
						
						if(data.listDatas[i].shouldPay==data.listDatas[i].realPay){
							
						}
						item += "<td class='hidden-480'>"+data.listDatas[i].shouldPay+"</td>";
						item += "<td class='hidden-480'>"+data.listDatas[i].realPay+"</td>";
						item += "<td class='hidden-480'>"+data.listDatas[i].payDate+"</td>";
						item += "<td class='hidden-480'>"+data.listDatas[i].customerId +"</td>";
						item += "<td class='hidden-480'>"+data.listDatas[i].payRemark +"</td>";
			
						item += "<td><a href='FFinancial.jsp?financeReceiptId="+data.listDatas[i].financeReceiptId+"&payrollId="+data.listDatas[i].payrollId+"&shouldPay="+data.listDatas[i].shouldPay+"&customerId="+data.listDatas[i].customerId+"' class='btn blue mini'>修改</a>"+
									 "<a href='#' onclick='deleteByPrimaryKey(\""+data.listDatas[i].financeReceiptId+"\")' class='btn blue mini'>删除</a></td>";	
						item += "</tr>";
						
						
	
						sumitem += item;
				}
					contest.html(sumitem);
				
//				---------------加载分页组件------------------
				var pagecontent = $("#pagination");
				var pageitem ="";
				pageitem += "<li><a  onclick='queryfinanceBycustomerId(1)'>«</a></li>";
				if(data.singerData.pagecount < 4){
					for (var i = 1; i <= data.singerData.pagecount; i++) {
						pageitem +="<li><a  onclick='queryfinanceBycustomerId("+i+")'>"+i+"</a></li>";
					}
				}else if(data.singerData.pagecount-data.indexpage < 4){
					for (var i = data.singerData.indexpage; i <= data.singerData.pagecount; i++) {
						pageitem +="<li><a  onclick='queryfinanceBycustomerId("+i+")'>"+i+"</a></li>";
					}
				}else{
					for (var i = data.singerData.indexpage; i <= 4; i++) {
						pageitem +="<li><a  onclick='queryfinanceBycustomerId("+i+")'>"+i+"</a></li>";
					}
				}
				
				pageitem +="<li><a onclick='queryfinanceBycustomerId(\""+(data.singerData.indexpage + 1)+"\")'>»</a></li>";
			
				pagecontent.html(pageitem);
				
			}
	);
}



//添加表
function addrefinance(){
	
	var id = location.search;
	var inDocId = id.substring(id.lastIndexOf("?")+1);
	
	var inDocId = $("#inDocId").val();
	var customerId = $("#customerId").val();
	var subjectId = $("#subjectId").val();
	var inAmount = $("#inAmount").val();
	var inDate = $("#inDate").val();
	var inEmployeeId = $("#inEmployeeId").val();
	var inStatus = $("#inStatus").val();
	var inDesc = $("#inDesc").val();
	$.post(
			"addrefinance.do",
			{"inDocId":inDocId,
			"customerId":customerId,	
			"subjectId":subjectId,
			"inAmount":inAmount,
			"inDate":inDate,
			"inEmployeeId":inEmployeeId,
			"inStatus":inStatus,
			"inDesc":inDesc},
			function(data){
				location.href="sell.jsp"
			}
	);
	
}


//查询单个表
function queryfinanceById(){
	
	var id = location.search;
	var inDocId = id.substring(id.lastIndexOf("?")+1);
	
	$.post(
			"selectAccountingById.do",
			{"inDocId":inDocId,
			"customerId":customerId	
			},
			function(data){
				
				$("#inDocId").val(data.singerData.inDocId);			
				$("#customerId").val(data.singerData.customerId);
				$("#subjectId").val(data.singerData.subjectId);
				$("#inAmount").val(data.singerData.inAmount);
				$("#inDate").val(data.singerData.inDate);
				$("#inEmployeeId").val(data.singerData.inEmployeeId);
				$("#inStatus").val(data.singerData.inStatus);
				$("#inDesc").val(data.singerData.inDesc);
				
			}
	);
}


//修改表
function editrefinanceID(){
	var id = location.search;
	var cusId = id.substring(id.lastIndexOf("?")+1);
	
	var inDocId = $("#inDocId").val();
	
	var customerId = $("#customerId").val();
	
	var subjectId = $("#subjectId").val();
	
	var inAmount = $("#inAmount").val();
	
	var remark1 = $("#realPay").val();
	
	var inStatus = $("#inStatus").val();
	
	var inDesc = $("#inDesc").val();
	$.post(
			"editfinance.do",
			{"inDocId":inDocId,
			"customerId":customerId,	
			"subjectId":subjectId,
			"inAmount":inAmount,
			"remark1":remark1,
			"inStatus":inStatus,
			"inDesc":inDesc},
			function(data){
				alert(data.message);
				location.href="sell.jsp?";
			}
	);
	
}




//收款明细查询单个表
function queryByFinancePayId(financeReceiptId,intdexpage){
	
	
	
	$.post(
			"queryRequestBycustomerId.do",
			{"financeReceiptId":financeReceiptId,
				"intdexpage":intdexpage

			},
			function(data){
				$("#financeReceiptId").val(data.singerData.financeReceiptId);			
				$("#payrollId").val(data.singerData.payrollId);
				$("#shouldPay").val(data.singerData.shouldPay);
				$("#realPay").val(data.singerData.realPay);
				$("#customerId").val(data.singerData.customerId);
				$("#payRemark").val(data.singerData.payRemark);
				$("#payDate").val(data.singerData.payDate);
				
			}
	);
}



//修改表
function editrefinance(){
	var inDocId = $("#inDocId").val();
	
	var customerId = $("#customerId").val();
	
	var subjectId = $("#subjectId").val();
	
	var inAmount = $("#inAmount").val();
	
	var remark1 = $("#realPay").val();
	
	var inStatus = $("#inStatus").val();
	
	var inDesc = $("#inDesc").val();
	$.post(
			"editfinance.do",
			{"inDocId":inDocId,
			"customerId":customerId,	
			"subjectId":subjectId,
			"inAmount":inAmount,
			"remark1":remark1,
			"inStatus":inStatus,
			"inDesc":inDesc},
			function(data){
				location.href="sell.jsp"
			}
	);
	
}

//修改表
function editfinancePrimary(){
	
	
	
	var financeReceiptId = $("#financeReceiptId").val();
	
	var payrollId = $("#payrollId").val();
	
	var shouldPay = $("#shouldPay").val();
	
	var realPay= $("#realPay").val();
	
	var payDate = $("#payDate").val();
	
	var payRemark = $("#payRemark").val();
	
	var customerId = $("#customerId").val();
	$.post(
			"editfinancePrimary.do",
			{"financeReceiptId":financeReceiptId,
			"payrollId":payrollId,	
			"shouldPay":shouldPay,
			"realPay":realPay,
			"payRemark":payRemark,
			"customerId":customerId},
			function(data){
				
				location.href="fsell.jsp";
			}
	);
	
}
//删除
function deleteByPrimaryKey(financeReceiptId){
	var id = location.search;
	var customerId = id.substring(id.lastIndexOf("?")+1);
	
	var f =confirm("你确定删除吗？")
	if (f) { 
		$.post(
				"deleteByPrimaryKey.do",
				{"financeReceiptId":financeReceiptId},
				function(data){	
					
					window.location.href="fsell.jsp?"+customerId;
					
				}
		);
	}
	
}
