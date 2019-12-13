

function deleteRoleInfo(roleId){
	
	var isDo = confirm("请问你是否要删除该角色信息?");
	if(isDo){
		$.post(
				"deleteRole.do",
				{"roleId":roleId},
				function(data){	
					location.href="Role.jsp";	
				}
				
				
				
				
	);
}
	
	
}


/*function deleteUsersInfo(userId){
	
	var isDo = confirm("请问你是否要删除该用户信息?");
	if(isDo){
		
			location.href="deleteUsers.do?userId="+userId;
		

	
}*/
/*function loadUsersByUserId(){
	 
	var id = location.search;
	var userId = id.substring(id.lastIndexOf("?")+1);
	
	alert("userId=========="+userId)
	
	$.post(
		"queryByUserId.do",	
		{"userId":userId},
		function(data){
			alert(data+"--------------");
			$("#userId").val(data.singerData.userId);
			$("#userName").val(data.singerData.userName);
			$("#userPassword").val(data.singerData.userPassword);
			$("#roleId").val(data.singerData.roleId);
			$("#userState").val(data.singerData.userState);
			$("#userDesc").val(data.singerData.userDesc);
			
		}
	
	);

}*/

function deleteRoleRightInfo(roleId,rightsId){
	

	var isDo = confirm("请问你是否要删除该角色下的权限?");
	if(isDo){
		$.post(
				"deleteRoleRirht.do",
				{"roleId":roleId,"rightsId":rightsId},
				function(data){	
					location.href="Role_rights_1.jsp";	
				}

				
	);
}
}

function addRoleRightInfo(){
	var roleId =  $("#roleId").val();
	var rightsId = $("#rightsId").val();

	
	$.post(
		"setRoleRirht.do",	
		{"roleId":roleId,"rightsId":rightsId},
		function(data){
		
			if("添加成功"==data.message){
				location.href="Role_rights_1.jsp";
			}else{
				location.href="role_right.add.jsp";
			}
			
		}
	
	
	);
	
}


function unhasRights(){
	
	
	var id = location.search;
	var roleId = id.substring(id.lastIndexOf("?")+1);
	
	$.post(
			"queryRirhtByUNHas.do",
			{"roleId":roleId},
			
			function(data){
				alert(data);
				$("#righthtml").html(roleId+"未拥有权限");
			
				
				var content = $("#unrscontent");
			
				var sumitem ="";
				
				for(var i = 0;i < data.listDatas.length;i++){
					var item = "<tr>";
					item+="<td>"+data.listDatas[i].rightsId+"</td>";
					item+="<td>"+data.listDatas[i].rightsName+"</td>";
					/*item +="<td><a href='#' onclick='addRoleRightInfo("+roleId+","+data.listDatas[i].rightsId+")' class='btn red mini'>赋予权限</a></td>";*/
					
					item +="<td><a href='role_right.add.jsp' class='btn red mini'>赋予权限</a></td>";
					item+="</tr>";
					
					sumitem += item;
				}		
				alert(sumitem);
				content.html(sumitem);
			}
	);
	

	
}














function loadRoleRightsInfo(){
	
	
	var id = location.search;
	var roleId = id.substring(id.lastIndexOf("?")+1);

	$.post(
			"queryRirhtByHas.do",
			{"roleId":roleId},
			
			function(data){
				alert(data);
				$("#righthtml").html(roleId+"已拥有权限");
				
				var myempidhtml = $("#getRighthtml"); 
				
				var iditem ="<a href='role_rights_set.jsp?"+roleId+"'><span class='label label-danger'>赋予权限1111</span><a>"
					
				
					myempidhtml.html(iditem);
				
			
				var rscontent = $("#rscontent");
			
				var sumsitem ="";
				
				for(var i = 0;i < data.listDatas.length;i++){
					var item = "<tr>";
					item+="<td>"+data.listDatas[i].rightsId+"</td>";
					item+="<td>"+data.listDatas[i].rightsName+"</td>";
					item +="<td><a href='#' onclick='deleteRoleRightInfo("+roleId+","+data.listDatas[i].rightsId+")' class='btn red mini'>删除权限</a></td>";
					alert("nnnnnnnnnnn");
					item+="</tr>";
				
					sumsitem += item;
				}		
				rscontent.html(sumsitem);
				
			}
	);
	
}



