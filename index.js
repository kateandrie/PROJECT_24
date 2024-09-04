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


