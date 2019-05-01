describe('Words', () => {
  it('exists', () => {
    cy.visit('localhost:8080/words');
  });

  it('has a h1', () => {
    cy.get('h1');
  });

  it('has a h1 which says Words', () => {
    cy.get('h1').should('have.text', 'Words');
  });
});
