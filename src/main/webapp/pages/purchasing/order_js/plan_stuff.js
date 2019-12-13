function loadPlanStuff(indexpage){
	$.post(
			"queryPurchasePlanStuff.do",
			{"indexpage":indexpage},
			function(data){
				var content = "";
				for (var i = 0; i < data.listDatas.length; i++) {
					var item = "<tr>";
					
					item += "<td>"+data.listDatas[i].purchasePlanId+"</td>";
					item += "<td>"+data.listDatas[i].supplierId+"</td>";
					item += "<td>"+data.listDatas[i].stuffId+"</td>";
					item += "<td>"+data.listDatas[i].stuffPurchaseCount+"</td>";
					item += "<td>"+data.listDatas[i].stuffCount+"</td>";
					item += "<td><a class='btn btn-sm btn-danger' href='Purchase_Plan_Stuff_add.jsp?purchasePlanId="+data.listDatas[i].purchasePlanId+"&supplierId="+data.listDatas[i].supplierId+"&stuffId="+data.listDatas[i].stuffId+"&stuffCount="+data.listDatas[i].stuffCount+"' >添加初步订单</a>";
					item += "</td>";
					item += "</tr>";
					content += item;
				}
				$("#content").html(content);
				
				var indexpagecontent = "";
				if(data.singerData.indexpage >= 1){
					indexpagecontent += "<li><a onclick='loadPlanStuff("+(data.singerData.indexpage - 1)+")'>&lt;</a></li>";
				}else{
					indexpagecontent += "<li><a>&lt;</a></li>";
				}
				
				if(data.singerData.pagecount > 3){
					if(data.singerData.indexpage <= 1){
						indexpagecontent += "<li><a onclick='loadPlanStuff(1)'>1</a></li>";
						indexpagecontent += "<li><a onclick='loadPlanStuff(2)'>2</a></li>";
						indexpagecontent += "<li><a onclick='loadPlanStuff(3)'>3</a></li>";
					}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
						for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
							indexpagecontent += "<li><a onclick='loadPlanStuff("+i+")'>"+i+"</a></li>";
						}
					}else{
						indexpagecontent += "<li><a onclick='loadPlanStuff("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
						indexpagecontent += "<li><a onclick='loadPlanStuff("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
						indexpagecontent += "<li><a onclick='loadPlanStuff("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
					}
				}else{
					for (var i = 1; i <= data.singerData.pagecount; i++) {
						indexpagecontent += "<li><a onclick='loadPlanStuff("+i+")'>"+i+"</a></li>";
					}
				}
				
				if(data.singerData.indexpage >= data.singerData.pagecount){
					indexpagecontent += " <li><a>&gt;</a></li>";
				}else{
					indexpagecontent += " <li><a onclick='loadPlanStuff("+(data.singerData.indexpage+1)+")'>&gt;</a></li>";
				}
		        var indexcontent = $("#page");
				indexcontent.html(indexpagecontent);
				
			}
	);
}

function addPlanStuff(){
	if(window.confirm("确认添加么？")){
		var supplierId = $("#supplierId").val();
		var stuffId = $("#stuffId").val();
		var purchaseCount = $("#purchaseCount").val();
		var stuffPrice = $("#stuffPrice").val();
		var stuffDealPrice = $("#stuffDealPrice").val();
		var purchasePlanId = $("#purchasePlanId").val();
		$.post(
				"addPurchaseStuff.do",
				{"purchasePlanId":purchasePlanId,"supplierId":supplierId,"stuffId":stuffId,"purchaseCount":purchaseCount,"stuffPrice":stuffPrice,"stuffDealPrice":stuffDealPrice},
				function(data){
					alert(data.message);
					location.href="Purchase_Stuff.jsp";
				}
		);
	}
}
