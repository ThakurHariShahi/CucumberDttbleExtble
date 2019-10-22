$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/gmail.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying the functionality of the web sites",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verifying the Gmail",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Gmail"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I launch the gmail",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Given I launch the \"gmail\""
    },
    {
      "line": 10,
      "value": "#When I  enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    }
  ],
  "line": 11,
  "name": "I  enter the username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12
    },
    {
      "cells": [
        "\u003cusername\u003e",
        "\u003cpassword\u003e"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I validate gmail inbox page for \u003cusername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I check the number of mail in the inbox",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on the first mail",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20,
      "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail;;1"
    },
    {
      "cells": [
        "testuser275275",
        "TESTuser275275"
      ],
      "line": 21,
      "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail;;2"
    },
    {
      "cells": [
        "275275testuser",
        "TESTuser275275"
      ],
      "line": 22,
      "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Setting up the driver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I set up the driver and open chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.i_set_up_the_driver_and_open_chrome()"
});
formatter.result({
  "duration": 4948427204,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verifying the Gmail",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Gmail"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I launch the gmail",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Given I launch the \"gmail\""
    },
    {
      "line": 10,
      "value": "#When I  enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    }
  ],
  "line": 11,
  "name": "I  enter the username and password",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12
    },
    {
      "cells": [
        "testuser275275",
        "TESTuser275275"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I validate gmail inbox page for testuser275275",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I check the number of mail in the inbox",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on the first mail",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.i_launch_the_gmail()"
});
formatter.result({
  "duration": 2322070818,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_enter_the_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1454291155,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 131848790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser275275",
      "offset": 32
    }
  ],
  "location": "StepDef.i_validate_gmail_inbox_page_for(String)"
});
formatter.result({
  "duration": 5015189118,
  "error_message": "java.lang.AssertionError: My error Msg :- I am not in Gmail Inbox expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\r\n\tat org.testng.Assert.assertEquals(Assert.java:125)\r\n\tat org.testng.Assert.assertEquals(Assert.java:288)\r\n\tat com.qait.stepDef.StepDef.i_validate_gmail_inbox_page_for(StepDef.java:119)\r\n\tat ✽.Then I validate gmail inbox page for testuser275275(src/test/resources/Features/gmail.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDef.i_check_the_number_of_mail_in_the_inbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_click_on_the_first_mail()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Setting up the driver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I set up the driver and open chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.i_set_up_the_driver_and_open_chrome()"
});
formatter.result({
  "duration": 2862000022,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verifying the Gmail",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Gmail"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I launch the gmail",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Given I launch the \"gmail\""
    },
    {
      "line": 10,
      "value": "#When I  enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    }
  ],
  "line": 11,
  "name": "I  enter the username and password",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12
    },
    {
      "cells": [
        "275275testuser",
        "TESTuser275275"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I validate gmail inbox page for 275275testuser",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I check the number of mail in the inbox",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on the first mail",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.i_launch_the_gmail()"
});
formatter.result({
  "duration": 3199402770,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_enter_the_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1741117272,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 187063151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "275275testuser",
      "offset": 32
    }
  ],
  "location": "StepDef.i_validate_gmail_inbox_page_for(String)"
});
formatter.result({
  "duration": 5016329562,
  "error_message": "java.lang.AssertionError: My error Msg :- I am not in Gmail Inbox expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\r\n\tat org.testng.Assert.assertEquals(Assert.java:125)\r\n\tat org.testng.Assert.assertEquals(Assert.java:288)\r\n\tat com.qait.stepDef.StepDef.i_validate_gmail_inbox_page_for(StepDef.java:119)\r\n\tat ✽.Then I validate gmail inbox page for 275275testuser(src/test/resources/Features/gmail.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDef.i_check_the_number_of_mail_in_the_inbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_click_on_the_first_mail()"
});
formatter.result({
  "status": "skipped"
});
});