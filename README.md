# React Redux Todo Application
Sample todo application that uses react to organise component, share state with redux, and use the Firebase NOSQL database as a JSON store.

## Setup the JS development environment
* download and install the Node web server (includes NPM) from https://nodejs.org *
$ node -v
$ npm -v
* download webpack bundles all 3rd party dependencies including Babel to transpile JSX to JS *
$ npm install -g webpack@1.12.13
$ npm rebuild node-sass
$ webpack -v

## Setup the project repository
$ git clone git@github.com:RianaFerreira/react-redux-todo.git  
$ git init  
$ git remote add origin git@github.com:RianaFerreira/react-redux-todo.git  
$ git push -u origin master  

## Pull in the project modules and run the server locally
$ npm install
$ webpack -w
$ node server.js

## Run the tests
$ npm test

## Design
* [Zurb Foundation] (http://foundation.zurb.com/sites/docs/)
* [Adobe Color] (https://color.adobe.com/Color-Theme-6-color-theme-8723202/)

## Testing References
* [Expect] (https://github.com/mjackson/expect) assertions
* [Expect Cheatsheet] (http://ricostacruz.com/cheatsheets/expectjs.html)
* [Mocha] (https://mochajs.org/) break tests up into sections
* [Karma] (https://karma-runner.github.io/1.0/index.html) runs all the tests

## NPM required testing modules
* karma
* karma-chrome-launcher
* karma-mocha
* karma-mocha-reporter
* karma-sourcemap-loader
* karma-webpack
* mocha
* expect
* deep-freeze-strict

## NPM time management module
* [momentjs](http://momentjs.com/)

## NPM unique ID module
* [uuid](https://www.npmjs.com/package/uuid)

## NPM environment variable management
* [Node ENV file](https://www.npmjs.com/package/node-env-file)

## NPM redux modules
* redux
* react-redux
* redux-thunk
