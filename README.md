# City Distance Calculator

This Node.js project calculates the distance between two cities based on their latitude and longitude coordinates. It utilizes the Haversine formula to compute the distance. The project consists of server-side code written in JavaScript and an HTML interface for user input, and the service is hosted through Vercel.

The website is located at:
[https://distance-between-cities-service.vercel.app/](https://distance-between-cities-service.vercel.app/)

## Dependencies

The following npm packages are used in this project:

- dotenv: ^16.0.3
- express: ^4.18.2
- haversine-distance: ^1.2.1
- path: ^0.12.7

## Installation

To install the project and its dependencies, follow these steps:

1. Clone the repository: `git clone https://github.com/camillgh/distance-between-cities-service`
2. Change to the project directory: `cd your-repo`
3. Install dependencies: `npm install`

## Configuration

Before running the project, you need to set up an environment variable. Create a `.env` file in the root directory of the project, and add the following line to the file: `CITY_API_KEY=your-api-key`.

## Usage

1. Start the server: `npm start`
2. Open a web browser and navigate to `http://localhost:3000`
3. Enter the names of two cities in the input fields.
4. Click the "Search" button to calculate the distance between the cities.
5. The result will be displayed below the input fields.
6. Upon invalid inputs (non-exisiting cities) in either input field, an error message will be displayed on the site.
