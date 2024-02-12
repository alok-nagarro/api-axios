import { BaseLibrary } from "./utils/base-library";
const base = new BaseLibrary();

const globalSetup = async () => {
  await base.isApiHealthy();
};

export default globalSetup;
