class LoginPage {
  get emailField() {
    return cy.get('[name="email"]'); // Ajusta al selector real del campo email
  }

  get passwordField() {
    return cy.get('[name="password"]'); // Ajusta al selector real del campo password
  }

  get loginButton() {
    return cy.get('button[type="submit"]'); // Ajusta al selector real del botón de login
  }

  login(email, password) {
    this.emailField.type(email);
    this.passwordField.type(password);
    this.loginButton.click();
  }
}

export default new LoginPage();
