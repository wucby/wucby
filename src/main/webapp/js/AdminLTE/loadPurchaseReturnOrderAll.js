function loaddataBySellOrderId(){
	var a = location.search;
	var returnId= a.substring(a.lastIndexOf("?")+1);
	
	$.post(
		"selectByPrimaryKey.do",
		{"returnId":returnId},
		function(data){
			
					$("#customerId").val(data.singerData. purchaseId);
					
					$("#outEmployeeId").val(data.singerData.returnEmployeeId);
					$("#outAmount").val(data.singerData.remark1);
					
					$("#outDesc").val(data.singerData.returnDesc);
					
				}
			);	
		}	




/**
 * 查询所有销售订单
 */
 function selectPurchaseReturnOrderById(indexpage){
	 
	  $.post(
		"selectPurchaseReturnOrderById.do",
		{"indexpage":indexpage},
		function(data){
			
			
			
			var rambos="";
	
			
		for(var i=0;i<data.listDatas.length; i++){
			var rambo ="<tr>";		
			rambo += "<td>"+data.listDatas[i].returnId+"</td>";
			rambo += "<td>"+data.listDatas[i].purchaseId+"</td>";
		    rambo += "<td>"+data.listDatas[i].returnDate+"</td>";
			rambo += "<td>"+data.listDatas[i].returnReason+"</td>";
			rambo += "<td>"+data.listDatas[i].returnEmployeeId+"</td>";
			rambo += "<td>"+data.listDatas[i].remark1+"</td>";
			rambo += "<td>"+data.listDatas[i].returnDesc+"</td>";
			
			rambo += "<td> <a href='Finance_Pay_Customer.jsp'  class='btn btn-info btn-sm'>付款客户凭证 </a> </td>";
			
			rambo +="</tr>";	
			
			
			rambos += rambo;
		}
		
		$("#content").html(rambos);
			
			
	
			  
			  
	
	 
	 
	 
 

		
//			---------------加载分页组件------------------
			
		


		
		var pagehtml ="";
		
		pagehtml += "<a onclick='selectPurchaseReturnOrderById(1)'>[首页]</a>";
		if(data.singerData.indexpage > 1){
			
			pagehtml += "<a onclick='selectPurchaseReturnOrderById("+(data.singerData.indexpage - 1)+")'>上一页 </a>";
		}else{
			pagehtml +="上一页";
			
		}
		
		
		if(data.singerData.pagecount < 4){
			for (var i = 1; i <= data.singerData.pagecount; i++) {
				pagehtml +="<a  onclick='selectPurchaseReturnOrderById("+i+")'>["+i+"]</a>";
			}
		
			}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
				
				for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
						pagehtml += "<a onclick='selectPurchaseReturnOrderById("+i+")'><li>[ "+i+" ]</li></a>";
					}
				}else{
					for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
						pagehtml += "<a onclick='selectPurchaseReturnOrderById("+i+")'><li>["+i+"]</li></a>";
					}
			}
			
		
		if(data.singerData.indexpage < data.singerData.pagecount){
			
			pagehtml += "<a onclick='selectPurchaseReturnOrderById("+(data.singerData.indexpage + 1)+")'>下一页 </a>";
		}else{
			pagehtml +="下一页";
		}
		
		
		pagehtml += "<a onclick='selectPurchaseReturnOrderById("+(data.singerData.pagecount)+")'>[尾页]</a>";
		pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
		pagehtml +="</ul></li>";
		
		$("#mypage").html(pagehtml);

			

			

		
		}
	);
	
}