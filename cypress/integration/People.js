describe('People', () => {
  it('exists', () => {
    cy.visit('localhost:8080/people');
  });

  it('has a h1', () => {
    cy.get('h1');
  });

  it('has a h1 which says People', () => {
    cy.get('h1').should('have.text', 'PeopleFilter By');
  });
});
