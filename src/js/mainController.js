import * as model from "./model.js";
import * as helper from "./utils/helper.js";
import relatedArticlesView from "./views/relatedArticlesView.js";
import articleView from "./views/articleView.js";
import navSectionView from "./views/navSectionView.js";
import breadcrumbView from "./views/breadcrumbView.js";
import mobileNavView from "./views/mobileNav.js";
import searchView from "./views/searchView.js";

function controlSection(href = "#welcome") {
  model.loadSection(helper.normalizeHrefText(href));
  breadcrumbView.render(href);
  articleView.render(model.state.article);
  relatedArticlesView.render(model.state.relatedArticles);
  helper.windowScrollToTop();
}

function controlLinks(event) {
  const href = event.currentTarget.getAttribute("href");
  if (!href) return console.error("no href!");
  controlSection(href);
}

function controlSearchResult(query) {
  console.log("i begin controller sea", query);
  model.loadSearchData(query);
  model.state.searchData;

  // console.error(JSON.stringify(model.state.searchResult))
  searchView.render({"query":query, "result":model.state.searchResult});
}

const welcome = () => {
  console.log("Welcome to HealthTech Pro User Guide!!!");
};

function init() {
  welcome();
  controlSection("#quick-start");
  navSectionView.addHandlerHrefs(controlLinks);
  searchView.addHandlerSearchInput(controlSearchResult);
}

init();
