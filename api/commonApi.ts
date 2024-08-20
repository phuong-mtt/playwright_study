import { APIRequestContext, defineConfig, request } from '@playwright/test';
export class CommonApi{
  readonly baseUrl: string;

  constructor() {
      this.baseUrl = "https://reqres.in/api/"
  }

  async getResponseGetList(pageNum: number){
    const requestContext = await request.newContext()
    return await requestContext.get(this.baseUrl + "users", {
      params: {
        'page': pageNum,
      }
    });
  }

  async getResponseCreateUser(requestBody: Object){
    const requestContext = await request.newContext()
    return await requestContext.post(this.baseUrl + "users", {
      data: requestBody
    });
  }

  async getRequestBody(){
    const body =
    {
        "name": "morpheus",
        "job": "leader"
    }
    return body 
  }
}


export default defineConfig({
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      'Accept': 'application/vnd.github.v3+json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      'Authorization': `token ${process.env.API_TOKEN}`,
    },
  }
});