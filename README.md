# API Integration tests framework

This framework cover positive and negative tests for the endpoints. Scenarios are automated with the use of axios & jest modules

### Steps to execute tests

Step 1: Navigate to <root>

Step 2: `npm install` to install dependencies

Step 3: If connecting to VPN to access SIT endpoints, then set proxy using below command, else ignore this step:

`export http_proxy=http://localhost:3128`

Step 4: `npm run test:<env>` to run Api integration tests. Currently supported environment is `sit`

Step 5: Report file is saved at `api-tests/html-report/report.html`
