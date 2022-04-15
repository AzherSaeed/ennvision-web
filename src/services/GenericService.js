import axios from "axios";
// axios.defaults.baseURL = "https://unstationary1.herokuapp.com/api";
axios.defaults.baseURL = "http://3.208.1.250:8080/api/";
// axios.defaults.baseURL = "unstationary-1-3bzm31lzq-arslan456.vercel.app";

class GenericService {
  constructor() {}
  get = (url) =>
    new Promise((resolve, reject) => {
      axios
        .get(url , {
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0OTk5MzI4MywiZXhwIjoxNjUwMDExMjgzfQ.gk-UeF4Q4tHujWYdyhX9-wrUWyP4rUq8tg_8bkLaQv-Gl93CLeLn_mICVE010Z7RbP8tPvDDkSVhCqA8h9uU9Q'
          }
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });



  post = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  put = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  delete = (url) =>
    new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}

export default GenericService;
