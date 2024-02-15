import axios from "axios";
import { ApiHelper } from "../utils/api-helper";
import { IAgeResponseDataType } from "../utils/interfaces";
import { nameTestData } from "../json-data/request-bodies/test-data";
const apiHelper = new ApiHelper();

describe("GET books endpoint ==> ", () => {
  let getResponse: any, responseData: IAgeResponseDataType;
  beforeAll(async () => {
    getResponse = await axios.request(
      await apiHelper.getAge(nameTestData.positiveTest.name)
    );
    // console.log("🚀 ~ beforeAll ~ getResponse: ", await getResponse.data);
    responseData = getResponse.data;
  });
  it("GET books returns 200 status", () => {
    expect(getResponse.status).toBe(200);
  });
  it("response object has Name and Age attributes", () => {
    expect(responseData).toHaveProperty("name");
    expect(responseData).toHaveProperty("age");
  });

  it("Name in the response matches with the name passe in the request", () => {
    expect(responseData.name).toBe(nameTestData.positiveTest.name);
  });
  it("return expected response properties", async () => {
    expect(getResponse.data).toMatchObject({
      count: expect.any(Number),
      name: expect.any(String),
      age: expect.any(Number),
    });
  });
});
