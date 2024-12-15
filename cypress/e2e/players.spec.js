import PlayersPage from '../pages/playersPage';

describe('Players Menu Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.nba.com'); // Navegar a la página principal

    // Manejar el banner de cookies si aparece
    cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
  });

  it('should navigate to the Players section', () => {
    // Hacer clic en el botón "Players"
    PlayersPage.clickPlayersButton();

    // Validar que la URL cambie correctamente
    cy.url().should('include', '/players');
  });
});
