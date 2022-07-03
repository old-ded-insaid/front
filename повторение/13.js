//находит элемент по id и записываем его в переменную
let elem = document.getElementById('bth');
//у елемента меняем цвет
elem.style.background = 'green';

//находит элемент по id и записываем его в переменную
let elem2 = document.getElementsByClassName('bth');
/* берем первый не нулевой elem 
и меняем его свойства*/
elem2[0].style.background = '#009688';
elem2[0].style.fontSize = '24px';
elem2[0].style.color = '#fff';
//изменение текста внутри элемента
elem2[0].innerHTML = 'ЖМИ, ЕКАРНЫЙ БАБАЙ';
// добавление элементу класс
elem2[0].classList.add = 'border';


/*ищем все элементы с классом bth 
и вносим в переменную*/
let elem3 = document.querySelectorAll('.btha');
for (let i= 0; elem3.length; i++){
    elem3[i].style.background = '#009145';
    elem3[i].style.fontSize = '20px';
    elem3[i].style.color = '#fff';
    elem3[i].style.borderRadius= '30px';
    //изменение текста внутри элемента
    elem3[i].innerHTML = 'ЖМИ, ЕКАРНЫЙ БАБАЙ';
    // добавление элементу класс
    elem3[i].classList.add = 'border';
}
