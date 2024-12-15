class StatsPage {
    /**
     * Maneja el banner de privacidad si aparece.
     */
    acceptPrivacyBanner() {
      return cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
    }
  
    /**
     * Selector para el enlace "See all Scores".
     */
    get seeAllScoresLink() {
      return cy.get('a[href="/games"]'); // Selector basado en el atributo href
    }
  
    /**
     * Método para hacer clic en el enlace "See all Scores".
     */
    clickSeeAllScoresLink() {
      this.seeAllScoresLink.click();
    }
  }
  
  export default new StatsPage();
  