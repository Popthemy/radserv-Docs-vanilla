import * as helper from "../utils/helper.js";

export default class View {

  _data;
  _parentElement;

  render(data) {

    if (!data) return console.error('no data');
    this._data = data;
    this._parentElement.innerHTML = this._generateMarkup();
  }

  _generateMarkup(){
     throw new Error("Child class must implement _generateMarkup");
  }

}

