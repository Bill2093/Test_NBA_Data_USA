import WatchPage from '../pages/watchPage';

describe('Watch Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.nba.com/watch/featured'); 

   
    WatchPage.acceptPrivacyBanner();
  });

  it('should click on the specific video box', () => {

    WatchPage.clickSpecificVideoBox();

    cy.url().should('include', '/video'); 
  });
});