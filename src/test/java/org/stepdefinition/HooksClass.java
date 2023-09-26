package org.stepdefinition;

import java.io.IOException;
import java.util.Date;

import org.base.BaseClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.core.api.*;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends BaseClass {
	@Before()
	public void beforescenario1() throws InterruptedException {
		System.out.println("....before scenario......1..");
		  chromebrowser();
		  urllaunch("https://www.facebook.com/");
		  maximize();
		  implicitywait(10);
		Thread.sleep(3000);
		System.out.println(new Date());
	}
	
	@After(order=1)
	public void afterscenario1(Scenario sc) throws IOException {
		System.out.println(".........after scenario...1..");
		System.out.println(new Date());
		if(sc.isFailed()) {
			screenshotwithbyte(sc);
		}
		quit();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
