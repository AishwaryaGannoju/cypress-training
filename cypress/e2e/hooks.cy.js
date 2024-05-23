//before,after,beforeEach and AfterEach
//these are hooks

describe("MyTestSuite", () => {
  before(() => {
    cy.log("***** Launch app *****");
  });

  after(() => {
    cy.log("***** Close app *****");
  });

  beforeEach(() => {
    cy.log("***visit before***");
  });
  afterEach(() => {
    cy.log("***visit after***");
  });

  it.skip("first test", () => {});
  it.only("second test ", () => {});
  it("third test", () => {});
});
