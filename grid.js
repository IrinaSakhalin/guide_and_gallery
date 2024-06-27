"use strict"




$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

}); 


 

var isPlaying = false;
for (var i = 0; i<document.querySelectorAll(".cards__button").length; i++)
    document.querySelectorAll(".cards__button")[i].addEventListener("click", function() {
      
        
      var buttonInnerHTML = this.innerHTML;
        
         
       

        switch (buttonInnerHTML) {
            
            case "Краснозобая гагара":
               if (isPlaying) {
                  audio.pause();
                  isPlaying = false;
                  return;
               }
               var audio = new Audio("src/sounds/001.mp3");
               audio.play();
               isPlaying = true;
               break;
             case "Чернозобая гагара":
               if (isPlaying) {
                  audio.pause();
                  isPlaying = false;
                  return;
               }   
               var audio = new Audio("src/sounds/002.mp3");
               audio.play();
                isPlaying = true;
                break;
             case "Малая поганка":
               if (isPlaying) {
                  audio.pause();
                  isPlaying = false;
                  return;
               }    
               var audio = new Audio("src/sounds/003.mp3");
                audio.play();
                isPlaying = true;
             break;
             case "Черношейная поганка":
                var audio = new Audio();
                audio.play();
             break;
             case "Красношейная поганка":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Серощёкая поганка":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Глупыш":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Тонкоклювый буревестник":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Северная качурка":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Сизая качурка":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Уссурийский баклан":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Берингов баклан":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Большая выпь":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Китайская выпь":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Амурская выпь":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Кваква":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Большая белая цапля":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Средняя белая цапля":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Малая белая цапля":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Желтоклювая цапля":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Серая цапля":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Американаская казарка":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Белолобый гусь":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Пискулька":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Гуменник":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Сухонос":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Лебедь-кликун":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Малый лебедь":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Кряква":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Чёрная кряква":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Чирок-свистунок":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Клоктун":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Касатка":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Серая утка":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Свиязь":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Шилохвость":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Чирок-трескунок":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Широконоска":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Мандаринка":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Хохлатая чернеть":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Морская чернеть":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Каменушка":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Морянка":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Обыкновенный гоголь":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Американская синьга":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Горбоносый турпан":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Луток":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Длинноносый крохаль":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "Большой крохаль":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
             case "":
                var audio = new Audio("src/sounds");
                audio.play();
             break; 
        
            default: console.log(buttonInnerHTML);
                
        }
  
    });

   



   let pageSlider = new Swiper('.slider',{
   speed: 1000,
   scrollbar:{
      el: ".slider__scrollbar",
      draggable: true
   },
   breakpoints: {
      "320": {
         slidesPerView: 1,
         centeredSlides: false
      },
      "992": {
         slidesPerView: 2,
         centeredSlides: true
      }
   }
});
const page = document.querySelector('.page');
const images = document.querySelectorAll('.slide__picture');

if(images.length){
   let backgroundSlides = ``;
   let textSlides = ``;

   images.forEach(image => {
      backgroundSlides += `
         <div class="background__slide swiper-slide">
            <div class="background__image">
               <img src="${image.getAttribute('src')}" alt="${image.alt}">
            </div>
         </div>
         `;
      textSlides += `
         <div class="text__slide swiper-slide">
            <span>${image.dataset.title ? image.dataset.title : `` }</span>
         </div>
      `;
   });

   const background = `
      <div class="background swiper">
         <div class="background__wrapper swiper-wrapper">
            ${backgroundSlides}
         </div>
      </div>
   `;
   const text = `
      <div class="text swiper">
         <div class="text__wrapper swiper-wrapper">
            ${textSlides}
         </div>
      </div>
   `;

   page.insertAdjacentHTML("afterbegin", background);
   page.insertAdjacentHTML("beforeend", text);

   let pageBgSlider = new Swiper('.background', {
      speed: 500
   });
   let pageTextSlider = new Swiper('.text', {
      effect: "fade",
      fadeEffect: {
         crossFade: true
      },
      speed: 1000
   });
   pageSlider.controller.control = pageBgSlider;
   pageBgSlider.controller.control = pageTextSlider;
}

const speed = 800;
document.addEventListener("click", function(e) {
   const targetElement = e.target;
   const textBlock = document.querySelector('.text');
   textBlock.style.transitionDuration = `$(speed)ms`;

   if (targetElement.closest('.slide')){
      const slide = targetElement.closest('.slide');
      const slideImage = slide.querySelector('img');
      const activeImage = document.querySelector('.slide__picture.active');

      if(slide.classList.contains('swiper-slide-active')){
         slideImage.classList.add('active');
         textBlock.classList.add('active');
         imageOpen(slideImage);
      }else{
         activeImage ? activeImage.classList.remove('active') : null;
         pageSlider.slideTo(getIndex(slide));
      }
      e.preventDefault();
   }
   if(targetElement.closest('.open-image')){
      const openImage = targetElement.closest('.open-image');
      const activeImage = document.querySelector('.slide__picture.active');
const imagePos = getImagePos(activeImage);

openImage.style.cssText = `
  position: fixed;
  left: ${imagePos.left}px;
  top: ${imagePos.top}px;    
  width: ${imagePos.width}px;
  height: ${imagePos.height}px;
  transition: all ${speed}ms;
`;
      setTimeout(() => {
         activeImage.classList.remove('active');
         activeImage.style.opacity = 1;
         openImage.remove();
      }, speed);

      textBlock.classList.remove('active');
   }
})

function getIndex(el) {
   return Array.from(el.parentNode.children).indexOf(el);
  }
  function imageOpen(image) {
      const imagePos = getImagePos(image);
      const openImage = image.cloneNode();
      const openImageBlock = document.createElement('div');
      openImageBlock.classList.add('open-image');
      openImageBlock.append(openImage);
      openImageBlock.style.cssText = `
         position: fixed;
         left: ${imagePos.left}px;
         top: ${imagePos.top}px;
         width: ${imagePos.width}px;
         height: ${imagePos.height}px;
         transition: all ${speed}ms;
      `;
      document.body.append(openImageBlock);
      setTimeout(() => {
         image.style.opacity = 0;
         openImageBlock.style.left = 0;
         openImageBlock.style.top = 0;
         openImageBlock.style.width = '100%';
         openImageBlock.style.height = '100%';
      }, 0); 

  }
  function getImagePos(image) {
      return {
         left: image.getBoundingClientRect().left,
         top: image.getBoundingClientRect().top,
         width: image.offsetWidth,
         height: image.offsetHeight
      }
  }