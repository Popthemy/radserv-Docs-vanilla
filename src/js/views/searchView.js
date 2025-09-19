
class SearchView {
  _parentElement = document.getElementById("searchResultsList");
  _articleContainer = document.getElementById("mainContent");
  _searchResultContainer = document.getElementById("searchResults");
  _searchInput = document.getElementById("searchInput");

  _query;
  _data;

  constructor() {
    this._addHandlerHideSearchResults();
  }

  render(data) {
    console.log("i begin search view", data);
    this._data = data.result;
    this._query = data.query;
    this._parentElement.innerHTML = this._generateMarkup();
  }

  addHandlerSearchInput(handler) {
    // const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    this._searchInput.addEventListener("input", (e) => {
      e.preventDefault();
      const query = this._searchInput.value.trim();
      if (query.length < 3) return;
      handler(query);
    });

    this._searchInput.addEventListener("keydown", (e) => {
      // e.preventDefault();
      console.log(e.key);
      if(e.key ==="enter"){
        const query = this._searchInput.value.trim();
        if (query.length < 3) return;
        handler(query);
      }
    });
  }

  _generateMarkup() {
    if (!this._parentElement || !this._searchResultContainer) return;
    if (!this._query) return "No query for the search";

    let markup;

    if (this._data.length === 0) {
      markup = `
            <div class="search-result-item">
              <div class="search-result-title">No results found</div>
              <div class="search-result-excerpt">
                  No documentation found for "${this._query}". Try different keywords or browse the navigation menu.
              </div>
            </div>
      `;
    } else {
      markup = this._data
        .map(
          (item) => `
        <a href="${item.url}" class="search-result-item">
          <div class="search-result-title">${this._highlightText(
            item.title,
            this._query
          )}</div>
          <div class="search-result-excerpt">
              ${this._highlightText(item.content, this._query)}
          </div>
        </a>
        `
        )
        .join("");
    }
    this._articleContainer.style.display = "none";
    this._searchResultContainer.style.display = "block";
    // console.log(searchResultContainer.style.display)
    return markup;
  }

  _highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(
      regex,
      '<mark style="background-color: rgba(132, 204, 22, 0.3); padding: 0 2px;">$1</mark>'
    );
  }

  _addHandlerHideSearchResults() {
    this._searchResultContainer.addEventListener("click", (e) => {
      e.preventDefault();
      const result = e.target.closest(".search-result-item");
      if (!result) return;
      this.hideSearchContainer();
    });
  }

  hideSearchContainer(){
    console.log('i will hide the container');
      this._articleContainer.style.display = "block";
      this._searchResultContainer.style.display = "none";
      this._searchInput.blur();
      this._searchInput.value = "";
  }

  _debounce(func, wait) {
    let timeout;
    return call;
  }
}

export default new SearchView()