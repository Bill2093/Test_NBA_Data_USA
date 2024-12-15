class LoginPage {
  get emailField() {
    return cy.get('[name="email"]'); 
  }

  get passwordField() {
    return cy.get('[name="password"]'); 
  }

  get loginButton() {
    return cy.get('button[type="submit"]'); 
  }

  login(email, password) {
    this.emailField.type(email);
    this.passwordField.type(password);
    this.loginButton.click();
  }
}

export default new LoginPage();
