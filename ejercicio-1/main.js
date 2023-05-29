const colorButton = document.getElementById('colorButton');
const paragraph = document.querySelector('p');

colorButton.addEventListener('click', () => {
  paragraph.classList.toggle('orange-text');
});