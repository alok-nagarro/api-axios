import axios from "axios";
import * as chalk from "chalk";

export class ApiHelper {
  async getAge(name: string) {
    const retrieveBooksRequest: any = {
      method: "get",
      url: `${process.env.DEMOQA_URL}`,
      params: { name: name },
    };
    return retrieveBooksRequest;
  }

  async getAgeWithoutParameter() {
    const retrieveBooksRequest: any = {
      method: "get",
      url: `${process.env.DEMOQA_URL}`,
    };
    return retrieveBooksRequest;
  }

  async createBadRequestForNegativeTest(input: string) {
    switch (input) {
      case "missing_name_parameter":
        break;
      case "incorrect_username":
        break;
      case "incorrect_password":
        break;
      default:
        console.log(
          chalk.red(
            "Error: Incorrect input provided. Please check the input parameter"
          )
        );
        break;
    }

    return axios
      .request(await this.getAgeWithoutParameter())
      .catch((error) => error.response);

    // return axios
    //   .request(this.getAge(nameInput))
    //   .catch((error) => error.response);
  }
}
