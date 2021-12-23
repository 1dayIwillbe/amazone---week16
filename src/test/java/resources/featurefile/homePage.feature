
Feature: Search on Amazon HomePage
  As user I want to submit search on amazon home page

  Scenario: User should navigate to login page successfully
   Given I am on home page
    When I enter "Laptop" in search box and click search
   And I look for "HP 15-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (15-dy2024nr, Natural silver)" laptop
  #  Then I select quantity "3"
  #  And I click on Add to cart
  #  Then I verify word "Added to Cart"