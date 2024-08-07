// DOM => document Object model

function init() {
    const hamburger = document.querySelector(".hamburger")
    const sidebarCloseButton = document.querySelector(".close-button")
    const sideBarContainer = document.querySelector(".sidebar-container")
    
    const openSidebar = () => {
        sideBarContainer.classList.add("show-sidebar")
    }
    const closeSidebar = () => {
        sideBarContainer.classList.remove("show-sidebar")
    }
    
    hamburger.addEventListener("click",openSidebar)
    sidebarCloseButton.addEventListener("click",closeSidebar)
    
}
init()


 const navbarContainer = document.querySelector(".nav-container")
 window.addEventListener("scroll", function() {
   const scrollNumber = window.scrollY;
   const targetNumber = window.innerWidth >= 992 ? 70 : 50
   if (scrollNumber >= targetNumber) {
    navbarContainer.classList.add("sticky-nav");
   }else{
    navbarContainer.classList.remove("sticky-nav");
 }
 });
 


