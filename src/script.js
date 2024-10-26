// Fungsi untuk menambahkan animasi keluar sebelum berpindah halaman
function addFadeOutAnimation(linkSelector, elementSelector, targetUrl) {
    document.querySelector(linkSelector).addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(elementSelector).classList.add('fade-out-scale');
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500); // Waktu sesuai durasi animasi
    });
  }
  
  // Inisialisasi animasi untuk link di halaman login dan register
  document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('a[href="register.html"]')) {
      addFadeOutAnimation('a[href="register.html"]', '.login', 'register.html');
    }
  
    if (document.querySelector('a[href="login.html"]')) {
      addFadeOutAnimation('a[href="login.html"]', '.signup', 'login.html');
    }
  });
  