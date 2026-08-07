(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var backdrop = document.querySelector('.nav-backdrop');
    if (!toggle) return;
    function close() { document.body.classList.remove('nav-open'); }
    toggle.addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
    if (backdrop) backdrop.addEventListener('click', close);
    document.querySelectorAll('.main-nav a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  });
})();
