/*==================== MENU SHOW Y HIDDEN ====================*/

const navmenu =document.getElementById('nav-menu'),
navtoggle=document.getElementById('nav-toggle'),
navclose=document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navtoggle){
    navtoggle.addEventListener('click' ,()=>{
        navmenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navclose){
    navclose.addEventListener('click',()=>{
        navmenu.classList.remove('show-menu')

    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navlink = document.querySelectorAll('.nav__link')
function linkaction(){
    const navmenu=document.getElementById('nav-menu')
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n=>n.addEventListener('click',linkaction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementById('.skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')
function toggleskills(){
    let itemclass = this.parentNode.ClassName
for( i=0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'

}
if( itemclass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'

}
}
skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleskills)

})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabcontents=document.querySelectorAll('[data-content]')
tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target)
        tabcontents.forEach(tabcontent =>{
            tabcontent.classList.remove('qualification__active')

        })
        target.classList.add('qualification__active')
        tab.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
 const modalviews = document.querySelectorAll('.services__modal')
 const modalbtns= document.querySelectorAll('.services__button')
 const modalclose=document.querySelectorAll('.services__modal-close')
modalbtns.addEventListener("click", function () {
    modalviews.classList.add("active-modal");
  });
  modalclose.addEventListener("click", function () {
    modalviews.classList.remove("active-modal");
  });
  
// let modal=function(modalclick){
//     modalviews[modalclick].classList.add('active-modal')

// }

// modalbtns.forEach((modalbtn,i)=>{
//     modalbtn.addEventListener('click',()=>{
//         modal(i);
//     })
// });

/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/
let swipertestimonial = new Swiper('.testimonial-container', {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination: {
        el:'.swiper-pagination',
        clickable:true,
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
    const nav=document.getElementById('header')
    if(this.scrollY>=200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')

}
window.addEventListener('scroll',scrollHeader);
/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})