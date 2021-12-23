package com.amazon.pages;

import com.amazon.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
import java.util.Objects;

public class SearchResultPage extends Utility {

    private static final Logger log = LogManager.getLogger(SearchResultPage.class.getName());


    public SearchResultPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//span[@class='a-size-medium a-color-base a-text-normal']")
    List<WebElement> result;


    @FindBy(xpath = "//a[normalize-space()='Next']")
    WebElement nextPage;
    @CacheLookup
    @FindBy(xpath = "(//span[normalize-space()='2021 Newest Lenovo Flex 5 14.0' FHD Touchscreen Laptop, AMD Ryzen 3 5300U(up to 3.80 GHz), 4GB RAM 512GB NVMe SSD, Webcam, HDMI, Win 10 S")
    WebElement searchItem;


    public void searchItemFromList(String text) throws InterruptedException {
        boolean hasNextPage =true;
        do{
               if(nextPage.isEnabled()){
                for (WebElement menu : result) {
                if (Objects.equals(menu.getText(), text)) {
                    menu.click();
                     hasNextPage = false;
                                    break;

                }}}
                else nextPage.click();
                    hasNextPage=true;
                    break;
              } while (true);

        }
}





/**for (WebElement svp : searchPageResult) {
 String txt = svp.getText();
 if (txt.equalsIgnoreCase(text)) {
 System.out.println(svp);
 svp.click();
 break;
 _____________
 for (WebElement menu : result) {
 String link = getTextFromElement(menu);
 if (Objects.equals(link, text)) {
 menu.click();
 break;
 }}

 __________
 for (WebElement menu : result) {
 String link = getTextFromElement(menu);
 if (Objects.equals(link, text)) {
 menu.click();
 System.out.println("click on item");
 break;
 } else nextPage.click();
 System.out.println("Click on next page");
 */