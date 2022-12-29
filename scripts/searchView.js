import view from "./view";

class searchView {
  _parentElement = document.querySelector(".ip-lists");

  _returnInput = function (handler) {
    const btn = document.querySelector(".primary-button");

    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const input = document.getElementById("input");

      // controlGetInput(input.value);

      input.value = "";
    });
  };
}

export default new searchView();
