import * as helper from "../utils/helper.js";

export default class View {
  _data;
  _relatedArticles = [];
  _currentSection;
  _parentElement = document.getElementById('mainContent')

  render(data) {
    console.log(`data ${data}`)
    if (!data) return;
    this._data = data;
  
    this._relatedArticles = this._data.relatedArticles;
  
    this.renderCurrentArticle(this._data.article.template)
    this._renderPagination()
    this._renderRelatedArticlesMarkup();
  }

  renderCurrentArticle(template){
    this._parentElement.innerHTML = template;
    this._parentElement.style.display = 'block';
  }

  _renderRelatedArticlesMarkup() {
    const relatedArticleElement = document.querySelector(".related-articles");
    const relatedListElement = document.querySelector(".related-list");

    if (!relatedArticleElement || !relatedListElement) return;

    if (this._relatedArticles.length === 0) {
      relatedArticleElement.style.display = "none";
      return;
    } else {
      console.error(`related article: ${this._relatedArticles}`)
      relatedListElement.innerHTML = this._relatedArticles
        .map(
          (article) => `
        <a href="${article.href}" class="related-item">
          <h4>${article.title}</h4>
          <p>${article.content}</p>
        </a>
      `
        )
        .join("");
      relatedArticleElement.style.display = "block";
      return;
    }
  }


  _renderPagination(){

    if (!this._data.article.pagination) return;
    const prevLink = this._data.article.pagination?.prev
    const nextLink = this._data.article.pagination?.next

    console.error('page:', this._data.article.pagination)

    const prev = `
              <a href="${prevLink}" class="prev">
                <svg class="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              <span>${helper.normalizeHrefText(prevLink)}</span>
              </a>
    `
    
    const next = `
    <a href="${nextLink}" class="next">
      <span>${helper.normalizeHrefText(nextLink)}</span>
      <svg class="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </a>
    `;

    const html = `
                <div class="pagination">
                    ${prevLink? `${prev}` : ""}
                    ${nextLink? `${next}` : ""}
                </div>
    
    `;

    this._parentElement.insertAdjacentHTML("beforeend", html );
    return;
  }


}

