class StorePage {
    
    acceptPrivacyBanner() {
        return cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
    }

    
    get storeMenu() {
        return cy.get('span.NavItem_text__JoCLX').contains('Store'); 
    }

    
    clickStoreMenu() {
        this.storeMenu.click(); 
    }
}

export default new StorePage();
