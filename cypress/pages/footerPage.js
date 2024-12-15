class FooterPage {
 
    get contactUsLink() {
      return cy.get('a[href="/contact-us"]', { timeout: 10000 }); 
    }
  
    
    clickContactUs() {
      this.contactUsLink
        .should('be.visible') 
        .click({ force: true }); 
    }
  }
  
  export default new FooterPage();
  
  