
class MobileNavView {
  constructor() {
    this.addHandlerOpenMobileNav();
    this.addHandlerCloseMobileNav();
  }

  addHandlerOpenMobileNav() {
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
    if (!mobileMenuBtn && mobileMenuOverlay) return;

    mobileMenuBtn.addEventListener("click", (e) => {
      mobileMenuOverlay.classList.add("active");
      document.body.style.overflow = 'hidden';
    });
  }

  addHandlerCloseMobileNav() {
    const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
    if (!mobileMenuOverlay) return;
    mobileMenuOverlay.addEventListener("click", (e) => {
      e.preventDefault();
      mobileMenuOverlay.classList.remove("active");
      document.body.style.overflow = '';
    });
  }
}

export default new MobileNavView();