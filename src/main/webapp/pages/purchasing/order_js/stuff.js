function loadStuff(indexpage){
	var purchaseId = $("#purchaseId").val();
	$.post(
		"queryPurchaseStuff.do",
		{"indexpage":indexpage,"purchaseId":purchaseId},
		function(data){
			var content = "";
			for (var i = 0; i < data.listDatas.length; i++) {
				var item = "<tr>";
				item += "<td>"+data.listDatas[i].purchaseId+"</td>";
				item += "<td>"+data.listDatas[i].supplierId+"</td>";
				item += "<td>"+data.listDatas[i].stuffId+"</td>";
				item += "<td>"+data.listDatas[i].purchaseCount+"</td>";
				item += "<td>"+data.listDatas[i].stuffPrice+"</td>";
				item += "<td>"+data.listDatas[i].stuffDealPrice+"</td>";
				if(data.listDatas[i].remark1 == 1){
					item += "<td>历史记录";
				}else{
					item += "<td><a class='btn btn-sm btn-danger' href='Purchase_Stuff_add_order.jsp?purchaseId="+data.listDatas[i].purchaseId+"&supplierId="+data.listDatas[i].supplierId+"&stuffId="+data.listDatas[i].stuffId+"&purchaseCount="+data.listDatas[i].purchaseCount+"&stuffPrice="+data.listDatas[i].stuffPrice+"&stuffDealPrice="+data.listDatas[i].stuffDealPrice+"' >查看</a>";
				}
				item += "</td>";
				item += "</tr>";
				content += item;
			}
			$("#content").html(content);
			
			
			var indexpagecontent = "";
			if(data.singerData.indexpage >= 1){
				indexpagecontent += "<li><a onclick='loadStuff("+(data.singerData.indexpage - 1)+")'>«</a></li>";
			}else{
				indexpagecontent += "<li><a>«</a></li>";
			}
			
			if(data.singerData.pagecount > 3){
				if(data.singerData.indexpage <= 1){
					indexpagecontent += "<li><a onclick='loadStuff(1)'>1</a></li>";
					indexpagecontent += "<li><a onclick='loadStuff(2)'>2</a></li>";
					indexpagecontent += "<li><a onclick='loadStuff(3)'>3</a></li>";
				}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
					for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
						indexpagecontent += "<li><a onclick='loadStuff("+i+")'>"+i+"</a></li>";
					}
				}else{
					indexpagecontent += "<li><a onclick='loadStuff("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
					indexpagecontent += "<li><a onclick='loadStuff("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
					indexpagecontent += "<li><a onclick='loadStuff("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
				}
			}else{
				for (var i = 1; i <= data.singerData.pagecount; i++) {
					indexpagecontent += "<li><a onclick='loadStuff("+i+")'>"+i+"</a></li>";
				}
			}
			
			if(data.singerData.indexpage >= data.singerData.pagecount){
				indexpagecontent += " <li><a>»</a></li>";
			}else{
				indexpagecontent += " <li><a onclick='loadStuff("+(data.singerData.indexpage+1)+")'>»</a></li>";
			}
	        var indexcontent = $("#page");
			indexcontent.html(indexpagecontent);
		
		}
	);
}

function addStuffOrder(){
	var PurchaseId = $("#purchaseId").val();
	$.post(
			"addPurchaseOrder.do",
			{"PurchaseId":PurchaseId},
			function(data){
				alert(data.message);
				location.href="Purchase_Stuff.jsp";
			}
	);
}