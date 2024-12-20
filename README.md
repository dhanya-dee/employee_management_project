# EmployeeManagement
Every employee hired to the company's files can be edited,viewed and deleted. Rendering of the application is using Github Pages.

**Tech stack used**: Angular 2+, json-server (package) handles data (Hardcoded for now)
**Code Formatters**: ES Lint (extension), JSON Language Features, Prettier - Code formatter (extension)

To run the backend: We use json-server: https://www.npmjs.com/package/json-server 

 =>Step 1: npx json-server db.json ,inside the json folder in the project 
  =>Step 2: http://localhost:3000/currentEmployee or http://localhost:3000/displayEmployees is able to hit with a data on the browser and keep this terminal session runnning along with Angular ng serve in another terminal

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.5.

#UI Interface:
![image](https://github.com/user-attachments/assets/a49e79aa-3121-4872-a1ec-3742d50b5438)





## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
