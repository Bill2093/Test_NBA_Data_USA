import LoginPage from '../pages/loginPage';

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.nba.com/account/sign-in'); // URL del login

    // Interactúa con el banner de privacidad si aparece
    cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }) // Selector exacto del botón
      .click({ force: true });
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      const { email, password } = users.validUser;
      LoginPage.login(email, password);

      // Verifica si hay redirección
      cy.url().should('not.include', 'account/sign-in');

      // Valida un texto visible después del login exitoso
      cy.contains('Welcome').should('be.visible'); // Cambia "Welcome" según el texto visible tras el login
    });
  });

  it('should fail to login with invalid credentials', () => {
    cy.fixture('users').then((users) => {
      const { email, password } = users.invalidUser;
      LoginPage.login(email, password);

      // Verifica mensaje de error en la página
      cy.contains('Invalid email or password').should('be.visible'); // Cambia según el mensaje real de error
    });
  });
});

