class NewsPage {
   
    acceptPrivacyBanner() {
      return cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
    }
  
  
    get specificNewsBox() {
      return cy.get('img[alt="Emirates NBA Cup Tracker: Latest updates, schedule, matchups & explainer"]');
    }
  
   
    clickSpecificNewsBox() {
      this.specificNewsBox.click();
    }
  }
  
  export default new NewsPage();
  