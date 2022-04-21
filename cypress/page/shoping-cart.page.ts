class ShopingCartPage {
    private proceedButton: string;

    constructor() {
        this.proceedButton = '.cart_navigation span'
    }

    public goToLogin(): void {
        cy.get(this.proceedButton).click();
    }

}
export { ShopingCartPage }