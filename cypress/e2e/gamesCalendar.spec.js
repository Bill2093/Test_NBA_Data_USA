import GamesCalendarPage from '../pages/gamesCalendarPage';

describe('Games Calendar Tests', () => {
  beforeEach(() => {
    cy.visit('https://global.nba.com/scores/'); // URL de la página

    // Maneja el banner de cookies si está presente
    cy.get('#onetrust-accept-btn-handler', { timeout: 10000 })
      .click()
      .should('not.exist'); // Verifica que desaparece
  });

  it('should display the calendar and allow date selection', () => {
    // Verifica que el botón "Calendar" esté visible
    GamesCalendarPage.calendarButton.should('be.visible');

    // Hace clic en el botón "Calendar"
    GamesCalendarPage.calendarButton.click();

    // Selecciona una fecha específica (por ejemplo, el día 14)
    GamesCalendarPage.selectDate('14');

    // Verifica que se muestren juegos para la fecha seleccionada
    GamesCalendarPage.gamesForSelectedDate.should('exist').and('be.visible');
  });
});
