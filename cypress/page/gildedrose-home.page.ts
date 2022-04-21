class GildedroseHome {
    private gildedroseUrl: string;
    private addButton: string;

    constructor() {
        this.gildedroseUrl = 'localhost:4200'
        this.addButton = '.list-add-button'
    }

    public visitGildedrose(): void {
        cy.visit(this.gildedroseUrl)
    }
    
    public goToAddItem(): void {
        cy.get(this.addButton).click();
    }

}
export { GildedroseHome }