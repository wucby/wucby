<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 导入shiro标签库 -->
<%@ taglib uri="http://shiro.apache.org/tags" prefix="shiro" %>

<!-- Left side column. contains the logo and sidebar -->
<aside class="left-side sidebar-offcanvas">
	<!-- sidebar: style can be found in sidebar.less -->
	<section class="sidebar">
		<!-- Sidebar user panel -->
		<div class="user-panel">
			<div class="pull-left image">
				<img src="img/avatar3.png" class="img-circle" alt="User Image" />
			</div>
			<div class="pull-left info">
				<p>${users.username }</p>
 
				<a href="#"><i class="fa fa-circle text-success"></i> Online</a>
			</div>
		</div>
		<!-- search form -->
		<form action="#" method="get" class="sidebar-form">
		
			<div class="input-group">
				<input type="text" name="q" class="form-control"
					placeholder="Search..." /> <span class="input-group-btn">
					<button type='submit' name='seach' id='search-btn'
						class="btn btn-flat">
						<i class="fa fa-search"></i>
					</button>
				</span>
			</div>
		</form>
		<!-- /.search form -->
		<!-- sidebar menu: : style can be found in sidebar.less -->
		<ul class="sidebar-menu">
				<shiro:hasRole name="采购管理员">
				<li class="treeview"><a href="#"> <i class="fa fa-laptop"></i>
						<span>采购管理</span> <i class="fa fa-angle-left pull-right"></i>
				</a>
					<ul class="treeview-menu">
						<li><a href="http://127.0.0.1:8080/maven_web/pages/purchasing/DemandStuff.jsp"><i
								class="fa fa-angle-double-right"></i> 采购员需求管理</a></li>
						<li><a href="http://127.0.0.1:8080/maven_web/pages/purchasing/Purchase_Demand_Order.jsp"><i
								class="fa fa-angle-double-right"></i> 采购管理员需求管理</a></li>
						
						<li><a href="http://127.0.0.1:8080/maven_web/pages/purchasing/Purchase_Plan_Order.jsp"><i
								class="fa fa-angle-double-right"></i> 采购员计划管理</a></li>
						<li><a href="http://127.0.0.1:8080/maven_web/pages/purchasing/Purchase_Plan_Stuff.jsp"><i
								class="fa fa-angle-double-right"></i> 采购管理员计划管理</a></li>
						
						<li><a href="http://127.0.0.1:8080/maven_web/pages/purchasing/Purchase_Stuff.jsp"><i
								class="fa fa-angle-double-right"></i> 采购员订单管理</a></li>
						<li><a href="http://127.0.0.1:8080/maven_web/pages/purchasing/Purchase_Order.jsp"><i
								class="fa fa-angle-double-right"></i> 采购管理员订单管理</a></li>
						<li><a href="http://127.0.0.1:8080/maven_web/pages/purchasing/purchase_return_order.jsp"><i
								class="fa fa-angle-double-right"></i>采购退货单 </a></li>
						
					</ul></li>
			</shiro:hasRole>
			
			 <shiro:hasRole name="仓库管理员">
			<li class="treeview"><a href="#"> <i class="fa fa-laptop"></i>
					<span>仓库管理</span> <i class="fa fa-angle-left pull-right"></i>
			</a>
				<ul class="treeview-menu">
					<li><a href="http://127.0.0.1:8080/maven_web/pages/store/queryWarehouse.do"><i
							class="fa fa-angle-double-right"></i>仓库信息</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/store/WarehouseNumber.do"><i
							class="fa fa-angle-double-right"></i>库存管理</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/store/Warehouse_Check.jsp"><i
							class="fa fa-angle-double-right"></i> 盘存记录管理</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/store/Warehouse_In_And_Out.jsp"><i
							class="fa fa-angle-double-right"></i>出入库记录管理</a></li>
					 
					<li><a href="http://127.0.0.1:8080/maven_web/pages/store/Product_BurdenToStorein.jsp"><i
							class="fa fa-angle-double-right"></i> 物料入库库管理</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/store/Sell_ProductToStorein.jsp"><i
							class="fa fa-angle-double-right"></i> 产品入库库管理</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/store/Product_BurdenToStore.jsp"><i
							class="fa fa-angle-double-right"></i> 物料出库库管理</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/store/Sell_ProductToStore.jsp"><i
							class="fa fa-angle-double-right"></i>产品出库管理</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/store/queryWarehouseNumberList.do"><i
							class="fa fa-angle-double-right"></i>采购需求单</a></li>
				</ul></li>
			</shiro:hasRole>
			<shiro:hasRole name="销售管理员">
			<li class="treeview"><a href="#"> <i class="fa fa-laptop"></i>
					<span>销售管理</span> <i class="fa fa-angle-left pull-right"></i>
			</a>
				<ul class="treeview-menu">
					<li><a href="http://127.0.0.1:8080/maven_web/pages/sales/customers.jsp"><i
							class="fa fa-angle-double-right"></i>客户表 </a></li>			
					<li><a href="http://127.0.0.1:8080/maven_web/pages/sales/quotedprice.jsp"><i
							class="fa fa-angle-double-right"></i> 报价单</a></li>
					
					<li><a href="http://127.0.0.1:8080/maven_web/pages/sales/salesorder.jsp"><i
							class="fa fa-angle-double-right"></i> 销售订单</a></li>
					
					<!-- <li><a href="http://127.0.0.1:8080/maven_web/pages/sales/returns.jsp"><i
							class="fa fa-angle-double-right"></i> 销售退货单</a></li> -->
							
							
					<li><a href="http://127.0.0.1:8080/maven_web/pages/sales/records.jsp"><i
							class="fa fa-angle-double-right"></i> 客户服务记录</a></li>
				</ul></li>
				</shiro:hasRole>
				<shiro:hasRole name="生产管理员">
			<li class="treeview"><a href="#"> <i class="fa fa-laptop"></i>
					<span>生产管理</span> <i class="fa fa-angle-left pull-right"></i>
			</a>
				<ul class="treeview-menu">
					<li><a href="http://127.0.0.1:8080/maven_web/pages/produce/Production_Demand.jsp"><i
							class="fa fa-angle-double-right"></i> 生产需求</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/produce/Production_Plan.jsp"><i
							class="fa fa-angle-double-right"></i> 生产计划</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/produce/Product_Standard.jsp"><i
							class="fa fa-angle-double-right"></i>标准 </a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/produce/quality_failed.jsp"><i
							class="fa fa-angle-double-right"></i> 不合格率</a></li>
				
				</ul></li>
				</shiro:hasRole>
				
				<shiro:hasAnyRoles name="财务管理员,出纳">
			<li class="treeview"><a href="#"> <i class="fa fa-laptop"></i>
					<span>财物管理</span> <i class="fa fa-angle-left pull-right"></i>
			</a>
				<ul class="treeview-menu">
					<li><a href="http://127.0.0.1:8080/maven_web/pages/Finance/Account_Out_To_Doc.jsp"><i
							class="fa fa-angle-double-right"></i>会计出账客户凭证</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/Finance/Account_Out_ToEmployee_Doc.jsp"><i
							class="fa fa-angle-double-right"></i>会计出账员工凭证 </a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/Finance/Finance_Out_ToEmployee.jsp"><i
							class="fa fa-angle-double-right"></i>员工财务付款明细</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/Finance/Finance_Out_ToCustomer.jsp"><i
							class="fa fa-angle-double-right"></i>客户财务付款明细</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/Finance/Doc_Receipt_order.jsp"><i
							class="fa fa-angle-double-right"></i>应收款管理</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/Finance/Doc_pay_order.jsp"><i
							class="fa fa-angle-double-right"></i>应付款管理</a></li>	
					<li><a href="http://127.0.0.1:8080/maven_web/pages/Finance/sell.jsp"><i
							class="fa fa-angle-double-right"></i>收款凭证</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/Finance/fsell.jsp"><i
							class="fa fa-angle-double-right"></i>收款明细</a></li>
					
				</ul></li>
				</shiro:hasAnyRoles>
				<shiro:hasRole name="人事管理员">
			<li class="treeview"><a href="#"> <i class="fa fa-laptop"></i>
					<span>人事管理</span> <i class="fa fa-angle-left pull-right"></i>
			</a>
				<ul class="treeview-menu">
					<li><a href="http://127.0.0.1:8080/maven_web/pages/personal/employee.jsp"><i
							class="fa fa-angle-double-right"></i> 员工信息管理</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/personal/changeJob.jsp"><i
							class="fa fa-angle-double-right"></i> 职位调动</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/personal/evection.jsp"><i
							class="fa fa-angle-double-right"></i> 差旅培训</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/personal/interviewee.jsp"><i
							class="fa fa-angle-double-right"></i> 招聘</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/personal/interviewRecord.jsp"><i
							class="fa fa-angle-double-right"></i> 招聘记录</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/personal/contract.jsp"><i
							class="fa fa-angle-double-right"></i>员工合同</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/personal/position.jsp"><i
							class="fa fa-angle-double-right"></i> 职位信息</a></li>
					<li><a href="http://127.0.0.1:8080/maven_web/pages/personal/department.jsp"><i
							class="fa fa-angle-double-right"></i> 部门信息</a></li>
				</ul></li>
				</shiro:hasRole>
				<shiro:hasRole name="系统管理员">
				
				<li class="treeview"><a href="#"> <i class="fa fa-laptop"></i>
						<span>系统管理</span> <i class="fa fa-angle-left pull-right"></i>
				</a>
					<ul class="treeview-menu">		
						<li><a href="http://127.0.0.1:8080/maven_web/pages/system/User.jsp"><i
								class="fa fa-angle-double-right"></i> 用户管理</a></li>
						<li><a href="http://127.0.0.1:8080/maven_web/pages/system/Role.jsp"><i
								class="fa fa-angle-double-right"></i> 角色管理</a></li>
						<li><a href="http://127.0.0.1:8080/maven_web/pages/system/rights.jsp"><i
								class="fa fa-angle-double-right"></i> 权限管理</a></li>
						<li><a href="http://127.0.0.1:8080/maven_web/pages/system/Role_rights_1.jsp"><i
								class="fa fa-angle-double-right"></i> 角色权限管理</a></li>
					</ul></li>
				
</shiro:hasRole>
		</ul>
	</section>
	<!-- /.sidebar -->
</aside>