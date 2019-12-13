function queryorder(indexpage){
	var purchaseId = $("#purchaseId").val();
	var checkStatus = $("#checkStatus").val();
	var purchaseStatus = $("#purchaseStatus").val();
	$.post(
			"purchaseOrder.do",
			{"purchaseStatus":purchaseStatus,"checkStatus":checkStatus,"purchaseId":purchaseId,"indexpage":indexpage},
			function(data){
				var content = "";
				for (var i = 0; i < data.listDatas.length; i++) {
					var item = "<tr>";
					item += "<td>"+data.listDatas[i].purchaseId+"</td>";
					item += "<td>"+data.listDatas[i].fillEmployee+"</td>";
					item += "<td>"+data.listDatas[i].planDate+"</td>";
					
					if(data.listDatas[i].checkStatus == 1){
						item += "<td><span class='label label-danger'>未通过</span></td>";
					}else if(data.listDatas[i].checkStatus == 2){
						item += "<td><span class='label label-success'>通过</span></td>";
					}else{
						item += "<td><span class='label label-danger'></span></td>";
					}
					
					if(data.listDatas[i].purchaseStatus == 1){
						item += "<td><span class='label label-danger'>未采购</span></td>";
					}else if(data.listDatas[i].purchaseStatus == 2){
						item += "<td><span class='label label-success'>正在采购</span></td>";
					}else if(data.listDatas[i].purchaseStatus == 3){
						item += "<td><span class='label label-success'>等待入库</span></td>";
					}else if(data.listDatas[i].purchaseStatus == 4){
						item += "<td><span class='label label-danger'>入库不通过</span></td>";
					}else if(data.listDatas[i].purchaseStatus == 5){
						item += "<td><span class='label label-success'>入库中</span></td>";
					}else if(data.listDatas[i].purchaseStatus == 6){
						item += "<td><span class='label label-success'>完成</span></td>";
					}else if(data.listDatas[i].purchaseStatus == 7){
						item += "<td><span class='label label-danger'>撤销</span></td>";
					}else{
						item += "<td><span class='label label-danger'></span></td>";
					}
					
					if(data.listDatas[i].paidStatus == 1){
						item += "<td><span class='label label-danger'>未支付</span></td>";
					}else if(data.listDatas[i].paidStatus == 2){
						item += "<td><span class='label label-success'>已支付</span></td>";
					}else{
						item += "<td><span class='label label-danger'></span></td>";
					}
					
					item += "<td>"+data.listDatas[i].purchaseEmployeeId+"</td>";
					item += "<td>";
					item += "<a class='btn btn-info btn-sm' href='Purchase_Order_add.jsp?"+data.listDatas[i].purchaseId+"'>查看详细</a>";
					item += "</td>";
					item += "</tr>";
					content += item;
					
				}
				 var contentid = $("#content");
				 contentid.html(content);
				 
				 var indexpagecontent = "";
					if(data.singerData.indexpage >= 1){
						indexpagecontent += "<li><a onclick='queryorder("+(data.singerData.indexpage - 1)+")'>&lt;</a></li>";
					}else{
						indexpagecontent += "<li><a>&lt;</a></li>";
					}
					
					if(data.singerData.pagecount > 3){
						if(data.singerData.indexpage <= 1){
							indexpagecontent += "<li><a onclick='queryorder(1)'>1</a></li>";
							indexpagecontent += "<li><a onclick='queryorder(2)'>2</a></li>";
							indexpagecontent += "<li><a onclick='queryorder(3)'>3</a></li>";
						}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
							for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
								indexpagecontent += "<li><a onclick='queryorder("+i+")'>"+i+"</a></li>";
							}
						}else{
							indexpagecontent += "<li><a onclick='queryorder("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
							indexpagecontent += "<li><a onclick='queryorder("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
							indexpagecontent += "<li><a onclick='queryorder("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
						}
					}else{
						for (var i = 1; i <= data.singerData.pagecount; i++) {
							indexpagecontent += "<li><a onclick='queryorder("+i+")'>"+i+"</a></li>";
						}
					}
					
					if(data.singerData.indexpage >= data.singerData.pagecount){
						indexpagecontent += " <li><a>&gt;</a></li>";
					}else{
						indexpagecontent += " <li><a onclick='queryorder("+(data.singerData.indexpage+1)+")'>&gt;</a></li>";
					}
			        var indexcontent = $("#indexpage");
					indexcontent.html(indexpagecontent);
			}
	);
}

function loadbyorder(){
	var id = location.search;
	var purchaseId = id.substring(id.lastIndexOf("?")+1);
	$.post(
			"purchaseByOrder.do",
			{"purchaseId":purchaseId},
			function(data){
				$("#purchaseId").val(data.singerData.purchaseId);
				$("#fillEmployee").val(data.singerData.fillEmployee);
				$("#planDate").val(data.singerData.planDate);
				$("#checkStatus").val(data.singerData.checkStatus);
				$("#purchaseStatus").val(data.singerData.purchaseStatus);
				$("#paidStatus").val(data.singerData.paidStatus);
				$("#purchaseEmployeeId").val(data.singerData.purchaseEmployeeId);
			}
	);
}

function updateorder(){
	var purchaseId = $("#purchaseId").val();
	var fillEmployee = $("#fillEmployee").val();
	var planDate = $("#planDate").val();
	var checkStatus = $("#checkStatus").val();
	var purchaseStatus = $("#purchaseStatus").val();
	var paidStatus = $("#paidStatus").val();
	var purchaseEmployeeId = $("#purchaseEmployeeId").val();
	
	$.post(
			"updatepurchaseOrder.do",
			{"purchaseId":purchaseId,"fillEmployee":fillEmployee,"planDate":planDate,"purchaseStatus":purchaseStatus,"paidStatus":paidStatus,"purchaseEmployeeId":purchaseEmployeeId},
			function(data){
				alert(data.message);
				location.href="Purchase_Order.jsp";
			}
	);
}