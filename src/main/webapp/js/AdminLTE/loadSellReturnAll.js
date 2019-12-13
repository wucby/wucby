


function selectReturnByPrimaryKey(){
	
	var a = location.search;
	var sellReturnId = a.substring(a.lastIndexOf("?")+1);
	
	
	$.post(
		"queryByPrimaryKey.do",
		{"sellReturnId":sellReturnId},
		function(data){
			
					$("#outTo").val(data.singerData.sellOrderId);
					$("#outAmount").val(data.singerData.returnMoney);
					$("#outEmployeeId").val(data.singerData.employeeId);
					$("#outDesc").val(data.singerData.returnRemark);
					
					
				}
			);	
		}	



/**
 * 查询所有销售订单
 */
 function selectSellReturnById(indexpage){
	 
	  $.post(
		"selectSellReturnById.do",
		{"indexpage":indexpage},
		function(data){
			
		
			var rambos="";
			
		for(var i=0;i<data.listDatas.length; i++){
			var rambo ="<tr>";		
			rambo += "<td>"+data.listDatas[i].sellReturnId+"</td>";
			rambo += "<td>"+data.listDatas[i].sellOrderId+"</td>";
		    rambo += "<td>"+data.listDatas[i].returnDate+"</td>";
			rambo += "<td>"+data.listDatas[i].returnMoney+"</td>";
			rambo += "<td>"+data.listDatas[i].returnReason+"</td>";
			rambo += "<td>"+data.listDatas[i].employeeId+"</td>";
			rambo += "<td>"+data.listDatas[i].returnRemark+"</td>";
			rambo += "<td> <a href='Finance_Pay_Customer.jsp?"+data.listDatas[i].sellReturnId+"'  class='btn btn-info btn-sm'> 收款客户凭证 </a> </td>";
			rambo +="</tr>";	
			
			rambos += rambo;
		}
		$("#content").html(rambos);
			
			
	
			  
			  
	
	 
	 
	 
 

		
//			---------------加载分页组件------------------
			
		


		
		var pageval ="";
		
		pageval += "<a onclick='selectSellReturnById(1)'>[首页]</a>";
		if(data.singerData.indexpage > 1){
			
			pageval += "<a onclick='selectSellReturnById("+(data.singerData.indexpage - 1)+")'>上一页 </a>";
		}else{
			pageval +="上一页";
			
		}
		
		
		if(data.singerData.pagecount < 4){
			for (var i = 1; i <= data.singerData.pagecount; i++) {
				pageval +="<a  onclick='selectSellReturnById("+i+")'>["+i+"]</a>";
			}
		
			}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
				
				for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
						pageval += "<a onclick='selectSellReturnById("+i+")'><li>[ "+i+" ]</li></a>";
					}
				}else{
					for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
						pageval += "<a onclick='selectSellReturnById("+i+")'><li>["+i+"]</li></a>";
					}
			}
			
		
		if(data.singerData.indexpage < data.singerData.pagecount){
			
			pageval += "<a onclick='selectSellReturnById("+(data.singerData.indexpage + 1)+")'>下一页 </a>";
		}else{
			pageval +="下一页";
		}
		
		
		pageval += "<a onclick='selectSellReturnById("+(data.singerData.pagecount)+")'>[尾页]</a>";
		pageval += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
		pageval +="</ul></li>";
		
		$("#mypage").val(pageval);

			

			

		
		}
	);
 }  