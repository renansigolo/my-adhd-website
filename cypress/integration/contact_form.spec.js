import Faker from "faker"

context("Contact Form", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should test error messages and complete a successful contact form", () => {
    const name = Faker.name.findName()
    const email = Faker.internet.email()
    const message = Faker.lorem.paragraph()

    // Setup the Intercept on the Form Submit request
    cy.intercept("POST", `/sendContactEmail`).as("submitForm")

    // Test title
    cy.contains("Share your comments").should("be.visible")

    // Test Invalid Fields
    cy.get("button[type=submit]").click()

    // Should display form errors
    cy.get("[data-test=form-name] p")
      .should("be.visible")
      .and("contain.text", "Your name is required")
    cy.get("[data-test=form-email] p")
      .should("be.visible")
      .and("contain.text", "A valid email is required")
    cy.get("[data-test=form-textarea] p")
      .should("be.visible")
      .and("contain.text", "Your message is too short")

    // Should type the data and keep the focus
    // Test Name Input
    cy.get("input[name=name]").type(name).should("have.value", name)

    // Test Language Inputs
    cy.get("select[name=language]")
      .select("Português")
      .should("have.value", "pt")
    cy.get("select[name=language]").select("Español").should("have.value", "es")
    cy.get("select[name=language]").select("English").should("have.value", "en")

    // Test Email Input
    cy.get("input[name=email]").type(email).should("have.value", email)

    // Test Message Input
    cy.get("#message").type(message).should("have.value", message)

    // Test Submit
    cy.get("button[type=submit]").click()
    cy.get("[data-test=spinner]").should("be.visible")

    // Wait for a success response from the server
    cy.wait("@submitForm").its("response.statusCode").should("eq", 200)

    // Check the success notification
    cy.get("[data-test=success-notification]").should("be.visible")
  })
})
