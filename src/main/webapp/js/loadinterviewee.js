
function editInterviewee(id){
	location.href='queryIntervieweebyid.do?id='+id;
}


function deleteInterviewee(id){
	location.href='deleteInterviewee.do?id='+id;
}

function record(id){
	location.href='interviewRecord.jsp?id='+id;
}


function loadintervieweedata(indexpage){
	alert("fsdfsdzzzzzzzzzzzzzzzzzzzzz");
	var id=$("#intervieweeId").val();
	alert(id);
	$.post(
	"loadIntervieweeData.do",
	{"id":id,"indexpage":indexpage},
	function(data){
		
		alert(data);
		
		var content = $("#content");
		
		var contentitme="";
		for (var i = 0; i < data.listDatas.length; i++) {
			
		
		var item="<tr>";
	      item+="<td>"+data.listDatas[i].intervieweeId+"</td>";
	      item+="<td>"+data.listDatas[i].intervieweeName+"</td>";
	      item+="<td>"+data.listDatas[i].age+"</td>";
	      item+="<td>"+data.listDatas[i].degree+"</td>";
	      item+="<td>"+data.listDatas[i].schoolTag+"</td>";
	      item+="<td>"+data.listDatas[i].graduationDate+"</td>";
	      item+="<td>"+data.listDatas[i].address+"</td>";
	      item+="<td>"+data.listDatas[i].phoneno+"</td>";
	      item+="<td>"+data.listDatas[i].intervieweeDesc+"</td>";
	      item+="<td>";
	      item+="<button class='btn btn-danger btn-sm' style='width:50px;height:25px;'  onclick='deleteInterviewee(\""+data.listDatas[i].intervieweeId+"\")'>删除</button>";
			item+="<button class='btn btn-danger btn-sm' style='width:50px;height:25px;'  onclick='editInterviewee(\""+data.listDatas[i].intervieweeId+"\")'>修改</button>";
			item+="<button class='btn btn-danger btn-sm' style='width:60px;height:25px;' onclick='record(\""+data.listDatas[i].intervieweeId+"\")'>面試</button>";
	      item+="</td></tr>";
	      contentitme+=item;
	      
	      
		
		}
		
		content.html(contentitme);
		
		
		
		var page=$("#page");

		var pageitem="<ul class='pagination pagination-sm no-margin pull-right'>";
		
		pageitem+="<li><a  onclick='loadintervieweedata(\"1\")'>«</a>";
		pageitem+="</li>";
		
		if(data.singerData.pagecount<4){
			for (var i= 1; i <= data.singerData.pagecount; i++) {
				pageitem+="<li><a  onclick='loadintervieweedata(\""+i+"\")'>"+i+"</a>";
				pageitem+="</li>";
				
			}
		}else if(data.pagecount-data.singerData.indexpage<4){
			for (var i= data.singerData.indexpage; i <= data.singerData.pageCount; i++) {
				pageitem+="<li><a  onclick='loadintervieweedata(\""+i+"\")'>"+i+"</a>";
				pageitem+="</li>";
				
			}
		}else{
			for (var i= data.singerData.indexpage; i <= 4; i++) {
				pageitem+="<li><a  onclick='loadintervieweedata(\""+i+"\")'>"+i+"</a>";
				pageitem+="</li>";
				
			}
		}
		pageitem+="<li><a  onclick='loadintervieweedata(\""+data.singerData.pagecount+"\")'>»</a>";
		pageitem+="</li>";
		pageitem+="</ul>";
		
	
		page.html(pageitem);
		
		
		
		
		
		
		
		
        
       
        
        
        
        
        
        
        
		
			
    		
		
	}
	);
}