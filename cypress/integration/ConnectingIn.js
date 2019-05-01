describe('Connecting In', () => {
  it('exists', () => {
    cy.visit('localhost:8080/connecting-in');
  });

  it('has a h1', () => {
    cy.get('h1');
  });

  it('has a h1 which says What We Do', () => {
    cy.get('h1').should('have.text', 'What We Do');
  });
});
