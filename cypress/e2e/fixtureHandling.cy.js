describe('using fixtures', () => {
    it('logging using the data', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.title').should('have.text',"Products");
    });
    it('logging using fixture', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.fixture('credentials').then((data)=>{
            cy.get('#user-name').type(data.username);
            cy.get('#password').type(data.password);
            cy.get('#login-button').click();
            cy.get('.title').should('have.text',data.expected);
        
        })
    });
    it.only('logging using fixture', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orangehrm').then((data)=>{
            cy.get('[name="username"]').type(data.username);
            cy.get('[name="password"]').type(data.password);
            cy.get('button[type="submit"]').click();
            cy.get('h6[class^="oxd-text"]').should('have.text',data.expected);
        
        })
    });
});