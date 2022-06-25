import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
import { Driver } from 'selenium-webdriver/chrome';
const chromedriver = require('chromedriver')

interface Options {
    driver?: WebDriver;
    /* if no driver is supplied, we make one or use the constructor to make one*/
    url?: string;
    /* if no url is supplied we will provide one or use the one given here*/
}

export class poleStar {
    

    // shared locators - used across multiple tests 
    cookies: By = By.xpath('//button[@id="onetrust-accept-btn-handler"]')
    menu: By = By.xpath('//button[@title="Menu"]') 
    ps2: By = By.xpath('//span[text()="Polestar 2"]') 
    configure: By = By.xpath('//a[@id="25274763"]') 
    // locator for the Add pop-up 
    add: By = By.xpath('//span[text()="Add"]')
    // locator for the Accept and Continue pop-up 
    acceptAndContinue: By = By.xpath('//button[@class="css-117gtt9"]')


    // locators for "selecting a motor" test 
    longRange: By = By.xpath('(//div[@class="e6co1jx1 css-ktyj33"])[2]')
    rangeConfirmation: By = By.xpath('//label[text()="Long range Dual motor - AWD (+ $3,500)"]')

    // locators for "selecting an exterior" test 
    exterior: By = By.xpath('//div[@id="section-exterior-title"]')
    magnesium: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/exterior/72900.svg"]')
    magnesiumConfirm: By = By.xpath('//label[text()="Magnesium"]')
    snow: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/exterior/70700.svg"]')
    snowConfirm: By = By.xpath('//label[text()="Snow (+ $1,250)"]')
    thunder: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/exterior/72800.svg"]')
    thunderConfirm: By = By.xpath('//label[text()="Thunder (+ $1,250)"]')
    jupiter: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/exterior/73600.svg"]')
    jupiterConfirm: By = By.xpath('//label[text()="Jupiter (+ $1,250)"]')
    midnight: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/exterior/72300.svg"]')
    midnightConfirm: By = By.xpath('//label[text()="Midnight (+ $1,250)"]')
    space: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/exterior/71700.svg"]')
    spaceConfirm: By = By.xpath('//label[text()="Space (+ $1,250)"]')

    // locators for "selecting an interior" test 
    interior: By = By.xpath('//div[@id="section-interior-title"]')
    charcoal3D: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/interior/R60000_1x.jpg"]')
    charcaolConfirm: By = By.xpath('//label[text()="Charcoal Embossed Textile with 3D Etched deco"]')
    zinc: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/interior/R6B000_1x.jpg"]')
    zincConfirm: By = By.xpath('//label[text()="Zinc Embossed Textile with 3D Etched deco"]')
    slate: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/interior/RFA000_1x.jpg"]')
    slateConfirm: By = By.xpath('//label[text()="Slate WeaveTech with Black Ash deco"]')
    charcoalWeave: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/interior/RF8000_1x.jpg"]')
    charcoalWeaveConfirm: By = By.xpath('//label[text()="Charcoal WeaveTech with Black Ash deco"]')
    nappa: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/interior/RCZ300_1x.jpg"]')
    nappaConfirm: By = By.xpath('//label[text()="Ventilated Nappa leather Zinc with Light Ash deco (+ $4,000)"]')

    //locators for "selecting a package" test 
    packs: By = By.xpath('//div[@id="section-packages-title"]')
    pilot: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/packages/001162.jpg"]')
    pilotConfirm: By = By.xpath('//label[text()="Pilot (+ $3,400)"]')
    plus: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/packages/XPLUSS.jpg"]')
    plusConfirm: By = By.xpath('//label[text()="Pilot (+ $3,400), Plus (+ $4,200)"]')
    performance: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/packages/001150.jpg"]')
    performanceConfirm: By = By.xpath('//label[text()="Pilot (+ $3,400), Plus (+ $4,200), Performance (+ $5,500)"]')

    // locators for "selecting wheels" test
    wheels: By = By.xpath('//div[@id="section-wheels-title"]')
    blackDiamond: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/wheels/R184_1x.jpg"]')
    blackSilver: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/wheels/001257_1x.jpg"]')
    blackPolished: By = By.xpath('//img[@src="https://www.polestar.com/configurator/static/img/534/tiles/2023/wheels/XPFWHE_1x.jpg"]')
    polishedConfirm: By = By.xpath('(//label[@class="css-yq7fi8"])[5]')
    wheelsConfirmation: By = By.xpath('(//label[@class="css-yq7fi8"])[4]')


    // locators for "selecting add-ons" test 
    mats: By = By.xpath('//img[@src="https://www.polestar.com/images/api/184/floormats_backandfront.jpg?auto=compress&ar=1:1&fit=crop&q=35&w=640"]')
    addMat1: By = By.xpath('(//button[@class="css-117gtt9"])[1]')
    addMat2: By = By.xpath('(//button[@class="css-117gtt9"])[2]')
    exitMats: By = By.xpath('//button[@class="css-1ljy5lf"]')
    mat1Confirm: By = By.xpath('//label[text()="All Weather Trunk Mat"]')
    mat2Confirm: By = By.xpath('//label[text()="Front and rear passenger floor mats (LHD) MY23"]')
    loadCarrier: By = By.xpath('//img[@src="https://www.polestar.com/images/api/152/Load_Carriers.png?auto=compress&ar=1:1&fit=crop&q=35&w=640"]')
    loadConfirm: By = By.xpath('//label[text()="Roof Load Bars"]') 
    towbarHitch: By = By.xpath('//img[@src="https://www.polestar.com/images/api/297/TowBar_Category_OLD.png?auto=compress&ar=1:1&fit=crop&q=35&w=640"]')
    towbarConfirm: By = By.xpath('//label[text()="Towbar Hitch"]')





    driver: WebDriver
    url: string

    constructor(options?: Options) {
        if (options && options.driver) this.driver = options.driver
        else 
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
        if(options && options.url) this.url = options.url
    }
    
    async navigate(url?: string): Promise<void> {
      if (url) return await this.driver.get(url)
      else if (this.url) return await this.driver.get(this.url)
      else 
      return Promise.reject(
          'Basepage.navigate() needs a url defined on the page objects or one passed in'
      )
    }
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }
    async click(elementBy:By): Promise<void> {
        return(await this.getElement(elementBy)).click()
    }
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys)
    }
    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText()
    }
    async getAttribute(elementBy: By, attribute: string): Promise<string> {
        return (await this.getElement(elementBy)).getAttribute(attribute)
    }
}