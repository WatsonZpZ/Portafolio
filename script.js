const toggleBtn = document.getElementById('toggleTheme');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-theme');

      toggleBtn.textContent = body.classList.contains('dark-theme')
        ? 'Modo claro'
        : 'Modo oscuro';
    });

