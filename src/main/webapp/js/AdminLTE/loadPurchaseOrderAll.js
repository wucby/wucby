
function selectPurchaseById(){
	var a = location.search;
	var purchaseId = a.substring(a.lastIndexOf("?")+1);
	
	$.post(
		"selectPurchaseById.do",
		{"purchaseId":purchaseId},
		function(data){
			
					$("#outTo").val(data.singerData.purchaseEmployeeId);
					
					$("#outEmployeeId").val(data.singerData.fillEmployee);
					/*$("#outAmount").val(data.singerData.);*/
					/*$("#outStatus").val(data.singerData.paidStatus);
					$("#outDesc").val(data.singerData.sellRemark);
					*/
				}
			);	
		}	




/**
 * 查询所有采购订单
 */
 function selectPurchaseOrderAllById(indexpage){
	
	  $.post(
		"selectPurchaseOrderAllById.do",
		{"indexpage":indexpage},
		function(data){
			
		
		
			var rambos="";
			
		for(var i=0;i<data.listDatas.length; i++){
			var rambo ="<tr>";
					
			rambo += "<td>"+data.listDatas[i].purchaseId+"</td>";
			rambo += "<td>"+data.listDatas[i].fillEmployee+"</td>";
			rambo += "<td>"+data.listDatas[i].planDate+"</td>";
			
			if(data.listDatas[i].checkStatus == 0){
				rambo += "<td><span class='label label-danger'>未通过</span></td>";
			}
			
			if(data.listDatas[i].checkStatus == 1){
				rambo += "<td><span class='label label-success'>通过</span></td>";
			}
			
			if(data.listDatas[i].purchaseStatus ==1){
				rambo += "<td><span class='label label-danger'>未采购</span></td>";
			}else if(data.listDatas[i].purchaseStatus ==2){
					rambo += "<td><span class='label label-danger'>正在采购</span></td>";
			}else if(data.listDatas[i].purchaseStatus ==3){
				rambo += "<td><span class='label label-danger'>等待入库</span></td>";
			}else if(data.listDatas[i].purchaseStatus ==4){
				rambo += "<td><span class='label label-danger'>入库不通过</span></td>";
			}else if(data.listDatas[i].purchaseStatus ==5){
				rambo += "<td><span class='label label-danger'>入库中</span></td>";
			}else if(data.listDatas[i].purchaseStatus ==6){
				rambo += "<td><span class='label label-success'>完成</span></td>";
			}else{
				rambo += "<td><span class='label label-danger'>撤销</span></td>";
			}
			
			if(data.listDatas[i].paidStatus == 0){
				rambo += "<td><span class='label label-danger'>未支付</span></td>";
			
			}
			
			if (data.listDatas[i].paidStatus == 1){
				rambo += "<td><span class='label label-success'>已支付</span></td>";
			}
			
			rambo += "<td>"+data.listDatas[i].purchaseEmployeeId+"</td>";
			
			rambo += "<td> <a href='finance_Receipt _Customer.jsp'  class='btn btn-info btn-sm'> 收款客户凭证 </a> </td>";
			
			rambo +="</tr>";	
			
			rambos += rambo;
		}
		$("#content").html(rambos);
			
			
	

		
//			---------------加载分页组件------------------
			
		


		
		var pagehtml ="";
		
		pagehtml += "<li><a onclick='selectPurchaseOrderAllById(1)'>[首页]</a>";
		if(data.singerData.indexpage > 1){
			
			pagehtml += "<a onclick='selectPurchaseOrderAllById("+(data.singerData.indexpage - 1)+")'>上一页 </a>";
		}else{
			pagehtml +="上一页";
			
		}
		
		
		if(data.singerData.pagecount < 4){
			for (var i = 1; i <= data.singerData.pagecount; i++) {
				pagehtml +="<a  onclick='selectPurchaseOrderAllById("+i+")'>["+i+"]</a>";
			}
		
			}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
				
				for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
						pagehtml += "<a onclick='selectPurchaseOrderAllById("+i+")'><li>[ "+i+" ]</li></a>";
					}
				}else{
					for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
						pagehtml += "<a onclick='selectPurchaseOrderAllById("+i+")'><li>["+i+"]</li></a>";
					}
			}
			
		
		if(data.singerData.indexpage < data.singerData.pagecount){
			
			pagehtml += "<a onclick='selectPurchaseOrderAllById("+(data.singerData.indexpage + 1)+")'>下一页 </a>";
		}else{
			pagehtml +="下一页";
		}
		
		
		pagehtml += "<a onclick='selectPurchaseOrderAllById("+(data.singerData.pagecount)+")'>[尾页]</a>";
		pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
		pagehtml +="</ul></li>";
		$("#mypage").html(pagehtml);

		
		}	

	
	);
	
}