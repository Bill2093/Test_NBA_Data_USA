class PrivacyUtils {
    static handlePrivacyBanner() {
      cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }) // Selector exacto del botón
        .click({ force: true }) // Forzamos el click si es necesario
        .should('not.exist'); // Verificamos que el banner desaparezca
    }
  }
  
  export default PrivacyUtils;
  