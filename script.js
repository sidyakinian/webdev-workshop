const readMoreBtn = document.querySelector('.read-more-btn');
const moreText = document.querySelector('.more-text');

function toggleMoreText() {
  if (moreText.style.display === 'none') {
    moreText.style.display = 'inline';
    readMoreBtn.textContent = 'Show Less';
  } else {
    moreText.style.display = 'none';
    readMoreBtn.textContent = 'Read More';
  }
}