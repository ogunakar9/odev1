import axios from "axios";

// let axios = require("axios");

const getData = async (id) => {
  return (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
}

export default getData;


// module.exports = {getData};
