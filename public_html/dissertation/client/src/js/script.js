/* Theme */

const toggleThemeBtn = document.querySelector('#theme');

toggleThemeBtn.addEventListener('click', function() {
    
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    const newTheme = currentTheme === 'dark' ? 'light' : currentTheme === 'light' ? 'dark' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    
    var x = document.getElementById("moon");
    var y = document.getElementById("sun");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
})

/* Font Awesome */

const script = document.createElement("script");

script.src = "https://kit.fontawesome.com/1ee8f271b9.js";

document.body.appendChild(script);

/* Scroll Animation */

const pages = document.querySelectorAll('.page')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
    console.log(entries)
    },
    {
        threshold: 0.25,
    }
)


pages.forEach(page => {
    observer.observe(page)
})

/* Select Resizing */

