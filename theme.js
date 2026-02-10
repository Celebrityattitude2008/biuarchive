// Theme helper for the BIU Archive
function applyStoredTheme(){
  try{
    const t = localStorage.getItem('site-theme') || 'dark';
    document.documentElement.classList.remove('theme-dark','theme-light');
    document.documentElement.classList.add('theme-' + t);
  }catch(e){/* ignore */}
}

function setTheme(theme){
  try{
    if(theme !== 'light' && theme !== 'dark') theme = 'dark';
    localStorage.setItem('site-theme', theme);
    document.documentElement.classList.remove('theme-dark','theme-light');
    document.documentElement.classList.add('theme-' + theme);
  }catch(e){console.error(e)}
}

// Immediate apply for scripts that load this file
applyStoredTheme();

// Expose to global
window.setTheme = setTheme;
window.applyStoredTheme = applyStoredTheme;
