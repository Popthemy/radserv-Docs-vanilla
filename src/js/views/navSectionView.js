class NavSection {
  constructor() {
    this.addHandlerSidebarSections();
  }

  addHandlerHrefs(handler) {
  
    document.querySelector('.content-wrapper').addEventListener('click', (event)=>{
      const link = event.target.closest(
        ".related-item, .nav-item, .search-result-item"
      );
      if (!link) return;

      event.preventDefault();
      handler({...event, currentTarget: link})
    });
  }

  addHandlerSidebarSections() {
    const navSectionHeaders = document.querySelectorAll(".nav-section-header");
    const navSections = document.querySelectorAll(".nav-section");

    const closeSection = function () {
      navSections.forEach(section =>{
        section.classList.remove("expanded")
      })
    };
    
    navSectionHeaders.forEach((header) => {
      header.addEventListener("click", (e) => {
        closeSection();
        e.preventDefault();
        const section = e.currentTarget.parentElement;
        if (section) {
          section.classList.toggle("expanded");
        }
      });
    });
  }

  
}

export default new NavSection();
