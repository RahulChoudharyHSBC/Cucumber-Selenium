$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("functionalTest/End2End_Test.feature");
formatter.feature({
  "line": 1,
  "name": "End to End Functional Test",
  "description": "Product search and purchase from amazon.com\nUser wants to search for Product and purchase from amazon.com\nValidation criteria : User should be logged in to check out the product",
  "id": "end-to-end-functional-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Product Search and add to shopping cart",
  "description": "",
  "id": "end-to-end-functional-test;product-search-and-add-to-shopping-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@TestCase"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "he search for \"\u003cproduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "choose to buy the first item",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Add product to shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Cliks on proceed to check out",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should be asked to login before checkout",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "end-to-end-functional-test;product-search-and-add-to-shopping-cart;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 16,
      "id": "end-to-end-functional-test;product-search-and-add-to-shopping-cart;;1"
    },
    {
      "cells": [
        "Head first java"
      ],
      "line": 17,
      "id": "end-to-end-functional-test;product-search-and-add-to-shopping-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Product Search and add to shopping cart",
  "description": "",
  "id": "end-to-end-functional-test;product-search-and-add-to-shopping-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@TestCase"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "he search for \"Head first java\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "choose to buy the first item",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Add product to shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Cliks on proceed to check out",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should be asked to login before checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.userIsOnHomePage()"
});
formatter.result({
  "duration": 7568000900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Head first java",
      "offset": 15
    }
  ],
  "location": "Steps.heSearchFor(String)"
});
formatter.result({
  "duration": 3653430700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.chooseToBuyTheFirstItem()"
});
formatter.result({
  "duration": 10079648500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[@data-attribute\u003d\u0027Head First Java, 2nd Edition\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027XIPL0601\u0027, ip: \u0027172.30.24.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\RCHOUD~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61034}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2cd162ba0de73993973cac7d14c42800\n*** Element info: {Using\u003dxpath, value\u003d//h2[@data-attribute\u003d\u0027Head First Java, 2nd Edition\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat pageobjects.ProductsPage.clickOnHeadFirstJava(ProductsPage.java:28)\r\n\tat stepdefinition.Steps.chooseToBuyTheFirstItem(Steps.java:48)\r\n\tat ✽.And choose to buy the first item(functionalTest/End2End_Test.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.addsProductToShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.userClicksOnShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.userClicksOnProceedCheckOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.enterPersonalDetailsOnLoginPage()"
});
formatter.result({
  "status": "skipped"
});
});