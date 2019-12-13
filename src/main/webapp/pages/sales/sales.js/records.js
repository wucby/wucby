$(function(){
	
	queryRecords(1);
});

function queryRecords(indexpage){
	var serviceId = $("#serviceId").val();
	$.post(
			"queryRecords.do",
			{"serviceId":serviceId,"indexpage":indexpage},
			function(data){
				var content = $("#content");
				var sumContent = "";
				for(var i= 0;i < data.listDatas.length; i++){	
					var item ="<tr>";
					item +=	"<td>"+data.listDatas[i].serviceId+"</td>"; 
					if(data.listDatas[i].serviceType == 1){
						item += "<td>售前服务</td>";
					}else{
						item += "<td>售后服务</td>";
					}
					item += "<td>"+data.listDatas[i].serviceCustid+"</td>";
					if(data.listDatas[i].serviceStatus == 1){
						item += "<td><span class='label label-danger'>待处理</span></td>";
						
					}else{
						item += "<td><span class='label label-success'>已处理</span></td>";
					}
					
					item += "<td>"+data.listDatas[i].serviceRequest+"</td>";
					item += "<td>"+data.listDatas[i].createEmployeeId+"</td>";
					item += "<td>"+data.listDatas[i].createTime+"</td>";
					if(data.listDatas[i].dealEmployeeId != null){
						item += "<td>"+data.listDatas[i].dealEmployeeId+"</td>";
					}else{
						item += "<td></td>";
					}
					
					
					if(data.listDatas[i].serviceStatus == 1){
						item += "<td>&nbsp;</td>";
					}else{
						item += "<td>"+data.listDatas[i].dealTime+"</td>";
					}
					
					
					if(data.listDatas[i].serviceStatus == 1){
						item += "<td><button onclick='updateStatus("+data.listDatas[i].serviceId+")' class='btn btn-info btn-sm'>确认处理</button></td>";
					}else{
						item += "<td></td>";
					}
					item += "</tr>";
					sumContent += item;
				}
				content.html(sumContent);
			
				
//				分页			
				  var pageitem = "";
				 
					if(data.singerData.indexpage >= 1){
						pageitem += "<li><a onclick='queryRecords("+(data.singerData.indexpage - 1)+")'>&lt;</a></li>";
					}else{
						pageitem += "<li><a>&lt;</a></li>";
					}
					
					if(data.singerData.pagecount > 3){
						if(data.singerData.indexpage <= 1){
							pageitem += "<li><a onclick='queryRecords(1)'>1</a></li>";
							pageitem += "<li><a onclick='queryRecords(2)'>2</a></li>";
							pageitem += "<li><a onclick='queryRecords(3)'>3</a></li>";
						}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
							for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
								pageitem += "<li><a onclick='queryRecords("+i+")'>"+i+"</a></li>";
							}
						}else{
							pageitem += "<li><a onclick='queryRecords("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
							pageitem += "<li><a onclick='queryRecords("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
							pageitem += "<li><a onclick='queryRecords("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
						}
					}else{
						for (var i = 1; i <= data.singerData.pagecount; i++) {
							pageitem += "<li><a onclick='queryRecords("+i+")'>"+i+"</a></li>";
						}
					}
					
					if(data.singerData.indexpage >= data.singerData.pagecount){
						pageitem += " <li><a>&gt;</a></li>";
					}else{
						pageitem += " <li><a onclick='queryRecords("+(data.singerData.indexpage+1)+")'>&gt;</a></li>";
					}
					
					
					var pagecontent = $("#pagination");
					
					pagecontent.html(pageitem);
			}
			);
}
			

function updateStatus(serviceId){
	alert(serviceId);
	$.post(
			"updateStatus.do",
			{"serviceId":serviceId},
			function(data){
				alert(data.message);
				location.href="records.jsp";
			});
}


