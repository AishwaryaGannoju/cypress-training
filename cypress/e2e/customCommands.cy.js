describe('custom Commands',()=>{
    it("handling links",()=>{
        cy.visit('https://demo.nopcommerce.com/');

        //direct 
       // cy.get('div:nth-child(2) > div > div.details > h2 > a').click();
        //cy.get('[class="product-name"] h1').should('have.text','Apple MacBook Pro 13-inch');

        //another method
       // cy.get('a').contains('Apple MacBook Pro 13-inch').click();

        //using custom commands
        cy.clickLink('Apple MacBook Pro 13-inch');
        cy.checkPresence('Apple MacBook Pro 13-inch');
    });

    it("password hidden",()=>{
        cy.visit('https://demo.nopcommerce.com/login');
        cy.get('#Email').type('rajuyadav@gmail.com')
        cy.get('#Password').type('RAJUYADAV', { sensitive: true })
    });

    it.only("login",()=>{
        cy.login('rajuyadav@gmail.com','RAJUYADAV');
        cy.get('.ico-account').should('have.text','My account');
    })









    
    


    // it("overriding contains command and removing case sensitivity",()=>{
    //     cy.visit('https://demo.nopcommerce.com/');

    //     cy.clickLink('APPLE MACBOOK PRO 13-inch');  //should click on Apple MacBook Pro 13-inch
    //     cy.get('[class="product-name"] h1').should('have.text','APPLE MACBOOK PRO 13-inch');
    //     //cy.checkPresence('APPLE MACBOOK PRO 13-inch');
    // })

})