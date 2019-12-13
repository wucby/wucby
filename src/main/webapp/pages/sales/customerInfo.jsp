<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta charset="UTF-8">
        <title>客户信息</title>
        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
        <!-- bootstrap 3.0.2 -->
        <link href="../../css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- font Awesome -->
        <link href="../../css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <!-- Ionicons -->
        <link href="../../css/ionicons.min.css" rel="stylesheet" type="text/css" />
        <!-- daterange picker -->
        <link href="../../css/daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css" />
        <!-- iCheck for checkboxes and radio inputs -->
        <link href="../../css/iCheck/all.css" rel="stylesheet" type="text/css" />
        <!-- Bootstrap Color Picker -->
        <link href="../../css/colorpicker/bootstrap-colorpicker.min.css" rel="stylesheet"/>
        <!-- Bootstrap time Picker -->
        <link href="../../css/timepicker/bootstrap-timepicker.min.css" rel="stylesheet"/>
        <!-- Theme style -->
        <link href="../../css/AdminLTE.css" rel="stylesheet" type="text/css" />

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->	
    </head>
<!--     <script type="text/javascript">  
    function bbbbb(){
    	alert("1232232");
			var he= $("#cccccccc").val();
			//var he = document.getElementById("cccccccc").value;
			alert(he);
		 	var la = document.getElementsByName("hela");
		 	for(var i=0;i<la.length;i++){
				 var ll=la[i];
				 if(he==ll.value){
					 ll.checked=true;
					 break;
				 }
		 	}
		
    }
   			
	</script> -->
    <!-- <script type="text/javascript">
    	function hehes(){
    		var i = location.search;
    		var j = i.substring(i.lastIndexOf("?")+1);
    		alert(j);
    		document.getElementById("customerId").value=j;
    		
    		alert(document.getElementById("customerId").value);
    	}
    </script> -->
    <script type="text/javascript">
			function test(){
				var a = $("[name=customerSatisfy][value=1]");
				
				
				alert(a.attr("checked"));
			}
		</script>
    <body class="skin-blue">
   <!--  <button onclick="test()">test</button> -->
        <!-- header logo: style can be found in header.less -->
        <header class="header">
            <a href="../../index.html" class="logo">
                <!-- Add the class icon to your logo image or logo icon to add the margining -->
               
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
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-envelope"></i>
                                <span class="label label-success">4</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="header">You have 4 messages</li>
                                <li>
                                    <!-- inner menu: contains the actual data -->
                                    <ul class="menu">
                                        <li><!-- start message -->
                                            <a href="#">
                                                <div class="pull-left">
                                                    <img src="../../img/avatar3.png" class="img-circle" alt="User Image"/>
                                                </div>
                                                <h4>
                                                    Support Team
                                                    <small><i class="fa fa-clock-o"></i> 5 mins</small>
                                                </h4>
                                                <p>Why not buy a new awesome theme?</p>
                                            </a>
                                        </li><!-- end message -->
                                        <li>
                                            <a href="#">
                                                <div class="pull-left">
                                                    <img src="../../img/avatar2.png" class="img-circle" alt="user image"/>
                                                </div>
                                                <h4>
                                                    AdminLTE Design Team
                                                    <small><i class="fa fa-clock-o"></i> 2 hours</small>
                                                </h4>
                                                <p>Why not buy a new awesome theme?</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="pull-left">
                                                    <img src="../../img/avatar.png" class="img-circle" alt="user image"/>
                                                </div>
                                                <h4>
                                                    Developers
                                                    <small><i class="fa fa-clock-o"></i> Today</small>
                                                </h4>
                                                <p>Why not buy a new awesome theme?</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="pull-left">
                                                    <img src="../../img/avatar2.png" class="img-circle" alt="user image"/>
                                                </div>
                                                <h4>
                                                    Sales Department
                                                    <small><i class="fa fa-clock-o"></i> Yesterday</small>
                                                </h4>
                                                <p>Why not buy a new awesome theme?</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="pull-left">
                                                    <img src="../../img/avatar.png" class="img-circle" alt="user image"/>
                                                </div>
                                                <h4>
                                                    Reviewers
                                                    <small><i class="fa fa-clock-o"></i> 2 days</small>
                                                </h4>
                                                <p>Why not buy a new awesome theme?</p>
                                            </a>
                                        </li>
                                    </ul>
                               </li>
                                <li class="footer"><a href="#">See All Messages</a></li>
                            </ul>
                        </li>
                        <!-- Notifications: style can be found in dropdown.less -->
                        <li class="dropdown notifications-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-warning"></i>
                                <span class="label label-warning">10</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="header">You have 10 notifications</li>
                                <li>
                                    <!-- inner menu: contains the actual data -->
                                    <ul class="menu">
                                        <li>
                                            <a href="#">
                                                <i class="ion ion-ios7-people info"></i> 5 new members joined today
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-warning danger"></i> Very long description here that may not fit into the page and may cause design problems
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-users warning"></i> 5 new members joined
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <i class="ion ion-ios7-cart success"></i> 25 sales made
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="ion ion-ios7-person danger"></i> You changed your username
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="footer"><a href="#">View all</a></li>
                            </ul>
                        </li>
                        <!-- Tasks: style can be found in dropdown.less -->
                        <li class="dropdown tasks-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-tasks"></i>
                                <span class="label label-danger">9</span>
                            </a>
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
                <section class="sidebar">
                   
                    <jsp:include page="../../menu.jsp"></jsp:include>
                       
                </section>
                <!-- /.sidebar -->
            </aside>

            <!-- Right side column. Contains the navbar and content of the page -->
            <aside class="right-side">
                <!-- Content Header (Page header) -->
                <section class="content-header">
                    <h1>
                        	客户信息
                        <small>查看客户详情</small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i>主页</a></li>
                        <li><a href="salesorder.jsp">销售管理</a></li>
                        <li class="active">客户信息</li>
                    </ol>
                </section>
                <!-- Main content -->
                <form action="updateCustomer.do" method="post">
                <section class="content">
                    <div class="row">
                        <div class="col-md-6">

                            <div class="box box-danger">
                                <div class="box-header">
                                    <h3 class="box-title">客户信息</h3>
                                </div>
                           
                                <div class="box-body">
                                    
                                   <!--  <hidden id="customerId" name="customerId" value=""></hidden> -->
                                    
									<div class="form-group">
                                        <label>客户类型</label>
                                        		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <c:choose>
                                        	<c:when test="${obj.singerData.customerType==1 }">
                                                                                                                                                客户<input name="customerType" type="radio" value="1" checked="checked">
                                            </c:when>
                                            <c:otherwise>
                                            	客户<input name="customerType" type="radio" value="1" />
                                            </c:otherwise>
                                         </c:choose>
                                                 &nbsp;&nbsp;&nbsp;&nbsp;
                                         <c:choose>
                                        	<c:when test="${obj.singerData.customerType==2 }">
                                        		供应商<input name="customerType" type="radio" value="2" checked="checked" >
                                         	</c:when>
                                            <c:otherwise>
                                               	供应商<input name="customerType" type="radio" value="2" >
                                            </c:otherwise>
                                         </c:choose>
                                        </div><!-- /.input group -->
									
									<div class="form-group">
										<label>客户等级</label>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                          	<c:choose>
                                          		<c:when test="${obj.singerData.customerLevel==1 }">
                                               	大客户<input name="customerLevel" type="radio" value="1"  checked="checked">
                                               	</c:when>
                                           		<c:otherwise>
                                           		大客户<input name="customerLevel" type="radio" value="1" >
                                              	</c:otherwise>
                                             </c:choose> 
                                              &nbsp;&nbsp;&nbsp;
                                              <c:choose> 
                                               	<c:when test="${obj.singerData.customerLevel==2 }">
                                               	一般客户<input name="customerLevel" type="radio" value="2"  checked="checked">
                                                </c:when>
                                                <c:otherwise>
                                               	一般客户<input name="customerLevel" type="radio" value="2" >
                                                </c:otherwise>
                                              </c:choose> 
                                               &nbsp;&nbsp;&nbsp;
                                             <c:choose>
                                             	<c:when test="${obj.singerData.customerLevel==3}">
                                               	小客户<input name="customerLevel" type="radio" value="3" checked="checked">
                                            	</c:when>
                                            	<c:otherwise>
                                            	小客户<input name="customerLevel" type="radio" value="3">
                                            	</c:otherwise>
                                            </c:choose>
                                     </div>
                                      <div class="form-group">
                                        <label>客户编号</label>
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-tag"></i>
                                            </div>
                                            <input readonly="readonly" name="customerId" type="text" value="${obj.singerData.customerId }" class="form-control" data-mask/>
                                        </div><!-- /.input group -->
                                    </div><!-- /.form group --> 
                                    <div class="form-group">
                                        <label>客户公司名称</label>
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-tag"></i>
                                            </div>
                                            <input readonly="readonly" name="companyName" type="text" value="${obj.singerData.companyName }" class="form-control" data-mask/>
                                        </div><!-- /.input group -->
                                    </div><!-- /.form group -->

                                   
                                    <div class="form-group">
                                        <label>联系人编号</label>
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-user-md"></i>
                                            </div>
                                            <input name="linkmanId" type="text" disabled="disabled" value="${obj.singerData.linkmanId }" class="form-control" data-mask/>
                                        </div><!-- /.input group -->
                                    </div><!-- /.form group -->
									<div class="form-group">
                                        <label>客户公司地址</label>
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-home"></i>
                                            </div>
                                            <input name="customerAddress" value="${obj.singerData.customerAddress }" type="text" class="form-control" data-mask/>
                                        </div><!-- /.input group -->
                                    </div><!-- /.form group -->
									
									<div class="form-group">
                                        <label>传真</label>
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-print"></i>
                                            </div>
                                            <input name="customerFax" value="${obj.singerData.customerFax }" type="text" class="form-control" data-mask/>
                                        </div><!-- /.input group -->
                                    </div><!-- /.form group -->
									<div class="form-group">
                                        <label>电子邮件</label>
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-envelope"></i>
                                            </div>
                                            <input name="customerEmail" value="${obj.singerData.customerEmail }" type="text" class="form-control" data-mask/>
                                        </div><!-- /.input group -->
                                    </div><!-- /.form group -->
									<div class="form-group">
                                        <label>网址</label>
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-mail-forward"></i>
                                            </div>
                                            <input name="customerWebSite" value="${obj.singerData.customerWebSite }" type="text" class="form-control" data-mask/>
                                        	
                                        </div><!-- /.input group -->
                                    </div><!-- /.form group -->
									<div class="form-group">
                                        <label>开户银行</label>
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-credit-card"></i>
                                            </div>
                                        	<input name="customerBank" value="${obj.singerData.customerBank }" type="text" class="form-control" data-mask/>
                                            
                                        </div><!-- /.input group -->
                                    </div><!-- /.form group -->
									<div class="form-group">
                                        <label>银行账号</label>
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-credit-card"></i>
                                            </div>
                                            <input name="remark2" value="${obj.singerData.remark2 }" type="text" class="form-control" data-mask/>
                                        </div><!-- /.input group -->
                                    </div><!-- /.form group -->
                            
                             
                             <hidden name="hela" id="cccccccc" value="${obj.singerData.customerStatus }"></hidden>
									<div class="form-group">
                                        <label>满意度</label>
                                     	 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	                                             <i class="fa fa-smile-o"></i>&nbsp;
	                                          <c:choose>
	                                           	<c:when test="${obj.singerData.customerSatisfy==1}">
	                                             	满意<input name="customerSatisfy" type="radio" value="1" checked="checked">
                                             	</c:when>
                                             	<c:otherwise>
                                             		满意<input name="customerSatisfy" type="radio" value="1">
                                             	</c:otherwise>
                                             </c:choose>
                                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                             <i class="fa fa-meh-o"></i>&nbsp;
                                             <c:choose>
	                                           	<c:when test="${obj.singerData.customerSatisfy==2}">
                                             	一般<input name="customerSatisfy" type="radio" value="2" checked="checked">
                                             	</c:when>
                                             	<c:otherwise>
                                             	一般<input name="customerSatisfy" type="radio" value="2">
                                             	</c:otherwise>
                                             </c:choose>
                                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                             <i class="fa fa-frown-o"></i>&nbsp;
                                             <c:choose>
	                                           	<c:when test="${obj.singerData.customerSatisfy==3}">
                                             	不满意<input name="customerSatisfy" type="radio" value="3" checked="checked">
                                           		</c:when>
                                             	<c:otherwise>
                                             	不满意<input name="customerSatisfy" type="radio" value="3">
                                             	</c:otherwise>
                                             </c:choose>
                                      </div>
										<div class="form-group">
                                        <label>客户状态</label>
                                       
                                               	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                              <c:choose>
	                                           	<c:when test="${obj.singerData.customerStatus==1}">
                                               		交易完成 <input name="customerStatus" type="radio" value="1" checked="checked">
                                               	</c:when>
                                               	<c:otherwise>
                                               		交易完成 <input name="customerStatus" type="radio" value="1">
                                               	</c:otherwise>
                                              </c:choose> 		
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                              <c:choose>
	                                           	<c:when test="${obj.singerData.customerStatus==2}">  
                                                	交易中<input name="customerStatus" type="radio" value="2" checked="checked">
                                                </c:when>
                                                <c:otherwise>
                                                	交易中<input name="customerStatus" type="radio" value="2">
                                                </c:otherwise>
                                              </c:choose>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                               <c:choose>
	                                           	<c:when test="${obj.singerData.customerStatus==3}">  
                                               		 交易关闭<input name="customerStatus" type="radio" value="3" checked="checked">
                                               	 </c:when>
                                                <c:otherwise>
                                                	 交易关闭<input name="customerStatus" type="radio" value="3" >
                                               </c:otherwise>
                                              </c:choose> 	 
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											 <c:choose>
	                                           	<c:when test="${obj.singerData.customerStatus==4}">  
                                                	申请售后<input name="customerStatus" type="radio" value="4" checked="checked">
                                                </c:when>
                                               	<c:otherwise>
                                               		申请售后<input name="customerStatus" type="radio" value="4">
                                               	</c:otherwise>
                                              </c:choose>
                                            </div>	
                                        
										<div class="form-group">
	                                        <label>信用度</label>
	                                            	 &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	                                            	 <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
	                                            <c:choose>
	                                            	<c:when test="${obj.singerData.customerCredit==5 }">	 
	                                            		<input name="customerCredit" type="radio" value="5" checked="checked">
	                                            	</c:when>
	                                            	<c:otherwise>
	                                            		<input name="customerCredit" type="radio" value="5">
	                                            	</c:otherwise>
	                                            </c:choose>
	                                            	 &nbsp;
	                                            	 <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
	                                            <c:choose>
	                                            	<c:when test="${obj.singerData.customerCredit==4 }">
	                                            		<input name="customerCredit" type="radio" value="4" checked="checked">
	                                            	</c:when>
	                                            	<c:otherwise>
	                                            		<input name="customerCredit" type="radio" value="4">
	                                            	</c:otherwise>
	                                            </c:choose>
	                                            	 &nbsp;
	                                            	 <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
	                                            <c:choose>
	                                            	<c:when test="${obj.singerData.customerCredit==3 }">	 
	                                            		<input name="customerCredit" type="radio" value="3" checked="checked">                                                    
	                                        		</c:when>
	                                        		<c:otherwise>
	                                        			<input name="customerCredit" type="radio" value="3"> 
	                                        		</c:otherwise>
	                                        	</c:choose>	 
	                                        		 &nbsp;
	                                        		 <i class="fa fa-star"></i><i class="fa fa-star"></i>
	                                        	<c:choose>
	                                            	<c:when test="${obj.singerData.customerCredit==2 }">		 
	                                        			<input name="customerCredit" type="radio" value="2" checked="checked">
	                                        		</c:when>
	                                        		<c:otherwise>
	                                        			<input name="customerCredit" type="radio" value="2">
	                                        		</c:otherwise>
	                                        	</c:choose>
	                                        		 &nbsp;
	                                        		 <i class="fa fa-star"></i>
	                                        	<c:choose>
	                                            	<c:when test="${obj.singerData.customerCredit==1 }">	
	                                        			<input name="customerCredit" type="radio" value="1" checked="checked">
	                                        		</c:when>
	                                        		<c:otherwise>
	                                        			<input name="customerCredit" type="radio" value="1">
	                                        		</c:otherwise>
	                                        	</c:choose> 
	                                     </div><!-- /.input group -->
                                            
                                        </div><!-- /.input group -->
                                        <div align="center">
											<input class="btn btn-info btn-sm" type="submit" value="提交修改"></input>
											<input class="btn btn-info btn-sm" type="button" value="返回"  onclick="location.href='customers.jsp'"/>
										</div>
                                    </div><!-- /.form group -->
									</div><!-- /.input group -->
							
                                </div><!-- /.box-body -->
                
                            </div><!-- /.box -->
		
                </section><!-- /.content -->
               </form> 
            </aside><!-- /.right-side -->
        </div><!-- ./wrapper -->


        <!-- jQuery 2.0.2 -->
        <script src="../../js/jquery.min.js"></script>
        <!-- Bootstrap -->
        <script src="../../js/bootstrap.min.js" type="text/javascript"></script>
        <!-- InputMask -->
        <script src="../../js/plugins/input-mask/jquery.inputmask.js" type="text/javascript"></script>
        <script src="../../js/plugins/input-mask/jquery.inputmask.date.extensions.js" type="text/javascript"></script>
        <script src="../../js/plugins/input-mask/jquery.inputmask.extensions.js" type="text/javascript"></script>
        <!-- date-range-picker -->
        <script src="../../js/plugins/daterangepicker/daterangepicker.js" type="text/javascript"></script>
        <!-- bootstrap color picker -->
        <script src="../../js/plugins/colorpicker/bootstrap-colorpicker.min.js" type="text/javascript"></script>
        <!-- bootstrap time picker -->
        <script src="../../js/plugins/timepicker/bootstrap-timepicker.min.js" type="text/javascript"></script>
        <!-- AdminLTE App -->
        <script src="../../js/AdminLTE/app.js" type="text/javascript"></script>
		
        <!-- Page script -->
        <script type="text/javascript">
            $(function() {
                //Datemask dd/mm/yyyy
                $("#datemask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
                //Datemask2 mm/dd/yyyy
                $("#datemask2").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
                //Money Euro
                $("[data-mask]").inputmask();

                //Date range picker
                $('#reservation').daterangepicker();
                //Date range picker with time picker
                $('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A'});
                //Date range as a button
                $('#daterange-btn').daterangepicker(
                        {
                            ranges: {
                                'Today': [moment(), moment()],
                                'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                                'Last 7 Days': [moment().subtract('days', 6), moment()],
                                'Last 30 Days': [moment().subtract('days', 29), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                                'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                            },
                            startDate: moment().subtract('days', 29),
                            endDate: moment()
                        },
                function(start, end) {
                    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                }
                );

                //iCheck for checkbox and radio inputs
                $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
                    checkboxClass: 'icheckbox_minimal',
                    radioClass: 'iradio_minimal'
                });
                //Red color scheme for iCheck
                $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
                    checkboxClass: 'icheckbox_minimal-red',
                    radioClass: 'iradio_minimal-red'
                });
                //Flat red color scheme for iCheck
                $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
                    checkboxClass: 'icheckbox_flat-red',
                    radioClass: 'iradio_flat-red'
                });

                //Colorpicker
                $(".my-colorpicker1").colorpicker();
                //color picker with addon
                $(".my-colorpicker2").colorpicker();

                //Timepicker
                $(".timepicker").timepicker({
                    showInputs: false
                });
            });
        </script>

    </body>
</html>