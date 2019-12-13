
function deleteTravel(travelId){
	var isDo = confirm("你确定要删除吗");
	if(isDo){
	$.post(
			"../personal/deleteTravel.do",
			{	
				"travelId":travelId
			},function(data){
				
				location.href="evection.jsp?";
			
			}
	
	);
	}
	
}

function queryByidTravel(){
	var a = location.search;
	var travelId = a.substring(a.lastIndexOf("?")+1);
	
	
	$.post(
			"../personal/loadTravelById.do",
			{"travelId":travelId},
			function(data){
				
				$("#travelId").val(data.singerData.travelId);
				$("#travelType").val(data.singerData.travelType);
				$("#employeeId").val(data.singerData.employeeId);
				$("#startTime").val(data.singerData.startTime);
				$("#endTime").val(data.singerData.endTime);
				$("#contentss").val(data.singerData.content);
			
				
			
			}
	
	);
	
}


function editTravel(){
	
	$.post(
			"../personal/editTravel.do",
			{"travelId":$("#travelId").val(),
			"travelType":$("#travelType").val(),
			"employeeId":$("#employeeId").val(),
			"startTime":$("#startTime").val(),
			"endTime":$("#endTime").val(),
			"content":$("#contentss").val(),
			
			},
			function(data){
				if(data != null){
					location.href="evection.jsp";
				}else{
					location.href="editEvection.jsp";
				}
				
				
			}
	
	);
	
	
}









function loadTravelData(indexpage){
	
	var travelId = $("#travelId").val();
	$.post(
		"../personal/loadTravelData.do",
		{	
			"travelId":travelId,
			"indexpage":indexpage
		},function(data){
			
			
			var content = $("#content");
			var sumitem ="";
			
			for(var i = 0;i < data.listDatas.length;i++){
				var item = "<tr>";
				item+="<td>"+data.listDatas[i].travelId+"</td>";
				if(data.listDatas[i].travelType == 0){
					item+="<td>培训</td>";
				}else{
					item+="<td>差旅</td>";
				}
				item+="<td>"+data.listDatas[i].employeeId+"</td>";
				item+="<td>"+data.listDatas[i].startTime+"</td>";
				item+="<td>"+data.listDatas[i].endTime+"</td>";
				item+="<td>"+data.listDatas[i].content+"</td>";
				item+="<td><a href='evectionCost.jsp?"+data.listDatas[i].travelId+"'><span class='label label-info'>费用详情</span><a><a href='editEvection.jsp?"+data.listDatas[i].travelId+"' ><span class='label label-success'>修改</span><a><a href='#' onclick='deleteTravel(\""+data.listDatas[i].travelId+"\")'><span class='label label-danger'>删除</span><a></td>";
				item+="</tr>";
				
				sumitem += item;
			}
			
			
			content.html(sumitem);
			
			var pagehtml ="";
			
			pagehtml += "<a onclick='loadTravelData(1)'>[首页]</a>";
			if(data.singerData.indexpage > 1){
				
				pagehtml += "<a onclick='loadTravelData("+(data.singerData.indexpage - 1)+")'>上一页 </a>";
			}else{
				pagehtml +="上一页";
				
			}
			
			
			if(data.singerData.pagecount < 4){
				for (var i = 1; i <= data.singerData.pagecount; i++) {
					pagehtml +="<a  onclick='loadTravelData("+i+")'>["+i+"]</a>";
				}
			
				}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
					
					for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
							pagehtml += "<a onclick='loadTravelData("+i+")'><li>[ "+i+" ]</li></a>";
						}
					}else{
						for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
							pagehtml += "<a onclick='loadTravelData("+i+")'><li>["+i+"]</li></a>";
						}
				}
				
			
			if(data.singerData.indexpage < data.singerData.pagecount){
				
				pagehtml += "<a onclick='loadTravelData("+(data.singerData.indexpage + 1)+")'>下一页 </a>";
			}else{
				pagehtml +="下一页";
			}
			
			
			pagehtml += "<a onclick='loadTravelData("+(data.singerData.pagecount)+")'>[尾页]</a>";
			pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
			pagehtml +="</ul></li>";
			$("#mypage").html(pagehtml);
			
		}
		
		
	);
}

