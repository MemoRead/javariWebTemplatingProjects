document.addEventListener('DOMContentLoaded', function() {
  
  window.addEventListener("load", function() {
    document.body.classList.add("loaded");
  });
  
  if (window.matchMedia("(max-width: 991.98px)").matches) {
    // Get all elements with class 'dropdown-submenu'
    var dropdowns = document.querySelectorAll('.dropdown-submenu');

    dropdowns.forEach(function(dropdown) {
      // On click, toggle the submenu
      dropdown.addEventListener('click', function(e) {
        // Prevent the default behavior only if the target is the dropdown-toggle
        if (e.target.classList.contains('dropdown-toggle')) {
          e.stopPropagation();
          e.preventDefault();
    
          // Toggle the visibility of the submenu
          var submenu = this.querySelector('.dropdown-menu');
          var isVisible = submenu.style.display === 'block';
    
          // Hide all other submenus
          document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function(menu) {
            menu.style.display = 'none';
          });
    
          // Show or hide the clicked submenu
          submenu.style.display = isVisible ? 'none' : 'block';
        }
      });
    });

    // Close all submenus when main dropdown is closed
    var mainDropdown = document.getElementById('offcanvasProductDropdown');
    mainDropdown.addEventListener('hide.bs.dropdown', function() {
      // Close all submenus when the main dropdown is closed
      document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function(menu) {
        menu.style.display = 'none';
      });
    });
  }
});