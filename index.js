document.getElementById('button1').addEventListener('click', function() {
    alert('Button 1 clicked!');
});

document.getElementById('button2').addEventListener('click', function() {
    alert('Button 2 clicked!');
});

document.getElementById('search-icon').addEventListener('click', function(event) {
    event.preventDefault();
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('hidden');
    if (!searchBar.classList.contains('hidden')) {
        searchBar.querySelector('input').focus();
    }
});


document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        let dropdown = this.nextElementSibling;
        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    });
});

window.addEventListener('click', function (e) {
    if (!e.target.matches('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    function checkScroll() {
      const section = document.querySelector('.gardening-in-co');
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('scrolled-in-view');
      }
    }
  
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on page load
  });

  
