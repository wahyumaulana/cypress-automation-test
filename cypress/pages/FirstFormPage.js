class FirstFormPage {
  constructor() {
    this.emailInput = 'input[name="email"]';
    this.passwordInput = 'input[name="password"]';
    this.signupButton = '.custom-button .btn.primary.button-large';
    this.emailFieldErrorMessages = '.input-set.error';
    this.passwordFieldErrorMessages = '.input-set.has-error';
    this.strengthBar = '.strength-bar';
  }

  visitSignupPage() {
    cy.visit('https://autobahn.security/signup');
  }

  fillEmail(email) {
    cy.get(this.emailInput).type(email);
  }

  fillPassword(password) {
    cy.get(this.passwordInput).type(password);
  }
  
  clearEmail(){
    cy.get(this.emailInput).clear()
  }
  clearPassword(){
    cy.get(this.passwordInput).clear()
  }

  clickSignupButton() {
    cy.get(this.signupButton).click();
  }
  
  verifySignupButtonIsDisabled () {
    cy.get(this.signupButton).should('have.class', 'disabled');
  }

  getEmailFieldErrorMessages() {
    return cy.get(this.emailFieldErrorMessages);
  }

  getPasswordFieldErrorMessages() {
    return cy.get(this.passwordFieldErrorMessages);
  }

  getPasswordStrength() {
    return cy.get(this.strengthBar);
  }

  signUpWithValidEmailAndPassword(email,password){
    this.fillEmail(email);
    this.fillPassword(password);
    this.getPasswordStrength().should('contain', 'Very Strong');
    this.clickSignupButton();
  }
}

const firstFormPage = new FirstFormPage();
export default firstFormPage;
