// ==========================
// SIDE MENU
// ==========================
const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navlinks = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
  sideMenu.style.transform = 'translateX(16rem)';
}

// ==========================
// NAVBAR SCROLL EFFECT
// ==========================
window.addEventListener('scroll', () => {
  if (scrollY > 50) {
    navBar.classList.add(
      'bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
      'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20'
    );
    navlinks.classList.remove(
      'bg-white', 'shadow-sm', 'bg-opacity-50',
      'dark:border', 'dark:border-white/50', 'dark:bg-transparent'
    );
  } else {
    navBar.classList.remove(
      'bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
      'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20'
    );
    navlinks.classList.add(
      'bg-white', 'shadow-sm', 'bg-opacity-50',
      'dark:border', 'dark:border-white/50', 'dark:bg-transparent'
    );
  }
});

// ==========================
// DARK MODE
// ==========================
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
}

// ==========================
// RESUME MODAL
// ==========================
const resumeModal = document.getElementById("resumeModal");
const resumeCloseBtn = document.getElementById("resumeCloseBtn");
const resumeImage = document.getElementById("resumeImage");

// Open modal (global for onclick)
window.openResumeModal = function () {
  resumeModal.classList.remove("hidden");
};

// Close modal
function closeModal() {
  resumeModal.classList.add("hidden");
}

// Close button click
resumeCloseBtn.addEventListener("click", closeModal);

// Background click closes modal
resumeModal.addEventListener("click", (event) => {
  if (event.target === resumeModal) closeModal();
});

// Prevent image click from closing modal
resumeImage.addEventListener("click", (event) => event.stopPropagation());
