import StorePage from '../pages/storePage';

describe('Store Navigation Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.nba.com'); // URL principal de la NBA
        StorePage.acceptPrivacyBanner(); // Maneja el banner de privacidad si aparece
    });

    it('should navigate to the official store when clicking on the Store link', () => {
        // Haz clic en el menú "Store"
        StorePage.clickStoreMenu();

        // Validar que se redirige a la tienda oficial
        cy.url().should('include', 'store.nba.com');
    });
});
