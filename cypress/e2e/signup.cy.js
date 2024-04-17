import firstFormPage from "../pages/FirstFormPage";
import secondFormPage from "../pages/SecondFormPage";

describe('Signup Test', () => {
  const tempEmail = 'danielle772@awgarstone.com';
  const invalidEmail = 'invalidemail';
  const invalidPassword = 'invalidpassword';

  beforeEach(() => {
    firstFormPage.visitSignupPage();
  });

  it('Signs up using a temporary email', () => {
    firstFormPage.signUpWithValidEmailAndPassword(tempEmail,'Testingdev123!')

    cy.wait(2000); // Adjust the wait time as needed

    secondFormPage.verifyFormTitleAndSubtitle();
    secondFormPage.fillFirstName('John');
    secondFormPage.fillLastName('Doe');
    secondFormPage.selectIndustryOption(0); // Select the first industry option
    secondFormPage.selectCountry('Indonesia');
    secondFormPage.fillPhoneNumber('85797513594');
    secondFormPage.verifyButtonIsActive();
    secondFormPage.clickStartUsingAutobahnButton();
  });

  it('Sign up with empty email', () => {
    firstFormPage.fillEmail(tempEmail);
    firstFormPage.fillPassword('Testingdev123!');
    firstFormPage.clearEmail();
    firstFormPage.getEmailFieldErrorMessages().should('contain', 'Field cannot be empty');
    firstFormPage.verifySignupButtonIsDisabled();
  });

  it('Sign up with empty password', () => {
    firstFormPage.fillEmail(tempEmail);
    firstFormPage.fillPassword('123');
    firstFormPage.clearPassword();
    firstFormPage.getPasswordFieldErrorMessages().should('contain', 'Field cannot be empty');
    firstFormPage.verifySignupButtonIsDisabled();
  });

  it('Sign up with invalid email format', () => {
    firstFormPage.fillEmail(invalidEmail);
    firstFormPage.fillPassword('Testingdev123!');
    firstFormPage.getEmailFieldErrorMessages().should('contain', 'Must be a valid email');
    firstFormPage.verifySignupButtonIsDisabled();
  });

  it('Sign up with invalid password format', () => {
    firstFormPage.fillEmail(tempEmail);
    firstFormPage.fillPassword(invalidPassword);
    firstFormPage.getPasswordStrength().should('contain', 'Weak');
    firstFormPage.verifySignupButtonIsDisabled();
  });

  it('Sign up with empty data user and invalid phone number', () => {
    firstFormPage.signUpWithValidEmailAndPassword(tempEmail,'Testingdev123!')

    cy.wait(2000); // Adjust the wait time as needed

    secondFormPage.verifyFormTitleAndSubtitle();
    secondFormPage.fillFirstName('John');
    secondFormPage.fillLastName('Doe');
    secondFormPage.clearFistName();
    secondFormPage.clearLastName();
    secondFormPage.clickIndustryDropdownTwice();
    secondFormPage.fillPhoneNumber('invalid')
    secondFormPage.getFirstNameErrorMessages().should('contain', 'Field cannot be empty');
    secondFormPage.getLastNameFieldErrorMessages().should('contain', 'Field cannot be empty');
    secondFormPage.getIndustryFieldErrorMessages().should('contain', 'Field cannot be empty');
    secondFormPage.getPhoneNumberFieldErrorMessages().should('contain','Please enter a valid phone number')
  });

});
