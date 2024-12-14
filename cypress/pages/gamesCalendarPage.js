class GamesCalendarPage {
  get calendarButton() {
    return cy.get('span[data-ng-i18next="schedule.calendar"]'); // Selector específico
  }

  selectDate(day) {
    cy.contains('.day', day).click(); // Selecciona el día dentro del calendario
  }

  get gamesForSelectedDate() {
    return cy.get('.game-card'); // Ajusta al selector real para los juegos
  }
}

export default new GamesCalendarPage();
