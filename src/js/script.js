import 'core-js/stable';
import { Tooltip, Modal, Carousel } from 'bootstrap';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import { gsap, ScrollTrigger } from 'gsap/all';
import ScrollReveal from 'scrollreveal';
import MutationObserver from 'mutation-observer';
import 'slick-carousel';
import { bottom } from '@popperjs/core';
// import { for } from 'core-js/fn/symbol';

// Your scripts here

// Script after load screen
gsap.registerPlugin(ScrollTrigger);
var tooltipTriggerList;
var tooltipList;

$(window).on('load', function () {
  // Script for init Tooltip
  let htmlTag = document.querySelector('html');
  let bodyTag = document.querySelector('body');
  htmlTag.classList.add('loaded');
  bodyTag.classList.add('loaded');

  tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

  tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl);
  });
});

// Script for Scroll Trigger

function convertValueToPx(value) {
  return (
    (parseFloat(value) / 100) *
    (/vh/gi.test(value) ? window.innerHeight : window.innerWidth)
  );
}

gsap.to('#back-to-top', {
  scrollTrigger: {
    trigger: '#section__products-tab',
    start: convertValueToPx('10vh') + ' bottom',
    end: '+=' + convertValueToPx('10vh'),
    scrub: 1,
    toggleActions: 'restart none none none',
  },
  color: '#E5CDB5',
  display: 'block',
  opacity: 1,
});

gsap.to('#contact-cta', {
  scrollTrigger: {
    trigger: '#section__products-tab',
    start: convertValueToPx('10vh') + ' bottom',
    end: '+=' + convertValueToPx('10vh'),
    scrub: 1,
    toggleActions: 'restart none reverse none',
  },
  color: '#E5CDB5',
  bottom: '+=15vh',
});

gsap.to('#contact-cta', {
  scrollTrigger: {
    trigger: '#footer',
    start: convertValueToPx('10vh') + ' bottom',
    end: '+=' + convertValueToPx('10vh'),
    toggleActions: 'restart none reverse none',
  },
  opacity: 0,
  display: 'none',
});

ScrollTrigger.create({
  trigger: '#section__certificates',
  start: 'center center',
  end: 'bottom center',
  onToggle: ({ isActive }) => {
    if (isActive) {
      tooltipList.forEach((x) => x.show());
    } else {
      tooltipList.forEach((x) => x.hide());
    }
  },
});

// Script for changing bg color

var sectionProductsTab = document.querySelector('#section__products-tab');

var tabEl = document.querySelectorAll(
  '#section__products-tab a[data-bs-toggle="tab"]'
);

for (var i = tabEl.length; i--; ) {
  tabEl[i].addEventListener('shown.bs.tab', function (event) {
    switch (event.target.getAttribute('href')) {
      case '#products-tab__2':
        sectionProductsTab.style.backgroundColor = '#CF4520';
        break;
      case '#products-tab__3':
        sectionProductsTab.style.backgroundColor = '#7f2729';
        break;
      case '#products-tab__4':
        sectionProductsTab.style.backgroundColor = '#83412C';
        break;
      case '#products-tab__5':
        sectionProductsTab.style.backgroundColor = '#215732';
        break;
      default:
        sectionProductsTab.style.backgroundColor = '#151515';
    }
  });
}

// Script for faq collapse button animation
var myCollapsible = document.getElementsByClassName('collapse');
var myCollapsibleWrapper =
  document.getElementsByClassName('container-collapse');

function selectToggleIcon(obj) {
  var thisCollapse = obj.id;
  var collapseBtn = document.querySelector(
    '[aria-controls=' + thisCollapse + ']'
  );
  return collapseBtn.querySelector('.plus-toggle');
}

function addFlexGrow(isAdd, children) {
  Array.prototype.forEach.call(myCollapsibleWrapper, (x) => {
    if (x.contains(children)) {
      isAdd ? x.classList.add('show') : x.classList.remove('show');
    }
  });
}

function rotateIconCollapse(
  iconToggleElement,
  classRemove,
  classAdd,
  degRotate
) {
  let iconToggle = selectToggleIcon(iconToggleElement);
  iconToggle.style.transform = 'rotateZ(' + degRotate + ')';
  iconToggle.classList.remove(classRemove);
  iconToggle.classList.add(classAdd);
}

for (let index = 0; index < myCollapsible.length; index++) {
  myCollapsible[index].addEventListener('show.bs.collapse', function () {
    rotateIconCollapse(this, 'bi-plus', 'bi-dash', '180deg');
    addFlexGrow(true, this);
  });

  myCollapsible[index].addEventListener('hide.bs.collapse', function () {
    rotateIconCollapse(this, 'bi-dash', 'bi-plus', '0deg');
    addFlexGrow(false, this);
  });
}

// Script for Map

var $description = $('#map .description');

// $('.enabled').hover(
//   function () {
//     $(this).attr('class', 'enabled heyo');
//     $description.addClass('active');
//     $description.html($(this).attr('id'));
//   },
//   function () {
//     $description.removeClass('active');
//   }
// );

// $('#map').on('mousemove', function (e) {
//   $description.css({
//     left: e.pageX + 58,
//     top: e.pageY - 65,
//   });
// });

//Script for Modal

var linkNavigate = document.querySelectorAll('.link-navigate');
var modal = new Modal('#menuModal');

for (var i = linkNavigate.length; i--; ) {
  linkNavigate[i].addEventListener('click', (event) => modal.toggle());
}

// Script for about us slider
const aboutUsImgCarouselElement = document.getElementById('carousel-2');
const aboutUsDscCarouselElement = document.getElementById('carousel-2-2');
const aboutUsImgCarousel = new Carousel('#carousel-2');
const aboutUsDscCarousel = new Carousel('#carousel-2-2');

aboutUsImgCarouselElement.addEventListener('slide.bs.carousel', (event) => {
  event.direction == 'left'
    ? aboutUsDscCarousel.next()
    : aboutUsDscCarousel.prev();
});

aboutUsDscCarouselElement.addEventListener('slide.bs.carousel', (event) => {
  event.direction == 'left'
    ? aboutUsImgCarousel.next()
    : aboutUsImgCarousel.prev();
});

// Script for factory slider

$('.slick-center').slick({
  centerMode: true,
  arrows: false,
  centerPadding: '0',
  slidesToShow: 1,
});

// Script for submit tool

var wpcf7Elm = document.querySelector('.wpcf7');

wpcf7Elm.addEventListener(
  'wpcf7mailsent',
  function (event) {
    let thankyouBox = document.querySelector('.thankyou-letter');
    thankyouBox.classList.replace('d-none', 'd-flex');
  },
  false
);
