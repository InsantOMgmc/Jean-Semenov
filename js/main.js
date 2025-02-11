const burger = document.querySelector('.burger');
const links = document.querySelectorAll('a[href*="#"]');
const body = document.body;
const nav = document.querySelector('.header__nav');

// Sticky header
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0)
})

// Burger
burger.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('open');
  body.classList.toggle('lock');
});

// smooth scrolling
links.forEach(function (link) {
  link.addEventListener('click', event => {
    event.preventDefault();

    const blockId = link.getAttribute('href').substring(1);
    if (blockId) {

      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      nav.classList.remove('open');
      body.classList.remove('lock');
      burger.classList.remove('active');
    }
  });

});

const btnServicesMoreDetails = Array.from(document.querySelectorAll('.services-item__btn'));

const closeModalButtons = Array.from(document.querySelectorAll('.modal-window-close-btn'));
closeModalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const parentModalWindow = btn.parentNode;
    const parentModalWrapper = parentModalWindow.parentNode;
    parentModalWrapper.classList.remove('active');
    body.classList.remove('lock');
  })
});
btnServicesMoreDetails.forEach(btn => {
  btn.addEventListener('click', () => {
    const dataType = btn.getAttribute('data-type');
    switch (dataType) {
      case 'civil':
        const civilModalWrapper = document.querySelector('.civil-modal-wrapper');
        civilModalWrapper.classList.add('active');
        body.classList.add('lock');

        civilModalWrapper.addEventListener('click', event => {
          closeModalWindowClickOutside(civilModalWrapper, event);
        })
        break;
      case 'buisness':
        const buisnessModalWrapper = document.querySelector('.buisness-modal-wrapper');
        buisnessModalWrapper.classList.add('active');
        body.classList.add('lock');

        buisnessModalWrapper.addEventListener('click', event => {
          closeModalWindowClickOutside(buisnessModalWrapper, event);
        })
        break;
      case 'subscription':
        const subscriptionModalWrapper = document.querySelector('.subscription-modal-wrapper');
        subscriptionModalWrapper.classList.add('active');
        body.classList.add('lock');

        subscriptionModalWrapper.addEventListener('click', event => {
          closeModalWindowClickOutside(subscriptionModalWrapper, event);
        })
        break;
    }
  });
});

function closeModalWindowClickOutside(modalWrapper, event) {
  if (event.target === modalWrapper) {
    modalWrapper.classList.remove('active');
    body.classList.remove('lock');
  }
}