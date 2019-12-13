package com.hz.ssm.utils;

import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


public class CustomFormAuthenticationFilter extends FormAuthenticationFilter {

	//原FormAuthenticationFilter的认证方法
	@Override
	protected boolean onAccessDenied(ServletRequest request,
			ServletResponse response) throws Exception {
		return super.onAccessDenied(request, response);
	}
	
	@Override 
	protected boolean isAccessAllowed(ServletRequest req, ServletResponse resp, Object mappedValue){ 
		if (isLoginRequest(req, resp) && isLoginSubmission(req, resp)) {
			return false;
		}
		return super.isAccessAllowed(req, resp, mappedValue); 
	} 
	
	

}
