class SchedulePage {
    
    acceptPrivacyBanner() {
        return cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
    }

    /**
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    get seasonTypeFilter() {
        return cy.get('select[name="season"]'); // Selector del filtro Season Type
    }

    /**
     *
     * @param {string} option 
     */
    selectSeasonTypeOption(option) {
        this.seasonTypeFilter.select(option); 
    }
}

export default new SchedulePage();
