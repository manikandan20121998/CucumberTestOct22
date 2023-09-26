$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/facebook.feature");
formatter.feature({
  "name": "To validate the login functionality of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@E2E"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Invalid login-To validate the login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "name": "The user has enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user has to click the \"login\" button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should be in invalid login page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "mani",
        "maddy"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid login-To validate the login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "name": "The user has enter the \"mani\" and \"maddy\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.the_user_has_enter_the_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdefinition.LoginSteps.the_user_has_enter_the_and(LoginSteps.java:25)\r\n\tat ✽.The user has enter the \"mani\" and \"maddy\"(file:src/test/resources/Features/facebook.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user has to click the \"login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.the_user_has_to_click_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should be in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_invalid_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "valid login-To validate the login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@tc2"
    }
  ]
});
formatter.step({
  "name": "The user has enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user has to click the \"login\" button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should be in invalid login page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "kumar",
        "8900898"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "valid login-To validate the login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@tc2"
    }
  ]
});
formatter.step({
  "name": "The user has enter the \"kumar\" and \"8900898\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.the_user_has_enter_the_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdefinition.LoginSteps.the_user_has_enter_the_and(LoginSteps.java:25)\r\n\tat ✽.The user has enter the \"kumar\" and \"8900898\"(file:src/test/resources/Features/facebook.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user has to click the \"login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.the_user_has_to_click_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should be in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_invalid_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/register.feature");
formatter.feature({
  "name": "To validate the regiter functionality of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@E2E"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid register-To validate the registration functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@tc3"
    }
  ]
});
formatter.step({
  "name": "The user has to click the create new account link",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.the_user_has_to_click_the_create_new_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to fill the firstname , lastname and other datails",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.the_user_has_to_fill_the_firstname_lastname_and_other_datails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the \"signup\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.the_user_has_to_click_the_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user get message \"successfully registered\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.the_user_get_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "valid register-To validate the registration functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@retest"
    },
    {
      "name": "@tc4"
    }
  ]
});
formatter.step({
  "name": "The user has to click the create new account link",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.the_user_has_to_click_the_create_new_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to fill the firstname , lastname and other datails",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.the_user_has_to_fill_the_firstname_lastname_and_other_datails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the \"signup\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.the_user_has_to_click_the_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user get message \"successfully registered\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.the_user_get_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});