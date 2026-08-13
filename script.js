document.querySelectorAll('.category > button').forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.parentElement;
    const wasOpen = category.classList.contains('open');
    document.querySelectorAll('.category').forEach((item) => {
      item.classList.remove('open');
      item.querySelector('b').textContent = '+';
    });
    if (!wasOpen) {
      category.classList.add('open');
      button.querySelector('b').textContent = '−';
    }
  });
});

const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
header.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();
