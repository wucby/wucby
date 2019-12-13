$(function(){
	
	queryLinkmans(1);
});

function queryLinkmans(indexpage){
	var linkmanName = $("#linkmanName").val();
	$.post(
			"queryLinkmans.do",
			{"linkmanName":linkmanName,"indexpage":indexpage},
			function(data){
				var content = $("#content");
				var sumContent = "";
				for(var i= 0;i < data.listDatas.length; i++){	
					var item ="<tr>";
					item +=	"<td>"+data.listDatas[i].linkmanId+"</td>"; 
					item += "<td>"+data.listDatas[i].linkmanName+"</td>";
					if(data.listDatas[i].linkmanGendar == 1){
						item += "<td>男</td>";
						
					}else{
						item += "<td>女</td>";
						
					}
					item += "<td>"+data.listDatas[i].remark1+"</td>";
					item += "<td>"+data.listDatas[i].remark2+"</td>";
					item += "<td>"+data.listDatas[i].linkmanDesc+"</td>";
					item += "<td><a class='btn btn-info btn-sm' href='querySingleLinkman.do?linkmanId="+data.listDatas[i].linkmanId+"'>修改</a><button class='btn btn-info btn-sm' onclick='deleteLinkman("+data.listDatas[i].linkmanId+")'>删除 </button></td>";
					item += "</tr>";
					sumContent += item;
				}
				content.html(sumContent);
				
				
//				分页			
				  var pageitem = "";
				 
					if(data.singerData.indexpage >= 1){
						pageitem += "<li><a onclick='queryLinkmans("+(data.singerData.indexpage - 1)+")'>&lt;</a></li>";
					}else{
						pageitem += "<li><a>&lt;</a></li>";
					}
					
					if(data.singerData.pagecount > 3){
						if(data.singerData.indexpage <= 1){
							pageitem += "<li><a onclick='queryLinkmans(1)'>1</a></li>";
							pageitem += "<li><a onclick='queryLinkmans(2)'>2</a></li>";
							pageitem += "<li><a onclick='queryLinkmans(3)'>3</a></li>";
						}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
							for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
								pageitem += "<li><a onclick='queryLinkmans("+i+")'>"+i+"</a></li>";
							}
						}else{
							pageitem += "<li><a onclick='queryLinkmans("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
							pageitem += "<li><a onclick='queryLinkmans("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
							pageitem += "<li><a onclick='queryLinkmans("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
						}
					}else{
						for (var i = 1; i <= data.singerData.pagecount; i++) {
							pageitem += "<li><a onclick='queryLinkmans("+i+")'>"+i+"</a></li>";
						}
					}
					
					if(data.singerData.indexpage >= data.singerData.pagecount){
						pageitem += " <li><a>&gt;</a></li>";
					}else{
						pageitem += " <li><a onclick='queryLinkmans("+(data.singerData.indexpage+1)+")'>&gt;</a></li>";
					}
					
					
					var pagecontent = $("#pagination");
					
					pagecontent.html(pageitem);
			}
			);
}
			
function deleteLinkman(linkmanId){
	if(window.confirm("删除本条数据后不能恢复，您确定要删除吗？")){
		$.post(
				"deleteLinkman.do",
				{"linkmanId":linkmanId},	
		
			function(data){
					alert(data.message);
					location.href="linkmans.jsp";
					
				}
		);
		
	}
}
	
function querySingleLinkman(linkmanId){
	window.location.href="querySingleLinkman.do?linkmanId="+linkmanId;
	
}
	
