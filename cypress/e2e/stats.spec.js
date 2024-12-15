import StatsPage from '../pages/statsPage';

describe('Stats Page Tests', () => {
  beforeEach(() => {
    // Visita la página de estadísticas
    cy.visit('https://www.nba.com/stats'); 
    
    // Maneja el banner de cookies si aparece
    StatsPage.acceptPrivacyBanner(); 
  });

  it('should click on the "See all Scores" link', () => {
    // Haz clic en el enlace "See all Scores"
    StatsPage.clickSeeAllScoresLink();

    // Valida que la página redirige correctamente
    cy.url().should('include', '/games'); // Cambia según la URL esperada después del clic
  });
});
