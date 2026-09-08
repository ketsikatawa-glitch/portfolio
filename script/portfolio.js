import ListProject from './projects.js';
import Resume from './resume.js';

const buttonDayNight = document.querySelector('.js-toggle-button');
const imageChange = document.querySelector('.img-change');
const buttonNav = document.querySelectorAll('.js-button-nav');
const radioButton = document.querySelectorAll('.js-radio-button');
const containerMain = document.querySelector('.container');

let isChange = JSON.parse(localStorage.getItem('state')) || {
    darkMode: false
};

//initiate darkmode
if (isChange.darkMode) {
    document.body.classList.add('dark');
    imageChange.src = 'icon/sun.png';
}

//initiate project list
ListProject(containerMain);

buttonDayNight.addEventListener('click', () => {

    isChange.darkMode = !isChange.darkMode;

    document.body.classList.toggle('dark');

    if (isChange.darkMode) {
        imageChange.src = 'icon/sun.png';
    } else {
        imageChange.src = 'icon/moon.png';
    }

    localStorage.setItem('state', JSON.stringify(isChange));
});

buttonNav.forEach((button, index) => {
    button.addEventListener('click' , () => {
        radioButton[index].checked = true;

        switch(button.dataset.button){
            case '1':
                containerMain.innerHTML = '';
                ListProject(containerMain);
                break;

            case '2':
                containerMain.innerHTML = '';
                Resume(containerMain);
                break;

            case '3':
                containerMain.innerHTML = '';
                break;
        }
    });
});
