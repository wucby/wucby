<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>AdminLTE | Simple Tables</title>
        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
        <!-- bootstrap 3.0.2 -->
        <link href="../../css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- font Awesome -->
        <link href="../../css/font-awesome.min.css" rel="stylesheet" type="text/css" />
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
    <body class="skin-blue" onload="queryEmpById()">
        <!-- header logo: style can be found in header.less -->
        <header class="header">
            <a href="../../index.html" class="logo">
                <!-- Add the class icon to your logo image or logo icon to add the margining -->
                AdminLTE
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top" role="navigation">
                <!-- Sidebar toggle button-->
                <a href="#" class="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>
                <div class="navbar-right">
                    <ul class="nav navbar-nav">
                        <!-- Messages: style can be found in dropdown.less-->
                        <li class="dropdown messages-menu">
                           
                            
                        </li>
                        <!-- Tasks: style can be found in dropdown.less -->
                        <li class="dropdown tasks-menu">
                            
                            <ul class="dropdown-menu">
                                <li class="header">You have 9 tasks</li>
                                <li>
                                    <!-- inner menu: contains the actual data -->
                                    <ul class="menu">
                                        <li><!-- Task item -->
                                            <a href="#">
                                                <h3>
                                                    Design some buttons
                                                    <small class="pull-right">20%</small>
                                                </h3>
                                                <div class="progress xs">
                                                    <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span class="sr-only">20% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li><!-- end task item -->
                                        <li><!-- Task item -->
                                            <a href="#">
                                                <h3>
                                                    Create a nice theme
                                                    <small class="pull-right">40%</small>
                                                </h3>
                                                <div class="progress xs">
                                                    <div class="progress-bar progress-bar-green" style="width: 40%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span class="sr-only">40% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li><!-- end task item -->
                                        <li><!-- Task item -->
                                            <a href="#">
                                                <h3>
                                                    Some task I need to do
                                                    <small class="pull-right">60%</small>
                                                </h3>
                                                <div class="progress xs">
                                                    <div class="progress-bar progress-bar-red" style="width: 60%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li><!-- end task item -->
                                        <li><!-- Task item -->
                                            <a href="#">
                                                <h3>
                                                    Make beautiful transitions
                                                    <small class="pull-right">80%</small>
                                                </h3>
                                                <div class="progress xs">
                                                    <div class="progress-bar progress-bar-yellow" style="width: 80%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span class="sr-only">80% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li><!-- end task item -->
                                    </ul>
                                </li>
                                <li class="footer">
                                    <a href="#">View all tasks</a>
                                </li>
                            </ul>
                        </li>
                        <!-- User Account: style can be found in dropdown.less -->
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="glyphicon glyphicon-user"></i>
                                <span>Jane Doe <i class="caret"></i></span>
                            </a>
                            <ul class="dropdown-menu">
                                <!-- User image -->
                                <li class="user-header bg-light-blue">
                                    <img src="../../img/avatar3.png" class="img-circle" alt="User Image" />
                                    <p>
                                        Jane Doe - Web Developer
                                        <small>Member since Nov. 2012</small>
                                    </p>
                                </li>
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
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <div class="wrapper row-offcanvas row-offcanvas-left">
            <!-- Left side column. contains the logo and sidebar -->
            <aside class="left-side sidebar-offcanvas">                
                <!-- sidebar: style can be found in sidebar.less -->
                
            <jsp:include page="../../menu.jsp"></jsp:include>        
            </aside>

            <!-- Right side column. Contains the navbar and content of the page -->
            <aside class="right-side">                
                <!-- Content Header (Page header) -->
                <section class="content-header">
                    <h1>
                        	员工管理
                        
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i>主页</a></li>
                        <li><a href="#">人力资源管理</a></li>
                        <li class="active">员工表</li>
                    </ol>
                </section>

                <!-- Main content -->
                <section class="content">
                   
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">修改员工信息</h3>
                                    <div class="box-tools">
                                        <div class="input-group">
                                        </div>
                                    </div>
                                     
                                </div><!-- /.box-header -->
                                <div class="box-body table-responsive no-padding">
                                    <table class="table table-hover">
                                        <tr>
                                        	<td>
                                        		员工编号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="employeeId" name="employeeId" readonly="readonly"  />
                                        	</td>
                                        	<td>
                                        		员工名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="employeeName" name="employeeName" />
                                        	</td>
                                        	<td>
                                        		员工身份证号码<input type="text" id="employeeIdNo" name="employeeIdNo" />
                                        	</td>
                                        	
                                        </tr>	
                                        <tr>
                                        	<td>
                                        		性别(男1 女0)&nbsp;<input type="text"  id="gender" name="gender"  />
                                        	</td>
                                        	<td>
                                        		出生日期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"  id="bornDate" name="bornDate"  />
                                        	</td>
                                        	<td>
                                        		学历&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"  id="degree" name="degree"  />
                                        	</td>
                                        	<td>
                                        	</td>
                                        </tr>	
                                        <tr>
                                        	<td>
                                        		毕业院校&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="schoolTag" name="schoolTag"/>
                                        	</td>
                                        	<td>
                                        		电子邮件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="email" name="email"/>
                                        	</td>
                                        	<td>
                                        		手机号码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="phoneNo" name="phoneNo"/>
                                        	</td>
                                        	
                                        </tr>	
                                        <tr>
                                        	<td>
                                        		地址&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="address" name="address"/>
                                        	</td>
                                        	<td>
                                        		部门编号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="departmentId" name="departmentId"/>
                                        	</td>
                                        	<td>
                                        		职位编号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="positionId" name="positionId"/>
                                        	</td>
                                        	
                                        </tr>	
                                         <tr>
                                        	<td>
                                        		薪水&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="salary" name="salary"/>
                                        	</td>
                                        	<td>
                                        		员工合同编号<input type="text" id="contractId" name="contractId"/>
                                        	</td>
                                        	
                                        </tr>
                                         <tr>
                                        	
                                        	<td>
                                        		备注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea name="employeeDesc" id="employeeDesc" style="width:400px;height:80px;"></textarea>
                                        	</td>
                                        	
                                        	
                                        </tr>		
                                       <tr>
                                       		<td>
                                        	<button onclick="editEmp()" class="label label-danger btn-sm" style="width:50px;height:25px;">提交</button>
                                       		</td>
                                        </tr>
                                    
                                        
                                        
                                           
                                        
                                       
                                    </table>
                                    	
                                    
                                </div><!-- /.box-body -->
                            </div><!-- /.box -->
                        </div>
                    </div>
                </section><!-- /.content -->                
            </aside><!-- /.right-side -->
        </div><!-- ./wrapper -->


        <!-- jQuery 2.0.2 -->
        <script src="../../js/jquery.min.js"></script>
        <!-- Bootstrap -->
        <script src="../../js/bootstrap.min.js" type="text/javascript"></script>
        <!-- AdminLTE App -->
        <script src="../../js/AdminLTE/app.js" type="text/javascript"></script>
        <script src="../../biz/employee.js" type="text/javascript"></script>

    </body>
</html>