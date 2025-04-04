document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.main-nav');
    
    if (menuButton && menu) {
      menuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
        this.innerHTML = menu.classList.contains('active') ? 
          '<i class="fas fa-times"></i>'