let menuItems = document.querySelectorAll(".menu_item");
let subMenus = document.querySelectorAll(".sub_menu");
let currentOpenSubMenu = null;

let header = document.querySelector(".header_wrap"); 

// 메뉴 클릭 이벤트
menuItems.forEach(function(item) {
  item.addEventListener("click", function(event) {
    event.stopPropagation(); // 이벤트 버블링 방지

    let targetId = item.dataset.target;
    let targetMenu = document.getElementById(targetId);

    // 다른 메뉴 클릭 시 기존 메뉴 닫기
    if (currentOpenSubMenu && currentOpenSubMenu !== targetMenu) {
      currentOpenSubMenu.style.display = "none";
    }

    // 같은 메뉴가 아니면 새 메뉴 열기
    if (targetMenu && currentOpenSubMenu !== targetMenu) {
      targetMenu.style.display = "block";
      currentOpenSubMenu = targetMenu;

      //헤더에 클래스 추가
      header.classList.add("white");
    }
  });
});

// 서브메뉴 내부 클릭 시 닫히지 않게
subMenus.forEach(function(sub) {
  sub.addEventListener("click", function(event) {
    event.stopPropagation();
  });
});

// 바깥 클릭 시 서브메뉴 닫기 + 헤더 클래스 제거
document.addEventListener("click", function() {
  if (currentOpenSubMenu) {
    currentOpenSubMenu.style.display = "none";
    currentOpenSubMenu = null;

    //헤더 클래스 제거
    header.classList.remove("white");
  }
});

/* accordion */
let menuIcon = document.querySelector('.toggle');
let accordionMenu = document.getElementById('accordion');
menuIcon.addEventListener('click', function(){
  if(accordionMenu.style.display === 'none'){
    accordionMenu.style.display = 'block';
  }else{
    accordionMenu.style.display = 'none';
  }
});

/* accordion_title 클릭하면 accordion_content가 보여진다*/
document.querySelectorAll('.accordion_title').forEach(function(item){
  item.addEventListener('click', function(){
    let content = this.nextElementSibling;
    document.querySelectorAll('.accordion_content.active').forEach(activeContent=>{
      if(activeContent !== content){
        activeContent.classList.remove('active');
      }
    });
    content.classList.toggle('active');
  });
});
/* accordion_subtitle */
document.querySelectorAll('.ac_subtitle').forEach(function(item){
  item.addEventListener('click', function(){
    let content = this.nextElementSibling;
    document.querySelectorAll('.ac_subcontent.active').forEach(activeContent=>{
      if(activeContent !== content){
        activeContent.classList.remove('active');
      }
    });
    content.classList.toggle('active');
  });
});

document.querySelectorAll('.accordion_title').forEach(function(title) {
  title.addEventListener('click', function() {
    if (title.classList.contains('active')) {
      title.classList.remove('active');
    } else {
      document.querySelectorAll('.accordion_title').forEach(function(t) {
        t.classList.remove('active');
      });
      title.classList.add('active');
    }
  });
});

let iconContainer = document.querySelectorAll('.ft_icon');
iconContainer.forEach(container => {
  container.addEventListener('click', function() {
    container.classList.toggle('rotated');
  });
});

let searchButton = document.querySelector('.accordion_search');
let searchInput = document.querySelector('.accordion_search_input');

searchButton.addEventListener('click', function() {
  searchInput.classList.toggle('active');
});
const current1 = document.getElementById("current");
const total1 = document.getElementById("total");

// 전체 슬라이드 수 반영
total1.textContent = swiper1.slides.length;

// 슬라이드 변경 시 현재 페이지 수 반영 + 강조 클래스 처리
swiper1.on('slideChange', function () {
  current1.textContent = (swiper1.realIndex % total1.textContent) + 1;

  document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.classList.remove('highlight');
  });

  const activeIndex = swiper1.activeIndex;
  swiper1.slides[activeIndex].classList.add('highlight');
});

// 초기에도 첫 슬라이드 강조 처리
swiper1.slides[swiper1.activeIndex].classList.add('highlight');

/* section02 */
let buttons = document.querySelectorAll('.btn_more');
let lis = document.querySelectorAll('.notic_card li');

lis[0].classList.add('active');
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    lis.forEach((li, i) => {
      if (i === index) {
        li.classList.toggle('active');
      } else {
        li.classList.remove('active'); 
      }
    });
  });
});
/* section05 */
let tabLink = document.querySelectorAll('.tab a');
let tabContent = document.querySelectorAll('.quick_box');

for(let i = 0; i < tabLink.length; i++){
  tabLink[i].addEventListener('click', function(e){
    e.preventDefault();
    let orgTarget = e.target.getAttribute('href');
    let tabTarget = orgTarget.replace('#', '');
    for(let x = 0; x<tabContent.length; x++){
      tabContent[x].style.display = 'none'
    }
    document.getElementById(tabTarget).style.display = 'flex';
    for(let j = 0; j<tabLink.length; j++){
      tabLink[j].classList.remove('active');
      e.target.classList.add('active')
    }
  })
}
document.getElementById('quick1').style.display = 'flex'

/* 클릭하면 tab의 글자색 바뀜 */
let clickColor = null;
tabLink[0].classList.add("click");
tabLink.forEach(link => {
  link.addEventListener('click', function() {
    if(clickColor){
      clickColor.classList.remove('click')
    }
    link.classList.add('click')
    clickColor = link;
  });
});
