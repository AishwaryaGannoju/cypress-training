describe("test2",()=>{
    it('scroll test 1',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('#footermainPanel').scrollIntoView();
    })
    it.only('scroll test 2',()=>{
        cy.visit('https://www.edvenswa.com',{timeout:30000});
        cy.get('#stage').scrollTo('center');
    })
    it.only('scroll test 3',()=>{
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        });
        cy.visit('https://www.edvenswa.com',{timeout:30000});
        cy.scrollTo('bottom');
        cy.get('.site-wrapper').eq(1).scrollTo('center', {ensureScrollable: false});
        cy.contains('Our Team').scrollIntoView();
    })
})