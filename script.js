document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('change', function() {
      if (this.checked) {
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
      }
    });
  });