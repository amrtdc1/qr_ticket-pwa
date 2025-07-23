const form = document.getElementById('qrForm');
const qrCanvas = document.getElementById('qr');
const toggle = document.getElementById('theme-toggle');
const qr = new QRious({ element: qrCanvas, size: 250 });

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    start: document.getElementById('start').value,
    end: document.getElementById('end').value,
    agency: document.getElementById('agency').value
  };
  qr.value = JSON.stringify(data);
});

document.getElementById('themeSwitch').addEventListener('change', function () {
  document.body.classList.toggle('dark', this.checked);
});
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  icon.src = document.body.classList.contains('dark')
    ? 'sun.svg'
    : 'moon.svg';
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
