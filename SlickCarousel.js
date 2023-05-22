const scrollItems = document.querySelector('.scroll-items');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let scrollAmount = 0;
let scrollMax = scrollItems.scrollWidth - scrollItems.clientWidth;

function scrollLeft() {
  if (scrollAmount > 0) {
    scrollAmount -= scrollItems.clientWidth;
    scrollItems.style.transform = `translateX(-${scrollAmount}px)`;
    updateButtons();
  } else {
    scrollAmount = scrollMax;
    scrollItems.style.transform = `translateX(-${scrollAmount}px)`;
    updateButtons();
  }
}

function scrollRight() {
  if (scrollAmount < scrollMax) {
    scrollAmount += scrollItems.clientWidth;
    scrollItems.style.transform = `translateX(-${scrollAmount}px)`;
    updateButtons();
  } else {
    scrollAmount = 0;
    scrollItems.style.transform = `translateX(-${scrollAmount}px)`;
    updateButtons();
  }
}

function updateButtons() {
  if (scrollAmount === 0) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }

  if (scrollAmount === scrollMax) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}

prevButton.addEventListener('click', scrollLeft);
nextButton.addEventListener('click', scrollRight);

updateButtons();