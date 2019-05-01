describe('Events', () => {
  it('exists', () => {
    cy.visit('localhost:8080/events');
  });

  it('has a h1', () => {
    cy.get('h1');
  });

  it('has a h1 which says Events', () => {
    cy.get('h1').should('have.text', 'Events');
  });
});
