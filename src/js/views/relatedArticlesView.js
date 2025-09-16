import View from "./view.js";

class RelatedArticles extends View {
  _parentElement = document.querySelector(".related-list");

  _generateMarkup() {

    const relatedArticleElement = document.querySelector(".related-articles");

    if (!relatedArticleElement || !this._parentElement) return;

    if (this._data.length === 0) {
      relatedArticleElement.style.display = "none";
      return;
    } else {
      return this._data
        .map(
          (article) => `
        <a href="${article.href}" class="related-item">
          <h4>${article.title}</h4>
          <p>${article.content}</p>
        </a>
      `
        )
        .join("");
    }
  }
}

export default new RelatedArticles();
