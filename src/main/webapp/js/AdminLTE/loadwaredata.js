function loadwaredata(indexpage){
	$.post(
		"loadcheck.do",
		{"indexpage":indexpage},
		function(data){			
			var content = $("#content");
			var sumitem = "";
			for(var i= 0;i < data.listDatas.length;i++){
				var item = "<tr>";
				item += "<td>"+data.listDatas[i].checkId+"</td>";
				item += "<td>"+data.listDatas[i].stuffId+"</td>";
				item += "<td>"+data.listDatas[i].stuffCount+"</td>";
				item += "<td>"+data.listDatas[i].checkTime+"</td>";
				item += "<td>"+data.listDatas[i].checkPerson+"</td>";
				item += "<td>"+data.listDatas[i].signPerson+"</td>";
				item += "<td><a href='#' class='btn btn-info btn-sm'>提交</a></td>";
				item += "</tr>";

				sumitem += item;
			}
			
			
			content.html(sumitem);
			
	//使用js封装分页数据	
			
			var pagehtml ="";
		
			pagehtml += "<a onclick='loadwaredata(1)'>[首页]</a>";
			if(data.singerData.indexpage > 1){
				
				pagehtml += "<a onclick='loadwaredata("+(data.singerData.indexpage - 1)+")'>上一页 </a>";
			}else{
				pagehtml +="上一页";
				
			}
			
			
			if(data.singerData.pagecount < 4){
				for (var i = 1; i <= data.singerData.pagecount; i++) {
					pagehtml +="<a  onclick='loadwaredata("+i+")'>["+i+"]</a>";
				}
			
				}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
					
					for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
							pagehtml += "<a onclick='loadwaredata("+i+")'><li>[ "+i+" ]</li></a>";
						}
					}else{
						for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
							pagehtml += "<a onclick='loadwaredata("+i+")'><li>["+i+"]</li></a>";
						}
				}
				
			
			if(data.singerData.indexpage < data.singerData.pagecount){
				
				pagehtml += "<a onclick='loadwaredata("+(data.singerData.indexpage + 1)+")'>下一页 </a>";
			}else{
				pagehtml +="下一页";
			}
			
			
			pagehtml += "<a onclick='loadwaredata("+(data.singerData.pagecount)+")'>[尾页]</a>";
			pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
			pagehtml +="</ul></li>";
			$("#mypage").html(pagehtml);
			
			

		}
	);	
}

//添加
function addWarehousecheck() {
	var checkId=$("#checkId").val();
	var warehouseId=$("#warehouseId").val();
	var stuffId=$("#stuffId").val();
	var bookCount=$("#bookCount").val();
	var stuffCount=$("#stuffCount").val();
	var checkTime=$("#checkTime").val();
	var checkPerson=$("#checkPerson").val();
	var signPerson=$("#signPerson").val();

	$.post(
			"addWarehousecheck.do",
			{"checkId":checkId,
			"warehouseId":warehouseId,
			"stuffId":stuffId,
			"bookCount":bookCount,
			"stuffCount":stuffCount,
			"checkTime":checkTime,
			"checkPerson":checkPerson,
			"signPerson":signPerson
			},
			function(data) {
				if (data) {
					window.location.href="Warehouse_Check.jsp";					
				} else{					
					alert(data.message);
				}
			}
	
	);
	
}








