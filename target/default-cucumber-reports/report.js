$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/gmibank.feature");
formatter.feature({
  "name": "Go to home page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@gmibankhomepage"
    }
  ]
});
formatter.scenario({
  "name": "User go to GmiBank home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmibankhomepage"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user go to \"http://www.gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinitions.user_go_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinitions.user_enter_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinitions.user_enter_password()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027team21 User\u0027)]\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WINDOWSPC\u0027, ip: \u0027192.168.178.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 81bdaa588b5ed318151c12e6f707b6cb\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027team21 User\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.getText(Unknown Source)\r\n\tat gmibank.stepdefinitions.GmiBankStepDefinitions.user_enter_password(GmiBankStepDefinitions.java:28)\r\n\tat ✽.User enter password(file:///C:/Users/Administrator/IdeaProjects/MyGmiBankFramework1/src/test/resources/features/gmibank.feature:6)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshots");
formatter.after({
  "status": "passed"
});
});