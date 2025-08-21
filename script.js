// Dark Mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

// Side Menu
const sideMenu = document.querySelector('#sideMenu');
const closeSideMenu = document.querySelector('#closeSideMenu');
function openMenu(){ sideMenu.style.transform = 'translateX(-16rem)'; }
function closeMenu(){ sideMenu.style.transform = 'translateX(16rem)'; }
closeSideMenu.addEventListener('click', closeMenu);

// Nav scroll
const navBar = document.querySelector("nav");
const navlinks = document.querySelector("nav ul");
window.addEventListener('scroll', ()=> {
  if(window.scrollY > 50){
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
    navlinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50','dark:bg-transparent');
  }else{
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
    navlinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50','dark:bg-transparent');
  }
});

// Resume Modal
const resumeModal = document.getElementById("resumeModal");
const closeResume = document.getElementById("closeResume");
const resumeImage = document.getElementById("resumeImage");

function openModal() { resumeModal.classList.remove("hidden"); }
function closeModal() { resumeModal.classList.add("hidden"); }

closeResume.addEventListener('click', closeModal);
resumeModal.addEventListener('click', e => { if(e.target === resumeModal) closeModal(); });
resumeImage.addEventListener('click', e => e.stopPropagation());
