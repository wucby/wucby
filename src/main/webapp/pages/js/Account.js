//分页查询
function OutAccounting(indexpage) {
			$.post(
					"queryAllPayVoucherCustomer.do",
					{
						"indexpage" : indexpage
					},
					function(data) {
						var content = $("#contest");
						var sumitem = "";

						for (var i = 0; i < data.listDatas.length; i++) {
							var item = "<tr class='odd gradeX'>";
							item += "<td class='hidden-480'>"
									+ data.listDatas[i].outDocId + "</td>";
							item += "<td class='hidden-480'>"
									+ data.listDatas[i].outTo + "</td>";
							item += "<td class='hidden-480'>"
									+ data.listDatas[i].subjectId + "</td>";
							item += "<td class='hidden-480'>"
									+ data.listDatas[i].outAmount + "</td>";
							item += "<td class='hidden-480'>"
									+ data.listDatas[i].outDate + "</td>";
							item += "<td class='hidden-480'>"
									+ data.listDatas[i].outEmployeeId + "</td>";
							if(data.listDatas[i].inStatus==1){
								item += "<td class='hidden-480'>已支付</td>";
							} if(data.listDatas[i].inStatus==2){
								item += "<td class='hidden-480'>定金已付</td>";
							}
							if(data.listDatas[i].inStatus==3){
								item += "<td class='hidden-480'>未支付</td>";
								
							}
							
							item += "<td class='hidden-480'>"
									+ data.listDatas[i].outDesc + "</td>";
							item += "<td><a href='sigeleAccount_Out_To_Customer_Doc.jsp?"
								+ data.listDatas[i].outDocId+ "' class='btn blue mini'>查看明细</a>"
									+ "<a href='editCustomer_Doc.jsp?"+data.listDatas[i].outDocId+ "' class='btn blue mini'>修改</a>"
									+ "<a href='addFinance_Pay_Customer.jsp?"+data.listDatas[i].outDocId+ "' class='btn blue mini'>添加</a>"
									+ "<a  onclick='deleteouts(\""+ data.listDatas[i].outDocId+"\")' class='btn blue mini'>删除</a>";
							item += "</tr>";
							

							sumitem += item;
						}

						content.html(sumitem);

						// ---------------加载分页组件------------------
						// 分页
						var pageitem = "";

						if (data.singerData.indexpage >= 1) {
							pageitem += "<li><a onclick='OutAccounting("
									+ (data.singerData.indexpage - 1)
									+ ")'>&lt;</a></li>";
						} else {
							pageitem += "<li><a>&lt;</a></li>";
						}

						if (data.singerData.pagecount > 3) {
							if (data.singerData.indexpage <= 1) {
								pageitem += "<li><a onclick='OutAccounting(1)'>1</a></li>";
								pageitem += "<li><a onclick='OutAccounting(2)'>2</a></li>";
								pageitem += "<li><a onclick='OutAccounting(3)'>3</a></li>";
							} else if (data.singerData.indexpage + 3 >= data.singerData.pagecount) {
								for (var i = data.singerData.pagecount - 2; i <= data.singerData.pagecount; i++) {
									pageitem += "<li><a onclick='OutAccounting("
											+ i + ")'>" + i + "</a></li>";
								}
							} else {
								pageitem += "<li><a onclick='OutAccounting("
										+ (data.singerData.indexpage - 1)
										+ ")'>"
										+ (data.singerData.indexpage - 1)
										+ "</a></li>";
								pageitem += "<li><a onclick='OutAccounting("
										+ (data.singerData.indexpage) + ")'>"
										+ (data.singerData.indexpage)
										+ "</a></li>";
								pageitem += "<li><a onclick='OutAccounting("
										+ (data.singerData.indexpage + 1)
										+ ")'>"
										+ (data.singerData.indexpage + 1)
										+ "</a></li>";
							}
						} else {
							for (var i = 1; i <= data.singerData.pagecount; i++) {
								pageitem += "<li><a onclick='OutAccounting("
										+ i + ")'>" + i + "</a></li>";
							}
						}

						if (data.singerData.indexpage >= data.singerData.pagecount) {
							pageitem += " <li><a>&gt;</a></li>";
						} else {
							pageitem += " <li><a onclick='OutAccounting("
									+ (data.singerData.indexpage + 1)
									+ ")'>&gt;</a></li>";
						}

						var pagecontent = $("#pagination");

						pagecontent.html(pageitem);

						/*
						 * alert("777"+data.singerData.pagecount); var
						 * pagecontent = $("#pagination"); var pageitem ="";
						 * pageitem += "<li><a onclick='OutAccounting(1)'>首页</a></li>";
						 * if(data.singerData.pagecount < 4){ for (var i = 1; i <=
						 * data.singerData.pagecount; i++) { pageitem +="<li><a
						 * onclick='OutAccounting("+i+")'>"+i+"</a></li>"; }
						 * }else if(data.singerData.pagecount-data.indexpage <
						 * 4){ for (var i = data.singerData.indexpage; i <=
						 * data.singerData.pagecount; i++) { pageitem +="<li><a
						 * onclick='OutAccounting("+i+")'>"+i+"</a></li>"; }
						 * }else{ for (var i = data.singerData.indexpage; i <=
						 * 4; i++) { pageitem +="<li><a
						 * onclick='OutAccounting("+i+")'>"+i+"</a></li>"; } }
						 * 
						 * pageitem +="<li><a
						 * onclick='OutAccounting("+data.singerData.pagecount+")'>尾页</a></li>";
						 * 
						 * pagecontent.html(pageitem);
						 */

					}

			);
}

