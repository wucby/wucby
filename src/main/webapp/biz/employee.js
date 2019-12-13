function loadEmployeeData(indexpage){
	
	var employeeName = $("#employeeName").val();
	$.post(
		"../api/loadEmployeeData.do",
		{	
			"employeeName":employeeName,
			"indexpage":indexpage
		},function(data){
			
			
			var content = $("#content");
			var sumitem ="";
			
			for(var i = 0;i < data.listDatas.length;i++){
				var item = "<tr>";
				item+="<td>"+data.listDatas[i].employeeId+"</td>";
				item+="<td>"+data.listDatas[i].employeeName+"</td>";
				if(data.listDatas[i].departmentId == 1){
					item+="<td>普通员工</td>";
				}else if(data.listDatas[i].departmentId == 2){
					item+="<td>人事部</td>";
				}else if(data.listDatas[i].departmentId == 3){
					item+="<td>行政部</td>";
				}else{
					item+="<td>系统管理员</td>";
				}
				
				item+="<td>"+data.listDatas[i].bornDate+"</td>";
				item+="<td>"+data.listDatas[i].degree+"</td>";
				item+="<td>"+data.listDatas[i].address+"</td>";
				item+="<td>"+data.listDatas[i].phoneNo+"</td>";
				item+="<td><a href='editEmp.jsp?"+data.listDatas[i].employeeId+"'><span class='label label-info'>修改信息</span><a><a href='addChangeJob.jsp?"+data.listDatas[i].employeeId+"'><span class='label label-success'>职位变动</span><a><a href='addEvection.jsp?"+data.listDatas[i].employeeId+"'><span class='label label-success'>差旅培训</span><a><a href='#' onclick='deleteEmp(\""+data.listDatas[i].employeeId+"\")'><span class='label label-danger'>删除</span><a></td>";
				item+="</tr>";
				
				sumitem += item;
			}
			
			
			content.html(sumitem);
			
			
			
//使用js封装分页数据	
			
			var pagehtml ="";
		
			pagehtml += "<a onclick='loadEmployeeData(1)'>[首页]</a>";
			if(data.singerData.indexpage > 1){
				
				pagehtml += "<a onclick='loadEmployeeData("+(data.singerData.indexpage - 1)+")'>上一页 </a>";
			}else{
				pagehtml +="上一页";
				
			}
			
			
			if(data.singerData.pagecount < 4){
				for (var i = 1; i <= data.singerData.pagecount; i++) {
					pagehtml +="<a  onclick='loadEmployeeData("+i+")'>["+i+"]</a>";
				}
			
				}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
					
					for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
							pagehtml += "<a onclick='loadEmployeeData("+i+")'><li>[ "+i+" ]</li></a>";
						}
					}else{
						for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
							pagehtml += "<a onclick='loadEmployeeData("+i+")'><li>["+i+"]</li></a>";
						}
				}
				
			
			if(data.singerData.indexpage < data.singerData.pagecount){
				
				pagehtml += "<a onclick='loadEmployeeData("+(data.singerData.indexpage + 1)+")'>下一页 </a>";
			}else{
				pagehtml +="下一页";
			}
			
			
			pagehtml += "<a onclick='loadEmployeeData("+(data.singerData.pagecount)+")'>[尾页]</a>";
			pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
			pagehtml +="</ul></li>";
			$("#mypage").html(pagehtml);
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		}
		
		
	);
}


function queryEmp(){
	var a = location.search;
	var employeeId = a.substring(a.lastIndexOf("?")+1);
	
	
	$.post(
			"../api/queryEmployeeById.do",
			{"employeeId":employeeId},
			function(data){
				
				$("#oldDepartmentId").val(data.singerData.departmentId);
				$("#oldPositionsId").val(data.singerData.positionId);
				
			
				
			
			}
	
	);
	
	
}

function addEmp(){
	$.post(
			"../api/addEmployee.do",
			{"employeeId":$("#employeeId").val(),
			"employeeName":$("#employeeName").val(),
			"employeeIdNo":$("#employeeIdNo").val(),
			"gender":$("#gender").val(),
			"bornDate":$("#bornDate").val(),
			"degree":$("#degree").val(),
			"schoolTag":$("#schoolTag").val(),
			"email":$("#email").val(),
			"phoneNo":$("#phoneNo").val(),
			"address":$("#address").val(),
			"departmentId":$("#departmentId").val(),
			"positionId":$("#positionId").val(),
			"salary":$("#salary").val(),
			"contractId":$("#contractId").val(),
			"employeeDesc":$("#employeeDesc").val(),
			
			},function(data){
				location.href="employee.jsp";
				
				
			}
			
			
	);
	
	
}

function deleteEmp(employeeId){
	var isDo = confirm("你确定要删除吗");
	if(isDo){
		
		$.post(
				"../api/deleteEmp.do",
				{"employeeId":employeeId
				
				},function(data){
					location.href="employee.jsp";
					
					
				}
				
				
		);
	}
	
	
	
	
	
}

function queryEmpById(){
	var a = location.search;
	var employeeId = a.substring(a.lastIndexOf("?")+1);
	
	
	$.post(
			"../api/queryEmployeeById.do",
			{"employeeId":employeeId},
			function(data){
				
				
				
				
				$("#employeeId").val(data.singerData.employeeId);
				$("#employeeName").val(data.singerData.employeeName);
				$("#employeeIdNo").val(data.singerData.employeeIdNo);
				$("#gender").val(data.singerData.gender);
				$("#bornDate").val(data.singerData.bornDate);
				$("#degree").val(data.singerData.degree);
				$("#schoolTag").val(data.singerData.schoolTag);
				$("#email").val(data.singerData.email);
				$("#phoneNo").val(data.singerData.phoneNo);
				$("#address").val(data.singerData.address);
				$("#departmentId").val(data.singerData.departmentId);
				$("#positionId").val(data.singerData.positionId);
				$("#salary").val(data.singerData.salary);
				$("#contractId").val(data.singerData.contractId);
				$("#employeeDesc").val(data.singerData.employeeDesc);
				
			
				
			
			}
	
	);
	
	
}

function editEmp(){
	
	$.post(
			"../api/updateEmployee.do",
			{"employeeId":$("#employeeId").val(),
			"employeeName":$("#employeeName").val(),
			"employeeIdNo":$("#employeeIdNo").val(),
			"gender":$("#gender").val(),
			"bornDate":$("#bornDate").val(),
			"degree":$("#degree").val(),
			"schoolTag":$("#schoolTag").val(),
			"email":$("#email").val(),
			"phoneNo":$("#phoneNo").val(),
			"address":$("#address").val(),
			"departmentId":$("#departmentId").val(),
			"positionId":$("#positionId").val(),
			"salary":$("#salary").val(),
			"contractId":$("#contractId").val(),
			"employeeDesc":$("#employeeDesc").val(),
			
			},function(data){
				location.href="employee.jsp";
				
				
			}
			
			
	);
	
	
}
function loadDeptData(){
	
	
	$.post(
		"../api/loadDeptInfo.do",
		function(data){
			
			
			var content = $("#content");
			var sumitem ="";
			
			for(var i = 0;i < data.listDatas.length;i++){
				item+="<td><option value='1'>"+data.listDatas[i].departmentName+"</option></td>";
				
				
				sumitem += item;
			}
			content.html(sumitem);
		  }
		);
}
