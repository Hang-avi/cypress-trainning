import { GildedroseHome, GildedroseAddItem } from "../page/index";

describe("", () => {
  let gildedroseHome: GildedroseHome;
  let gildedroseAddItem: GildedroseAddItem;

  before(() => {
    // Arrange
    gildedroseHome = new GildedroseHome();
    gildedroseAddItem = new GildedroseAddItem();
  });
  it("", () => {
    // Action
    gildedroseHome.visitGildedrose();
    gildedroseHome.goToAddItem();
    gildedroseAddItem.fillName("Arroz");
    gildedroseAddItem.fillSellIn(12);
    gildedroseAddItem.fillQuality(-40);
    gildedroseAddItem.selectType("NORMAL");

    // Assert
    gildedroseAddItem.checkAddButtonDisabled();
    gildedroseAddItem.checkQualityError();
  });
});
