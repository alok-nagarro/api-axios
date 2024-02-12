import { ApiHelper } from "../utils/api-helper";

const apiHelper = new ApiHelper();

describe(`Negative Tests==> `, () => {
  let postResponse;

  describe("When request is made -", () => {
    it.each`
      input                       | expected
      ${"missing_name_parameter"} | ${422}
    `(
      "with $input then response code should be $expected",
      async ({ input, expected }) => {
        postResponse = await apiHelper.createBadRequestForNegativeTest(input);
        expect(postResponse.status).toBe(expected);
      }
    );
    it.each`
      input                       | expected
      ${"missing_name_parameter"} | ${`Missing 'name' parameter`}
    `(
      "with $input then response should have error details as $expected",
      async ({ input, expected }) => {
        postResponse = await apiHelper.createBadRequestForNegativeTest(input);
        expect(postResponse.data.error).toContain(expected);
      }
    );
  });
});
