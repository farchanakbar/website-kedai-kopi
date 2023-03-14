// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Humburger Menu Diclick
document.querySelector("#humburger").onclick = () => {
    navbarNav.classList.toggle("active");
};

// Klik dluar sidebar untuk menghilangkan nav

const humburger = document.querySelector("#humburger");

document.addEventListener("click", function(e){
    if(!humburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove("active");
    }
})
