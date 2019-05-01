describe('Home page', () => {
  it('exists', () => {
    cy.visit('localhost:8080');
  });

  it('has a h1', () => {
    cy.get('h1');
  });

  it('has a h1 which says Welcome', () => {
    cy.get('h1').should('have.text', 'Welcome');
  });
});
