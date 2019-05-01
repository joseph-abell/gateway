describe('What we do', () => {
  it('exists', () => {
    cy.visit('localhost:8080/sundays');
  });

  it('has a h1', () => {
    cy.get('h1');
  });

  it('has a h1 which says What We Do', () => {
    cy.get('h1').should('have.text', 'What We Do');
  });
});
