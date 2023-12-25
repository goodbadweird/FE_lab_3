const { consoleLog, slider } = require("./slider.js");
import "./main.css";
import "./index.css";
import axios from "axios";
const catigories = document.getElementById("catigories");

const getVacancies = async () => {
  try {
    const response = await axios.get("https://api.hh.ru/vacancies");
    const data = await response.data.items;
    data.map(({ name }) => {
      let p = document.createElement("p");
      p.innerHTML = name;
      console.log(p);
      catigories.insertAdjacentElement("afterbegin", p);
    });
  } catch (err) {
    console.log(err);
  }
};

getVacancies();
consoleLog();
slider();
