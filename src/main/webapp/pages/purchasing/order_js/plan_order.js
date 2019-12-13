function loadPlanOrder(indexpage){
	var planId = $("#planId").val();
	$.post(
			"queryPurchasePlanOrder.do",
			{"indexpage":indexpage,"planId":planId},
			function(data){
				var content = ""
				for (var i = 0; i < data.listDatas.length; i++) {
					var item = "<tr>";
					
					item += "<td>"+data.listDatas[i].purchasePlanId+"</td>";
					item += "<td>"+data.listDatas[i].demandOrderId+"</td>";
					item += "<td>"+data.listDatas[i].fillEmployee+"</td>";
					item += "<td>"+data.listDatas[i].planDate+"</td>";
					if(data.listDatas[i].checkStatus == 1){
						item += "<td>通过</td>";
					}else if(data.listDatas[i].checkStatus == 2){
						item += "<td>等待审批</td>";
					}else{
						item += "<td>不通过</td>";
					}
					item += "<td><a class='btn btn-sm btn-danger' href='Purchase_Look_Plan_Order.jsp?"+data.listDatas[i].purchasePlanId+"' >查看</a>";
					item += "</td>";
					item += "</tr>";
					content += item;
				}
				$("#content").html(content);
				
		
				var indexpagecontent = "";
				if(data.singerData.indexpage >= 1){
					indexpagecontent += "<li><a onclick='loadPlanOrder("+(data.singerData.indexpage - 1)+")'>&lt;</a></li>";
				}else{
					indexpagecontent += "<li><a>&lt;</a></li>";
				}
				
				if(data.singerData.pagecount > 3){
					if(data.singerData.indexpage <= 1){
						indexpagecontent += "<li><a onclick='loadPlanOrder(1)'>1</a></li>";
						indexpagecontent += "<li><a onclick='loadPlanOrder(2)'>2</a></li>";
						indexpagecontent += "<li><a onclick='loadPlanOrder(3)'>3</a></li>";
					}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
						for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
							indexpagecontent += "<li><a onclick='loadPlanOrder("+i+")'>"+i+"</a></li>";
						}
					}else{
						indexpagecontent += "<li><a onclick='loadPlanOrder("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
						indexpagecontent += "<li><a onclick='loadPlanOrder("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
						indexpagecontent += "<li><a onclick='loadPlanOrder("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
					}
				}else{
					for (var i = 1; i <= data.singerData.pagecount; i++) {
						indexpagecontent += "<li><a onclick='loadPlanOrder("+i+")'>"+i+"</a></li>";
					}
				}
				
				if(data.singerData.indexpage >= data.singerData.pagecount){
					indexpagecontent += " <li><a>&gt;</a></li>";
				}else{
					indexpagecontent += " <li><a onclick='loadPlanOrder("+(data.singerData.indexpage+1)+")'>&gt;</a></li>";
				}
		        var indexcontent = $("#page");
				indexcontent.html(indexpagecontent);
			}	
				
	);
}


function lookPlanOrder(){
	var id = location.search;
	var purchasePlanId = id.substring(id.lastIndexOf("?")+1);
	$.post(
			"queryByPurchasePlanOrder.do",
			{"purchasePlanId":purchasePlanId},
			function(data){
				$("#purchasePlanId").val(data.singerData.purchasePlanId);
				$("#demandOrderId").val(data.singerData.demandOrderId);
				$("#fillEmployee").val(data.singerData.fillEmployee);
				$("#planDate").val(data.singerData.planDate);
				$("#demandDate").val(data.singerData.demandDate);
				$("#stuffId").val(data.singerData.stuffId);
				$("#stuffCount").val(data.singerData.stuffCount);
				if(data.singerData.checkStatus == 2){
					var htmls = "<a href='Purchase_add_Plan_Order.jsp?purchasePlanId="+data.singerData.purchasePlanId+"&stuffId="+data.singerData.stuffId+"&stuffCount="+data.singerData.stuffCount+"' class='btn btn-primary'>添加计划单</a>";
	                htmls += "                   <button type='button' onclick='javascript:history.back(-1)' class='btn btn-primary'>返回</button>";
	                $("#caozuo").html(htmls);
				}
			
			}
	);
}


	function addPurchaseStuff(){
		var purchasePlanId = $("#purchasePlanId").val();
		var supplierId = $("#demandOrderId").val();
		var stuffId = $("#stuffId").val();
		var stuffPurchaseCount = $("#stuffCount").val();
		var stuffCount = $("#stuffCount").val();
		$.post(
				"addPurchasePlanStuff.do",
				{"purchasePlanId":purchasePlanId,"supplierId":supplierId,"stuffId":stuffId,"stuffPurchaseCount":stuffPurchaseCount,"stuffCount":stuffCount},
				function(data){
					alert(data.message);
					location.href="Purchase_Plan_Order.jsp";
				}
		);
		
	}
