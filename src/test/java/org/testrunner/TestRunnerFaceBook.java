package org.testrunner;

import org.base.JVMReports;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources",glue="org.stepdefinition",dryRun=false,monochrome=true,
//tags= "@E2E",
plugin= {"pretty","html:src\\test\\resources\\Reports\\HtmlReport",
		                                      "json:src\\test\\resources\\Reports\\JsonReport\\jsonreport.json",
		                                      "junit:src\\test\\resources\\Reports\\junitReport\\report.xml",
                                               "rerun:src\\test\\resources\\FailedScenarios\\failedscenario.txt"}




)

public class TestRunnerFaceBook {  

	@AfterClass
	public static void report() {
		
		JVMReports.generateJVMReport("src\\test\\resources\\Reports\\JsonReport\\jsonreport.json");
	System.out.println(".........report generated..........");
	
	}
	
	
	
	
	
	
	
	
	
	
	
}
