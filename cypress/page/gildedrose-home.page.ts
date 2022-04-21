class GildedroseHome {
    private gildedroseUrl: string;
    private addButton: string;
    private lastItem: string

    constructor() {
        this.gildedroseUrl = 'localhost:4200'
        this.addButton = '.list-add-button'
	this.lastItem = '[data-automation="list-item-row"] > div'
    }

    public visitGildedrose(): void {
        cy.visit(this.gildedroseUrl)
    }
    
    public goToAddItem(): void {
        cy.get(this.addButton).click();
    }

    public checkLastItem(name: string): void {
        cy.wait(1000)
        cy.get(this.lastItem).eq(-5).contains(name)
    }

}
export { GildedroseHome }