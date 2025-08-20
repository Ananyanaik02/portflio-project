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

// Resume modal logic
const resumeBtn = document.getElementById("resumeBtn");
const resumeModal = document.getElementById("resumeModal");
const closeResume = document.getElementById("closeResume");

if (resumeBtn && resumeModal && closeResume) {
  resumeBtn.addEventListener("click", () => {
    resumeModal.classList.remove("hidden");
    resumeModal.classList.add("flex");
  });

  closeResume.addEventListener("click", () => {
    resumeModal.classList.add("hidden");
    resumeModal.classList.remove("flex");
  });

  // Close when clicking outside modal content
  resumeModal.addEventListener("click", (e) => {
    if (e.target === resumeModal) {
      resumeModal.classList.add("hidden");
      resumeModal.classList.remove("flex");
    }
  });
}
