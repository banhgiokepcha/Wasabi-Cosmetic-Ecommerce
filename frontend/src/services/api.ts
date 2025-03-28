import axios, { AxiosInstance } from "axios";

class API {
    private instance: AxiosInstance;
    constructor() {

          this.instance = axios.create({
            baseURL: "http://localhost:3001/"
          });
      
    }

    /* eslint-disable  @typescript-eslint/no-explicit-any */
    protected async get(endPoint: string, body?: any): Promise<any> {
      const response = await this.instance.get(endPoint, { params: body })
      return response;
    };
}

export default API;