# APIServiceAutomationTest

# Weather Station Registration API Testing
This project focuses on testing the registration and retrieval functionalities of a weather station API using Jest and Supertest Library.

## Description
This project involves testing the registration and retrieval functionalities of a weather station API using automated tests. 
The tests are written using the Jest testing framework and utilize the Supertest library to make HTTP requests to the API endpoints.

## Installation

1. Clone the repository to your local machine:
git clone https://github.com/SeleniumAutomationCode/CucumberBDDFrameworkTest.git
using git bash commond prompt
2. Import the cloned project to Visual Studio code  
3. Install node js https://nodejs.org/en
4. install npm
  check versio npm -v and node -v
5. Open command prompt change the directory to project
6. Install NPM
   Command :  npm i  or npm install
7. Install Jest tools
   Command : npm install jest --save-dev
8. Install Supertest libaray or axios library
   Command : npm install supertest --save-dev
9. Add Script execution configurations on package.json file
    "scripts": {
    "test": "jest --coverage",
    "test1": "jest --config=jest.config.js"
}
10. Install html  jest report configuration
    Command: npm install jest-html-reporter --save-dev
  Add default report coverage directory on package.json file
"jest": {
    "collectCoverage": true,
    "coverageReporters":
     [
      "lcov"
    ],
    "coverageDirectory": "./output/code-coverage/",
    "reporters":
    [
      "default",
      "jest-html-reporter"
    ]
    }

# Framework Components
  Test Case Folder(Created The test suite consists of several test scenarios)
1. Register a user without an API key and validate the error response
2. Register a user with an API key and validate the response details.
3. Retrieve a registered station with a valid API key and validate its details.
4. Register a station with a different external ID and validate the response details.
5. Retrieve the newly registered station with a valid API key and validate its details.
6. Retrieve a registered station without an API key and validate the error response. 

