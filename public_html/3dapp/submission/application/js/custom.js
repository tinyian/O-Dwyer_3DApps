/* Font Awesome Icons */

const script = document.createElement("script");

script.src = "https://kit.fontawesome.com/1ee8f271b9.js";

document.body.appendChild(script);

/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {
  nav.dataset.transitionable = "true";
  
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};

/* -- Dialog & Modals -- */
const openGallery = document.querySelector("[data-open-gallery]")
const closeGallery = document.querySelector("[data-close-gallery]")
const openContact = document.querySelector("[data-open-contact]")
const closeContact = document.querySelector("[data-close-contact]")
const modal1 = document.querySelector("[gallery-modal]")
const modal2 = document.querySelector("[contact-modal]")

openGallery.addEventListener("click", () => {
    modal1.showModal()
})

closeGallery.addEventListener("click", () => {
    modal1.close()
})

openContact.addEventListener("click", () => {
    modal2.showModal()
})

closeContact.addEventListener("click", () => {
    modal2.close()
})

modal1.addEventListener("click", e => {
    const dialogDimensions = modal1.getBoundingClientRect()
    if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
    ) {
    modal1.close()
    }
})

modal2.addEventListener("click", e => {
    const dialogDimensions = modal2.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal2.close()
    }
})
