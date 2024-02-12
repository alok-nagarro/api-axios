import type { Config } from "@jest/types";
export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
    testMatch: ["**/?(*)+(spec|test).[jt]s?(x)"],
    reporters: [
      "default",
      [
        "jest-html-reporters",
        {
          publicPath: "./html-report",
          filename: "report.html",
          expand: true,
        },
      ],
      [
        "jest-junit",
        {
          outputDirectory: "./html-report",
          outputName: "junit.xml",
        },
      ],
    ],
    verbose: true,
    setupFilesAfterEnv: ["./jest.setup.js"],
    globalSetup: "./jest.globalSetup.ts",
  };
};
