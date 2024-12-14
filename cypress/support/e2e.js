// Manejo global de excepciones para evitar que errores no críticos interrumpan las pruebas
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignora errores específicos relacionados con el DOM
    if (err.message.includes("Failed to execute 'removeChild' on 'Node'")) {
      return false; // Evitar que Cypress detenga la prueba
    }
    // Permitir otros errores
  });
  
  class WatchPage {
    /**
     * Maneja el banner de privacidad si aparece.
     * Hace clic en el botón "Aceptar" del banner de cookies.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    acceptPrivacyBanner() {
      return cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
    }
  
    /**
     * Obtiene el cuadro específico del video que queremos seleccionar.
     * El selector está basado en la jerarquía HTML actual de la página.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    get specificVideoBox() {
      return cy.get(
        '#__next > div.Layout_base__6IeUC.Layout_justNav__2H4H0.Layout_withSubNavShortStrip__79FCd.Layout_withShortStrip__krLX0.Layout_withSubNav__ByKRF > div.Layout_mainContent__jXliI > div > section:nth-child(2) > div > div.CarouselDynamic_cd__77Fo_ > div > div:nth-child(1) > a'
      );
    }
  
    /**
     * Hace clic en el cuadro del video específico.
     */
    clickSpecificVideoBox() {
      this.specificVideoBox.click();
    }
  }
  
  export default new WatchPage();
  