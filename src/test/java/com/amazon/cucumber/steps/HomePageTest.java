package com.amazon.cucumber.steps;

import com.amazon.pages.HomePage;
import com.amazon.pages.SearchResultPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class HomePageTest {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
        System.out.println("I am on HomePage");
    }

    @When("^I enter \"([^\"]*)\" in search box and click search$")
    public void iEnterInSearchBoxAndClickSearch(String text)  {
        new HomePage().sendTextToSearch(text);
    }

    @And("^I look for \"([^\"]*)\" laptop$")
    public void iLookForLaptop(String text) throws InterruptedException {
        new SearchResultPage().searchItemFromList(text);
    }
}
