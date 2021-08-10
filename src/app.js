// let {getData} = require("./lib/services");
import getData from "./lib/services.js";

getData(1).then(r => console.log(r));
