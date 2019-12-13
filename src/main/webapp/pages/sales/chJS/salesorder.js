
/**
 * 查询报价的信息
 */
function queryPrice(){

	customerIdCheck();	
	//获得uri地址传值？后的值
	var hehe = location.search;

	var lala = hehe.substring(hehe.lastIndexOf("?")+1);
	/*alert("截取后的内容"+lala);*/
	$.post(
			"queryPrice.do",
			{"pkId":lala},
			function(data){
				var code = "";
				var codes = "";
				
				for(var i=0; i<data.listDatas.length; i++){
					
					code += "<tr>";
					code += "<td>"+data.listDatas[i].productId+"</td>";
					code += "<td>"+data.listDatas[i].productCount+"</td>";
					code += "<td>"+data.listDatas[i].quotePrice+"</td>";
					code += "</tr>";
		
				}
				codes += code;
				$("#content").html(codes);
			}
	);
}

/**
 * 添加订单
 */
function insertReturnOfGoods(){
//	使用时间戳
	//var sellOrderId =$("#sellOrderId").val();

    var sellTimestart = $("#sellTimestart").val();

    var sellTimestop = $("#sellTimestop").val();

	var sellMoney = $("#sellMoney").val();

	var customerId = $("#customerId").val();

	var employeeId = $("#employeeId").val();
	
	var sellRemark = $("#sellRemark").val();
	
	var sellAdvance = $("#sellAdvance").val();

	var checkStatus = 0;

	var orderStatus = 0;

	var paidStatus = 0;

	$.post(
			"insertOrder.do",
			{"sellOrderId":null,"sellTimestart":sellTimestart,"sellTimestop":sellTimestop,"sellMoney":sellMoney,"customerId":customerId,"employeeId":employeeId,"sellRemark":sellRemark,"sellAdvance":sellAdvance,"checkStatus":checkStatus,"orderStatus":orderStatus,"paidStatus":paidStatus},
			function(data){
				if(data.isResult==true){
					location.href="salesorder.jsp";
				}
				else{
					location.href="salesorder.jsp";
				}
					
				
			}
	);
}


/**
 * 查询所有订单
 */
function querySales(indexpage){

	$.post(
			"querySales.do",
			{"indexpage":indexpage},
			function(data){
				
				var code = "";
				var codes = "";
				
				for(var i=0; i<data.listDatas.length; i++){
					code += "<tr>";
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
					}if(data.listDatas[i].orderStatus==2){
						code += "<td><span class='label label-success'>已交货</span></td>";
					}
					if(data.listDatas[i].paidStatus==0){
						code += "<td><span class='label label-danger'>未支付</span></td>";
					}
					if(data.listDatas[i].paidStatus==1){
						code += "<td><span class='label label-danger'>已支付</span></td>";
					}else{
						code += "<td><span class='label label-success'>已支付订金</span></td>";
					}
					code += "<td >";
					if(data.listDatas[i].checkStatus==0){
						code += "<a style='margin:2px' class='btn btn-info btn-sm' href='update.do?sellOrderId="+data.listDatas[i].sellOrderId+"' >通过</a>";
					}
					if(data.listDatas[i].orderStatus==0){
						code += "<a style='margin:2px' class='btn btn-sm btn-danger' href='newReturn.jsp?sellOrderId="+data.listDatas[i].sellOrderId+"&employeeId="+data.listDatas[i].employeeId+"&sellMoney="+data.listDatas[i].sellMoney+"' >退货</a>";
					}
					code += "</td><td >";
					code += "<a style='margin:2px' class='btn btn-info btn-sm' href='quotedSalesInfo.jsp?sellOrderId="+data.listDatas[i].sellOrderId+"' >添加货物</a>";
					code += "<a style='margin:2px' class='btn btn-info btn-sm' href='querySalesInfo.jsp?"+data.listDatas[i].sellOrderId+"' >查看货物</a>";
						
					code +="</td></tr>";
				}
				codes += code;
				$("#content").html(codes);
				
				
//				分页
				
				var pagehtml ="";
				
				pagehtml += "<a onclick='querySales(1)'>[首页]</a>";
				if(data.singerData.indexpage > 1){
					
					pagehtml += "<a onclick='querySales("+(data.singerData.indexpage - 1)+")'>上一页 </a>";
				}else{
					pagehtml +="上一页";
					
				}
				
				
				if(data.singerData.pagecount < 4){
					for (var i = 1; i <= data.singerData.pagecount; i++) {
						pagehtml +="<a  onclick='querySales("+i+")'>["+i+"]</a>";
					}
				
					}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
						
						for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
								pagehtml += "<a onclick='querySales("+i+")'><li>[ "+i+" ]</li></a>";
							}
						}else{
							for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
								pagehtml += "<a onclick='querySales("+i+")'><li>["+i+"]</li></a>";
							}
					}
					
				
				if(data.singerData.indexpage < data.singerData.pagecount){
					
					pagehtml += "<a onclick='querySales("+(data.singerData.indexpage + 1)+")'>下一页 </a>";
				}else{
					pagehtml +="下一页";
				}
				
				
				pagehtml += "<a onclick='querySales("+(data.singerData.pagecount)+")'>[尾页]</a>";
				pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
				pagehtml +="</ul></li>";
				$("#mypage").html(pagehtml);
				
				

			}
	);
	
}

