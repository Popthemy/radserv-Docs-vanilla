import {  getDataArticle, getDataRelatedArticles  } from "./data.js"


export const state = {
  relatedArticles:[],
  currentSection:'',
  article:{},
}



export function loadSection(section){

  if (!section) return console.Error('no section!!')

  state.currentSection = section;
  state.article = getDataArticle(section);
  state.relatedArticles = getDataRelatedArticles(section);
  console.error(`state: ${state.currentSection}`);

}
