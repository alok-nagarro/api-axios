import axios, { AxiosRequestConfig } from "axios";
import * as chalk from "chalk";
import { ApiHelper } from "./api-helper";
import * as data from "../json-data/request-bodies/test-data.json";
const maxRetry = parseInt(process.env.MAX_HEALTH_RETRY);

export class BaseLibrary {
  async isApiHealthy() {
    console.log(chalk.yellow("Checking API health before test execution..."));
    let healthCheckResponse;
    let healthStatusCode;
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED=0;
    const config: any = {
      //Below endpoint will be replaced with a proper /health or /ping endpoint
      url: `${process.env.DEMOQA_URL}?name=${data.positiveTest.name}`,
    };
    for (let i = 0; i < maxRetry; i++) {
      healthCheckResponse = await axios.request(config);
      if (healthCheckResponse) {
        healthStatusCode = healthCheckResponse.status;
        if (healthStatusCode === 200) {
          console.log(
            chalk.green("API is healthy, moving forward with execution >>")
          );
          break;
        } else {
          console.log(
            chalk.yellow(
              "Warm up - Checking API /health before test execution..."
            )
          );
          if (i === maxRetry - 1) {
            throw new Error(
              chalk.red(
                "Warm up - API /health is down!!! Suspending test execution."
              )
            );
          }
        }
      } else {
        console.log(
          chalk.yellow(
            "Warm up - Checking API /health before test execution..."
          )
        );
        if (i === maxRetry - 1) {
          throw new Error(
            chalk.red(
              "Warm up - API /health is down!!! Suspending test execution."
            )
          );
        }
      }
    }
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
