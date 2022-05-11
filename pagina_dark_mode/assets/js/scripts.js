function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    h1.classList.toggle(darkModeClass);
    buttom.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';
    if (body.classList.contains(darkModeClass)){
        buttom.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    buttom.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const h1 = document.getElementById("page-title");
const buttom = document.getElementById("mode-selector");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];

buttom.addEventListener('click', changeMode);

