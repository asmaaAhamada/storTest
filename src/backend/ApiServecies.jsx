import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();




// POST مع توكن
export const postData = async (url, data = {}, customHeaders = {}) => {
  try {
    const response = await axios.post(url, data, {
headers: {
  'Content-Type': 'application/json',
  ...customHeaders
}    });
    return response.data || response;
  } catch (error) {
    console.error("AXIOS ERROR:", error);
    throw error.response ? error.response.data : error;
  }
};


//get
export const getData = async (url, customHeaders = {}) => {
  try {
    const response = await axios.get(url, {
      headers: {
  'Content-Type': 'application/json',
  ...customHeaders
}    });
    return response.data || response;
  } catch (error) {
    console.error("AXIOS ERROR:", error);
    throw error.response ? error.response.data : error;
  }
};





