import StorePage from '../pages/storePage';

describe('Store Navigation Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.nba.com'); 
        StorePage.acceptPrivacyBanner();
    });

    it('should navigate to the official store when clicking on the Store link', () => {
     
        StorePage.clickStoreMenu();

        cy.url().should('include', 'store.nba.com');
    });
});
