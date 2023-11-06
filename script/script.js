/*
Свойство | Методы | События
*/

//function for draw canvas
function mainCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Создаем градиент
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(1, '#1b1f24');  // Первый цвет
    gradient.addColorStop(0, '#0e4429');  // Второй цвет


    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.strokeStyle = '#0e4429'; // Зеленый цвет
    ctx.lineWidth = 2; // Ширина линии

    ctx.beginPath();

    // Начинаем с левого верхнего угла
    ctx.moveTo(0, canvas.height / 2);

    // Рисуем волновую линию
    for (let x = 0; x < canvas.width; x += 10) {
        const y = canvas.height / 1.5 + (Math.sin(x / 80) * 20);
        ctx.lineTo(x, y);
    }

    // Заканчиваем рисование линии
    ctx.stroke();
}

mainCanvas();

// function for tabs
function openTab(tabId) {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    tabPanes.forEach(pane => {
        pane.classList.remove('active');
    });

    const selectedButton = document.querySelector(`[onclick="openTab('${tabId}')"]`);
    const selectedPane = document.getElementById(tabId);

    selectedButton.classList.add('active');
    selectedPane.classList.add('active');
}


