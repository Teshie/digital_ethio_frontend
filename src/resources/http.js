import axios from "axios";
import { baseURL } from "./apiClient";

const http = axios.create({
  baseURL: ``,
  Headers: {},
});

try {
  http.interceptors.request.use(
    (config) => {
      let data = JSON.parse(localStorage.getItem("ok-marketplace"));

      if (data && data.user_status.token) {
        config.headers["Authorization"] = "Token " + data.user_status.token;
      }

      return config;
    },

    (error) => {
      return Promise.reject(error);
    }
  );
} catch (error) {
  console.log(error);
}

export default http;
