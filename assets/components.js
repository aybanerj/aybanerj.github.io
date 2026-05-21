/**
 * components.js
 * Injects shared nav and footer into every page.
 * Edit ONLY this file to update nav/footer site-wide.
 *
 * Usage — add before </body> on every page:
 *   Root pages:   <script src="assets/components.js"></script>
 *   Inside posts: <script src="../assets/components.js"></script>
 */

(function () {

  /* --------------------------------------------------------
     CONFIGURATION — edit here to update links site-wide
  -------------------------------------------------------- */
  const CONFIG = {
    name:     'Ayushi Banerjee',
    github:   'https://github.com/aybanerj',
    linkedin: 'https://www.linkedin.com/in/ayushi-banerjee-/',
    email:    'mailto:ayushib2019@gmail.com',
    images: {
      logo:   'assets/images/star.png',
      header: 'assets/images/header.png',
      footer: 'assets/images/footer.png',
    }
  };

  /* --------------------------------------------------------
     DEPTH DETECTION — resolves paths for root vs /posts/
  -------------------------------------------------------- */
  const isNested = window.location.pathname.split('/').filter(Boolean).length >= 2;
  const prefix   = isNested ? '../' : '';
  const img      = (name) => prefix + CONFIG.images[name];
  const href     = (url)  => url.startsWith('http') || url.startsWith('mailto') ? url : prefix + url;

  /* --------------------------------------------------------
     ACTIVE NAV DETECTION
  -------------------------------------------------------- */
  const path = window.location.pathname;
  const isActive = (page) => {
    if (page === 'index.html') return path === '/' || path.endsWith('/') || path.endsWith('index.html');
    if (page === 'blog.html')  return path.includes('blog') || path.includes('/posts/');
    return path.includes(page.replace('.html', ''));
  };
  const navLink = (page, label) =>
    `<a href="${prefix}${page}"${isActive(page) ? ' class="active"' : ''}>${label}</a>`;

  /* --------------------------------------------------------
     NAV
  -------------------------------------------------------- */
  const NAV_HTML = `
    <nav class="nav">
      <a href="${prefix}index.html" class="nav-logo">
        <img class="nav-logo-icon" src="${img('logo')}" alt="">
        <img class="nav-header" src="${img('header')}" alt="">
      </a>
      <div class="nav-links">
        ${navLink('index.html', 'Home')}
        ${navLink('about.html', 'About')}
        ${navLink('blog.html',  'Blog')}
      </div>
    </nav>
  `;

  /* --------------------------------------------------------
     FOOTER
     Layout: [iri bar] → [copyright | chrome image | links] → [iri bar]
  -------------------------------------------------------- */
  const FOOTER_HTML = `
    <footer>
      <div class="footer-chrome">
        <div class="footer-iri-bar"></div>
        <div class="footer-inner">
          <span class="footer-copy">© 2026 ${CONFIG.name}</span>
          <img class="footer-img" src="${img('footer')}" alt="">
          <div class="footer-links">
            <a href="${CONFIG.github}"  target="_blank" rel="noopener">GitHub</a>
            <a href="${CONFIG.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
            <a href="${CONFIG.email}">Email</a>
          </div>
        </div>
        <div class="footer-iri-bar"></div>
      </div>
    </footer>
  `;

  /* --------------------------------------------------------
     INJECT — replaces any existing <nav> and <footer>
  -------------------------------------------------------- */
  const existingNav = document.querySelector('nav.nav');
  const main        = document.querySelector('main');

  if (existingNav) {
    existingNav.outerHTML = NAV_HTML;
  } else if (main) {
    main.insertAdjacentHTML('beforebegin', NAV_HTML);
  } else {
    document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  }

  const existingFooter = document.querySelector('footer');
  if (existingFooter) {
    existingFooter.outerHTML = FOOTER_HTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  }

})();
