class GamesCalendarPage {
  get calendarButton() {
    return cy.get('span[data-ng-i18next="schedule.calendar"]'); 
  }

  selectDate(day) {
    cy.contains('.day', day).click(); 
  }

  get gamesForSelectedDate() {
    return cy.get('.game-card'); 
  }
}

export default new GamesCalendarPage();
