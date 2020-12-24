describe('Inputs, submit button', () => {
    it('can navigate to http://localhost:1234', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', 'localhost')
    })
    it('has the submit button disabled', () => {
        cy.get("button").should("be.disabled")
    })

    it('can enter a name', () => {
        cy.get('input[name="name"]').type("Mr. Bojangles")
    })
    it("matches the input", () => {
        cy.get('input[name="name"]').should("have.value","Mr. Bojangles")
    })

    it("enters an email", () => {
        cy.get('input[name="email"]').type("mr@bojangles.com")
        cy.get('input[name="email"]').should("have.value","mr@bojangles.com")
    } )

    it("enters an password", () => {
        cy.get('input[name="password"]').type("shutupalready")
        cy.get('input[name="password"]').should("have.value","shutupalready")
    } )

    it('accepts terms', () => {
        cy.get("input[name='terms']").check()
    })

    it('has the submit button enabled', () => {
        cy.get("button").should("be.enabled")
    })

    it('clicks submit', () => {
        cy.get('button').click()
    })
    
})