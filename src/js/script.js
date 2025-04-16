function swithTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('swithchThemeBtn').addEventListener('click', swithTheme)

document.querySelectorAll('.carro h2').forEach(carro => {
    carro.addEventListener('click', function() {
        if (this.textContent === 'Onix') {
            window.location.href = 'https://www.chevrolet.com.br/carros/novo-onix'
        } else if (this.textContent === 'Polo') {
            window.location.href = 'https://www.vw.com.br/pt/carros/polo.html'
        } else if (this.textContent === 'Strada') {
            window.location.href = 'https://strada.fiat.com.br/'
        }
    })
})