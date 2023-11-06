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

}

mainCanvas();