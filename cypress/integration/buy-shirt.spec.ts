describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    cy.visit("http://automationpractice.com/");
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click();
    cy.get("[style*=\"display: block;\"] .button-container > a").click();
    cy.get(".cart_navigation span").click();

    cy.get("#email").type("aperdomobo@gmail.com");
    cy.get("#passwd").type("WorkshopProtractor");

    // 8
    cy.get("#SubmitLogin").click();
    // 9
    cy.get("[name=\"processAddress\"]").click();
    // 10
    cy.get("[type=\"checkbox\"]").check();
    // 11
    cy.get("[name=\"processCarrier\"]").click();
    // 12
    cy.get(".bankwire span").click();
    // 13
    cy.get("#cart_navigation > button").click();

    cy.get("#center_column > div > p > strong")
      .should("have.text", "Your order on My Store is complete.");
  });
});
