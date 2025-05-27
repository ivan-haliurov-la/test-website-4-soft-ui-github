it("should have the right text in the headline", () => {
  cy.visit("/");

  cy.get(".navbar-brand").should("exist");

  cy.userwayAnalysis({
    level: "AAA",
    includeRules: ["color-contrast-enhanced"],
  });
});
