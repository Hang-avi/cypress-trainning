class GildedroseAddItem {
    private nameField: string;
    private name: string;
    private sellInField: string;
    private qualityField: string;
    private typeField: string;
    private confirmButton: string;
    private qualityError: string;
    private lastItem: string

    constructor() {
        this.nameField = '[formcontrolname="name"]'
        this.sellInField = '[formcontrolname="sellIn"]'
        this.qualityField = '[formcontrolname="quality"]'
        this.deployForm = '[data-automation="item-form-type"]'
        this.typeField = 'span'
        this.confirmButton = '[data-automation="item-form-confirm-button"]'
        this.qualityError = '#mat-error-0'
        this.lastItem = '[data-automation="list-item-row"]'
    }

    public fillName(nameParam: string): void {
        cy.get(this.nameField).type(nameParam)
	this.name=nameParam
    }

    public fillSellIn(sellInParam: int): void {
        cy.get(this.sellInField).type(sellInParam)
    }

    public fillQuality(qualityParam: int): void {
        cy.get(this.qualityField).type(qualityParam)
    }

    public selectType(typeParam: string): void {
        cy.get(this.deployForm).click();
        cy.get(this.typeField).contains(typeParam).click();
    }
    
    public pressAddButton(): void {
        cy.get(this.confirmButton).click();
    }

    public checkAddButtonDisabled(): void {
        cy.get(this.confirmButton).should('be.disabled')
    }

    public checkQualityError(): void {
        cy.get(this.qualityError).should('have.text',' Expected value between 0 and 80 ')
    }

    public checkItemAdded(name: string): void {
        cy.get(this.lastItem).last().get('div').first().contains(this.name)
    }
}
export { GildedroseAddItem }