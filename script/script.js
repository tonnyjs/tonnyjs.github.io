/*
Свойство | Методы | События
*/

const text = ['Unixsoft ', 'Услуги в сфере IT'];
const outputElement = document.querySelector('.main_wrap'); // Используем querySelector с классом
let currentTextIndex = 0;
let currentCharIndex = 0;

function typeText() {
  if (currentTextIndex < text.length) {
    const currentText = text[currentTextIndex];
    if (currentCharIndex < currentText.length) {
      outputElement.textContent += currentText[currentCharIndex];
      currentCharIndex++;
      setTimeout(typeText, 50); // Задержка в миллисекундах
    } else {
      if (currentTextIndex !== 0) {
        outputElement.innerHTML += '<br>'; // Добавить перенос строки
      }
      currentCharIndex = 0;
      currentTextIndex++;
      setTimeout(typeText, 1000); // Задержка между фразами в миллисекундах
    }
  }
}

typeText();



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


