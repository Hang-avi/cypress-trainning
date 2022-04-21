import {
  MenuContentPage, ProductsListPage, ShopingCartPage, LoginPage, AddressPage, PaymentPage,
  ShippingPage,
} from "../page/index";

//Arrange
const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const addressPage = new AddressPage();
const paymentPage = new PaymentPage();
const shippingPage = new ShippingPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    //Action
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productsListPage.selectProduct();
    productsListPage.goToCart();
    shopingCartPage.goToLogin();
    loginPage.enterEmail();
    loginPage.enterPassword();
    loginPage.submitSignIn();
    addressPage.confirmAddress();
    shippingPage.checkTermsOfService();
    shippingPage.goToPayment();
    paymentPage.payByBankWire();
    //Assert
    // For the last test, we were not able to accomplish it even with
    // a time-out wait of 3 minutes. This does happen with
    // the next implementation and with "paymentPage.verifySummaryPage();"
    cy.get("#center_column > div > p > strong")
      .should("have.text", "Your order on My Store is complete.");
  });
});
