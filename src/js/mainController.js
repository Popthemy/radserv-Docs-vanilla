import * as model from './model.js'
import relatedArticlesView from './views/relatedArticlesView.js';
import articleView from './views/articleView.js';
import * as helper from './utils/helper.js'


const controlSection = function (href="#welcome"){


  model.loadSection(helper.normalizeHrefText(href));

  // console.error(JSON.stringify(model.state))
  relatedArticlesView.render(model.state.relatedArticles)
  articleView.render(model.state.article)
}

const welcome = () => {
  console.log("Welcome to RadServ User Guide!!!");
};

function init(){
 welcome()
 controlSection('#nice');
}

init();
