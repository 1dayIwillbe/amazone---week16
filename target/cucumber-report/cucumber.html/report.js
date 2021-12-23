$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homePage.feature");
formatter.feature({
  "line": 2,
  "name": "Search on Amazon HomePage",
  "description": "As user I want to submit search on amazon home page",
  "id": "search-on-amazon-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13477955900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "search-on-amazon-homepage;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Laptop\" in search box and click search",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I look for \"HP 15-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (15-dy2024nr, Natural silver)\" laptop",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 412439300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop",
      "offset": 9
    }
  ],
  "location": "HomePageTest.iEnterInSearchBoxAndClickSearch(String)"
});
formatter.result({
  "duration": 5240787700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP 15-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (15-dy2024nr, Natural silver)",
      "offset": 12
    }
  ],
  "location": "HomePageTest.iLookForLaptop(String)"
});
formatter.result({
  "duration": 1135646500,
  "status": "passed"
});
formatter.after({
  "duration": 102900,
  "status": "passed"
});
});