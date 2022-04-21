import { MenuContentPage, DressesListPage } from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  let dressesNames: String[];

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
    // Arrange
    dressesNames = [
      "Printed Dress",
      "Printed Dress",
      "Printed Summer Dress",
      "Printed Summer Dress",
      "Printed Chiffon Dress",
    ];
  });
  it("show the available dresses", () => {
    // Action
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressesPage();
    // Assert
    dressesListPage.validateItemsNames(dressesNames);
  });
});
