class ProductsListPage {
    private tshirtSelection: string;
    private proceedToCart: string

    constructor() {
        this.tshirtSelection = '#center_column a.button.ajax_add_to_cart_button.btn.btn-default'
        this.proceedToCart = '[style*=\"display: block;\"] .button-container > a';
    }

    public selectProduct(): void {
        cy.get(this.tshirtSelection).click()
    }

    public goToCart(): void {
        cy.get(this.proceedToCart).click()
    }

}
export { ProductsListPage }