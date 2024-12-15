class PlayersPage {
    /**
     * Selector para el botón "Players"
     */
    get playersButton() {
      // Actualiza el selector para usar la clase y texto del elemento
      return cy.contains('span.NavItem_text__JoCLX', 'Players');
    }
  
    /**
     * Método para hacer clic en el botón "Players"
     */
    clickPlayersButton() {
      this.playersButton.click({ force: true }); // Usa { force: true } si es necesario
    }
  }
  
  export default new PlayersPage();
  