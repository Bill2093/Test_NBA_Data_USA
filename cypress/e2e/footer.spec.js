import FooterPage from '../pages/footerPage';

describe('Footer Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.nba.com'); 
  });

  it('should navigate to the Contact Us page from the footer', () => {

    FooterPage.clickContactUs();


    cy.url().should('include', '/contact-us');
    cy.contains('Contact Us').should('be.visible');
  });
});
