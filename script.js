const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navlinks = document.querySelector("nav ul");


function openMenu(){
  sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
  sideMenu.style.transform = 'translateX(16rem)';
}
window.addEventListener('scroll', ()=>{
if(scrollY > 50){
 navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
  'shadow-sm' , 'dark:bg-darkTheme','dark:shadow-white/20');
  navlinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50','dark:bg-transparent');
 }else{
  navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
  'shadow-sm' , 'dark:bg-darkTheme','dark:shadow-white/20');
    navlinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50','dark:bg-transparent');
 }
})
 

 if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.
matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
function toggleTheme(){
  document.documentElement.classList.toggle('dark');
  if(document.documentElement.classList.contains('dark')){
    localStorage.theme = 'dark';
}else{
  localStorage.theme = 'light';
}

}


// Resume Modal Functions
function openModal() {
  document.getElementById("resumeModal").classList.remove("hidden");
}

function closeModal(event) {
  // If the event is from the background click, close the modal.
  if (event && event.target.id === "resumeModal") {
    document.getElementById("resumeModal").classList.add("hidden");
    // This is the new part for the 'X' button. If the event is not present, it means the 'X' button was clicked.
  } else if (!event) {
    document.getElementById("resumeModal").classList.add("hidden");
  }
}
