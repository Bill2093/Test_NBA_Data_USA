import SchedulePage from '../pages/schedulePage';

describe('Schedule Filters Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.nba.com/schedule'); 
        SchedulePage.acceptPrivacyBanner(); 
    });

    it('should filter by Regular Season', () => {
    
        SchedulePage.selectSeasonTypeOption('Regular Season'); 

        cy.get('select[name="season"]').should('have.value', 'Regular Season'); 
    });

    it('should filter by NBA Cup', () => {
       
        SchedulePage.selectSeasonTypeOption('NBA Cup'); 

        
        cy.get('select[name="season"]').should('have.value', 'NBA Cup'); 
    });
});
