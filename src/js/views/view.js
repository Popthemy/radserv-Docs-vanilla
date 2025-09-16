import * as helper from "../utils/helper.js";

export default class View {

  _data;
  _parentElement;

  render(data) {

    if (!data) return;
    this._data = data;

    this._parentElement.innerHTML = this._generateMarkup();

    // refactor 
    // this._relatedArticles = this._data.relatedArticles;
  
    // this.renderCurrentArticle()
    // this._renderPagination()
    // this._renderRelatedArticlesMarkup();
  }

  _generateMarkup(){
     throw new Error("Child class must implement _generateMarkup");
  }

}

