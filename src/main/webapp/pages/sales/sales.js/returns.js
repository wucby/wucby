$(function(){
	
	queryReturns(1);
});

function queryReturns(indexpage){
	var sellReturnId = $("#sellReturnId").val();
	var returnDate = $("#returnDate").val();
	$.post(
			"queryReturns.do",
			{"sellReturnId":sellReturnId,"returnDate":returnDate,"indexpage":indexpage},
			function(data){
				var content = $("#content");
				var sumContent = "";
				for(var i= 0;i < data.listDatas.length; i++){	
					var item ="<tr>";
					item +=	"<td>"+data.listDatas[i].sellReturnId+"</td>"; 
					item += "<td>"+data.listDatas[i].sellOrderId+"</td>";
					item += "<td>"+data.listDatas[i].returnDate+"</td>";
					item += "<td>"+data.listDatas[i].returnMoney+"</td>";
					item += "<td>"+data.listDatas[i].returnReason+"</td>";
					item += "<td>"+data.listDatas[i].employeeId+"</td>";
					item += "<td>"+data.listDatas[i].returnRemark+"</td>";
					item += "</tr>";
					sumContent += item;
				}
				content.html(sumContent);
				
				
//				分页			
				  var pageitem = "";
				 
					if(data.singerData.indexpage >= 1){
						pageitem += "<li><a onclick='queryReturns("+(data.singerData.indexpage - 1)+")'>&lt;</a></li>";
					}else{
						pageitem += "<li><a>&lt;</a></li>";
					}
					
					if(data.singerData.pagecount > 3){
						if(data.singerData.indexpage <= 1){
							pageitem += "<li><a onclick='queryReturns(1)'>1</a></li>";
							pageitem += "<li><a onclick='queryReturns(2)'>2</a></li>";
							pageitem += "<li><a onclick='queryReturns(3)'>3</a></li>";
						}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
							for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
								pageitem += "<li><a onclick='queryReturns("+i+")'>"+i+"</a></li>";
							}
						}else{
							pageitem += "<li><a onclick='queryReturns("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
							pageitem += "<li><a onclick='queryReturns("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
							pageitem += "<li><a onclick='queryCustomers("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
						}
					}else{
						for (var i = 1; i <= data.singerData.pagecount; i++) {
							pageitem += "<li><a onclick='queryReturns("+i+")'>"+i+"</a></li>";
						}
					}
					
					if(data.singerData.indexpage >= data.singerData.pagecount){
						pageitem += " <li><a>&gt;</a></li>";
					}else{
						pageitem += " <li><a onclick='queryReturns("+(data.singerData.indexpage+1)+")'>&gt;</a></li>";
					}
					
					
					var pagecontent = $("#pagination");
					
					pagecontent.html(pageitem);
			}
			);
}
						