function loadRoleRights(indexpage){
	
	$.post(
			"selectRoleRights.do",
			{"indexpage":indexpage},
			
			function(data){

				var content = $("#rrcontent");
				var sumitem ="";
				
				for(var i = 0;i < data.listDatas.length;i++){
					var item = "<tr>";
					item+="<td>"+data.listDatas[i].roleId+"</td>";					
					item+="<td>"+data.listDatas[i].rightsId+"</td>";
					/*item+="<td><a href='role_rights.jsp?"+data.listDatas[i].roleId+"' onclick='loadRoleRightsInfo("+data.listDatas[i].roleId+")'><span class='label label-success'>设置权限</span><a>";
					
					item +="<a href='users_edit.jsp?"+data.listDatas[i].roleId+"'   class='btn green mini'>编辑</a>&nbsp;&nbsp;";
					item +="<a href='#' onclick='deleteRoleInfo("+data.listDatas[i].roleId+")' class='btn red mini'>删除</a></td>";*/
					
					item+="</tr>";
					sumitem += item;
				}		
				content.html(sumitem);
				
				
				
				
					//使用js封装分页数据	
				
				var pagehtml ="";
				
				
				pagehtml += "<a onclick='loadRoleRights(1)' >[首页]</a>&nbsp;&nbsp;&nbsp;";
				if(data.singerData.indexpage > 1){
					
					pagehtml += "<a onclick='loadRoleRights("+(data.singerData.indexpage - 1)+")' > 上一页 </a>&nbsp;&nbsp;&nbsp;";
				}else{
					pagehtml +="上一页";
					
				}
				
				if(data.singerData.pagecount < 4){
					for (var i = 1; i <= data.singerData.pagecount; i++) {
						pagehtml +="<a  onclick='loadRoleRights("+i+")'>"+i+"</a>";
					}
					
				
				}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
					
					for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
						pagehtml += "<a onclick='loadRoleRights("+i+")' > "+i+" </a>&nbsp;&nbsp;&nbsp;";
					}
				}else{
					for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
						pagehtml += "<a onclick='loadRoleRights("+i+")' > "+i+" </a>&nbsp;&nbsp;&nbsp;";
					}
				}
				
			
				if(data.singerData.indexpage < data.singerData.pagecount){
					
					pagehtml += "<a onclick='loadRoleRights("+(data.singerData.indexpage + 1)+")' > 下一页 </a>&nbsp;&nbsp;&nbsp;";
				}else{
					pagehtml +=" 下一页";
				}
				
				
				pagehtml += "<a onclick='loadRoleRights("+(data.singerData.pagecount)+")' >[尾页]</a>&nbsp;&nbsp;&nbsp;";
				pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
				pagehtml +="</ul>";
				$("#mypage").html(pagehtml);
				
			
				
			}
		);
	
}









function loadRolesdata(indexpage){
	
	var roleName = $("#roleName").val();
	
	$.post(
		"loadRoleData.do",
		{
			"roleName":roleName,
			"indexpage":indexpage
		},
		
		function(data){

			var content = $("#rolecontent");
			var sumitem ="";
			
			for(var i = 0;i < data.listDatas.length;i++){
				var item = "<tr>";
				item+="<td>"+data.listDatas[i].roleId+"</td>";
				item+="<td>"+data.listDatas[i].roleName+"</td>";
				item+="<td>"+data.listDatas[i].roleDesc+"</td>";
				item+="<td><a href='role_rights.jsp?"+data.listDatas[i].roleId+"' onclick='loadRoleRightsInfo("+data.listDatas[i].roleId+")'><span class='label label-success'>设置权限</span><a>";
				/*item+="<td><a href='#' onclick='loadRoleRightsInfo("+data.listDatas[i].roleId+")'><span class='label label-success'>设置权限</span><a>";*/
				item +="<a href='users_edit.jsp?"+data.listDatas[i].roleId+"'   class='btn green mini'>编辑</a>&nbsp;&nbsp;";
				item +="<a href='#' onclick='deleteRoleInfo("+data.listDatas[i].roleId+")' class='btn red mini'>删除</a></td>";
				
				item+="</tr>";
				sumitem += item;
			}		
			content.html(sumitem);
			
			
			
			
				//使用js封装分页数据	
			
			var pagehtml ="";
			
			
			pagehtml += "<a onclick='loadRolesdata(1)' >[首页]</a>&nbsp;&nbsp;&nbsp;";
			if(data.singerData.indexpage > 1){
				
				pagehtml += "<a onclick='loadRolesdata("+(data.singerData.indexpage - 1)+")' > 上一页 </a>&nbsp;&nbsp;&nbsp;";
			}else{
				pagehtml +="上一页";
				
			}
			
			if(data.singerData.pagecount < 4){
				for (var i = 1; i <= data.singerData.pagecount; i++) {
					pagehtml +="<a  onclick='loadRolesdata("+i+")'>"+i+"</a>";
				}
				
			
			}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
				
				for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
					pagehtml += "<a onclick='loadRolesdata("+i+")' > "+i+" </a>&nbsp;&nbsp;&nbsp;";
				}
			}else{
				for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
					pagehtml += "<a onclick='loadRolesdata("+i+")' > "+i+" </a>&nbsp;&nbsp;&nbsp;";
				}
			}
			
		
			if(data.singerData.indexpage < data.singerData.pagecount){
				
				pagehtml += "<a onclick='loadRolesdata("+(data.singerData.indexpage + 1)+")' > 下一页 </a>&nbsp;&nbsp;&nbsp;";
			}else{
				pagehtml +=" 下一页";
			}
			
			
			pagehtml += "<a onclick='loadRolesdata("+(data.singerData.pagecount)+")' >[尾页]</a>&nbsp;&nbsp;&nbsp;";
			pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
			pagehtml +="</ul>";
			$("#mypage").html(pagehtml);
			
		
			
		}
	);
	
}