import { GildedroseHome, GildedroseAddItem, GildedroseUpdateItem } from "../page/index";

describe("", () => {
  let gildedroseHome: GildedroseHome;
  let gildedroseAddItem: GildedroseAddItem;
  let gildedroseUpdateItem: GildedroseUpdateItem;

  before(() => {
    // Arrange
    gildedroseHome = new GildedroseHome();
    gildedroseAddItem = new GildedroseAddItem();
    gildedroseUpdateItem = new GildedroseUpdateItem();
    gildedroseHome.visitGildedrose();
    gildedroseHome.goToAddItem();
    gildedroseAddItem.fillName("Ensalada");
    gildedroseAddItem.fillSellIn(3);
    gildedroseAddItem.fillQuality(5);
    gildedroseAddItem.selectType("NORMAL");
    gildedroseAddItem.pressAddButton();
  });
  it("", () => {
    // Action
    gildedroseUpdateItem.pressPenButton();

    // Assert
    gildedroseAddItem.checkAddButtonDisabled();
    gildedroseAddItem.checkQualityError();
  });
});
