# AMP code test submission

This is my submission to the AMP code test.

## Skills

I have attempted to demonstrate my skills in:

- Responsive design
    - "People" tiles are responsive, using Bootstrap grid system.
    - "Sort" button is also responsive, using Bootstrap.
- Sass / css
    - Styling is extremely minimal, using Sass variables for configuration, rather than re-styling.
- Semantics
    - Descriptive class names on key elements and textual alternatives for non-text elements.
- Accessibility
    - Use of labels, for form fields.
    - Textual alternatives for non-text elements.
- JavaScript
    - Clean, minimal Javascript code to satisfy requirements.
- AngularJS
    - Appropriate use of Angular framework:
        - Controller for controlling data flow.
        - View and angular directives and filters for filtering, sorting and displaying data.
        - Angular mocks and utilities for testing.
- Automated testing of JavaScript
    - Unit testing where possible.
    - Minimal e2e testing, where required. (See Assumptions & Considerations below.)
- Git
    - Tried to keep commits small and focussed, with changes summarised in a descriptive commit message.
- Grunt or Gulp (we use gulp here)
    - Used Grunt as already configured, with some minor modifications.

## Assumptions and Considerations

- There were some minor mistakes in the data, which I corrected manually. I assumed that, given the time-constraint, this would be preferred.
- I have not implemented minification or concatenation of Javascript.
- The solution was only tested in the latest version of Chrome (using Dev tools, to simulate different screen-sizes).
- As the filtering and sorting is done with built-in Angular directives (which I believe is the simple, effective, minimal way of doing it in this scenario) I didn't think unit-tests would be possible or appropriate. So I've tested those features using two simple e2e tests.
- I have set things up simply, with a single index page / view and controller. I opted not to go as far as breaking up the screen into directives, as I didn't see that being necessary, given the limited scope of the exercise.
- The whole thing (except for e2e tests, which I had some difficulty setting up on Windows) has been tested on a Windows VM, freshly installed from scratch. However, if you have any issues during installation, please feel free to contact me: jonathan.conway@gmail.com.

## Installation

1. Install Python 2.7 and ensure it is in the PATH (optional, only needed for running end-to-end tests)
2. `npm i -g grunt-cli bower`
3. Clone the solution and `cd` into the folder
4. `npm i`
5. `bower i`

## Running

### Running the solution

`npm start`

### Running the unit tests

`npm test`

### Running the end-to-end tests

`npm run e2e`

## Angular2 version

I have built a preliminary Angular2 version of the test. This version isn't finalised or stable, but it demonstrates my interest in becoming more familiar with Angular2.

You can find it in the [gulp-angular2](https://bitbucket.org/jonathanconway/amp-code-test-jonathan-conway/src/79471797a9e95374331cbe46fa780a10ad003795/?at=gulp-angular2) branch.