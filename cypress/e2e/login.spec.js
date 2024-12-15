import LoginPage from '../pages/loginPage';

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.nba.com/account/sign-in'); 


    cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }) 
      .click({ force: true });
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      const { email, password } = users.validUser;
      LoginPage.login(email, password);

     
      cy.url().should('not.include', 'account/sign-in');

      cy.contains('Welcome').should('be.visible'); 
    });
  });

  it('should fail to login with invalid credentials', () => {
    cy.fixture('users').then((users) => {
      const { email, password } = users.invalidUser;
      LoginPage.login(email, password);

    
      cy.contains('Invalid email or password').should('be.visible'); 
    });
  });
});

