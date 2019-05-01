describe('Who we are', () => {
  it('exists', () => {
    cy.visit('localhost:8080/who-we-are');
  });

  it('has a h1', () => {
    cy.get('h1');
  });

  it('has a h1 which says Who We Are', () => {
    cy.get('h1').should('have.text', 'Who we are');
  });
});
