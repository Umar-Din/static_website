// change navbar color on scroll

window.addEventListener("scroll",() => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})



// show/hide faqs


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon of the FAQs

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus' ) {
            icon.className = "uil uil-minus";
        }
        else{
            icon.className = "uil uil-plus";
        }
    })
})

        // show and hide the nav menu icons

const menu = document.querySelector('.nav_menu');
const openbtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');


openbtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openbtn.style.display = "none";
})

const closeNav=() => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openbtn.style.display = "inline-block";
}

closeBtn.addEventListener("click", closeNav)