class NewsPage {
    /**
     * Manejo del banner de privacidad.
     * Hace clic en el botón "Aceptar" del banner de cookies.
     */
    acceptPrivacyBanner() {
      return cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
    }
  
    /**
     * Selector para el cuadro específico de la imagen de noticias.
     * Usaremos el atributo `alt` de la imagen.
     */
    get specificNewsBox() {
      return cy.get('img[alt="Emirates NBA Cup Tracker: Latest updates, schedule, matchups & explainer"]');
    }
  
    /**
     * Hace clic en el cuadro de la imagen de noticias.
     */
    clickSpecificNewsBox() {
      this.specificNewsBox.click();
    }
  }
  
  export default new NewsPage();
  