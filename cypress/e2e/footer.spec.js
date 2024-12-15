import FooterPage from '../pages/footerPage';

describe('Footer Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.nba.com'); // URL principal
  });

  it('should navigate to the Contact Us page from the footer', () => {
    // Haz clic en el enlace "Contact Us" del footer
    FooterPage.clickContactUs();

    // Validar que se redirige correctamente a la página de Contact Us
    cy.url().should('include', '/contact-us');
    cy.contains('Contact Us').should('be.visible');
  });
});
