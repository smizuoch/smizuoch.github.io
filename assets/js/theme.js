const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; // Target the <html> element
const lightIcon = '☀️';
const darkIcon = '🌙';

// Function to set the theme
function setTheme(theme) {
  if (theme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = lightIcon; // Show light icon to switch back
    localStorage.setItem('theme', 'dark');
  } else {
    htmlElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = darkIcon; // Show dark icon to switch
    localStorage.setItem('theme', 'light');
  }
}

// Function to toggle the theme
function toggleTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

// Function to get the preferred theme (localStorage > system > default)
function getPreferredTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    return storedTheme;
  }
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light'; // Default to light
}

// Initial theme setup on page load
const preferredTheme = getPreferredTheme();
setTheme(preferredTheme);

// Add event listener for the button click
themeToggle.addEventListener('click', toggleTheme);

// Optional: Listen for changes in system preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  // Only change if the user hasn't manually set a theme via the button
  if (!localStorage.getItem('theme')) {
    setTheme(event.matches ? 'dark' : 'light');
  }
});
