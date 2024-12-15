import PlayersPage from '../pages/playersPage';

describe('Players Menu Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.nba.com'); 

   
    cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
  });

  it('should navigate to the Players section', () => {
    
    PlayersPage.clickPlayersButton();

    
    cy.url().should('include', '/players');
  });
});
