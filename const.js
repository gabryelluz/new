document.addEventListener('DOMContentLoaded', function () {
    alert('Bem-vindo pessoal');

    let nomeUsuario = prompt("Qual o seu nome?");
    let spanText = document.querySelector('span');

    if (nomeUsuario === null || nomeUsuario === '') {
        spanText.textContent = "Usuário";
    } else {
        spanText.textContent = nomeUsuario;
    }

    console.log("NOME DO USUÁRIO = " + nomeUsuario);

    const objectiveButtons = document.querySelectorAll('.objective-button');
    const objectiveContents = document.querySelectorAll('.objective-content');

    objectiveButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            objectiveButtons.forEach(btn => btn.classList.remove('active'));
            objectiveContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(button.dataset.target).classList.add('active');
        });
    });

    const counters = document.querySelectorAll('.counter');
    const objectiveDates = [
        new Date('2024-04-26T00:00:00'),
        new Date('2025-01-17T00:00:00'),
        new Date('2024-12-17T00:00:00'),
        new Date('2024-12-13T00:00:00')
    ];

    counters.forEach((counter, index) => {
        counter.textContent = calculateTimeRemaining(objectiveDates[index]);
    });

    function calculateTimeRemaining(targetDate) {
        const now = new Date();
        const difference = targetDate - now;

        let seconds = Math.floor(difference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        return `${days} Dias ${hours} Horas ${minutes} Minutos ${seconds} Segundos`;
    }
});
