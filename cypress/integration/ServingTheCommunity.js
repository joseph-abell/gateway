describe('Serving The Community', () => {
  it('exists', () => {
    cy.visit('localhost:8080/serving-the-community');
  });

  it('has a h1', () => {
    cy.get('h1');
  });

  it('has a h1 which says Serving The Community', () => {
    cy.get('h1').should('have.text', 'What We Do');
  });
});
