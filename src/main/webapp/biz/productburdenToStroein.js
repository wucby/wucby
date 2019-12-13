function loaddataProductin(){
	var id = location.search;
	var orderid = id.substring(id.lastIndexOf("?")+1);
	var sid=orderid.substring(orderid.lastIndexOf("=")+1)
	$.post(
			"queryDemandStuffToProducts.do",
			{"sid":sid},
			function(data){

				var content = $("#context");
				var sumitem ="";
				
				for(var i = 0;i < data.listDatas.length;i++){
					var item = "<tr>";
					item+="<td><input  id='sellOrderId' type='hidden' value='"+data.listDatas[i].productId+"'></td>";
					item+="<td>"+data.listDatas[i].productId+"</td>";
					item+="<td>"+data.listDatas[i].stuffId+"</td>";
					item+="<td>"+data.listDatas[i].stuffCount+"</td>";
					item+="</tr>";
					sumitem += item;
				
				}
				
					
					content.html(sumitem);
					
					var contentid = $("#contextid");
					var sumitemid ="";
					sumitemid+="<ul class='pagination pagination-sm no-margin pull-right'>"
					sumitemid+= "<li>"
								sumitemid+=	" <a href='Product_Burden.jsp'><button class='btn btn-info btn-sm' >物料表</button></a>"          
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
	location.href="queryDemandToProducts.do?wid="+id;
	
}

function checkid2(){
	alert("对不起不能入库，请核对好再入库!");

}