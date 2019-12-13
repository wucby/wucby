
function selectByPrimaryKey(){
	var a = location.search;
	var orderId = a.substring(a.lastIndexOf("?")+1);
	
	$.post(
		"selectTravelByPrimaryKey.do",
		{"orderId":orderId},
		function(data){
					
					
					$("#outEmployeeId").val(data.singerData.employeeId);
					
					
				}
			);	
		}	



/**
 * 查询所有销售订单
 */
 function queryTravelTCostOrderAllById(indexpage){
	
	  $.post(
		"queryTravelTCostOrderAllById.do",
		{"indexpage":indexpage},
		function(data){
			
			
		
			var rambos="";
			
		for(var i=0;i<data.listDatas.length; i++){
			var rambo ="<tr>";
					
			rambo += "<td>"+data.listDatas[i].orderId+"</td>";
			rambo += "<td>"+data.listDatas[i].travelId+"</td>";
			
		    rambo += "<td>"+data.listDatas[i].validateTime+"</td>";
			
			rambo += "<td>"+data.listDatas[i].employeeId+"</td>";
			
			if(data.listDatas[i].validated ==1){
				rambo += "<td><span class='label label-danger'>未审核</span></td>";
			}else if(data.listDatas[i].validated ==2){
					rambo += "<td><span class='label label-success'>通过</span></td>";
			}else{
				rambo += "<td><span class='label label-danger'>未通过</span></td>";
			}
			
			if(data.listDatas[i].paidStatus == 0){
				rambo += "<td><span class='label label-success'>已支付</span></td>";
			}
			if(data.listDatas[i].paidStatus == 1){
				rambo += "<td><span class='label label-danger'>未支付</span></td>";
			}
			
			rambo += "<td> <a href='Finance_Pay_Employee_.jsp?"+data.listDatas[i].orderId+"'  class='btn btn-info btn-sm'> 付款员工凭证 </a> </td>";
			
			
			rambo +="</tr>";	
			
			rambos += rambo;
		}
		$("#content").html(rambos);
			
			
	
			  
			  
	
	 
	 
	 
 

		
//			---------------加载分页组件------------------
			
		


		
		var pagehtml ="";
		
		pagehtml += "<a onclick='queryTravelTCostOrderAllById(1)'>[首页]</a>";
		if(data.singerData.indexpage > 1){
			
			pagehtml += "<a onclick='queryTravelTCostOrderAllById("+(data.singerData.indexpage - 1)+")'>上一页 </a>";
		}else{
			pagehtml +="上一页";
			
		}
		
		
		if(data.singerData.pagecount < 4){
			for (var i = 1; i <= data.singerData.pagecount; i++) {
				pagehtml +="<a  onclick='queryTravelTCostOrderAllById("+i+")'>["+i+"]</a>";
			}
		
			}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
				
				for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
						pagehtml += "<a onclick='queryTravelTCostOrderAllById("+i+")'><li>[ "+i+" ]</li></a>";
					}
				}else{
					for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
						pagehtml += "<a onclick='queryTravelTCostOrderAllById("+i+")'><li>["+i+"]</li></a>";
					}
			}
			
		
		if(data.singerData.indexpage < data.singerData.pagecount){
			
			pagehtml += "<a onclick='queryTravelTCostOrderAllById("+(data.singerData.indexpage + 1)+")'>下一页 </a>";
		}else{
			pagehtml +="下一页";
		}
		
		
		pagehtml += "<a onclick='queryTravelTCostOrderAllById("+(data.singerData.pagecount)+")'>[尾页]</a>";
		pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
		pagehtml +="</ul></li>";
		$("#mypage").html(pagehtml);

			

			

			
			

		

			

			
			
		
		}
	);
	
}