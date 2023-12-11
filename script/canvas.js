document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#130E1F'); // Orange
    gradient.addColorStop(0.5, '#3A0C34'); // Pink
    gradient.addColorStop(1, '#1e90ff'); // Blue

    // Рисуем бабочку
    drawButterfly(ctx, 400, 150, 50, 20, 200, 40);
    drawButterfly(ctx, 200, 250, 50, 20, 200, 80);

    function drawButterfly(ctx, x, y, bodyWidth, bodyHeight, wingWidth, wingHeight) {
      // Рисуем тело бабочки
      ctx.fillStyle = "#070e1d"; // коричневый цвет
      ctx.fillRect(x - bodyWidth / 2, y - bodyHeight / 2, bodyWidth, bodyHeight);

      // Рисуем крылья бабочки
      ctx.fillStyle = "#0e4429"; // розовый цвет
      ctx.beginPath();
      ctx.moveTo(x, y - bodyHeight / 2);
      ctx.quadraticCurveTo(x - wingWidth / 2, y - bodyHeight / 2 - wingHeight, x, y - bodyHeight);
      ctx.quadraticCurveTo(x + wingWidth / 2, y - bodyHeight / 2 - wingHeight, x, y - bodyHeight / 2);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x, y - bodyHeight / 2);
      ctx.quadraticCurveTo(x - wingWidth / 2, y + bodyHeight / 2 + wingHeight, x, y + bodyHeight / 2);
      ctx.quadraticCurveTo(x + wingWidth / 2, y + bodyHeight / 2 + wingHeight, x, y - bodyHeight / 2);
      ctx.closePath();
      ctx.fill();
    }

});