package com.hz.ssm.controller;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hz.ssm.service.UserService;
import com.hz.ssm.utils.Encrypt;



@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	/**
	 * 登录验证
	 * @return
	 */
	@RequestMapping("/checkLoging")
	public String checkLoging(String userName,String userPassword){
		String md5 = Encrypt.md5(userPassword, userName);
		System.out.println("md5==="+md5);
		try {
			//把用户信息交给shiro令牌
			UsernamePasswordToken token = new UsernamePasswordToken(userName, md5);
			//如果使用shiro安全登录，先找到subject
			Subject subject = SecurityUtils.getSubject();
			
			subject.login(token);
			return "redirect:/index.jsp";
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return "redirect:/login.jsp";
		
	}
	/**
	 * 退出登录
	 * @return
	 */
	@RequestMapping("logOut")
	public String logOut(){
		//直接退出登录
		SecurityUtils.getSubject().logout();
		return "redirect:/login.jsp";
		
	}
}
