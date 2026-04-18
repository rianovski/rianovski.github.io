(function () {
  'use strict';
  var root = document.documentElement;
  var btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  function current() {
    return root.getAttribute('data-theme') || 'light';
  }

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', next); } catch (e) {}
    apply(next);
  });

  // Respond to OS-level changes only if user has not made an explicit choice.
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  var listener = function (e) {
    try { if (localStorage.getItem('theme')) return; } catch (_) {}
    apply(e.matches ? 'dark' : 'light');
  };
  if (mq.addEventListener) mq.addEventListener('change', listener);
  else if (mq.addListener) mq.addListener(listener);

  apply(current());
})();
