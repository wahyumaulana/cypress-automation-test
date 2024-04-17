# Cypress Automation Test

## Introduction

Welcome to the documentation for the Cypress Automation Test repository. This documentation provides information on how to install, configure, and use Cypress Automation Test for efficient testing. Cypress Automation Test framework built with JavaScript (JS) that follows the Page Object Model (POM) design pattern to implement the UI tests for Autobahn SignUp Test.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Project Sturcture](#project-structure)
4. [Test Cases](#test-cases)
5. [Running the Tests](#running-the-tests)


### Prerequisites

Before running the tests, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository

2. Navigate to the project directory:
```sh
$ cd cypress-autoamtion-test
```
3. Install the dependencies:
```sh
$ npm install
```

### Project Structure
The project structure of Cypress Automation Test is as follows:

```
cypress-automation-test/
│
├── cypress/
│   ├── e2e/
│   │   ├── test.spec.js
│   │   └── ...
│   ├── fixtures/
│   │   └── example.json
│   ├── pages/
│   │   ├── pageobject.js
│   │   └── ...
│   ├── support/
│       └── commands.js
│       └── e2e.js
│  
├── cypress.config.json
├── package-lock.json
├── package.json
└── README.md
```

### Test Cases

Test cases covering positive and negative test scenario to ensure the Sign Up functionality. Below are some of the test cases included:

1. **Signs up using a temporary email**
   - Verify that users can sign up with valid email and password.
   - Verify that user can input their details information
   - Verify that the "Sign Up" button is clickable after all mandatory field inputed

2. **Sign up with empty email**
   - Verify that users can not sign up with empty email.
   - Verify error message on the email field.

3. **Sign up with empty password**
   - Verify that users can not sign up with empty password.
   - Verify error message on the password field.

4. **Sign up with invalid email format**
   - Verify that users can not sign up with invalid email format.
   - Verify error message on the email field.
   - Verify that the "Sign Up" button is disabled

5. **Sign up with invalid password format**
   - Verify that users can not sign up with invalid password format.
   - Verify error message on the password field.
   - Verify that the "Sign Up" button is disabled

6. **Sign up with empty data user and invalid phone number**
   - Verify that users should input value for mandatory field.
   - Verify that users should input valid phone number.
   - Verify error message on each field.
   - Verify that the "Sign Up" button is disabled when data provided still not valid.
   

### Running the Tests

To run the Cypress tests, use the following command

- To run the tests using Cypress GUI:
```sh
$ npx cypress open
```
- To run the tests on your terminal:
```sh
$ npx cypress run
```

### Test Results
![alt text](<test-results/Screen Shot 2024-04-17 at 10.47.18.png>)
