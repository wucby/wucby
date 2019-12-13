//分页查询
function OutEmployeeFinancess(indexpage){
	
	$.post(
		"queryPayVoucherDetailAll.do",
		{"indexpage":indexpage},
		function(data){
			var content = $("#contest2");
			var sumitem = "";
			
				for(var i= 0;i < data.listDatas.length;i++){
					var item = "<tr class='odd gradeX'>";
					item += "<td class='hidden-480'>"+data.listDatas[i].financePayId+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].orderId+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].subjectId+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].shouldPay+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].realPay+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].payDate +"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].payRemark +"</td>";
					item += "<td><a href='sigeleFinance_Out_To_Employee_Doc.jsp?"+data.listDatas[i].financePayId+"'class='btn blue mini'>查看明细</a>"+
								 "<a href='editFinanceEmployee.jsp?"+data.listDatas[i].financePayId+"' class='btn blue mini'>修改</a>"+
								 "<a  onclick='deleteFEmployees("+data.listDatas[i].financePayId+")' class='btn blue mini'>删除</a></td>";	
					item += "</tr>";
					sumitem += item;
			}
				
			content.html(sumitem);
			
//			---------------加载分页组件------------------
			
//			分页			
			  var pageitem = "";
			 
				if(data.singerData.indexpage >= 1){
					pageitem += "<li><a onclick='OutEmployeeFinance("+(data.singerData.indexpage - 1)+")'>&lt;</a></li>";
				}else{
					pageitem += "<li><a>&lt;</a></li>";
				}
				
				if(data.singerData.pagecount > 3){
					if(data.singerData.indexpage <= 1){
						pageitem += "<li><a onclick='OutEmployeeFinance(1)'>1</a></li>";
						pageitem += "<li><a onclick='OutEmployeeFinance(2)'>2</a></li>";
						pageitem += "<li><a onclick='OutEmployeeFinance(3)'>3</a></li>";
					}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
						for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
							pageitem += "<li><a onclick='OutEmployeeFinance("+i+")'>"+i+"</a></li>";
						}
					}else{
						pageitem += "<li><a onclick='OutEmployeeFinance("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
						pageitem += "<li><a onclick='OutEmployeeFinance("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
						pageitem += "<li><a onclick='OutEmployeeFinance("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
					}
				}else{
					for (var i = 1; i <= data.singerData.pagecount; i++) {
						pageitem += "<li><a onclick='OutEmployeeFinance("+i+")'>"+i+"</a></li>";
					}
				}
				
				if(data.singerData.indexpage >= data.singerData.pagecount){
					pageitem += " <li><a>&gt;</a></li>";
				}else{
					pageitem += " <li><a onclick='OutEmployeeFinance("+(data.singerData.indexpage+1)+")'>&gt;</a></li>";
				}
				
				
				var pagecontent = $("#pagination2");
				
				pagecontent.html(pageitem);

			
	
		}
		
	);		
}

//查询单个向员工付款详细
function queryPayVoucherDetail(){
	var a = location.search;
	var financePayId = a.substring(a.lastIndexOf("?")+1);
	$.post(
		"queryPayVoucherDetail.do",
		{"financePayId":financePayId},
		function(data){
			alert("..............")	;
			$("#financePayId").html(data.singerData.financePayId);
					$("#orderId").html(data.singerData.orderId);
					$("#subjectId").html(data.singerData.subjectId);
					$("#shouldPay").html(data.singerData.shouldPay);
					$("#realPay").html(data.singerData.realPay);
					$("#payDate").html(data.singerData.payDate);
					$("#payRemark").html(data.singerData.payRemark);
				}
			);	
		}	




//修改
 function editFinanceEmployee(){
	 $.post(
			 "editPayVoucherDetail.do", 
			 {
				"financePayId": $("#financePayId").val(),
				"orderId": $("#orderId").val(),
				"subjectId": $("#subjectId").val(),
				"shouldPay": $("#shouldPay").val(),
				"realPay": $("#realPay").val(),
				"payDate": $("#payDate").val(),
				"payRemark": $("#payRemark").val(),
			 },
	 		 function (data){
				 if(data.isResult){
					 location.href = "Finance_Out_ToEmployee.jsp";
				 }else{
					 location.href = "Finance_Out_ToEmployee.jsp";
				 }
			 
			 }
	 );
 }




//删除
function deleteFEmployees(financePayId){
	var f =confirm("你确定删除吗？")
	alert(financePayId);
	if (f) { 
		$.post(
				"deletePayVoucherDetail.do",
				{"financePayId":financePayId},
				function(data){					
						location.href="Finance_Out_ToEmployee.jsp"
					
				}
		);
	}
	
}

/*//添加表
function addfinanceemployee(){
	var financePayId = $("#financePayId").val();
	var orderId = $("#orderId").val();
	var subjectId = $("#subjectId").val();
	var shouldPay = $("#shouldPay").val();
	var realPay = $("#realPay").val();
	var payDate = $("#payDate").val();
	var payRemark = $("#payRemark").val();
	$.post(
			"addPayVoucherDetail.do",
			{"financePayId":financePayId,	
			"orderId":orderId,	
			"subjectId":subjectId,
			"shouldPay":shouldPay,
			"realPay":realPay,
			"payDate":payDate,
			"payRemark":payRemark
			},
			
			function(data){
				location.href="Finance_Out_ToEmployee.jsp"
			}
	);
}
*/

//加载单个对员工付款详细
function loaddataeditFEmployee() {
	var a = location.search;
	var financePayId = a.substring(a.lastIndexOf("?") + 1);

	$.post("queryPayVoucherDetail.do", {
		"financePayId" : financePayId
	}, function(data) {
		$("#financePayId").val(data.singerData.financePayId);
		$("#orderId").val(data.singerData.orderId);
		$("#subjectId").val(data.singerData.subjectId);
		$("#shouldPay").val(data.singerData.shouldPay);
		$("#realPay").val(data.singerData.realPay);
		$("#payDate").val(data.singerData.payDate);
		$("#payRemark").val(data.singerData.payRemark);
	});
}

