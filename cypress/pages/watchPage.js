class WatchPage {
    // Manejo del banner de privacidad
    acceptPrivacyBanner() {
      return cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
    }
  
    // Selector para el cuadro completo del video
    get specificVideoBox() {
      return cy.get(
        '#__next > div.Layout_base__6IeUC.Layout_justNav__2H4H0.Layout_withSubNavShortStrip__79FCd.Layout_withShortStrip__krLX0.Layout_withSubNav__ByKRF > div.Layout_mainContent__jXliI > div > section:nth-child(2) > div > div.CarouselDynamic_cd__77Fo_ > div > div:nth-child(1) > a'
      );
    }
  
    // Método para hacer clic en el cuadro del video
    clickSpecificVideoBox() {
      this.specificVideoBox.click();
    }
  }
  
  export default new WatchPage();
  