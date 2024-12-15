class SchedulePage {
    /**
     * Maneja el banner de privacidad.
     * Hace clic en el botón "Aceptar" si el banner está presente.
     */
    acceptPrivacyBanner() {
        return cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
    }

    /**
     * Obtiene el elemento del filtro "Season Type".
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    get seasonTypeFilter() {
        return cy.get('select[name="season"]'); // Selector del filtro Season Type
    }

    /**
     * Selecciona una opción específica del filtro "Season Type".
     * @param {string} option - El atributo "value" de la opción que se desea seleccionar (e.g., "Regular Season", "NBA Cup").
     */
    selectSeasonTypeOption(option) {
        this.seasonTypeFilter.select(option); // Selecciona la opción en el filtro
    }
}

export default new SchedulePage();
