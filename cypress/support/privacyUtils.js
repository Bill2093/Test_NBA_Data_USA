class PrivacyUtils {
    static handlePrivacyBanner() {
      cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }) 
        .click({ force: true }) 
        .should('not.exist'); 
    }
  }
  
  export default PrivacyUtils;
  