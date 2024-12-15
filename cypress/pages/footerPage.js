class FooterPage {
    /**
     * Selector para el enlace "Contact Us"
     */
    get contactUsLink() {
      return cy.get('a[href="/contact-us"]', { timeout: 10000 }); // Aseguramos un tiempo de espera
    }
  
    /**
     * Método para hacer clic en el enlace "Contact Us"
     */
    clickContactUs() {
      this.contactUsLink
        .should('be.visible') // Aseguramos que el elemento es visible antes de interactuar
        .click({ force: true }); // Usamos force:true en caso de que esté bloqueado
    }
  }
  
  export default new FooterPage();
  
  