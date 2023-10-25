# Redux Counter and Data Fetcher

This project demonstrates a simple counter application using React, Redux Toolkit, and Redux Saga. It showcases how to manage state using slices and handle asynchronous actions with sagas. The application fetches data from an external API using a specified query parameter and displays it along with a counter that can be incremented or decremented asynchronously.

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/redux-counter.git
cd redux-counter
npm install
npm start
```
2. Open http://localhost:3000 to view the application in your browser.

## Usage

- Click the + button to increment the counter asynchronously after a 1-second delay.
- Click the - button to decrement the counter asynchronously after a 1-second delay.
- Click the "fetch data" button to retrieve data from the GitHub API using the input value as a query, and then store it in the Redux state.

## Technologies Used

- React
- Redux Toolkit
- Redux Saga

## Project Structure

- `src/` - Source files for the application.
  - `redux/` - Redux slices and sagas.
    - `counter/` - Redux slice for managing the counter state.
      - `counterSlice.js` - Contains the slice for counter state.
      - `sagas.js` - Contains the saga for handling counter actions.
    - `data/` - Redux slice and saga for fetching data from the API.
      - `dataSlice.js` - Contains the slice for data fetching state.
      - `sagas.js` - Contains the saga for handling data fetching.
  - `App.js` - Main application component.
  - `index.js` - Entry point for the application.

## License

This project is open-source and available under the MIT License.
