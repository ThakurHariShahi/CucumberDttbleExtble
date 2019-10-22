package com.qait.utils;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.esotericsoftware.yamlbeans.YamlException;
import com.esotericsoftware.yamlbeans.YamlReader;

public class Getter {

	static Object reader(String key, String filePath) throws FileNotFoundException, YamlException 
	{
		YamlReader yr = new YamlReader(new FileReader(filePath));
		Object ob = yr.read();
		Map<String, Object> mp = (Map<String, Object>) ob;
		return mp.get(key);
	}

	public static WebElement getLocator(WebDriver d, String locator, String filePath)throws FileNotFoundException, YamlException 
	{
		String data = (String) reader(locator, filePath);
		String locatorType = data.split(":-")[0];
		String locatorValue = data.split(":-")[1];
		
		if (locatorType.equals("cssSelector")) 
		{
			return d.findElement(By.cssSelector(locatorValue));
		} 
		else 
			if (locatorType.equals("xpath")) 
			{
				return d.findElement(By.xpath(locatorValue));
			} 
			else 
				if (locatorType.equals("id")) 
				{
					return d.findElement(By.id(locatorValue));
				} 
				else 
				{
					return d.findElement(By.className(locatorValue));
				}
	}

	public static String getUrls(String url, String filePath) throws FileNotFoundException, YamlException 
	{
		String data = (String) reader(url, filePath);
		return data;
	}

	public static String getConfig(String browser, String filePath) throws FileNotFoundException, YamlException 
	{
		Map mp = (Map) reader(browser, filePath);
		System.out.println("\nConfig HashMap :::::---" + mp);
		String data = (String) mp.get("webDriver");
		System.out.println("WebDriver ::::---" + data);
		data = data.concat(":");
		data = data.concat((String) mp.get("webDriverPath"));

		return data;
	}

}
