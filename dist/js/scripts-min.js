const burgerButton=document.querySelector(".header__menu-btn"),headerNav=document.querySelector(".header__menu"),burgerMenu=()=>{burgerButton.addEventListener("click",()=>{burgerButton.classList.toggle("open"),headerNav.classList.toggle("active")})};burgerButton.addEventListener("click",()=>{burgerButton.classList.toggle("open"),headerNav.classList.toggle("active")}),window.addEventListener("resize",()=>{window.innerWidth>660&&(burgerButton.classList.remove("open"),headerNav.classList.remove("active"))});const links=document.querySelectorAll("a");links.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault()})});const swiper=new Swiper(".mySwiper",{slidesPerView:"auto",spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});