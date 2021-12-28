$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homePage.feature");
formatter.feature({
  "line": 2,
  "name": "Search on Amazon HomePage",
  "description": "As user I want to submit search on amazon home page",
  "id": "search-on-amazon-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14379981800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should search and add Mobile Phones to cart successfully",
  "description": "",
  "id": "search-on-amazon-homepage;user-should-search-and-add-mobile-phones-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sanity"
    },
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter \"Mobile Phone\" in search box and click search",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I look for \"Samsung Galaxy A12 (A127F) 128GB Dual SIM, GSM Unlocked, (CDMA Verizon/Sprint Not Supported) Smartphone International Version (Fast Car Charger Bundle) No Warranty (Blue)\" product",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select quantity \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify word \"Added to Cart\" on page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 372955600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Phone",
      "offset": 9
    }
  ],
  "location": "HomePageTest.iEnterInSearchBoxAndClickSearch(String)"
});
formatter.result({
  "duration": 6569625300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy A12 (A127F) 128GB Dual SIM, GSM Unlocked, (CDMA Verizon/Sprint Not Supported) Smartphone International Version (Fast Car Charger Bundle) No Warranty (Blue)",
      "offset": 12
    }
  ],
  "location": "HomePageTest.iLookForLaptop(String)"
});
