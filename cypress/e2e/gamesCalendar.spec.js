import GamesCalendarPage from '../pages/gamesCalendarPage';

describe('Games Calendar Tests', () => {
  beforeEach(() => {
    cy.visit('https://global.nba.com/scores/'); 


    cy.get('#onetrust-accept-btn-handler', { timeout: 10000 })
      .click()
      .should('not.exist'); 
  });

  it('should display the calendar and allow date selection', () => {
  
    GamesCalendarPage.calendarButton.should('be.visible');

    
    GamesCalendarPage.calendarButton.click();

    GamesCalendarPage.selectDate('14');

    
    GamesCalendarPage.gamesForSelectedDate.should('exist').and('be.visible');
  });
});
