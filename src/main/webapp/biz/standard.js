
function loadStandard(indexpage){
	$.post(
		
		"querystandard.do",
		{"indexpage":indexpage},

		function(data){
			var content = $("#content");
			var sumitem = "";
			
			for (var i = 0; i < data.listDatas.length; i++) {
				 var item = "<tr class='odd gradeX'>";
				 item +="<td>"+data.listDatas[i].productId+"</td>";
				 
				 item +="<td><span class='label label-success'>"+data.listDatas[i].standardDesc+"</span></td>";     
				 
				 item+="</tr>";
		    	
				 sumitem += item;
			}
			content.html(sumitem);
			
			
			
			//----分页-------------------------
			var pagecontent = $("#pagination");
			var pageitem = "";
			pageitem +="<li><a  onclick='loadStandard(1)'>上一页</a></li>";
			if(data.singerData.pagecount < 4){
				for (var i = 1; i <= data.singerData.pagecount; i++) {
					pageitem +="<li><a  onclick='loadStandard("+i+")'>"+i+"</a></li>";
				}
			}else if(data.singerData.pagecount-data.singerData.indexpage < 4){
				for (var i = data.singerData.indexpage; i <= data.singerData.pagecount; i++) {
					pageitem +="<li><a  onclick='loadStandard("+i+")'>"+i+"</a></li>";
				}
			}else{
				for (var i = data.singerData.indexpage; i <= 4; i++) {
					pageitem +="<li><a  onclick='loadStandard("+i+")'>"+i+"</a></li>";
				}
			}
			pageitem +="<li><a  onclick='loadStandard("+data.singerData.pagecount+")'>下一页</a></li>";
			pagecontent.html(pageitem);
	
		}															
);

}