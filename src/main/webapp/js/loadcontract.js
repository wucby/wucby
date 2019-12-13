function editContract(id){
	location.href='queryContractByid.do?id='+id;
}


function deleteContract(id){
	location.href='deleteContract.do?id='+id;
}



function contractdata(indexpage){
	var id = $("#id").val();
	$.post(
	"loadUsersData.do",
	{"id":id,"indexpage":indexpage},
	function(data){
		
		var content = $("#content");
	
		
         var sumitem="";
		
		for (var i = 0; i < data.listDatas.length; i++) {
			
		
		var item="<tr>";
		item+="<td>"+data.listDatas[i].contractId+"</td>";
		item+="<td>"+data.listDatas[i].conractState+"</td>";
		item+="<td>"+data.listDatas[i].contractStart+"</td>";
		item+="<td>"+data.listDatas[i].contractEnd+"</td>";
		item+="<td>";
		item+="<button class='btn btn-danger btn-sm' style='width:50px;height:25px;'  onclick='deleteContract(\""+data.listDatas[i].contractId+"\")'>删除</button>";
		item+="<button class='btn btn-danger btn-sm' style='width:50px;height:25px;'  onclick='editContract(\""+data.listDatas[i].contractId+"\")'>修改</button>";
		item+="</td></tr>";
		
		sumitem+=item;
		
		}
		
		content.html(sumitem);
		
		
		
		
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