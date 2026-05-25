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