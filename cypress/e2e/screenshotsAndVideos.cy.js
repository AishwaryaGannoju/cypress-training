describe("screenshots",()=>{
    it('ss',()=>{
        cy.visit("https://demo.nopcommerce.com/");
        // cy.wait(3000);
        //cy.screenshot("homepage");
        cy.get('[class="picturexxxxx"] [href="/apparel"]').screenshot("apparel-img");
    })
})