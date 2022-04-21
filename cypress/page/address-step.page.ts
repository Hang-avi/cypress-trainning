class AddressPage {
    private addressVerification: string;

    constructor() {
        this.addressVerification = '[name=\"processAddress\"]';
    }

    public confirmAddress(): void {
        cy.get(this.addressVerification).click();
    }

}
export { AddressPage }