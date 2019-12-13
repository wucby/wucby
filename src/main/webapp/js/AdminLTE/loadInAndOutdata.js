//查询
function loadInAndOutdata(indexpage){
	$.post(
		"loadWareInAndOut.do",
		{"indexpage":indexpage},
		function(data){			
			var content = $("#content");
			var sumitem = "";
						
			for(var i= 0;i < data.listDatas.length;i++){
				var item = "<tr>";
				item += "<td>"+data.listDatas[i].listId+"</td>";
				if (data.listDatas[i].listType==001) {	
					item += "<td><span>入库</span></td>";		
				} else if(data.listDatas[i].listType==002){
					item += "<td><span>出库</span></td>";
				}
				item += "<td>"+data.listDatas[i].signPerson+"</td>";
				item += "<td>"+data.listDatas[i].signTime+"</td>";	
				item += "<td>"+data.listDatas[i].orderId+"</td>";	
				if (data.listDatas[i].checkStatus==0) {	
					item += "<td><span>待处理</span></td>";		
				}else if(data.listDatas[i].checkStatus==1){
					item += "<td><span>通过</span></td>";
				}else if(data.listDatas[i].checkStatus==2){
					item += "<td><span>不通过</span></td>";
				}
				item += "<td><a href='update.do?id="+data.listDatas[i].listId+"&stutes=1' class='btn btn-info btn-sm'>通过</a>"+
							"<a href='update.do?id="+data.listDatas[i].listId+"&stutes=2' class='btn btn-info btn-sm'>不通过</a>&nbsp;&nbsp;&nbsp;&nbsp;"+
							"<a href='WarehouseInAndOutDetails.jsp?"+data.listDatas[i].listId+"' class='btn btn-info btn-sm'>详细</a>&nbsp;&nbsp;&nbsp;&nbsp;"+
							"<a href='selectWareInAndOut.do?listId="+data.listDatas[i].listId+"'  class='btn btn-info btn-sm'>修改</a></td>"	
				item += "</tr>";

				sumitem += item;
			}
			
			content.html(sumitem);
			
	//使用js封装分页数据	
			
			var pagehtml ="";
		
			pagehtml += "<a onclick='loadInAndOutdata(1)'>[首页]</a>";
			if(data.singerData.indexpage > 1){
				
				pagehtml += "<a onclick='loadInAndOutdata("+(data.singerData.indexpage - 1)+")'>上一页 </a>";
			}else{
				pagehtml +="上一页";
				
			}
			
			
			if(data.singerData.pagecount < 4){
				for (var i = 1; i <= data.singerData.pagecount; i++) {
					pagehtml +="<a  onclick='loadInAndOutdata("+i+")'>["+i+"]</a>";
				}
			
				}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
					
					for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
							pagehtml += "<a onclick='loadInAndOutdata("+i+")'><li>[ "+i+" ]</li></a>";
						}
					}else{
						for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
							pagehtml += "<a onclick='loadInAndOutdata("+i+")'><li>["+i+"]</li></a>";
						}
				}
				
			
			if(data.singerData.indexpage < data.singerData.pagecount){
				
				pagehtml += "<a onclick='loadInAndOutdata("+(data.singerData.indexpage + 1)+")'>下一页 </a>";
			}else{
				pagehtml +="下一页";
			}
			
			
			pagehtml += "<a onclick='loadInAndOutdata("+(data.singerData.pagecount)+")'>[尾页]</a>";
			pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
			pagehtml +="</ul></li>";
			$("#pages").html(pagehtml);
		}
	);	
}

//删除
function deletewareInAndOut(listId) {
	
	var data = confirm("你确定删除吗？");
	if (data) {
		$.post(
		"deleteWareInAndOut.do",
		{"listId":listId},
		function(data) {
			location.href="Warehouse_In_And_Out.jsp";
		}
		);
	}
	
}


//查询详细出入库
function queryInAndOut() {
	var id = location.search;
	var listId = id.substring(id.lastIndexOf("?")+1);
	$.post(
			"queryInAndOut.do",
			{"listId":listId},
			function(data){		
				var details = $("#details");
				var sumitem = "";
							
				for(var i= 0;i < data.listDatas.length;i++){
					var item = "<tr>";
					item += "<td>"+data.listDatas[i].listId+"</td>";
					item += "<td>"+data.listDatas[i].warehouseId+"</td>";
					item += "<td>"+data.listDatas[i].stuffId+"</td>";
					item += "<td>"+data.listDatas[i].stuffInt+"</td>";	
					item += "<td><a href='Warehouse_In_And_Out.jsp' class='btn btn-info btn-sm'>返回</a></td>"	
					item += "</tr>";
					sumitem += item;
				}
				
				details.html(sumitem)
		}	
	
	);
}


