//分页查询
function OutCustomerFinance(indexpage){
	$.post(
		"queryPayVoucherCustomerDetailAll.do",
		{"indexpage":indexpage},
		function(data){
			var content = $("#contest3");
			var sumitem = "";
			
				for(var i= 0;i < data.listDatas.length;i++){
					var item = "<tr class='odd gradeX'>";
					
					item += "<td class='hidden-480'>"+data.listDatas[i].financePayId+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].inDocId+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].shouldPay+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].realPay+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].payDate+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].customerId+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].payRemark +"</td>";
					item += "<td><a href='sigeleFinance_Out_To_Customer_Doc.jsp?"+ data.listDatas[i].financePayId+"' class='btn blue mini'>查看明细</a>"+
								 "<a href='editFinanceCustomer.jsp?"+data.listDatas[i].financePayId+"' class='btn blue mini'>修改</a>"+
								 "<a  onclick='deleteFCustomer(\""+data.listDatas[i].financePayId+"\")' class='btn blue mini'>删除</a>";	
					item += "</tr>";
					
					sumitem += item;
			}
				
			content.html(sumitem);
			
//			---------------加载分页组件------------------
			
//			分页			
			  var pageitem = "";
			 
				if(data.singerData.indexpage >= 1){
					pageitem += "<li><a onclick='OutCustomerFinance("+(data.singerData.indexpage - 1)+")'>&lt;</a></li>";
				}else{
					pageitem += "<li><a>&lt;</a></li>";
				}
				
				if(data.singerData.pagecount > 3){
					if(data.singerData.indexpage <= 1){
						pageitem += "<li><a onclick='OutCustomerFinance(1)'>1</a></li>";
						pageitem += "<li><a onclick='OutCustomerFinance(2)'>2</a></li>";
						pageitem += "<li><a onclick='OutCustomerFinance(3)'>3</a></li>";
					}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
						for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
							pageitem += "<li><a onclick='OutCustomerFinance("+i+")'>"+i+"</a></li>";
						}
					}else{
						pageitem += "<li><a onclick='OutCustomerFinance("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
						pageitem += "<li><a onclick='OutCustomerFinance("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
						pageitem += "<li><a onclick='OutCustomerFinance("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
					}
				}else{
					for (var i = 1; i <= data.singerData.pagecount; i++) {
						pageitem += "<li><a onclick='OutCustomerFinance("+i+")'>"+i+"</a></li>";
					}
				}
				
				if(data.singerData.indexpage >= data.singerData.pagecount){
					pageitem += " <li><a>&gt;</a></li>";
				}else{
					pageitem += " <li><a onclick='OutCustomerFinance("+(data.singerData.indexpage+1)+")'>&gt;</a></li>";
				}
				
				
				var pagecontent = $("#pagination3");
				
				pagecontent.html(pageitem);
		}
		
	);		
}




//查询单个对客户付款详细
function queryPayVoucherCustomerDetail(){
	var a = location.search;
	var financePayId = a.substring(a.lastIndexOf("?")+1);
	$.post(
		"queryPayVoucherCustomerDetail.do",
		{"financePayId":financePayId},
		function(data){
			alert(data);
					$("#financePayId").html(data.singerData.financePayId);
					$("#inDocId").html(data.singerData.inDocId);
					$("#shouldPay").html(data.singerData.shouldPay);
					$("#realPay").html(data.singerData.realPay);
					$("#payDate").html(data.singerData.payDate);
					$("#payRemark").html(data.singerData.payRemark);
					$("#customerId").html(data.singerData.customerId);
				}
			);	
		}	



//修改
function editFinanceCustomer(){
	$.post(
			 "editPayVoucherCustomerDetail.do", 
			 {
				"financePayId": $("#financePayId").val(),
				"inDocId": $("#inDocId").val(),
				"shouldPay": $("#shouldPay").val(),
				"realPay": $("#realPay").val(),
				"payDate": $("#payDate").val(),
				"payRemark": $("#payRemark").val(),
				"customerId": $("#customerId").val(),
			 },
			 function (data){
				 alert("jjjjj")
				 if(data.isResult){
					 
					 location.href = "Finance_Out_ToCustomer.jsp";
				 }else{
					 location.href = "Finance_Out_ToCustomer.jsp";
				 }
			 
			 }
	 );
}







//删除
function deleteFCustomer(financePayId){
	var f =confirm("你确定删除吗？")
	if (f) { 
		$.post(
				"deletePayVoucherCustomerDetail.do",
				{"financePayId":financePayId},
				function(data){					
						location.href="Finance_Out_ToCustomer.jsp"
					
				}
		);
	}
	
}

/*//添加表
function addfinancecustomer(){
	var financePayId = $("#financePayId").val();
	var inDocId = $("#inDocId").val();
	var shouldPay = $("#shouldPay").val();
	var realPay = $("#realPay").val();
	var payDate = $("#payDate").val();
	var payRemark = $("#payRemark").val();
	var customerId = $("#customerId").val();
	$.post(
			"addPayVoucherCustomerDetail.do",
			{"financePayId":financePayId,
			"inDocId":inDocId,	
			"shouldPay":shouldPay,
			"realPay":realPay,
			"payDate":payDate,
			"payRemark":payRemark,
			"customerId":customerId
			},
			function(data){
				location.href="Finance_Out_ToCustomer.jsp"
			}
	);
	
}*/


function loaddataeditFCustomer(){
	var a = location.search;
	var financePayId = a.substring(a.lastIndexOf("?")+1);
	alert(financePayId);
	$.post(
		"queryPayVoucherCustomerDetail.do",
		{"financePayId":financePayId},
		function(data){
					$("#financePayId").val(data.singerData.financePayId);
					$("#inDocId").val(data.singerData.inDocId);
					$("#shouldPay").val(data.singerData.shouldPay);
					$("#realPay").val(data.singerData.realPay);
					$("#payDate").val(data.singerData.payDate);
					$("#payRemark").val(data.singerData.payRemark);
					$("#customerId").val(data.singerData.customerId);
				}
			);	
		}	

