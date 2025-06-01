Cypress.on("uncaught:exception", () => false);

describe('Selectable Grid Test', () => {
  it('selects even numbers and validates selection states', () => {
    cy.visit('https://demoqa.com/selectable');
    
    // Click the "Grid" tab
    cy.contains('Grid').click();

    // Click on even-numbered boxes
    const selectedItems = ['Two', 'Four', 'Six', 'Eight'];
    selectedItems.forEach(item => {
      cy.contains('.list-group-item', item).click();
    });

    // Validate selected items have 'active' class
    selectedItems.forEach(item => {
      cy.contains('.list-group-item', item).should('have.class', 'active');
    });

    // Validate others do NOT have 'active' class
    const unselectedItems = ['One', 'Three', 'Five', 'Seven', 'Nine'];
    unselectedItems.forEach(item => {
      cy.contains('.list-group-item', item).should('not.have.class', 'active');
    });
  });
});
