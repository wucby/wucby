function loadFaile(indexpage) {
	$.post(
		"queryfailed.do",
			{"indexpage" : indexpage},

					function(data){
						
						var content = $("#content");
						var sumitem = "";

						for (var i = 0; i < data.listDatas.length; i++) {
							var item = "<tr class='odd gradeX'>";
							item +="<td>"+data.listDatas[i].qualityId+"</td>";
							item +="<td class='hidden-480'>"+data.listDatas[i].productId+"</td>";
							item +="<td class='hidden-480'>"+data.listDatas[i].productCount+"</td>";
							item +="<td class='hidden-480'>"+data.listDatas[i].failedRate+"%"+"</td>";
							item +="<td class='hidden-480'>"+data.listDatas[i].qualityDate+"</td>";
							item +="<td><a onclick='deleteFaied("+data.listDatas[i].qualityId+")' href='#' class='btn red icn-only'><i class='halflings-icon remove white' style='font-style:normal'>删除</i></a> <a onclick='queryFaileKey("+data.listDatas[i].qualityId+")' class='btn blue icn-only'><i class='halflings-icon user white' style=' font-style:normal'>修改</i></a></td>";
							item +="</tr>";
							sumitem += item;
						}
						content.html(sumitem);
							
						 //-----------枫叶-------------------------------
						var pagecontent = $("#pagination");
						var pageitem = "";
						pageitem +="<li><a  onclick='loadFaile(1)'>上一页</a></li>";
						if(data.singerData.pagecount < 4){
							for (var i = 1; i <= data.singerData.pagecount; i++) {
								pageitem +="<li><a  onclick='loadFaile("+i+")'>"+i+"</a></li>";
							}
						}else if(data.singerData.pagecount-data.singerData.indexpage < 4){
							for (var i = data.singerData.indexpage; i <= data.singerData.pagecount; i++) {
								pageitem +="<li><a  onclick='loadFaile("+i+")'>"+i+"</a></li>";
							}
						}else{
							for (var i = data.singerData.indexpage; i <= 4; i++) {
								pageitem +="<li><a  onclick='loadFaile("+i+")'>"+i+"</a></li>";
							}
						}
						pageitem +="<li><a  onclick='loadFaile("+data.singerData.pagecount+")'>下一页</a></li>";
						pagecontent.html(pageitem);
				
					}															
			);

		}


function deleteFaied(qualityId){
	var issuccess = confirm("你狠心抛下我吗？？")
	if(issuccess){
		location.href="delectfailed.do?qualityId="+qualityId;
	}
	
}


//差单个
function queryFaileKey(qualityId){
	 alert("qualityId:"+qualityId);
	 location.href="queryfailekey.do?qualityId="+qualityId; 
	 
}