/**
 * 查询用户底下所有订单详情
 */
function querySalesInfo(){

	//获得uri地址传值？后的值
	var hehe = location.search;
	
	var lala = hehe.substring(hehe.lastIndexOf("?")+1);

	$.post(
			"querySalesInfo.do",
			{"sellOrderId":lala},
			function(data){
				
				var code = "";
				var codes = "";
				
				for(var i=0; i<data.listDatas.length; i++){
					
					code += "<tr>";
					code += "<td>"+data.listDatas[i].productId+"</td>";
					code += "<td>"+data.listDatas[i].productCount+"</td>";
					code += "<td>"+data.listDatas[i].quotePrice+"</td>";
					code += "<td>";
					code += "<button id='delect1' onclick='delfun("+data.listDatas[i].productId+","+lala+")' class='btn btn-info btn-sm'>删除</button></td>";
					code += "</tr>";
				}
				codes += code;
				$("#content").html(codes);
			}
	);
}


/**
 * 删除某用户的某个订单详情
 * @param productId	产品id
 */
function deleteSalesInfo(productId,sellOrderId){
	alert("删除了哦！商品ID："+productId+"订单ID"+sellOrderId);
	$.post(
		"deleteSalesInfo.do",
		{"productId":productId,"sellOrderId":sellOrderId},
		function(data){
			
			location.href="salesorder.jsp";
			
		}
	)
}


/**
 * 添加用户的订单详情
 */
function addSalesInfo(){
	//获得uri地址传值？后的值
	var hehe = location.search;
	var lala = hehe.substring(hehe.lastIndexOf("?")+1);
	var productId = $("#productId").val();
	var productCount = $("#productCount").val();
	var quotePrice = $("#quotePrice").val();
	alert(lala);
	
	alert(productCount);
	$.post(
			"addSalesInfo.do",
			{"sellOrderId":lala,"productId":productId,"productCount":productCount,"quotePrice":quotePrice},
			function(data){
				location.href="querySalesInfo.jsp?"+lala;
			
			}
	);
}


function customerIdCheck(){
	 var today = new Date(); 
	 	var ss = today.getSeconds();
	 	var mm = today.getMinutes()<10 ? "0"+ today.getMinutes():today.getDate().toString();
	 	var hh = today.getHours();
	    var dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate().toString();  
	    var MM = today.getMonth()+1 < 10 ? "0" + (today.getMonth()+1) : today.getMonth()+1;  
	    var yyyy = today.getFullYear().toString();
	    var no = yyyy+"-"+MM+"-"+dd;
	    $("#sellTimestart").val(no);
}
	
