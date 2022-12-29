"use strict";

import "regenerator-runtime/runtime.js";
import "core-js";
import { initMap } from "./maps";
import * as model from "./model";
import view from "./view";
import searchView from "./searchView";
import map from "./maps";
import { async } from "regenerator-runtime";

const controlMapView = function (data) {
  map.initMap(data);
};

const controlGetInput = async function (data) {
  await model.getIp(data);

  view._render(model.state.ip);

  controlMapView(model.state.ip);
};

const returnInput = function () {
  const btn = document.querySelector(".primary-button");

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const input = document.getElementById("input");

    controlGetInput(input.value);

    input.value = "";
  });
};

const init = function () {
  view._renderLoader();

  returnInput();

  view._renderWindow(controlGetInput);

  console.clear();
};

init();
