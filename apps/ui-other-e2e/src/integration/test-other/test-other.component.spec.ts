describe('ui-other', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testothercomponent--primary'));

  it('should render the component', () => {
    cy.get('old-story-test-other').should('exist');
  });
});
