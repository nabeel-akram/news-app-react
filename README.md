# News App in ReactJS with mock Express server

To run the app please follow the steps below:

## 1. Install dependencies

In the project directory, run `npm install` to install the required dependencies

## 2. Run the app in development mode

Run `npm start`

This script is configured to run mock server and the react app concurrently

- Mock API will run at http://localhost:5000
- React APP will run at http://localhost:3000

### Mock Express Server

- Consumes data.json
- Handles `GET` method to return paginated news data
- Processes search queries and filters news data based on matching titles and content in the news body

### App is structured as follows::

- File and folder structure is designed with scalability in mind
- Code is organized by features, with news being the current focus
- There is a clear separation of concerns, keeping the UI distinct from the API, reducers, and business logic
- UI is divided in to separate and smaller components, enhancing code readability and clarity

### State Management

- Combined useReducer and Context API to create a custom state management solution which is scalable and follows flux pattern

##

Currently the app is not configured to run in the production as it requires post build scripts to run the mock server and serve the react app.
