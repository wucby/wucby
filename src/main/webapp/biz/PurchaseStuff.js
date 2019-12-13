function loadProductStuff(){
	var id = location.search;
	var orderid = id.substring(id.lastIndexOf("?")+1);
	var sid=orderid.substring(orderid.lastIndexOf("=")+1)

	$.post(
			"queryPurchases.do",
			{"sid":sid},
			function(data){
				alert("data"+data.listDatas.length);
				var content = $("#context");
				var sumitem ="";
				
				for(var i = 0;i < data.listDatas.length;i++){
					alert("data"+data.listDatas[i].sellOrderId);
					var item = "<tr>";
					item+="<td>"+data.listDatas[i].Purchase_Id+"</td>";
					item+="<td>"+data.listDatas[i].Stuff_Id+"</td>";
					item+="<td>"+data.listDatas[i].Supplier_Id+"</td>";
					item+="<td>"+data.listDatas[i].Stuff_Count+"</td>";
					item+="<td>"+data.listDatas[i].Stuff_Price+"</td>";
					item+="<td>"+data.listDatas[i].Stuff_Deal_Price+"</td>";
					item+="</tr>";
					sumitem += item;
				
				}
				
					
				content.html(sumitem);
					
					
				}	
			
	);

}
