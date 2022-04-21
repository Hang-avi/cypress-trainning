import { GildedroseHome, GildedroseAddItem } from "../page/index";

describe("", () => {
  let gildedroseHome: GildedroseHome;
  let gildedroseAddItem: GildedroseAddItem;
  let name: string;

  before(() => {
    // Arrange
    gildedroseHome = new GildedroseHome();
    gildedroseAddItem = new GildedroseAddItem();
    name = "Espaguetti";
  });
  it("", () => {
    // Action
    gildedroseHome.visitGildedrose();
    gildedroseHome.goToAddItem();
    gildedroseAddItem.fillName(name);
    gildedroseAddItem.fillSellIn(20);
    gildedroseAddItem.fillQuality(10);
    gildedroseAddItem.selectType("NORMAL");
    gildedroseAddItem.pressAddButton();
    gildedroseAddItem.checkItemAdded(name);
    // Assert
    gildedroseHome.checkLastItem(name)
  });
});
