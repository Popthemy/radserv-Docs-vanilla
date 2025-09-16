import View from "./view.js";

class Breadcrumb extends View{
  _parentElement = document.querySelector('.breadcrumb');

  _generateMarkup(){
    const paths = this._breadcrumbPathGenerator(this._data);
    
    let markup = "<a href='#'>Home</a>";

    if (!paths) return markup;

    paths.forEach((path,index) => {
      const isLast = index === paths.length - 1;
      markup += `
        <span class="breadcrumb-separator">/</span>
        <span ${isLast ? 'class="breadcrumb-current" aria-current="page"' : ''}>${path}</span>
      `;
    })
    return markup;
  }

  _breadcrumbPathGenerator(href='#'){

    const link = document.querySelector(`.nav-item[href="${href}"]`)
    const navSection = link.closest('.nav-section')
    const span = navSection.querySelector('.nav-section-header span')

    if (!link || !navSection || !span) return;
    const paths = [span.textContent.trim() , link.textContent.trim() ]
  
    return paths
  }
}

export default new Breadcrumb()