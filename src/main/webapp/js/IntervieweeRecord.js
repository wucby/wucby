function editinterviewrecord(id){
	location.href='queryinterviewrecordByid.do?interviewRecordId='+interviewRecordId;
}


function deleteinterviewrecord(id){
	location.href='deleteinterviewrecord.do?interviewRecordId='+interviewRecordId;
}

function IntervieweeRecorddata(indexpage){
	alert("fsdf--------------------sss");
	var id =$("#interviewRecordId").val();
	alert("-----"+id);
	$.post(
			"queryinterviewrecord.do",
			{"indexpage":indexpage,"id":id},
			function(data){
				alert(data.listDatas.length);
				
				
				
				var content = $("#content");
				alert(content);
				var contentitem = "";
			for (var i = 0; i < data.listDatas.length; i++) {
				
				
				var item ="<tr>";
				    item+="<td>"+data.listDatas[i].interviewRecordId+"</td>";
				    item+="<td>"+data.listDatas[i].intervieweeId+"</td>";
				    item+="<td>"+data.listDatas[i].interviewerId+"</td>";
				    item+="<td>"+data.listDatas[i].interviewDate+"</td>";
				    item+="<td>"+data.listDatas[i].interviewResult+"</td>";
				    item+="<td>"+data.listDatas[i].interviewDesc+"</td>";
				    
				    item+="<button class='btn btn-danger btn-sm' style='width:50px;height:25px;'  onclick='editinterviewrecord(\""+data.listDatas[i].interviewRecordId+"\")'>删除</button>";
					item+="<button class='btn btn-danger btn-sm' style='width:50px;height:25px;'  onclick='deleteinterviewrecord(\""+data.listDatas[i].interviewRecordId+"\")'>修改</button>";
				    item+="</td></tr>";
				    contentitem+=item;
			}
			
			content.html(contentitem);
			
			var page=$("#page");

			var pageitem="<ul class='pagination pagination-sm no-margin pull-right'>";
			
			pageitem+="<li><a  onclick='contractdata(\"1\")'>«</a>";
			pageitem+="</li>";
			
			if(data.singerData.pagecount<4){
				for (var i= 1; i <= data.singerData.pagecount; i++) {
					pageitem+="<li><a  onclick='contractdata(\""+i+"\")'>"+i+"</a>";
					pageitem+="</li>";
					
				}
			}else if(data.pagecount-data.singerData.indexpage<4){
				for (var i= data.singerData.indexpage; i <= data.singerData.pageCount; i++) {
					pageitem+="<li><a  onclick='contractdata(\""+i+"\")'>"+i+"</a>";
					pageitem+="</li>";
					
				}
			}else{
				for (var i= data.singerData.indexpage; i <= 4; i++) {
					pageitem+="<li><a  onclick='contractdata(\""+i+"\")'>"+i+"</a>";
					pageitem+="</li>";
					
				}
			}
			pageitem+="<li><a  onclick='contractdata(\""+data.singerData.pagecount+"\")'>»</a>";
			pageitem+="</li>";
			pageitem+="</ul>";
			
		
			page.html(pageitem);
		
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
		
				
                
                
                
                
                
               
                
                 
                 
                 
            	
                 
                 
				
				
			}
			
	);
}