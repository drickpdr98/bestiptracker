import { Handler } from "leaflet";

class View {
  _parentElement = document.querySelector(".ip-lists");

  _data;

  _renderWindow(handler) {
    ["load", "submit"].forEach((changeEvent) =>
      window.addEventListener(changeEvent, () => {
        handler();
      })
    );
  }

  _render(data) {
    this._clear();

    this._data = data;

    const HTML = this._generateHTML();

    this._parentElement.insertAdjacentHTML("afterbegin", HTML);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _renderLoader() {
    this._clear();

    const html = `
    <div class="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>`;

    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  _generateHTML() {
    return `  
    <li class="ip-line">
      <h4>IP Address:</h4>
      <p>${this._data.ip}</p>
    </li>
    <li class="ip-line">
      <h4>Location:</h4>
      <p>${this._data.city}, ${this._data.country}, ${this._data.continent}${
      this._data.zipcode ? "," + " " + this._data.zipcode : " "
    }</p>
    </li>
    <li class="ip-line">
      <h4>Location Coordinates:</h4>
      <p>Latitude: ${Math.round(+this._data.latitude)}</p>
      <p>Longitude: ${Math.round(+this._data.longitude)}</p>
    </li>
    <li class="ip-line">
      <h4>Internet Service Provider:</h4>
      <p>${this._data.ispProvider}</p>
    </li>
    `;
  }
}

export default new View();
