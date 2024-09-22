# News App in ReactJS with mock Express server
To run the app please follow the steps below:

## 1. Install dependencies

In the project directory, run `npm install` to install the required dependencies

## 2. Run the app in development mode.

Run `npm start`

This script is configured to run mock server and the react app concurrently
- Mock API will run at http://localhost:5000
- React APP will run at http://localhost:3000

##
### App is architected in the following manner:
- Folder structure is setup keeping the scalability in mind
- Code is organized around features, currently news is the only feature
- Clear separation of concerns by keeping UI separated from api, reducer and business logic
- Each part of the UI is contained in their own separate files promoting code readability and clear understanding

### State Management
- Combined useReducer and Context API to create a custom state management solution which is scalable and follows flux pattern

##

Currently the app is not configured to run in the production as it requires post build scripts to run the mock server and serve the react app.
