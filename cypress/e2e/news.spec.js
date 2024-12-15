import NewsPage from '../pages/newsPage';

describe('News Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.nba.com/news'); 
    NewsPage.acceptPrivacyBanner(); 
  });

  it('should click on the specific news image', () => {
   
    NewsPage.clickSpecificNewsBox();

    
    cy.url().should('include', '/news'); 
  });
});
