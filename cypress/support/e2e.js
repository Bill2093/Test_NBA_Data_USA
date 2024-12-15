
Cypress.on('uncaught:exception', (err, runnable) => {

  if (err.message.includes("Failed to execute 'removeChild' on 'Node'")) {
      return false; 
  }

 
  if (err.message.includes('_satellite_runScript19 is not a function')) {
      return false; 
  }


  return true;
});

class WatchPage {
  /**
   * 
   * 
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
  acceptPrivacyBanner() {
      return cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
  }

  /**
   * 
   * 
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
  get specificVideoBox() {
      return cy.get(
          '#__next > div.Layout_base__6IeUC.Layout_justNav__2H4H0.Layout_withSubNavShortStrip__79FCd.Layout_withShortStrip__krLX0.Layout_withSubNav__ByKRF > div.Layout_mainContent__jXliI > div > section:nth-child(2) > div > div.CarouselDynamic_cd__77Fo_ > div > div:nth-child(1) > a'
      );
  }

  
  clickSpecificVideoBox() {
      this.specificVideoBox.click();
  }
}

export default new WatchPage();  