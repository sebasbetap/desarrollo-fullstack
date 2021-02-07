package com.qualitystream.tutorial;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class WrapperCoinTest {
	
	private WebDriver driver;
	By inputALocator = By.id("numA");
	By totalBLocator = By.id("totB");
	By buttonLocator = By.id("exchangeB");
	
	@Before
	public void setUp() throws Exception {
		
		System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://localhost:4200/home/13716.101");
	}
	
	@Test
	public void testPage() throws InterruptedException {
		
		WebElement numberbox = driver.findElement(inputALocator);
		
		numberbox.clear();
		
		numberbox.sendKeys("13716.101");
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		WebElement totalbox = driver.findElement(totalBLocator);
		
		Thread.sleep(2000);
		
		assertEquals("1", totalbox.getText());
		
		WebElement exchangeButton = driver.findElement(buttonLocator);
		
		exchangeButton.click();
		
		Thread.sleep(2000);
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		totalbox = driver.findElement(totalBLocator);
		
		assertEquals("13197", totalbox.getText());
		
	}
	
	@After
	public void tearDown() throws Exception {
		Thread.sleep(2000);
		driver.quit();
	}

}