function queryPayVoucherByOutId() {
	var a = location.search;
	var outDocId = a.substring(a.lastIndexOf("?") + 1);

	$.post("queryPayVoucherByOutId.do", {
		"outDocId" : outDocId
	}, function(data) {
		$("#outDocId").html(data.singerData.outDocId);
		$("#outTo").html(data.singerData.outTo);
		$("#subjectId").html(data.singerData.subjectId);
		$("#outAmount").html(data.singerData.outAmount);
		$("#outDate").html(data.singerData.outDate);
		$("#outEmployeeId").html(data.singerData.outEmployeeId);
		$("#outDesc").html(data.singerData.outDesc);
		$("#inStatus").html(data.singerData.inStatus);
	});
}
//修改对客户付款记录
function editPayVoucherByOutId() {
	$.post(
		"editPayVoucherCustomer.do",
		{
			"outDocId" : $("#outDocId").val(),
			"outTo" : $("#outTo").val(),
			"subjectId" : $("#subjectId").val(),
			"outAmount" : $("#outAmount").val(),
			"outDate" : $("#outDate").val(),
			"outEmployeeId" : $("#outEmployeeId").val(),
			"outDesc" : $("#outDesc").val(),
			"inStatus" : $("#inStatus").val()
		},
		function(data) {
			if (data.isResult) {
				location.href = "Account_Out_To_Doc.jsp";
			} else {
				location.href = "Account_Out_To_Doc.jsp";
			}
	
		}
	);
}

// 删除
function deleteouts(outDocId) {
	var f = confirm("你确定删除吗？")
	if (f) {
		$.post(
			"deletePayVoucherCustomer.do", {
			"outDocId" : outDocId
		}, function(data) {
			location.href = "Account_Out_To_Doc.jsp"

		});
	}

}

function addfinancecustomer(){
	var financePayId = $("#financePayId").val();
	var inDocId = $("#inDocId").val();
	var shouldPay = $("#shouldPay").val();
	var realPay = $("#realPay").val();
	var payDate = $("#payDate").val();
	var payRemark = $("#payRemark").val();
	var customerId = $("#customerId").val();
	$.post(
			"addPayVoucherCustomerDetail.do",
			{"financePayId":financePayId,
			"inDocId":inDocId,	
			"shouldPay":shouldPay,
			"realPay":realPay,
			"payDate":payDate,
			"payRemark":payRemark,
			"customerId":customerId
			},
			function(data){
				location.href="Finance_Out_ToCustomer.jsp"
			}
	);
}
//加载单条数据信息
function loaddataedit() {
	var a = location.search;
	var outDocId = a.substring(a.lastIndexOf("?") + 1);
	$.post("queryPayVoucherByOutId.do", {
		"outDocId" : outDocId
	}, function(data) {
		$("#outDocId").val(data.singerData.outDocId);
		$("#outTo").val(data.singerData.outTo);
		$("#subjectId").val(data.singerData.subjectId);
		$("#outAmount").val(data.singerData.outAmount);
		$("#outDate").val(data.singerData.outDate);
		$("#outEmployeeId").val(data.singerData.outEmployeeId);
		$("#outDesc").val(data.singerData.outDesc);
		$("#inStatus").val(data.singerData.inStatus);
	});
}

function loaddataeditFCustomer1(){
	var a = location.search;
	var financePayId = a.substring(a.lastIndexOf("?")+1);
	var outDocId = a.substring(a.lastIndexOf("?")+1);
	$.post(
		"queryPayVoucherByOutId.do",
		{"outDocId":outDocId},
		function(data){
			alert(data);
					$("#financePayId").val(data.singerData.outDocId);
				
					$("#shouldPay").val(data.singerData.outAmount);
				
				}
			);	
		}	

