class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string
    private dressesPage: string

    constructor() {
        this.tShirtMenu = '#block_top_menu > ul > li:nth-child(3) > a';
        this.menuContentPageURL = 'http://automationpractice.com/'
        this.dressesPage = '#block_top_menu > ul > li:nth-child(2) > a'
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }

    public goToDressesPage(): void {
        cy.get(this.dressesPage).click()
    }

}
export { MenuContentPage }