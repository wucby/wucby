package com.hz.ssm.realm;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import com.hz.ssm.pojo.Rights;
import com.hz.ssm.pojo.Role;
import com.hz.ssm.pojo.Users;
import com.hz.ssm.service.UserService;
/**
 * 自定义realm域，在此类中对应的用户角色以及权限信息
 * 认证和授权都在此类中操作
 * @author Administrator
 *
 */
public class AuthRealm extends AuthorizingRealm{
	@Autowired
	private UserService userService;
	/**
	 * 授权的方法
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(
			PrincipalCollection principals) {
		//获取第一个元素
				Users user = (Users) principals.iterator().next();
				
				String userid = user.getUserid();
				//角色信息的Set集合
				Set<String>  roleSet = new HashSet<String>();
				
				//权限信息的Set集合
				Set<String>  rightsSet = new HashSet<String>();
				
				//调用Service获取该用户对应的角色信息
				List<Role> roleList = userService.findRoleInfoByUserId(userid);
				 //循环把角色名称保存到Set集合中
				for (Role role : roleList) {
					roleSet.add(role.getRname());
				}
				
				//调用Service获取该用户对应的权限信息
				List<Rights> rightsList  = userService.findRightsInfoByUserId(userid);
		        //循环把权限名称保存到Set集合中
		       for (Rights rights : rightsList) {
					rightsSet.add(rights.getRightsname());
				}
				//需要返回授权信息对象
				SimpleAuthorizationInfo  simpleAuthorizationInfo = new SimpleAuthorizationInfo();
				
				//封装Set集合角色信息
				simpleAuthorizationInfo.setRoles(roleSet);
				//封装Set集合权限信息
				simpleAuthorizationInfo.setStringPermissions(rightsSet);
				
				return simpleAuthorizationInfo;
	}
	/**
	 * 认证的方法
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(
			AuthenticationToken token) throws AuthenticationException {
		 	//强转成子类的令牌
			UsernamePasswordToken token2 = (UsernamePasswordToken) token;
			//从shiro的令牌中获取用户名
			String username = token2.getUsername();
			String userPwd = new String(token2.getPassword());
			//调用service去数据库进行匹配认证该用户的身份
			Users users = userService.checkLoging(username,userPwd);
		
		if(users !=null){
			//获取shiro的session
			Session session = SecurityUtils.getSubject().getSession();
			session.setAttribute("users", users);
			//这是经过数据查询用户合法之后需要返回的认证信息
			//这个认证信息对象需要通过构造方法注入一些必要的信息
			//principal Object user
			//credentials String 密码
			//realmName String 父类的名称
			SimpleAuthenticationInfo authInfo = new SimpleAuthenticationInfo(users, userPwd, this.getName());
			return authInfo;
		}
		return null;
	}

}
