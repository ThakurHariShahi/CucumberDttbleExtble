package com.qait.runner;
import org.junit.runner.RunWith;		
import cucumber.api.CucumberOptions;		
import cucumber.api.junit.Cucumber;		

@RunWith(Cucumber.class)				
@CucumberOptions(
		features="src/test/resources/Features/gmail.feature"
		,plugin = {"pretty"
				   ,"html:report/html"
				   ,"json:report/json/cucumber.json"
				   ,"junit:report/junit/cucumber.xml"
				  }
		,monochrome = true
		,glue={"com.qait.stepDef"}
		,tags= {"@Gmail"}//{"@Hris,@Gmail"}//{"@Hris"}//
		)						

public class Runner {

}
