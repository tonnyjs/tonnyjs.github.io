/*
Свойство | Методы | События
*/

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let i = 0;
let txt = 'Услуги в сфере IT';
let speed = 100; 

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


// navigation

function darkMode() {
  alert('0x000fff')
}