import View from "./view.js";
import * as helper from '../utils/helper.js'


class ArticleView extends View {
  _parentElement = document.getElementById("mainContent");
  _paginationContainer = document.querySelector(".pagination");

  // render(data){
    
  // }

  _generateMarkup(){
    return this._data.template + this._generatePagination()
  }

  _generatePagination() {
    if (!this._data.article?.pagination) return '';

    const prevLink = this._data.article.pagination?.prev;
    const nextLink = this._data.article.pagination?.next;

    const prev = `
              <a href="${prevLink}" class="prev">
                <svg class="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              <span>${helper.normalizeHrefText(prevLink)}</span>
              </a>
    `;

    const next = `
    <a href="${nextLink}" class="next">
      <span>${helper.normalizeHrefText(nextLink)}</span>
      <svg class="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </a>
    `;
    return `
                <div class="pagination">
                    ${prevLink ? `${prev}` : ""}
                    ${nextLink ? `${next}` : ""}
                </div>
    `;
  }
}

export default new ArticleView()