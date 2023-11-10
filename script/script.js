/*
Свойство | Методы | События
*/

var i = 0;
var txt = 'Услуги в сфере IT'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("main_wrap__text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();






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


