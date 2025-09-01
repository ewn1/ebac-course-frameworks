document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        let seuNumero = document.getElementById('seu-numero').value;
        seuNumero = parseInt(seuNumero);
        let pcNumero = Math.floor(Math.random() * 6);
        pcNumero = parseInt(pcNumero)
        
        const soma = seuNumero + pcNumero;

        let resultado;

        if (soma % 2 === 0) {
            resultado = "Par!";
        } else {
            resultado = "Ímpar!";
        }

        document.getElementById('numero-jogador').innerText = `Você escolheu o número:  ${seuNumero}`;
        document.getElementById('numero-computador').innerText = `O computador escolheu o número:  ${pcNumero}`;
        document.getElementById('soma').innerText = `A soma total é:  ${soma}`;
        document.getElementById('resultado').innerText = `O resultado é:  ${resultado}`;
        document.querySelector('.resultado').style.display = 'block';
        
    })
})