// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('FormularioReserva', function() {
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
  it('FormularioReserva', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1936, height: 1056 })
    await driver.findElement(By.css("a:nth-child(1) > .sc-dkzDqf")).click()
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("mca_cuaco@hotmail.com")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("123456")
    await driver.findElement(By.css(".sc-cCsOjp")).click()
    await driver.findElement(By.css("div:nth-child(3) > .sc-gicCDI > .sc-ezWOiH")).click()
    await driver.findElement(By.css(".sc-dmRaPn:nth-child(1) .sc-cxabCf")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.css("a > button")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.name("name")).sendKeys("Cecilia")
    await driver.findElement(By.name("lastname")).sendKeys("Abate")
    await driver.findElement(By.name("email")).sendKeys("m.cecilia.abate@gmail.com")
    await driver.findElement(By.name("ciudad")).sendKeys("Olavarría")
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.css("form:nth-child(2)")).click()
    {
      const element = await driver.findElement(By.css("form:nth-child(2)"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.name("email")).sendKeys("mca_cuaco@ail.com")
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("mca_cuaco@hotail.com")
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("mca_cuaco@hotmail.com")
    await driver.findElement(By.css(".react-calendar__month-view:nth-child(1) .react-calendar__tile:nth-child(13)")).click()
    await driver.findElement(By.css(".react-calendar__month-view:nth-child(2) .react-calendar__tile:nth-child(20) > abbr")).click()
    await driver.findElement(By.css("label:nth-child(4) > select")).click()
    {
      const dropdown = await driver.findElement(By.css("label:nth-child(4) > select"))
      await dropdown.findElement(By.xpath("//option[. = 'Córdoba , Córdoba']")).click()
    }
    await driver.findElement(By.css("label:nth-child(6) > select")).click()
    {
      const dropdown = await driver.findElement(By.css("label:nth-child(6) > select"))
      await dropdown.findElement(By.xpath("//option[. = 'Guaymallén , Mendoza']")).click()
    }
    await driver.findElement(By.css(".sc-hlnMnd")).click()
  })
})