describe('ui-test', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testlibcomponentcomponent--primary'));

  it('should render the component', () => {
    cy.get('old-story-test-lib-component').should('exist');
  });
});
