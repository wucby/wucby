<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta charset="UTF-8">
<title>提交生产计划表</title>
<meta
	content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
	name='viewport'>
<!-- bootstrap 3.0.2 -->
<link href="../../css/bootstrap.min.css" rel="stylesheet"
	type="text/css" />
<!-- font Awesome -->
<link href="../../css/font-awesome.min.css" rel="stylesheet"
	type="text/css" />
<!-- Ionicons -->
<link href="../../css/ionicons.min.css" rel="stylesheet" type="text/css" />
<!-- Theme style -->
<link href="../../css/AdminLTE.css" rel="stylesheet" type="text/css" />

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->
</head>
<body class="skin-blue">
	<!-- header logo: style can be found in header.less -->
	<header class="header"> <a href="../../index.html"
		class="logo"> <!-- Add the class icon to your logo image or logo icon to add the margining -->
		AdminLTE
	</a> <!-- Header Navbar: style can be found in header.less --> <nav
		class="navbar navbar-static-top" role="navigation"> <!-- Sidebar toggle button-->
	<a href="#" class="navbar-btn sidebar-toggle" data-toggle="offcanvas"
		role="button"> <span class="sr-only">Toggle navigation</span> <span
		class="icon-bar"></span> <span class="icon-bar"></span> <span
		class="icon-bar"></span>
	</a>
	<div class="navbar-right">
		<ul class="nav navbar-nav">
			<!-- Messages: style can be found in dropdown.less-->
			<li class="dropdown messages-menu"><a href="#"
				class="dropdown-toggle" data-toggle="dropdown"> <i
					class="fa fa-envelope"></i> <span class="label label-success">4</span>
			</a>
				<ul class="dropdown-menu">
					<li class="header">You have 4 messages</li>
					<li>
						<!-- inner menu: contains the actual data -->
						<ul class="menu">
							<li>
								<!-- start message --> <a href="#">
									<div class="pull-left">
										<img src="../../img/avatar3.png" class="img-circle"
											alt="User Image" />
									</div>
									<h4>
										Support Team <small><i class="fa fa-clock-o"></i> 5
											mins</small>
									</h4>
									<p>Why not buy a new awesome theme?</p>
							</a>
							</li>
							<!-- end message -->
							<li><a href="#">
									<div class="pull-left">
										<img src="../../img/avatar2.png" class="img-circle"
											alt="user image" />
									</div>
									<h4>
										AdminLTE Design Team <small><i class="fa fa-clock-o"></i>
											2 hours</small>
									</h4>
									<p>Why not buy a new awesome theme?</p>
							</a></li>
							<li><a href="#">
									<div class="pull-left">
										<img src="../../img/avatar.png" class="img-circle"
											alt="user image" />
									</div>
									<h4>
										Developers <small><i class="fa fa-clock-o"></i> Today</small>
									</h4>
									<p>Why not buy a new awesome theme?</p>
							</a></li>
							<li><a href="#">
									<div class="pull-left">
										<img src="../../img/avatar2.png" class="img-circle"
											alt="user image" />
									</div>
									<h4>
										Sales Department <small><i class="fa fa-clock-o"></i>
											Yesterday</small>
									</h4>
									<p>Why not buy a new awesome theme?</p>
							</a></li>
							<li><a href="#">
									<div class="pull-left">
										<img src="../../img/avatar.png" class="img-circle"
											alt="user image" />
									</div>
									<h4>
										Reviewers <small><i class="fa fa-clock-o"></i> 2 days</small>
									</h4>
									<p>Why not buy a new awesome theme?</p>
							</a></li>
						</ul>
					</li>
					<li class="footer"><a href="#">See All Messages</a></li>
				</ul></li>
			<!-- Notifications: style can be found in dropdown.less -->
			<li class="dropdown notifications-menu"><a href="#"
				class="dropdown-toggle" data-toggle="dropdown"> <i
					class="fa fa-warning"></i> <span class="label label-warning">10</span>
			</a>
				<ul class="dropdown-menu">
					<li class="header">You have 10 notifications</li>
					<li>
						<!-- inner menu: contains the actual data -->
						<ul class="menu">
							<li><a href="#"> <i class="ion ion-ios7-people info"></i>
									5 new members joined today
							</a></li>
							<li><a href="#"> <i class="fa fa-warning danger"></i>
									Very long description here that may not fit into the page and
									may cause design problems
							</a></li>
							<li><a href="#"> <i class="fa fa-users warning"></i> 5
									new members joined
							</a></li>

							<li><a href="#"> <i class="ion ion-ios7-cart success"></i>
									25 sales made
							</a></li>
							<li><a href="#"> <i class="ion ion-ios7-person danger"></i>
									You changed your username
							</a></li>
						</ul>
					</li>
					<li class="footer"><a href="#">View all</a></li>
				</ul></li>
			<!-- Tasks: style can be found in dropdown.less -->
			<li class="dropdown tasks-menu"><a href="#"
				class="dropdown-toggle" data-toggle="dropdown"> <i
					class="fa fa-tasks"></i> <span class="label label-danger">9</span>
			</a>
				<ul class="dropdown-menu">
					<li class="header">You have 9 tasks</li>
					<li>
						<!-- inner menu: contains the actual data -->
						<ul class="menu">
							<li>
								<!-- Task item --> <a href="#">
									<h3>
										Design some buttons <small class="pull-right">20%</small>
									</h3>
									<div class="progress xs">
										<div class="progress-bar progress-bar-aqua" style="width: 20%"
											role="progressbar" aria-valuenow="20" aria-valuemin="0"
											aria-valuemax="100">
											<span class="sr-only">20% Complete</span>
										</div>
									</div>
							</a>
							</li>
							<!-- end task item -->
							<li>
								<!-- Task item --> <a href="#">
									<h3>
										Create a nice theme <small class="pull-right">40%</small>
									</h3>
									<div class="progress xs">
										<div class="progress-bar progress-bar-green"
											style="width: 40%" role="progressbar" aria-valuenow="20"
											aria-valuemin="0" aria-valuemax="100">
											<span class="sr-only">40% Complete</span>
										</div>
									</div>
							</a>
							</li>
							<!-- end task item -->
							<li>
								<!-- Task item --> <a href="#">
									<h3>
										Some task I need to do <small class="pull-right">60%</small>
									</h3>
									<div class="progress xs">
										<div class="progress-bar progress-bar-red" style="width: 60%"
											role="progressbar" aria-valuenow="20" aria-valuemin="0"
											aria-valuemax="100">
											<span class="sr-only">60% Complete</span>
										</div>
									</div>
							</a>
							</li>
							<!-- end task item -->
							<li>
								<!-- Task item --> <a href="#">
									<h3>
										Make beautiful transitions <small class="pull-right">80%</small>
									</h3>
									<div class="progress xs">
										<div class="progress-bar progress-bar-yellow"
											style="width: 80%" role="progressbar" aria-valuenow="20"
											aria-valuemin="0" aria-valuemax="100">
											<span class="sr-only">80% Complete</span>
										</div>
									</div>
							</a>
							</li>
							<!-- end task item -->
						</ul>
					</li>
					<li class="footer"><a href="#">View all tasks</a></li>
				</ul></li>
			<!-- User Account: style can be found in dropdown.less -->
			<li class="dropdown user user-menu"><a href="#"
				class="dropdown-toggle" data-toggle="dropdown"> <i
					class="glyphicon glyphicon-user"></i> <span>Jane Doe <i
						class="caret"></i></span>
			</a>
				<ul class="dropdown-menu">
					<!-- User image -->
					<li class="user-header bg-light-blue"><img
						src="../../img/avatar3.png" class="img-circle" alt="User Image" />
						<p>
							Jane Doe - Web Developer <small>Member since Nov. 2012</small>
						</p></li>
					<!-- Menu Body -->
					<li class="user-body">
						<div class="col-xs-4 text-center">
							<a href="#">Followers</a>
						</div>
						<div class="col-xs-4 text-center">
							<a href="#">Sales</a>
						</div>
						<div class="col-xs-4 text-center">
							<a href="#">Friends</a>
						</div>
					</li>
					<!-- Menu Footer-->
					<li class="user-footer">
						<div class="pull-left">
							<a href="#" class="btn btn-default btn-flat">Profile</a>
						</div>
						<div class="pull-right">
							<a href="#" class="btn btn-default btn-flat">Sign out</a>
						</div>
					</li>
				</ul></li>
		</ul>
	</div>
	</nav> </header>
	<div class="wrapper row-offcanvas row-offcanvas-left">
		<!-- Left side column. contains the logo and sidebar -->
		
		<jsp:include page="../../menu.jsp"></jsp:include>
		<!-- Right side column. Contains the navbar and content of the page -->
		<aside class="right-side"> <!-- Content Header (Page header) -->
		<section class="content-header">
		<h1>
			提交生产计划 <small>生产管理</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-dashboard"></i> 主页</a></li>
			<li><a href="#">生产管理</a></li>
			<li class="active">提交生产计划</li>
		</ol>
		</section> <!-- Main content --> <section class="content">
								<blockquote>

							<p style="font-size:16px">
							说明：<br>
								1，上传文件是doc或jpg扩展名的文件（Word文档或jpg图片）。<br>
								2，如果是添加：必须要选择模板文件。<br>
								3，所有“已通过”的生产计划表，必须有原文档或图片资源。<br>
							</p>

						</blockquote>
