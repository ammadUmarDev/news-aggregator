# Running the project locally

In order to run project locally, you will need to:
- Navigate to the 'DesktopApp' folder.
- Update the env file with valid API keys.
- Run the following command to build the docker image: 'docker build -t news-aggregator .'
- Run the following command to run the Docker container: 'docker run -p 3000:3000 news-aggregator'
- Open the solution in the browser at http://localhost:3000/
