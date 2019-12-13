function loadTransfer(indexpage){
	
	$.post(
		"../api/loadTransfer.do",
		{
			
			"indexpage":indexpage
		},
		
		function(data){
			
			
			var content = $("#content");
			var sumitem ="";
			
			for(var i = 0;i < data.listDatas.length;i++){
				var item = "<tr>";
				item+="<td>"+data.listDatas[i].transferId+"</td>";
				if(data.listDatas[i].transferType == 0){
					item+="<td>新进</td>";
				}else{
					item+="<td>调动</td>";
				}
				
				if(data.listDatas[i].oldDepartmentId == 1){
					item+="<td>普通员工</td>";
				}else if(data.listDatas[i].oldDepartmentId == 2){
					item+="<td>人事部</td>";
				}else if(data.listDatas[i].oldDepartmentId == 3){
					item+="<td>行政部</td>";
				}else{
					item+="<td>系统管理员</td>";
				}
				if(data.listDatas[i].oldPositionsId == 1){
					item+="<td>员工1</td>";
				}else if(data.listDatas[i].oldPositionsId == 2){
					item+="<td>员工2</td>";
				}else if(data.listDatas[i].oldPositionsId == 3){
					item+="<td>人事1</td>";
				}else if(data.listDatas[i].oldPositionsId == 4){
					item+="<td>人事2</td>";
				}else if(data.listDatas[i].oldPositionsId == 5){
					item+="<td>行政1</td>";
				}else if(data.listDatas[i].oldPositionsId == 6){
					item+="<td>行政2</td>";
				}else if(data.listDatas[i].oldPositionsId == 7){
					item+="<td>管理员1</td>";
				}else{
					item+="<td>管理员2</td>";
				}
				if(data.listDatas[i].newDepartmentId == 1){
					item+="<td>普通员工</td>";
				}else if(data.listDatas[i].newDepartmentId == 2){
					item+="<td>人事部</td>";
				}else if(data.listDatas[i].newDepartmentId == 3){
					item+="<td>行政部</td>";
				}else{
					item+="<td>系统管理员</td>";
				}
				if(data.listDatas[i].newPositionsId == 1){
					item+="<td>员工1</td>";
				}else if(data.listDatas[i].newPositionsId == 2){
					item+="<td>员工2</td>";
				}else if(data.listDatas[i].newPositionsId == 3){
					item+="<td>人事1</td>";
				}else if(data.listDatas[i].newPositionsId == 4){
					item+="<td>人事2</td>";
				}else if(data.listDatas[i].newPositionsId == 5){
					item+="<td>行政1</td>";
				}else if(data.listDatas[i].newPositionsId == 6){
					item+="<td>行政2</td>";
				}else if(data.listDatas[i].newPositionsId == 7){
					item+="<td>管理员1</td>";
				}else{
					item+="<td>管理员2</td>";
				}
				item+="<td>"+data.listDatas[i].transferDate+"</td>";
				item+="<td>"+data.listDatas[i].transferDesc+"</td>";
				item+="<td><a href='#' onclick='deleteTransfer(\""+data.listDatas[i].transferId+"\")'><span class='label label-danger'>删除</span><a></td>";
				item+="</tr>";
				
				
				sumitem += item;
			}
			
			
			content.html(sumitem);
			
			
			var pagehtml ="";
			
			pagehtml += "<a onclick='loadTransfer(1)'>[首页]</a>";
			if(data.singerData.indexpage > 1){
				
				pagehtml += "<a onclick='loadTransfer("+(data.singerData.indexpage - 1)+")'>上一页 </a>";
			}else{
				pagehtml +="上一页";
				
			}
			
			
			if(data.singerData.pagecount < 4){
				for (var i = 1; i <= data.singerData.pagecount; i++) {
					pagehtml +="<a  onclick='loadTransfer("+i+")'>["+i+"]</a>";
				}
			
				}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
					
					for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
							pagehtml += "<a onclick='loadTransfer("+i+")'><li>[ "+i+" ]</li></a>";
						}
					}else{
						for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
							pagehtml += "<a onclick='loadTransfer("+i+")'><li>["+i+"]</li></a>";
						}
				}
				
			
			if(data.singerData.indexpage < data.singerData.pagecount){
				
				pagehtml += "<a onclick='loadTransfer("+(data.singerData.indexpage + 1)+")'>下一页 </a>";
			}else{
				pagehtml +="下一页";
			}
			
			
			pagehtml += "<a onclick='loadTransfer("+(data.singerData.pagecount)+")'>[尾页]</a>";
			pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
			pagehtml +="</ul></li>";
			$("#mypage").html(pagehtml);
			
		}
		
		
	);
}

function addTransfer(){
	var a = location.search;
	var employeeId = a.substring(a.lastIndexOf("?")+1);
	$.post(
			"../api/addTransfer.do",
			{"transferId":$("#transferId").val(),
			"transferType":$("#transferType").val(),
			"oldDepartmentId":$("#oldDepartmentId").val(),
			"oldPositionsId":$("#oldPositionsId").val(),
			"newDepartmentId":$("#newDepartmentId").val(),
			"newPositionsId":$("#newPositionsId").val(),
			"transferDate":$("#transferDate").val(),
			"transferDesc":$("#transferDescss").val(),
			
			},function(data){
				editDept();
				
				
			}
			
			
	);
	
	
	
}

function editDept(){
	var a = location.search;
	var employeeId = a.substring(a.lastIndexOf("?")+1);
	var departmentId =  $("#newDepartmentId").val();
	var positionId =  $("#newPositionsId").val();
	$.post(
			"../api/editDepartment.do",
			{	
				"employeeId":employeeId,
				"departmentId":departmentId,
				"positionId":positionId,
			},function(data){
				
				
					location.href="changeJob.jsp";
				
			}
			
	
	
	
	
	);



}


function deleteTransfer(transferId){
	var isDo = confirm("你确定要删除吗");
	if(isDo){
		$.post(
			"../api/deleteTransferById.do",
			{	
				"transferId":transferId,
				
			},function(data){
				
				
					location.href="changeJob.jsp";
				
			}
			
	
	
	
	
		);
	}



}
