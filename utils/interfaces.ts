export type MoaTokenRequestHeaders = {
  Accept: string;
  "Content-Type": string;
  Authorization: string;
};

export type AxiosRequestConfigType = {
  httpsAgent?: string;
};

export type IAgeResponseDataType = {
  count: number;
  name: string;
  age: number;
};
export type MoaTokenRequestBody = {
  grant_type: string;
  username: string;
  password: string;
  scope: string;
};

export type MoaTokenRequestConfig = {
  method: string;
  url: string;
  headers: string;
  data: string;
  httpsAgent?: string;
};

export type IBook = {
  isbn: string;
  title: string;
  subTitle: string;
  author: string;
  publish_date: string;
  publisher: string;
  pages: number;
  description: string;
  website: string;
};

export interface nameTestData {
  name: string;
}

export interface testType {
  positiveTest: nameTestData;
  negativeTest: nameTestData;
}
