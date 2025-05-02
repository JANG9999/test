/* section01 */
const swiper1 = new Swiper('.news_swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,      
  breakpoints:{
    768: {
      slidesPerView: 3, 
      spaceBetween: 140, 
    },
  }, 
  centeredSlides: false,
  loop: true,            
  navigation: {
    nextEl: '.next_wrap_news',   
    prevEl: '.prev_wrap_news'      
  },
});

/* section03 */
const swiper2 = new Swiper('.archieve_swiper', {
  slidesPerView: 1,     
  spaceBetween: 10,      
  centeredSlides: false, 
  loop: true,           
  navigation: {
    nextEl: '.next_wrap_ar',    
    prevEl: '.prev_wrap_ar'    
  },
});
const current2 = document.getElementById("current_ar");
const total2 = document.getElementById("total_ar");
total2.textContent = swiper2.slides.length;
swiper2.on('slideChange', function () {
current2.textContent = (swiper2.realIndex % total2.textContent) + 1;
});

/* section05 */
const swiper03 = new Swiper('.sns_swiper', {
  slidesPerView: 1,
  spaceBetween: 10,      
  centeredSlides: false,
  loop: true, 
  navigation: {
    nextEl: '.next_wrap_sns',   
    prevEl: '.prev_wrap_sns'    
  },
});
const swiper04 = new Swiper('.pop_swiper', {
  slidesPerView: 1,
  spaceBetween: 10,      
  centeredSlides: false,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: '.next_wrap_pop',   
    prevEl: '.prev_wrap_pop'    
  },
});