function addTravel(){
	$.post(
			"../personal/addTravel.do",
			{"travelId":$("#travelId").val(),
			"travelType":$("#travelType").val(),
			"employeeId":$("#employeeId").val(),
			"startTime":$("#startTime").val(),
			"endTime":$("#endTime").val(),
			"content":$("#contentss").val(),
			
			},
			function(data){
				if(data != null){
					location.href="evection.jsp";
				}else{
					location.href="addEvection.jsp";
				}
				
				
			}
	
	);
	
}
function loadEmpId(){
	var a = location.search;
	var employeeId = a.substring(a.lastIndexOf("?")+1);
	
	
	$.post(
			"../api/queryEmployeeById.do",
			{"employeeId":employeeId},
			function(data){
				
				
				
				
				$("#employeeId").val(data.singerData.employeeId);
				
				
			
				
			
			}
	
	);
	
}


function queryTravelCostById(indexpage){
	var a = location.search;
	var travelId = a.substring(a.lastIndexOf("?")+1);
	
	
	$.post(
			"../personal/loadTravelCost.do",
			{"travelId":travelId,
			"indexpage":indexpage	
			},
			
			function(data){
				
				
				var content = $("#content");
				var sumitem ="";
					
				for(var i = 0;i < data.listDatas.length;i++){
					var item = "<tr>";
					item+="<td>"+data.listDatas[i].travelId+"</td>";
					item+="<td>"+data.listDatas[i].costName+"</td>";
					item+="<td>"+data.listDatas[i].cost+"</td>";
					item+="</tr>";
					sumitem += item;
					
				}
				
				
				content.html(sumitem);
				
				var pagehtml ="";
				
				pagehtml += "<a onclick='queryTravelCostById(1)'>[首页]</a>";
				if(data.singerData.indexpage > 1){
					
					pagehtml += "<a onclick='queryTravelCostById("+(data.singerData.indexpage - 1)+")'>上一页 </a>";
				}else{
					pagehtml +="上一页";
					
				}
				
				
				if(data.singerData.pagecount < 4){
					for (var i = 1; i <= data.singerData.pagecount; i++) {
						pagehtml +="<a  onclick='queryTravelCostById("+i+")'>["+i+"]</a>";
					}
				
					}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
						
						for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
								pagehtml += "<a onclick='queryTravelCostById("+i+")'><li>[ "+i+" ]</li></a>";
							}
						}else{
							for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
								pagehtml += "<a onclick='queryTravelCostById("+i+")'><li>["+i+"]</li></a>";
							}
					}
					
				
				if(data.singerData.indexpage < data.singerData.pagecount){
					
					pagehtml += "<a onclick='queryTravelCostById("+(data.singerData.indexpage + 1)+")'>下一页 </a>";
				}else{
					pagehtml +="下一页";
				}
				
				
				pagehtml += "<a onclick='queryTravelCostById("+(data.singerData.pagecount)+")'>[尾页]</a>";
				pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
				pagehtml +="</ul></li>";
				$("#mypage").html(pagehtml);
				
				
			
				
			
			}
	
	);
	
}

function addTravelCost(){
	var a = location.search;
	var travelId = a.substring(a.lastIndexOf("?")+1);
	
	$.post(
			"../personal/addTravelCost.do",
			{"travelId":$("#travelId").val(),
			"costName":$("#costName").val(),
			"cost":$("#cost").val()
			
			
			},
			function(data){
				if(data != null){
					location.href="evectionCost.jsp?"+travelId;
				}else{
					location.href="addEvectionCost.jsp?"+travelId;
				}
				
				
			}
	
	);
	
}

function queryTravelCost(){
	
	var a = location.search;
	var travelId = a.substring(a.lastIndexOf("?")+1);
	
	
	$.post(
			"../personal/loadTravelCost.do",
			{"travelId":travelId},
			function(data){
				$("#travelId").val(travelId);
			
				
			
			}
	
	);
	
}

function travelCost(){
	var a = location.search;
	var travelId = a.substring(a.lastIndexOf("?")+1);
	
	
	$.post(
			"../personal/loadTravelCost.do",
			{"travelId":travelId},
			function(data){
			
				location.href="addEvectionCost.jsp?"+travelId;
				
			
			}
	
	);
	
	
}

function deleteTravelCost(){
	var a = location.search;
	var travelId = a.substring(a.lastIndexOf("?")+1);
	var isDo = confirm("你确定要删除吗");
	if(isDo){
	$.post(
			"../personal/deleteTravelCost.do",
			{	
				"travelId":travelId
			},function(data){
				
				location.href="evectionCost.jsp?"+travelId;
			
			}
	
	);
	}
	
}
