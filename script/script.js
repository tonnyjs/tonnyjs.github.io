/*
Свойство | Методы | События
*/
000000111100001111
//function for tabs
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//for print text
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



//function for dark mode
document.addEventListener("DOMContentLoaded", function() {
  const darkIcon = document.querySelector(".dark-icon");

  //Добавим обработчик событий для клика на элемент с классом dark-icon
  darkIcon.addEventListener('click', function() {
    darkMode();
  });

  //function for dark mode
  function darkMode() {
    let dark = document.body;
    dark.classList.toggle("dark-mode");
  }
})


