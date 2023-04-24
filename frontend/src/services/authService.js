import axios from "../axios"




export const signup = (user) => {
  return axios.post("http://localhost:8001/v1/auth/signup/", user);
};

export const signin = (user) => {
    return axios.post("http://localhost:8001/v1/auth/login/", user);
  };