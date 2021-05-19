import Faker from "faker"

context("Contact Form", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("complete a successful contact form", () => {
    const name = Faker.name.findName()
    const email = Faker.internet.email()
    const message = Faker.lorem.paragraph()

    cy.contains("Share your comments")
    cy.get("input[name=name]").type(name).should("have.value", name)
    cy.get("select[name=language]")
      .select("Português")
      .should("have.value", "pt")
    cy.get("select[name=language]").select("Español").should("have.value", "es")
    cy.get("select[name=language]").select("English").should("have.value", "en")

    cy.get("input[name=email]").type(email).should("have.value", email)
    cy.get("#message").type(message).should("have.value", message)

    cy.get("button[type=submit]").click()
    cy.get("[data-cy=spinner]").should("be.visible")
  })
})
