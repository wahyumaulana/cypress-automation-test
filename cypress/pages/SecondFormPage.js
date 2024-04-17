class SecondFormPage {
  constructor() {
    this.headerTitle = '.heading';
    this.firstNameInput = 'input[name="first-name"]';
    this.lastNameInput = 'input[name="last-name"]';
    this.industryDropdown = 'div[name="industry"]';
    this.industryOption = '.menu.toggled .items';
    this.countryDropdown = '.iti__selected-flag';
    this.countryNameText = '.iti__country-name';
    this.phoneNumberInput = 'input[name="phone-number"]';
    this.signupButton = '.custom-button .btn.primary.button-large';
    this.subtitle = 'p.subtitle';
  }

  fillFirstName(firstName) {
    cy.get(this.firstNameInput).type(firstName);
  }

  fillLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
  }

  fillPhoneNumber(phoneNumber) {
    cy.get(this.phoneNumberInput).type(phoneNumber);
  }

  clearFistName(){
    cy.get(this.firstNameInput).clear();
  }
  clearLastName(){
    cy.get(this.lastNameInput).clear();
  }

  clickPhoneNumberField(){
    cy.get(this.phoneNumberInput).click();
  }
  
  selectIndustryOption(optionIndex) {
    cy.get(this.industryDropdown).click();
    cy.get(this.industryOption).eq(optionIndex).click();
  }

  clickIndustryDropdownTwice(){
    cy.get(this.industryDropdown).click();
    cy.get(this.industryDropdown).click();
  }

  selectCountry(countryName) {
    cy.get(this.countryDropdown).click();
    cy.contains(this.countryNameText, countryName).click();
  }

  verifyButtonIsActive() {
    cy.get(this.signupButton).should('have.class', 'active');
  }

  clickStartUsingAutobahnButton() {
    cy.get(this.signupButton).click();
  }

  verifyFormTitleAndSubtitle() {
    cy.get(this.headerTitle).should('contain', 'Welcome!');
    cy.get(this.subtitle).should('contain', 'Add your info to make collaborating easy');
  }

  getFirstNameErrorMessages() {
    return cy.get(this.firstNameInput).prev('label');
  }

  getLastNameFieldErrorMessages() {
    return cy.get(this.lastNameInput).prev('label');
  }

  getIndustryFieldErrorMessages() {
    return cy.get(this.industryDropdown).parents('div.input-set.error');
  }

  getPhoneNumberFieldErrorMessages() {
    return cy.get(this.phoneNumberInput).parents('div.input-set.error');
  }
}

const secondFormPage = new SecondFormPage();
export default secondFormPage
