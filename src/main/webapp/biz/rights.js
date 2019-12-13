function editUsersInfo(){
	
	var userId =  $("#userId").val();
	var userName = $("#userName").val();
	var userPassword = $("#userPassword").val();
	var roleId = $("#roleId").val();
	var userState = $("#userState").val();
	var userDesc = $("#userDesc").val();
	
	$.post(
		"editUsers.do",	
		{"userId":userId,"userName":userName,
			"userPassword":userPassword,"roleId":roleId,
			"userState":userState,"userDesc":userDesc},
		function(data){
		
			if("修改成功"==data.message){
				location.href="User.jsp";
			}else{
				location.href="users_edit.jsp";
			}
			
		}
	
	
	);
	
	
}

function loadUsersByUserId(){
	 
	var id = location.search;
	var userId = id.substring(id.lastIndexOf("?")+1);
	
	
	
	$.post(
		"queryByUserId.do",	
		{"userId":userId},
		function(data){
			
			$("#userId").val(data.singerData.userId);
			$("#userName").val(data.singerData.userName);
			$("#userPassword").val(data.singerData.userPassword);
			$("#roleId").val(data.singerData.roleId);
			$("#userState").val(data.singerData.userState);
			$("#userDesc").val(data.singerData.userDesc);
			
		}
	
	);

}

function deleteUsersInfo(userId){
	
	var isDo = confirm("请问你是否要删除该用户信息?");
	if(isDo){
		$.post(
				"deleteUsers.do",
				{"userId":userId},
				function(data){	
				
					location.href="User.jsp";	
				}

				
	);
}
	
	
}



function loadRightsdata(indexpage){
	

	var rightsName = $("#rightsName").val();
	
	$.post(		
		"loadRightsData.do",
		{"rightsName":rightsName,"indexpage":indexpage},
		
		function(data){
			alert(data);
			var content = $("#content");
			var sumitem ="";
			
			for(var i = 0;i < data.listDatas.length;i++){
				var item = "<tr>";
				item+="<td>"+data.listDatas[i].rightsId+"</td>";
				item+="<td>"+data.listDatas[i].rightsParentId+"</td>";
				item+="<td>"+data.listDatas[i].rightsName+"</td>";
				
				
				if(data.listDatas[i].rightsEnable == 1){
					item +="<td class='hidden-480'>有效</td>";
				}
				if(data.listDatas[i].rightsEnable == 0){
					item +="<td class='hidden-480'>无效</td>";
				}
				
				
				item +="<td><a href='users_edit.jsp?"+data.listDatas[i].userId+"'   class='btn green mini'>编辑</a>&nbsp;&nbsp;";
				item +="<a href='#' onclick='deleteUsersInfo("+data.listDatas[i].userId+")' class='btn red mini'>删除</a></td>";
				
				item+="</tr>";
				sumitem += item;
			}		
			content.html(sumitem);
			
			
			
			
				//使用js封装分页数据	
			
			var pagehtml ="";
			
			
			pagehtml += "<a onclick='loadRightsdata(1)' >[首页]</a>&nbsp;&nbsp;&nbsp;";
			if(data.singerData.indexpage > 1){
				
				pagehtml += "<a onclick='loadRightsdata("+(data.singerData.indexpage - 1)+")' > 上一页 </a>&nbsp;&nbsp;&nbsp;";
			}else{
				pagehtml +="上一页";
				
			}
			
			if(data.singerData.pagecount < 4){
				for (var i = 1; i <= data.singerData.pagecount; i++) {
					pagehtml +="<a  onclick='loadRightsdata("+i+")'>"+i+"</a>";
				}
				
			
			}else if(data.singerData.indexpage + 4 <= data.singerData.pagecount){
				
				for ( var i = data.singerData.indexpage; i < data.singerData.indexpage + 4; i++) {
					pagehtml += "<a onclick='loadRightsdata("+i+")' > "+i+" </a>&nbsp;&nbsp;&nbsp;";
				}
			}else{
				for ( var i = data.singerData.pagecount - 3; i <= data.singerData.pagecount; i++) {
					pagehtml += "<a onclick='loadRightsdata("+i+")' > "+i+" </a>&nbsp;&nbsp;&nbsp;";
				}
			}
			
		
			if(data.singerData.indexpage < data.singerData.pagecount){
				
				pagehtml += "<a onclick='loadRightsdata("+(data.singerData.indexpage + 1)+")' > 下一页 </a>&nbsp;&nbsp;&nbsp;";
			}else{
				pagehtml +=" 下一页";
			}
			
			
			pagehtml += "<a onclick='loadRightsdata("+(data.singerData.pagecount)+")' >[尾页]</a>&nbsp;&nbsp;&nbsp;";
			pagehtml += "当前第"+data.singerData.indexpage+"页/共"+data.singerData.pagecount+"页";
			pagehtml +="</ul>";
			
			$("#mypage").html(pagehtml);
			
			
			
			
			
			
			
			
			
		}
	);
	
}