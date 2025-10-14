# CvAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Configuration file for NodeJS server

In order to send emails using the sending form and launch the NodeJS server, create an .env file in server folder and add the environment variables MAIL_SERVICE, MAIL_USER, MAIL_MDP and MAIL_USER_TO respectively for mail service, mail adress and mail password of the mailbox sending the emails and for mail adress of the receiving mailbox. 

## Development server

Run `nodemon server` in server folder for a NodeJS dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the NodeJS source files.

Run `npm run start` for an Angular dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the Angular source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