<form id="fileupload" action="addproductionplan.do" method="POST" enctype="multipart/form-data">

							<!-- Redirect browsers with JavaScript disabled to the origin page -->

							<noscript><input type="hidden" name="redirect" value="http://blueimp.github.com/jQuery-File-Upload/"></noscript>

							<!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->
		<div class="row">
			<div class="col-xs-12">
				<div class="box">
					<div class="box-header">
						<h3 class="box-title">上传文件</h3>
						<div class="box-tools">
							<div class="input-group">
								<input type="text" name="table_search"
									class="form-control input-sm pull-right" style="width: 150px;"
									placeholder="Search" />
								<div class="input-group-btn">
									<button class="btn btn-sm btn-default">
										<i class="fa fa-search"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /.box-header -->
					<div class="box-body table-responsive no-padding">
						<table>
							<tr>
								<td><a>模板文件</a> <br> <span
									class="btn green fileinput-button"> <i
										class="icon-plus icon-white"></i> <script
											type="text/javascript">
											function getfilename() {
												$("#filemsg").text(
														$("#upload").val());
											}
										</script> <a>请选择文件(doc或jpg格式)</a> <input id="upload"
										onchange="getfilename()" type="file" name="upload" multiple>
								</span> <span id="filemsg" class="span5"></span></td>
							</tr>
						</table>
						<!-- The global progress information -->

								<div class="span5 fileupload-progress fade">

									<!-- The global progress bar -->

									<div class="progress progress-success progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100">

										<div class="bar" style="width:0%;"></div>

									</div>

									<!-- The extended global progress information -->

									<div class="progress-extended">&nbsp;</div>

								</div>

							</div>

							<!-- The loading indicator is shown during file processing -->

							<div class="fileupload-loading"></div>

							<br>

							<!-- The table listing the files available for upload/download -->

							<table role="presentation" class="table table-striped">

								<tbody class="files" data-toggle="modal-gallery" data-target="#modal-gallery"></tbody>

							</table>

						<table class="table table-hover">
							<tr>
								<td>计划编号</td>
								<td><input type="text" name="planId" /></td>
							</tr>
							<tr>
								<td>需求单编号</td>
								<td><input type="text" name="demandId" /></td>
							</tr>
							<tr>

								<td>产品编号</td>
								<td><input type="text" name="productId" /></td>
							</tr>
							<tr>
								<td>产品数量</td>
								<td><input type="text" name="productCount" /></td>
							</tr>

