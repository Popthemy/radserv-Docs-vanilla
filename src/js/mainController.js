import * as model from './model.js'
import navigationSectionView from './views/navgationSectionView.js';
import * as helper from './utils/helper.js'


const controlSection = function (href="#welcome"){

  model.loadSection(helper.normalizeHrefText(href));

  console.log(model.state)
  navigationSectionView.render(model.state)
}

const welcome = () => {
  console.log("Welcome to RadServ User Guide!!!");
};

function init(){
 welcome()
 controlSection('#qui');
}

init();
