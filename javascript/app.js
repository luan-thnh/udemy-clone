const courseContentWrapper = document.querySelectorAll('.course__content-wrapper');
const sidebarContentWrapper = document.querySelectorAll('.sidebar__content-wrapper');
const courseDescriptionContent = document.querySelector('.course__description-content');
const courseBought = document.querySelector('.course__bought-course-list');
const btnCoursePanels = document.querySelectorAll('.course__content-item-panel');
const btnSidebarPanels = document.querySelectorAll('.sidebar__content-item-panel');
const btnCourseDescription = document.querySelector('.course__description-btn');
const btnBoughtCourse = document.querySelector('.course__bought-course-btn');

$(document).ready(function () {
  $('.slider__wrapper-one').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="slider__arrow fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="slider__arrow fa-solid fa-angle-left"></i></button>`,
  });
});

btnCoursePanels.forEach((btnCoursePanel, index) => {
  btnCoursePanel.onclick = (e) => {
    btnCoursePanel.classList.toggle('open');
    courseContentWrapper[index].classList.toggle('open');
  };
});
btnSidebarPanels.forEach((btnSidebarPanel, index) => {
  btnSidebarPanel.onclick = (e) => {
    btnSidebarPanel.classList.toggle('open');
    SidebarContentWrapper[index].classList.toggle('open');
  };
});

if (btnCourseDescription) {
  btnCourseDescription.onclick = (e) => {
    btnCourseDescription.classList.toggle('more');
    courseDescriptionContent.classList.toggle('more');
  };
}

if (btnBoughtCourse) {
  btnBoughtCourse.onclick = (e) => {
    btnBoughtCourse.classList.toggle('more');
    courseBought.classList.toggle('more');
  };
}

const sidebar = document.querySelector('.sidebar');

window.onscroll = (e) => {
  let scroll = this.scrollY;

  if (scroll >= 55) {
    sidebar.classList.add('top');
  } else {
    sidebar.classList.remove('top');
  }
};

const content_bottom = document.querySelector('.content__bottom');
const btn_show = document.querySelector('.btn-show');

btn_show.addEventListener('click', (e) => {
  content_bottom.classList.toggle('open');
  btn_show.classList.toggle('open');
});
