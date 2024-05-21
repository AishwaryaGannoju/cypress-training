describe('Verifying the login for the users', () => {
    // beforeEach("visiting the login page",()=>{
    //     cy.visit("https://automationexercise.com/login");
    // })
    it('logging in Nikitha', () => {
        cy.visit("https://automationexercise.com/");
        cy.get('[href="/login"]').click();
    })
  })