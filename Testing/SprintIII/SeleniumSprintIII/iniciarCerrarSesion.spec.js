// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('iniciarCerrarSesion', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('iniciarCerrarSesion', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1936, height: 1056 })
    await driver.findElement(By.css(".sc-bczRLJ")).click()
    await driver.findElement(By.css("a:nth-child(1) > .sc-dkzDqf")).click()
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("mca_cuaco@hotmail.com")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("123456")
    await driver.findElement(By.css(".sc-cCsOjp")).click()
    await driver.findElement(By.css(".sc-bczRLJ")).click()
    await driver.findElement(By.css(".sc-dkzDqf")).click()
  })
})