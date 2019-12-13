
function loaddataBySellOrderId(){
	var a = location.search;
	var sellOrderId = a.substring(a.lastIndexOf("?")+1);
	
	$.post(
		"selectByPrimaryKey.do",
		{"sellOrderId":sellOrderId},
		function(data){
			
					$("#customerId").val(data.singerData.customerId);
					
					$("#intEmployeeId").val(data.singerData.employeeId);
					$("#intAmount").val(data.singerData.sellMoney);
					$("#intStatus").val(data.singerData.paidStatus);
					$("#intDesc").val(data.singerData.sellRemark);
					
				}
			);	
		}	





/**
 * 查询所有销售订单
 */
 function selectSellOrderById(indexpage){
	  $.post(
		"loadSellOrderById.do",
		{"indexpage":indexpage},
		function(data){
			var code="";
			var codes="";
			
		for(var i=0;i<data.listDatas.length; i++){
		     code +="<tr>";
					
			code += "<td>"+data.listDatas[i].sellOrderId+"</td>";
			code += "<td>"+data.listDatas[i].sellTimestart+"</td>";
			code += "<td>"+data.listDatas[i].sellTimestop+"</td>";
			code += "<td>"+data.listDatas[i].sellMoney+"</td>";
			code += "<td>"+data.listDatas[i].customerId+"</td>";
			code += "<td>"+data.listDatas[i].employeeId+"</td>";
			code += "<td>"+data.listDatas[i].sellRemark+"</td>";
			code += "<td>"+data.listDatas[i].sellAdvance+"</td>";
			if(data.listDatas[i].checkStatus==0){
				code += "<td><span class='label label-danger'>未通过</span></td>";
			}else{
				code += "<td><span class='label label-success'>已通过</span></td>";
			}
			if(data.listDatas[i].orderStatus==0){
				code += "<td><span class='label label-danger'>未交货</span></td>";
			}
			if(data.listDatas[i].orderStatus==1){
				code += "<td><span class='label label-danger'>交货中</span></td>";
			}else{
				code += "<td><span class='label label-success'>已交货</span></td>";
			}
			if(data.listDatas[i].paidStatus==0){
				code += "<td><span class='label label-danger'>未支付</span></td>";
			}
			if(data.listDatas[i].paidStatus==1){
				code += "<td><span class='label label-success'>已支付</span></td>";
			}else{
				code += "<td><span class='label label-danger'>已支付订金</span></td>";
			}
			code += "<td> <a href='finance_Receipt _Customer.jsp?"+data.listDatas[i].sellOrderId+"' class='btn btn-info btn-sm'> 付款客户工凭证 </a> </td>";
			code +="</tr>";	
			
			codes += code;
		}
		$("#content").html(codes);
			

		
//			---------------加载分页组件------------------
		  var pageitem = "";
			 
			if(data.singerData.indexpage >= 1){
				pageitem += "<li><a onclick='selectSellOrderById("+(data.singerData.indexpage - 1)+")'>&lt;</a></li>";
			}else{
				pageitem += "<li><a>&lt;</a></li>";
			}
			
			if(data.singerData.pagecount > 3){
				if(data.singerData.indexpage <= 1){
					pageitem += "<li><a onclick='selectSellOrderById(1)'>1</a></li>";
					pageitem += "<li><a onclick='selectSellOrderById(2)'>2</a></li>";
					pageitem += "<li><a onclick='selectSellOrderById(3)'>3</a></li>";
				}else if(data.singerData.indexpage+3 >= data.singerData.pagecount){
					for (var i = data.singerData.pagecount-2; i <= data.singerData.pagecount; i++) {
						pageitem += "<li><a onclick='selectSellOrderById("+i+")'>"+i+"</a></li>";
					}
				}else{
					pageitem += "<li><a onclick='selectSellOrderById("+(data.singerData.indexpage-1)+")'>"+(data.singerData.indexpage-1)+"</a></li>";
					pageitem += "<li><a onclick='selectSellOrderById("+(data.singerData.indexpage)+")'>"+(data.singerData.indexpage)+"</a></li>";
					pageitem += "<li><a onclick='selectSellOrderById("+(data.singerData.indexpage+1)+")'>"+(data.singerData.indexpage+1)+"</a></li>";
				}
			}else{
				for (var i = 1; i <= data.singerData.pagecount; i++) {
					pageitem += "<li><a onclick='selectSellOrderById("+i+")'>"+i+"</a></li>";
				}
			}
			
			if(data.singerData.indexpage >= data.singerData.pagecount){
				pageitem += " <li><a>&gt;</a></li>";
			}else{
				pageitem += " <li><a onclick='selectSellOrderById("+(data.singerData.indexpage+1)+")'>&gt;</a></li>";
			}
			
			
			var pagecontent = $("#pagination");
			
			pagecontent.html(pageitem);
		
		/*var pagehtml ="";
		
		pagehtml += "<li><a onclick='selectSellOrderById(1)'>[首页]</a>";
		if(data.singerData.indexpage > 1){
			
			pagehtml += "<a onclick='selectSellOrderById("+(data.singerData.indexpage - 1)+")'>上一页 </a>";
		}else{
			pagehtml +="上一页";
			
		}
		
		
		if(data.singerData.pagecount < 4){
			for (var i = 1; i <= data.singerData.pagecount; i++) {
				pagehtml +="<a  onclick='selectSellOrderById("+i+")'>["+i+"]</a>";
			}
		
			}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
				
				for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
						pagehtml += "<a onclick='selectSellOrderById("+i+")'><li>[ "+i+" ]</li></a>";
					}
				}else{
					for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
						pagehtml += "<a onclick='selectSellOrderById("+i+")'><li>["+i+"]</li></a>";
					}
			}
			
		
		if(data.singerData.indexpage < data.singerData.pagecount){
			
			pagehtml += "<a onclick='selectSellOrderById("+(data.singerData.indexpage + 1)+")'>下一页 </a>";
		}else{
			pagehtml +="下一页";
		}
		
		
		pagehtml += "<a onclick='selectSellOrderById("+(data.singerData.pagecount)+")'>[尾页]</a>";
		pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
		pagehtml +="</li>";
		$("#mypage").html(pagehtml);

		*/
		}
	);
	
}