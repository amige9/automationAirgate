const { expect } = require("@playwright/test");

class PaymentURLPage {

    constructor(page) {
        this.page = page;
        this.paymentLinkLocator = page.locator("span:has-text('Payment Links')")
        this.generateNewPaymentLocator = page.locator("span:has-text('Generate New Payment URL')")
        this.amountFieldLocator = page.locator("#Amount")
        this.paymentRefLocator = page.locator("xpath=//input[@id='Payment Reference']");
        this.remarksLocator = page.locator("#Remarks");
        this.submitButton = page.locator("button[type='submit'] span");
        this.successMsg = page.locator("xpath=//div[contains(text(),'CREATED')]")
    }

    async clickPaymentLink() {
        await this.paymentLinkLocator.click();
        // await expect(this.paymentLinkLocator).toHaveText("Payment Links");
        // console.log(this.paymentLinkText);
    }

    async clickGenerateNewPayment() {
        await this.generateNewPaymentLocator.click();
    }

    async fillPaymentLinkForm(amt, ref, remarks) {
        await this.amountFieldLocator.fill(amt);
        await this.paymentRefLocator.fill(ref)
        await this.remarksLocator.fill(remarks)
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

    async assertPaymentLinkCreatedSuccessfully() {
        const msg = await this.successMsg.textContent();
        expect(msg).toEqual("CREATED")
    }


}

module.exports = { PaymentURLPage };