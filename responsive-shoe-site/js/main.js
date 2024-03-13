/*================= SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that varibles exists
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We ADD  THE SHOW MENU CLASS TO THE DIV TAG WITH THE nav_menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*====================== REMOVE MENU ==================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // WHEN WE CLICK ON EACH nav_link, WE REMOVE THE SHOW MENU CLASS
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*================ CHANGE BG COLOR ================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    //WHEN THE SCROLL IS GREATER THAN 200VH, ADD THE SCROLL-HEADER CLASS TO THE HEADER TAG
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

/*================ SHOW SCROLL TOP =================*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    //when the scroll is higher than 560vh, add the show -scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*================ SCROLL REVEAL ================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
})

sr.reveal(
    `.home_data, .home_img,
    .about_data, .about_img,
    .services_content, .menu_img,
    .app_data, .app_img,
    .contact_data, .contact_button,
    .footer_content`, {
        interval: 200
})