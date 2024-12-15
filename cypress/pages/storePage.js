class StorePage {
    // Manejo del banner de privacidad
    acceptPrivacyBanner() {
        return cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
    }

    // Selector para el texto "Store" en el menú de navegación
    get storeMenu() {
        return cy.get('span.NavItem_text__JoCLX').contains('Store'); // Selecciona el texto del menú "Store"
    }

    // Método para hacer clic en el menú "Store"
    clickStoreMenu() {
        this.storeMenu.click(); // Hace clic en el enlace
    }
}

export default new StorePage();
