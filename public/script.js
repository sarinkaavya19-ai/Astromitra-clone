/** Theme Toggle Script */
const toggleBtn = document.getElementById('theme-toggle');

// 1. Check for saved theme preference, otherwise use system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
  document.documentElement.classList.add('dark-mode');
} else {
  document.documentElement.classList.remove('dark-mode');
}

// 2. Handle the click event
toggleBtn.addEventListener('click', () => {
  // Toggle the class
  document.documentElement.classList.toggle('dark-mode');
  
  // Save the preference to localStorage
  if (document.documentElement.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
/** Navigation Toggle Script */
let list=document.getElementById('nav-list');
let menuIcon=document.querySelector('.menu-icon');
let closeIcon=document.querySelector('.close-icon');
function toggleNavOpen(){
    list.style.display='block';
    menuIcon.style.display='none';
    closeIcon.style.display='block';
}
function toggleNavClose(){
    list.style.display='none';
    menuIcon.style.display='block';
    closeIcon.style.display='none';
}