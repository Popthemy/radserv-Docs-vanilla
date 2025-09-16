import * as model from "./model.js";
import * as helper from "./utils/helper.js";
import relatedArticlesView from "./views/relatedArticlesView.js";
import articleView from "./views/articleView.js";
import navSectionView from "./views/navSectionView.js";
import breadcrumbView from "./views/breadcrumbView.js";



function controlSection(href = "#welcome") {
  model.loadSection(helper.normalizeHrefText(href));
  breadcrumbView.render(href);
  articleView.render(model.state.article);
  relatedArticlesView.render(model.state.relatedArticles);
  helper.windowScrollToTop();
  // console.error(JSON.stringify(model.state))
}

function controlLinks(event) {
  const href = event.currentTarget.getAttribute("href");
  if (!href) return console.error("no href!");
  controlSection(href);
}

const welcome = () => {
  console.log("Welcome to RadServ User Guide!!!");
};

function init() {
  welcome();
  controlSection("#quick-start");
  navSectionView.addHandlerHrefs(controlLinks);
}

init();
