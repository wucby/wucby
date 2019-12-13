function loadReturnOrder(indexpage){
	var returnId = $("#returnId").val();
	$.post(
			"queryReturnOrder.do",
			{"returnId":returnId,"indexpage":indexpage},
			function(data){
				var content = "";
				for (var i = 0; i < data.listDatas.length; i++) {
					var item = "<tr>";
					item += "<td>"+data.listDatas[i].returnId+"</td>";
					item += "<td>"+data.listDatas[i].purchaseId+"</td>";
					item += "<td>"+data.listDatas[i].returnDate+"</td>";
					item += "<td>"+data.listDatas[i].returnReason+"</td>";
					item += "<td>"+data.listDatas[i].returnEmployeeId+"</td>";
					item += "<td>"+data.listDatas[i].remark1+"</td>";
					item += "<td>"+data.listDatas[i].returnDesc+"</td>";
					item += "<td><a class='btn btn-info btn-sm' href='purchase_return_order_edit.jsp?"+data.listDatas[i].returnId+"'>查看详细</a>";
					item += "</td>";
					item += "</tr>";
					content += item;
				}
				$("#content").html(content);
				
				 var indexpagecontent = "";
					if(data.singerData.indexpage >= 1){
						indexpagecontent += "<li><a onclick='loadReturnOrder("+(data.singerData.indexpage - 1)+")'>&lt;</a></li>";
					}else{
						indexpagecontent += "<li><a>&lt;</a></li>";
					}
					
					if(data.singerData.pagecount > 3){
						if(data.singerData.indexpage <= 1){
							indexpagecontent += "<li><a onclick='loadReturnOrder(1)'>1</a></li>";
							indexpagecontent += "<li><a onclick='loadReturnOrder(2)'>2</a></li>";
							indexpagecontent += "<li><a onclick='loadReturnOrder(3)'>3</a></li>";
						}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
							for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
								indexpagecontent += "<li><a onclick='loadReturnOrder("+i+")'>"+i+"</a></li>";
							}
						}else{
							indexpagecontent += "<li><a onclick='loadReturnOrder("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
							indexpagecontent += "<li><a onclick='loadReturnOrder("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
							indexpagecontent += "<li><a onclick='loadReturnOrder("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
						}
					}else{
						for (var i = 1; i <= data.singerData.pagecount; i++) {
							indexpagecontent += "<li><a onclick='loadReturnOrder("+i+")'>"+i+"</a></li>";
						}
					}
					
					if(data.singerData.indexpage >= data.singerData.pagecount){
						indexpagecontent += " <li><a>&gt;</a></li>";
					}else{
						indexpagecontent += " <li><a onclick='loadReturnOrder("+(data.singerData.indexpage+1)+")'>&gt;</a></li>";
					}
			        var indexcontent = $("#page");
					indexcontent.html(indexpagecontent);				     
			}
	);
}

function queryByReturnOrder(){
	var id = location.search;
	var returnId = id.substring(id.lastIndexOf("?")+1);
	$.post(
			"queryByReturnOrder.do",
			{"returnId":returnId},
			function(data){
				$("#returnId").val(data.singerData.returnId);
				$("#purchaseId").val(data.singerData.purchaseId);
				$("#returnDate").val(data.singerData.returnDate);
				$("#returnReason").val(data.singerData.returnReason);
				$("#returnEmployeeId").val(data.singerData.returnEmployeeId);
				$("#returnDesc").val(data.singerData.returnDesc);
				$("#remark1").val(data.singerData.remark1);
			}
	);
}

function updateReturnOrder(){
	var returnId = $("#returnId").val();
	var purchaseId = $("#purchaseId").val();
	var returnDate = $("#returnDate").val();
	var returnReason = $("#returnReason").val();
	var returnEmployeeId = $("#returnEmployeeId").val();
	var returnDesc = $("#returnDesc").val();
	var remark1 = $("#remark1").val();
	$.post(
			"updateReturnOrder.do",
			{"returnId":returnId,"purchaseId":purchaseId,"returnDate":returnDate,"returnReason":returnReason,"returnEmployeeId":returnEmployeeId,"returnDesc":returnDesc,"remark1":remark1},
			function(data){
				alert(data.message);
				location.href="purchase_return_order.jsp";
			}
	);
}