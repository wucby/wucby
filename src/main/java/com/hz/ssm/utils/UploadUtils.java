package com.hz.ssm.utils;

import java.util.UUID;

/**
 * �ļ��ϴ��Ĺ�����
 * @author Administrator
 */
public class UploadUtils {
	
	/**
	 * �����ļ������ƣ����ص�Ψһ������
	 * ���磺gril.jpg	����sdjsljfsjdl.jpg
	 * @param filename
	 * @return
	 */
	public static String getUUIDName(String filename){
		// �Ȳ���
		int index = filename.lastIndexOf(".");
		// ��ȡ
		String lastname = filename.substring(index, filename.length());
		// Ψһ �ַ���  fsd-sfsdf-sfsd-sdfsd
		String uuid = UUID.randomUUID().toString().replace("-", "");
		return uuid+lastname;
	}
	
	public static void main(String[] args) {
		String filename = "girl.jpg";
		String uuid = getUUIDName(filename);
		System.out.println(uuid);
	}
}
