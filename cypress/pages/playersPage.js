class PlayersPage {
   
    get playersButton() {
      
      return cy.contains('span.NavItem_text__JoCLX', 'Players');
    }
  
   
    clickPlayersButton() {
      this.playersButton.click({ force: true }); 
    }
  }
  
  export default new PlayersPage();
  