<!-- 							<tr>
								<td>审核状态</td>
								<td>
									<div class="btn-group" data-toggle="buttons">
										<label class="toggle"> 已通过  <input type="radio"
											name="checkStatus" value="0" id="option1"> 
										</label> 
										<label class="toggle"> 未通过  <input type="radio"
											name="checkStatus" value="1" id="option2">
										</label>
									</div>
								</td>
							</tr> -->
							
<!-- 							<tr>
								<td>完成状态</td>
								<td>
									<div class="btn-group" data-toggle="buttons">
										<label class="toggle"> 已完成  <input type="radio"
											name="completeStatus" value="0" id="option1"> 
										</label> 
										<label class="toggle"> 未完成  <input type="radio"
											name="completeStatus" value="1" id="option2">
										</label>
									</div>
								</td>
							</tr> -->
							<tr>
								<td>制定人</td>
								<td><input type="text" name="employeeId" /></td>
							</tr>

							<tr>

								<td><a href="queryproductionplan.do" class="btn btn-sm btn-danger"><i
										class="icon-arrow-left"></i> 返回</a></td>
								<td>
									<button type="submit" class="btn btn-info btn-sm">
										<i class="icon-save"></i> 保存
									</button>
								</td>
							</tr>
						</table>
						</form>
					</div>
					<!-- /.box-body -->

				</div>
				<!-- /.box -->
			</div>
		</div>
		</section><!-- /.content --> </aside>
		<!-- /.right-side -->
	</div>
	<!-- ./wrapper -->


	<!-- jQuery 2.0.2 -->
	<script src="js/jquery.min.js"></script>
	<!-- Bootstrap -->
	<script src="../../js/bootstrap.min.js" type="text/javascript"></script>
	<!-- AdminLTE App -->
	<script src="../../js/AdminLTE/app.js" type="text/javascript"></script>

</body>
</html>