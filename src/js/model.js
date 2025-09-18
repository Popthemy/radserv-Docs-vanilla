import {  getDataArticle, getDataRelatedArticles, generateSearchContent } from "./data.js"



export const state = {
  relatedArticles:[],
  currentSection:'',
  article:{},
  searchResult:[], 
}

export function loadSection(section){

  if (!section) return console.Error('no section!!')

  state.currentSection = section;
  state.article = getDataArticle(section);
  state.relatedArticles = getDataRelatedArticles(section);
  console.error(`state: ${state.currentSection}`);
}

export function loadSearchData(query){
  const data = Array.from(document.querySelectorAll('.nav-item')).map(item=>{
    const itemTitle =item.textContent.trim();
    return {
      title: itemTitle,
      url: item.getAttribute("href"),
      category: item.getAttribute("data-category") || "",
      tags: item.getAttribute("data-tags") || "",
      content:
        generateSearchContent(itemTitle) ||
        `Learn more about ${itemTitle} from Documentation.`,
    };
  })

  const searchData = data.filter(item=> (
    item.title.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query) ||
    item.tags.toLowerCase().includes(query) ||
    item.content.toLowerCase().includes(query)
  ))
  state.searchResult = searchData;
}