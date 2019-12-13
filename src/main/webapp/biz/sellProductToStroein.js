function loaddataSellin(){
	var id = location.search;
	var orderid = id.substring(id.lastIndexOf("?")+1);
	var sid=orderid.substring(orderid.lastIndexOf("=")+1)
	$.post(
			"SelectProducts.do",
			{"sid":sid},
			function(data){
				var content = $("#context");
				var sumitem ="";
				
				for(var i = 0;i < data.listDatas.length;i++){
					var item = "<tr>";
					item+="<td><input  id='sellOrderId' type='hidden' value='"+data.listDatas[i].sellOrderId+"'></td>";
					item+="<td>"+data.listDatas[i].sellOrderId+"</td>";
					item+="<td>"+data.listDatas[i].productId+"</td>";
					item+="<td>"+data.listDatas[i].productCount+"</td>";
					item+="<td>"+data.listDatas[i].quotePrice+"</td>";
					item+="</tr>";
					sumitem += item;
				
				}
				
					
					content.html(sumitem);
					
					var contentid = $("#contextid");
					var sumitemid ="";
					sumitemid+="<ul class='pagination pagination-sm no-margin pull-right'>"
					sumitemid+= "<li>"
							sumitemid+=	"<a href='Sell_Product.jsp'><button class='btn btn-info btn-sm' >产品表</button></a>"          
					sumitemid+="</li>"
						
				    sumitemid+= "<li>"
					if(data.result==true){
						sumitemid+=	"<a href='#' onclick='checkid()' class='btn btn-info btn-sm' >确定入货</a>"          
					}else{
						sumitemid+="<a href='#' onMouseOver='checkid2()' >确定入货</a>"
					}
					sumitemid+="</li>"
					sumitemid+="</ul>"
						
				contentid.html(sumitemid)
				}	
			
	);

}


function checkid(){
	var id=$("#sellOrderId").val();
	location.href="selectWarehouses.do?id="+id;
	
}

function checkid2(){
	alert("对不起不能入库，请核对好再入库!");

}