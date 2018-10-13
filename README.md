# Doctor Lookup

#### An Epicodus project using APIs, 12 October 2018

#### By AJ Mcgladdery

## Description

This website allows users to enter search query and receive information about local doctors matching their request. The site will notify users if no matches are found.

## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## API Key instructions
* You will need your own API key for the BetterDoctor API.
* You can request an API key at https://developer.betterdoctor.com
* Once you have your key, you can the portion of the api url currently listed as "${process.env.exports.apiKey}" with your own API key (removing the $ and curly brackets)

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **AJ Mcgladdery**
