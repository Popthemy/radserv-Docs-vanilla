
class SearchView {
  _parentElement = document.getElementById("searchResultsList");
  _articleContainer = document.getElementById("mainContent");
  _searchResultContainer = document.getElementById("searchResults");
  _query;
  _data;

  render(data){
    console.log("i begin search view", data)
    this._data = data.result;
    this._query = data.query;
    this._parentElement.innerHTML = this._generateMarkup()
  }

  addHandlerSearchInput(handler) {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;
    searchInput.addEventListener("input", (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query.length < 3) return;
      handler(query);
    });
  }

  _generateMarkup() {

    if (!this._parentElement || !this._searchResultContainer) return;
    if (!this._query) return "No query for the search";
    console.log('no data', this._data)

    let markup;

    if (this._data.length === 0) {
      markup =`
            <div class="search-result-item">
              <div class="search-result-title">No results found</div>
              <div class="search-result-excerpt">
                  No documentation found for "${query}". Try different keywords or browse the navigation menu.
              </div>
            </div>
      `;
    } else{
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
    this._articleContainer.style.display = 'none';
    this._searchResultContainer.style.display = 'block';
    // console.log(searchResultContainer.style.display)
    return markup;
  }

  _highlightText(text, query){
    if(!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    console.log(regex,query)
    return text.replace(
      regex,  
      '<mark style="background-color: rgba(132, 204, 22, 0.3); padding: 0 2px;">$1</mark>'
    )
  }

  _addHandlerHideSearchResult(){


  }

}

export default new SearchView()