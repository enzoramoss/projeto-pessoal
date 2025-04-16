function swithTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

// Adicionar os eventos
document.getElementById('swithchThemeBtn').addEventListener('click', swithTheme)