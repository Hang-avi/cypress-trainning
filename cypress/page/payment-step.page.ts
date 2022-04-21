class PaymentPage {
    private bankWire: string;
    private summary: string
    private verification: string
    private orderText: string

    constructor() {
        this.bankWire = '.bankwire span'
        this.summary = '#center_column > div > p > strong';
        this.verification = 'have.text'
        this.orderText = 'Your order on My Store is complete.'
    }

    public payByBankWire(): void {
        cy.get(this.bankWire).click()
    }

    public verifySummaryPage(): void {
        cy.get(this.summary).should(this.verification,this.orderText)
    }
}
export { PaymentPage }