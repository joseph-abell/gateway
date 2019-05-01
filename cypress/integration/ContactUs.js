describe('Contact Us', () => {
  it('exists', () => {
    cy.visit('localhost:8080/contact-us');
  });

  it('has a h1', () => {
    cy.get('h1');
  });

  it('has a h1 which says Get In Touch', () => {
    cy.get('h1').should('have.text', 'Get In Touch');
  });
});
