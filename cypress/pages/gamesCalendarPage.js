class GamesCalendarPage {
  get calendarButton() {
    return cy.get('.calendar-button'); // Selector CSS ajustado al botón de calendario
  }

  selectDate(day) {
    cy.contains('.day', day).click(); // Selector para seleccionar un día del calendario
  }

  get gamesForSelectedDate() {
    return cy.get('.game-summary'); // Selector para los juegos listados
  }
}

export default new GamesCalendarPage();

