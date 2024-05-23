// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//custom command for clicking on link using label and assestion to check that

Cypress.Commands.add("clickLink", (label) => {
  cy.get("a").contains(label).click();
  cy.log("**changed in main**");
  
});

Cypress.Commands.add("checkPresence", (label) => {
  cy.get('[class="product-name"] h1').should("have.text", label);
});

//overwriting type()

Cypress.Commands.overwrite("type", (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false;
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: "type",
      message: "*".repeat(text.length),
    });
  }

  return originalFn(element, text, options);
});

//custom commands for login 

Cypress.Commands.add("login",(email,pass)=>{
    cy.visit('https://demo.nopcommerce.com/login');
    cy.get('#Email').type(email);
    cy.get('#Password').type(pass, { sensitive: true })
    cy.get('[class$="login-button"]').click();
})






















//overwriting contains()

// Cypress.Commands.overwriteQuery('contains',(originalFn, subject, filter, text,options={})=>{
//     if(typeof text === 'object'){
//         options = text
//         text = filter
//         filter = undefined
//     }

//     options.matchCase = false

//     return originalFn(subject, filter, text,options)
// })
