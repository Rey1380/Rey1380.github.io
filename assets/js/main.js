(function () {
  'use strict';
  var header = document.querySelector('.site-header');
  var nav = document.getElementById('site-nav');
  var menuBtn = document.querySelector('.menu-toggle');

  /* header background once the page scrolls */
  function onScroll() { if (header) header.classList.toggle('is-scrolled', window.scrollY > 10); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* mobile menu */
  function closeMenu() {
    if (!nav || !menuBtn) return;
    nav.classList.remove('is-open'); header.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Open menu');
  }
  if (nav && menuBtn) {
    menuBtn.addEventListener('click', function () {
      var open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', open); header.classList.toggle('menu-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); menuBtn.focus(); }
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 900) closeMenu(); });
  }

  /* highlight the section in view */
  var links = nav ? Array.prototype.slice.call(nav.querySelectorAll('ul a[href^="#"]')) : [];
  var sections = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
  function setActive(id) {
    links.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
    });
  }
  if ('IntersectionObserver' in window && sections.length) {
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { visible[en.target.id] = en.isIntersecting; });
      var atEnd = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 4;
      var id = atEnd ? sections[sections.length - 1].id : null;
      for (var i = 0; !id && i < sections.length; i++) if (visible[sections[i].id]) id = sections[i].id;
      setActive(id);
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
