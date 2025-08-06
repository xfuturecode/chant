// Simple router pour charger les pages
function loadPage(page) {
  fetch(`../src/pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('app').innerHTML = html;
    });
}

// Charger navbar et footer
fetch('../src/components/Navbar.html').then(r=>r.text()).then(html=>{document.getElementById('navbar').innerHTML=html;});
fetch('../src/components/Footer.html').then(r=>r.text()).then(html=>{document.getElementById('footer').innerHTML=html;});

// Router basique (à améliorer)
const routes = {
  '/': 'accueil',
  '/dimanches': 'dimanches',
  '/chants': 'chants',
  '/apropos': 'apropos',
};

function router() {
  const path = location.pathname;
  loadPage(routes[path] || 'accueil');
}

window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);