class StatsPage {
  
    acceptPrivacyBanner() {
      return cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
    }
  
    
    get seeAllScoresLink() {
      return cy.get('a[href="/games"]'); 
    }
  
   
    clickSeeAllScoresLink() {
      this.seeAllScoresLink.click();
    }
  }
  
  export default new StatsPage();
  