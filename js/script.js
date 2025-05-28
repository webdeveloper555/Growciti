let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
     let offset = sec.offersettop - 150;
     let height = sec.offersetheight;
     let id = sec.getAttribute("id");

     if ( top >= offset && top < offset + height){
        navlinks.forEach((link) =>{
            link.classList.remove("active");
        });
        let activelink= document.querySelector(`header nav a[href*="${id}"]`);
        if (activelink){
            activelink.classList.add("active");
        }
     }
    });
};

menuicon.onlink = () => {
    menuicon.classList.toggle("fa-active"); // Adjust class as needed
    navbar.classList.toggle("active");
};