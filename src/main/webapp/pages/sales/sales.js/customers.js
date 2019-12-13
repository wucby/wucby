$(function(){
	
	queryCustomers(1);
});

function queryCustomers(indexpage){
	var companyName = $("#companyName").val();
	$.post(
			"queryCustomers.do",
			{"companyName":companyName,"indexpage":indexpage},
			function(data){
				var content = $("#content");
				var sumContent = "";
				for(var i= 0;i < data.listDatas.length; i++){	
					var item ="<tr>";
					item +=	"<td>"+data.listDatas[i].customerId+"</td>"; 
					item += "<td>"+data.listDatas[i].companyName+"</td>";
					if(data.listDatas[i].customerType == 1){
						item += "<td>客户</td>";
						
					}else{
						item += "<td>供应商</td>";
						
					}
					item += "<td>"+data.listDatas[i].remark1+"</td>";
					item += "<td>"+data.listDatas[i].customerEmail+"</td>";
					item += "<td><a class='btn btn-info btn-sm' href='newLinkman.jsp?customerId="+data.listDatas[i].customerId+"'>添加联系人</a><a class='btn btn-info btn-sm' href='quotedprice.jsp?customerId="+data.listDatas[i].customerId+"'>报价 </button><a class='btn btn-info btn-sm' href='newRecord.jsp?customerId="+data.listDatas[i].customerId+"'>添加服务记录</a></td>";
					item += "<td><a class='btn btn-info btn-success' href='querySingleCustomer.do?customerId="+data.listDatas[i].customerId+"'>查看</a><button class='btn btn-info btn-danger' onclick='deleteCustomer("+data.listDatas[i].customerId+")'>删除 </button></td>";
					item += "</tr>";
					sumContent += item;
				}
				content.html(sumContent);
				
				
//				分页			
				  var pageitem = "";
				 
					if(data.singerData.indexpage >= 1){
						pageitem += "<li><a onclick='queryCustomers("+(data.singerData.indexpage - 1)+")'>&lt;</a></li>";
					}else{
						pageitem += "<li><a>&lt;</a></li>";
					}
					
					if(data.singerData.pagecount > 3){
						if(data.singerData.indexpage <= 1){
							pageitem += "<li><a onclick='queryCustomers(1)'>1</a></li>";
							pageitem += "<li><a onclick='queryCustomers(2)'>2</a></li>";
							pageitem += "<li><a onclick='queryCustomers(3)'>3</a></li>";
						}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
							for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
								pageitem += "<li><a onclick='queryCustomers("+i+")'>"+i+"</a></li>";
							}
						}else{
							pageitem += "<li><a onclick='queryCustomers("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
							pageitem += "<li><a onclick='queryCustomers("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
							pageitem += "<li><a onclick='queryCustomers("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
						}
					}else{
						for (var i = 1; i <= data.singerData.pagecount; i++) {
							pageitem += "<li><a onclick='queryCustomers("+i+")'>"+i+"</a></li>";
						}
					}
					
					if(data.singerData.indexpage >= data.singerData.pagecount){
						pageitem += " <li><a>&gt;</a></li>";
					}else{
						pageitem += " <li><a onclick='queryCustomers("+(data.singerData.indexpage+1)+")'>&gt;</a></li>";
					}
					
					
					var pagecontent = $("#pagination");
					
					pagecontent.html(pageitem);
			}
			);
}
			
function deleteCustomer(customerId){
	if(window.confirm("删除本数据后不能恢复，您确定要删除吗？")){
		$.post(
				"deleteCustomer.do",
				{"customerId":customerId},	
		
			function(data){
					alert(data.message);
					location.href="customers.jsp";
					
				}
		);
		
	}
}
	
function querySingleCustomer(customerId){
	window.location.href="querySingleCustomer.do?customerId="+customerId;
	
}
	

	