import StatsPage from '../pages/statsPage';

describe('Stats Page Tests', () => {
  beforeEach(() => {
    
    cy.visit('https://www.nba.com/stats'); 
    
    
    StatsPage.acceptPrivacyBanner(); 
  });

  it('should click on the "See all Scores" link', () => {
   
    StatsPage.clickSeeAllScoresLink();

    
    cy.url().should('include', '/games'); 
  });
});
