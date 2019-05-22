import axios from "axios";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
      paramsOrData._token = (
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJhc2lsIiwiaWF0IjoxNTU4NTU2NzIyfQ.f7oeUKJ_gY2NnlvQEBNM0twSvuwCKJi4SADYiQy45Yw")

    //Olivia's token
    // paramsOrData._token = ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBlcHBlciIsImlhdCI6MTU1ODU0OTMyMX0.ktSQjP5Z8oZBSn-GJzoWj1XRYtOvegkep2p3Fja6aEY");


    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData})).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  static async getFilteredCompanies(query) {
    let res = await this.request(`companies?search=${query}`);
    return res.companies;
  }

  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }  

  static async getFilteredJobs(query) {
    let res = await this.request(`jobs?search=${query}`);
    return res.jobs;
  }  


}

export default JoblyApi;