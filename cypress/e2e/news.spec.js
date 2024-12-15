import NewsPage from '../pages/newsPage';

describe('News Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.nba.com/news'); // URL de la página de noticias
    NewsPage.acceptPrivacyBanner(); // Maneja el banner de cookies
  });

  it('should click on the specific news image', () => {
    // Haz clic en el cuadro de la imagen de noticias
    NewsPage.clickSpecificNewsBox();

    // Valida que la página redirige correctamente
    cy.url().should('include', '/news'); // Ajusta según la URL esperada tras el clic
  });
});
