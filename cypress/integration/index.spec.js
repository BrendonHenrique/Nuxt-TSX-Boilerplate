context("E2E Testing", () => {
  it("Access index page", () => {
    cy.visit("/").wait(3000)
  })
})
