//分页查询
function OutEmployeeAccounting(indexpage){
	$.post(
		"queryAllPayVoucher.do",
		{"indexpage":indexpage},
		function(data){
			var content = $("#contest1");
			var sumitem = "";
			
				for(var i= 0;i < data.listDatas.length;i++){
					var item = "<tr class='odd gradeX'>";
					item += "<td class='hidden-480'>"+data.listDatas[i].outDocId+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].orderId+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].outAmount+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].outDate+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].outEmployeeId+"</td>";
					item += "<td class='hidden-480'>"+data.listDatas[i].outDesc +"</td>";
					item += "<td><a href='sigeleAccount_Out_To_Employee_Doc.jsp.jsp?"+ data.listDatas[i].outDocId+"' class='btn blue mini'>查看明细</a>"+
								 "<a href='editEmployee.jsp?"+data.listDatas[i].outDocId+"' class='btn blue mini'>修改</a>"+
								 "<a href='addFinance_Pay_Employee.jsp?"+data.listDatas[i].outDocId+"' class='btn blue mini'>添加</a>"+
								 "<a  onclick='deletes(\""+data.listDatas[i].outDocId+"\")' class='btn blue mini'>删除</a>";	
					item += "</tr>";
					
					sumitem += item;
			}
				
			content.html(sumitem);
			
//			---------------加载分页组件------------------
			  var pageitem = "";
				 
				if(data.singerData.indexpage >= 1){
					pageitem += "<li><a onclick='OutEmployeeAccounting("+(data.singerData.indexpage - 1)+")'>&lt;</a></li>";
				}else{
					pageitem += "<li><a>&lt;</a></li>";
				}
				
				if(data.singerData.pagecount > 3){
					if(data.singerData.indexpage <= 1){
						pageitem += "<li><a onclick='OutEmployeeAccounting(1)'>1</a></li>";
						pageitem += "<li><a onclick='OutEmployeeAccounting(2)'>2</a></li>";
						pageitem += "<li><a onclick='OutEmployeeAccounting(3)'>3</a></li>";
					}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
						for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
							pageitem += "<li><a onclick='OutEmployeeAccounting("+i+")'>"+i+"</a></li>";
						}
					}else{
						pageitem += "<li><a onclick='OutEmployeeAccounting("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
						pageitem += "<li><a onclick='OutEmployeeAccounting("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
						pageitem += "<li><a onclick='OutEmployeeAccounting("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
					}
				}else{
					for (var i = 1; i <= data.singerData.pagecount; i++) {
						pageitem += "<li><a onclick='OutEmployeeAccounting("+i+")'>"+i+"</a></li>";
					}
				}
				
				if(data.singerData.indexpage >= data.singerData.pagecount){
					pageitem += " <li><a>&gt;</a></li>";
				}else{
					pageitem += " <li><a onclick='OutEmployeeAccounting("+(data.singerData.indexpage+1)+")'>&gt;</a></li>";
				}
				
				
				var pagecontent = $("#pagination1");
				
				pagecontent.html(pageitem);
		/*	alert("777"+data.singerData.pagecount);
			var pagecontent = $("#pagination1");
			var pageitem ="";
			pageitem += "<li><a  onclick='OutEmployeeAccounting(1)'>首页</a></li>";
			if(data.singerData.pagecount < 4){
				for (var i = 1; i <= data.singerData.pagecount; i++) {
					pageitem +="<li><a  onclick='OutEmployeeAccounting("+i+")'>"+i+"</a></li>";
				}
			}else if(data.singerData.pagecount-data.indexpage < 4){
				for (var i = data.singerData.indexpage; i <= data.singerData.pagecount; i++) {
					pageitem +="<li><a  onclick='OutEmployeeAccounting("+i+")'>"+i+"</a></li>";
				}
			}else{
				for (var i = data.singerData.indexpage; i <= 4; i++) {
					pageitem +="<li><a  onclick='OutEmployeeAccounting("+i+")'>"+i+"</a></li>";
				}
			}
			
			pageitem +="<li><a  onclick='OutEmployeeAccounting("+data.singerData.pagecount+")'>尾页</a></li>";
		
			pagecontent.html(pageitem);
			*/
		
		}
		
	);		
}


function  queryPayVoucherByOrderId(){
	var a = location.search;
	var outDocId = a.substring(a.lastIndexOf("?")+1);
	

	$.post(
		"queryPayVoucherByOrderId.do",
		{"outDocId":outDocId},
		function(data){
					$("#outDocId").html(data.singerData.outDocId);
					$("#orderId").html(data.singerData.orderId);
					$("#outAmount").html(data.singerData.outAmount);
					$("#outDate").html(data.singerData.outDate);
					$("#outEmployeeId").html(data.singerData.outEmployeeId);
					$("#outDesc").html(data.singerData.outDesc);
				}
			);	
		}	






//删除
function deletes(outDocId){
	var f =confirm("你确定删除吗？")
	if (f) { 
		$.post(
				"deletePayVoucher.do",
				{"outDocId":outDocId},
				function(data){					
						location.href="Account_Out_ToEmployee_Doc.jsp"
					
				}
		);
	}
	
}



//修改
function editPayVoucherByOrderId() {
	alert(".......");
	$.post(
	
		"editPayVoucher.do",
		{
			"outDocId" : $("#outDocId").val(),
			"orderId" : $("#orderId").val(),
			"outAmount" : $("#outAmount").val(),
			"outDate" : $("#outDate").val(),
			"outEmployeeId" : $("#outEmployeeId").val(),
			"outDesc" : $("#outDesc").val(),
		},

		function(data) {
			alert("随便");
			alert(data.isResult + "data.isResult");
			if (data.isResult) {
				location.href = "Account_Out_ToEmployee_Doc.jsp";
			} else {
				location.href = "Account_Out_ToEmployee_Doc.jsp";
			}
	
		}
	);
}



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



function loaddataeditAEmployee() {
	alert();
	var a = location.search;
	var outDocId = a.substring(a.lastIndexOf("?") + 1);
	alert(outDocId);
	$.post("queryPayVoucherByOrderId.do", {
		"outDocId" : outDocId
	}, function(data) {
		$("#outDocId").val(data.singerData.outDocId);
		$("#orderId").val(data.singerData.orderId);
		$("#outAmount").val(data.singerData.outAmount);
		$("#outDate").val(data.singerData.outDate);
		$("#outEmployeeId").val(data.singerData.outEmployeeId);
		$("#outDesc").val(data.singerData.outDesc);
	});
}
function loaddataeditFCustomer2(){
	var a = location.search;
	var outDocId = a.substring(a.lastIndexOf("?")+1);
	
	alert("---------"+outDocId);
	$.post(
		"queryPayVoucherByOrderId.do",
		{"outDocId":outDocId},
		function(data){
			alert(data);
					$("#financePayId").val(data.singerData.outDocId);
				
					$("#shouldPay").val(data.singerData.outAmount);
				
				}
			);	
		}	

