import SchedulePage from '../pages/schedulePage';

describe('Schedule Filters Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.nba.com/schedule'); // URL de Schedule
        SchedulePage.acceptPrivacyBanner(); // Maneja el banner de cookies
    });

    it('should filter by Regular Season', () => {
        // Seleccionar la opción "Regular Season"
        SchedulePage.selectSeasonTypeOption('Regular Season'); // Usa el atributo "value" de la opción

        // Validar que el filtro aplicó correctamente
        cy.get('select[name="season"]').should('have.value', 'Regular Season'); // Verifica que el valor seleccionado sea correcto
    });

    it('should filter by NBA Cup', () => {
        // Seleccionar la opción "NBA Cup"
        SchedulePage.selectSeasonTypeOption('NBA Cup'); // Usa el atributo "value" de la opción

        // Validar que el filtro aplicó correctamente
        cy.get('select[name="season"]').should('have.value', 'NBA Cup'); // Verifica que el valor seleccionado sea correcto
    });
});
