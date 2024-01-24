let elementoDuvida = document.querySelectorAll('.duvida')

elementoDuvida.forEach(
    duvida => duvida.addEventListener(
        'click', () => duvida.classList.toggle('ativa')));