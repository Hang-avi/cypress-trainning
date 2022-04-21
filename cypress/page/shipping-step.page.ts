class ShippingPage {
    private termsOfService: string
    private paymentButton: string

    constructor() {
        this.termsOfService = '[type=\"checkbox\"]'
        this.paymentButton = '[name=\"processCarrier\"]'
    }

    public checkTermsOfService(): void {
        cy.get(this.termsOfService).check();
    }

    public goToPayment(): void {
        cy.get(this.paymentButton).click()
    }

}
export { ShippingPage }