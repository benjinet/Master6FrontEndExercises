Intro
The goal of this sample is to get started with Angular.

We will get as starting point an application that displays a list of github members that belongs to an organization (in the starting excercise is hardcoded to lemoncode), and we will add an input element to let the user choose another organization to query.

Excercise
Start with the starting implementation that is located under the folder 00_start.

Let's install the needed dependencies.

npm install
And start the application to check that everything is working as expected.
npm start
If we check the current implementation we are getting a list of members belonging to lemoncode organization, that's nice but we would like to let the user to be able to type the name of the orgnization he wants, hit ok and display the list of members for that organization.

Hints:

Create a new property on MembersTableComponent with the current organization name (lemoncode by default).
Create an input to hold the organization member name.
Tie up organization property change. Use ngModel (two way binding) directive to achieve this goal.
Use the organization property before running the query.
Optional
As optional part of this exercise you can migrate it to ngrx. Just for simplicity, just handle in ngrx the input changes and read the new state on component. Do not handle load data side effect.

Hints

Install @ngrx/store
Link store to app module (use forRoot)
Link store to feature module (use forFeature)
Create action for input organization changes
Create reducer
Dispatch action from component
Read the new state provide by ngrx
About Basefactor + Lemoncode
We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

Basefactor, consultancy by Lemoncode provides consultancy and coaching services.

Lemoncode provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend

# AngularExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

