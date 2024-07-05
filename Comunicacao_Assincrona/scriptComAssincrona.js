document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', (event) => {
    const page = event.target.getAttribute('data-page');
    loadPage(page);
  });
});

function loadPage(page) {
  fetch(`${page}.html`)
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
    });
}
