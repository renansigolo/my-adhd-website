context("Navigation Pages", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("has loaded the home page", () => {
    cy.contains(
      "The first app with cognitive analysis for people with ADHD!"
    ).should("be.visible")
  })

  it("has a privacy policy page", () => {
    cy.location()

    cy.visit("/privacy-policy")
    cy.location("pathname").should("eq", "/privacy-policy")

    cy.contains("Privacy Policy")

    cy.go("back")
  })

  it("has loaded the home page title in portuguese", () => {
    cy.visit("/pt-BR")
    cy.contains("O primeiro aplicativo de TDAH com análise cognitiva!").should(
      "be.visible"
    )
  })

  it("has loaded the home page title in spanish", () => {
    cy.visit("/es")
    cy.contains(
      "¡La primera aplicación de TDAH con análisis cognitivo!"
    ).should("be.visible")
  })
})
