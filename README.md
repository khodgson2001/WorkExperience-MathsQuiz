# Maths Quiz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Work Experience Report
Over the course of 5 days, I developed an Angular4 Maths Quiz. This quiz randomly generates questions and the player (students in the case study) must answer 20 questions in 2 minutes. This will then be saved to a local database.
To improve upon this app, I would plan on doing the following:
 - Making the layout more responsive (using Bootstrap)
 - Create a database (possible through SQL) that will save the scores online

## Replication
To replicate my work, you would need to have the following:
 - Atom IDE
 - A Git Client (i.e. GitBash or GitKraken)
 - Node.JS with the following installed (Angular 4, Firebase and Bootstrap)
 - A cloud database (Firebase)
To get started start a new Git Bash (or whatever you are using).
Then install angular-cli with `npm i -g @angular/cli`
You then need to create an angular app using the angular-cli with `ng new "project name"`
Once done, do the command `ng serve`. This will allow you to run the app in development before making any commitments in GitHub.
For editing, make the changes in files `app.component.html` and `app.component.ts`in the file area `<ProjectName/src/app/`. You can view any changes at `localhost:4200`

## Installing Node.JS modules
You can get the Firebase tools b running the command `npm install -g firebase-tools` - this will allow you to upload to Firebase
You can get the Angular CLI by running the command `npm install -g @angular/cli` - this will allow you to use the Angular CLI.

## Deployment to Firebase
Once you have installed the Firebase tools - you need an account. To make an account head to https://console.firebase.google.com . Then login to the firebase cli by using `firebase login`
After you have logged in, you need to initialise your project with `firebase init`
You then need to do `ng build`, this will generate a "/dist" folder. Then deploy using `firebase deploy`. For more help on this, visit https://goo.gl/ZxSN6t

## GitHub
You can also upload to GitHub by creating a GitHub repo, then removing any firebase files in your project director. Do `git init` - this initialises your repo, then copy the command (4th/5th command in list) - it begins with `git remote ...`. Once you have done that, do `git add .` or `git . add --or` , then `git config --global user.email "your email"` . Follow this with the same command, but end with `user.name "user name"` - this will say what your username will be when you upload to GitHub. Once you have entered this information, do `git commit -m "first commit"`. This will be your first commitment. You can then push our work upto GitHub using `git push`
