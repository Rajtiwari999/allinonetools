// Homepage script: search, theme toggle, date
(function(){
  const searchInput = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearch');
  const cards = Array.from(document.querySelectorAll('.card'));
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const root = document.documentElement;

  // initialize year
  document.getElementById('year').innerText = new Date().getFullYear();

  // Search filter
  function runFilter(){
    const q = (searchInput.value || "").trim().toLowerCase();
    cards.forEach(card => {
      const name = (card.dataset.name || card.innerText || "").toLowerCase();
      card.style.display = name.includes(q) ? 'flex' : 'none';
    });
  }
  searchInput.addEventListener('input', runFilter);
  clearSearch.addEventListener('click', ()=>{
    searchInput.value = '';
    runFilter();
    searchInput.focus();
  });

  // Theme toggle with localStorage
  function setTheme(mode){
    if(mode === 'light'){
      document.documentElement.classList.add('light');
      themeIcon.className = 'fa-regular fa-sun';
      localStorage.setItem('site-theme','light');
    } else {
      document.documentElement.classList.remove('light');
      themeIcon.className = 'fa-regular fa-moon';
      localStorage.setItem('site-theme','dark');
    }
  }
  themeToggle.addEventListener('click', ()=>{
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'dark' : 'light');
  });

  // restore theme
  const saved = localStorage.getItem('site-theme') || 'dark';
  setTheme(saved);

  // simple keyboard shortcut: "/" to focus search
  window.addEventListener('keydown', (e)=>{
    if(e.key === '/' && document.activeElement !== searchInput){
      e.preventDefault();
      searchInput.focus();
    }
  });

  // initial run
  runFilter();
})();
