(function () {
  'use strict';

  var tombol = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu-utama');
  if (!tombol || !menu) return;

  tombol.addEventListener('click', function () {
    var terbuka = menu.classList.toggle('buka');
    tombol.setAttribute('aria-expanded', terbuka ? 'true' : 'false');
  });

  /* Tutup menu setelah salah satu tautan dipilih. */
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      menu.classList.remove('buka');
      tombol.setAttribute('aria-expanded', 'false');
    }
  });

  /* Tutup menu dengan tombol Escape. */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('buka')) {
      menu.classList.remove('buka');
      tombol.setAttribute('aria-expanded', 'false');
      tombol.focus();
    }
  });
})();
