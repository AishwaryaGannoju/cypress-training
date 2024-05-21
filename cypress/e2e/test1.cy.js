it('Google Search',() =>{
    cy.visit("https://google.com")
    // cy.get('#APjFqb').type("What is Cypress?")
    // cy.contains('Google Search').click()
    cy.get('#APjFqb',{timeout:5000}).type("What is Cypress?{Enter}")

    cy.wait(10000)
    cy.contains('Videos').click()
})