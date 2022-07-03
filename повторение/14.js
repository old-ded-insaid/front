/*document.querySelector('.qwe').onclick = function(){
    alert('sdf1');
}*/

/*
document.querySelector('.qwe').addEventListener('click', () => alert('sdf1'));

document.querySelector('.qwe').addEventListener('click', () => alert('sdf2'));
*/
/*
const imputElement = document.querySelector("#text");
const resultElement = document.querySelector(".result");

imputElement.addEventListener("change", function(){
    resultElement.textContent = imputElement.value;
})
*/
/*
const user ={
    name: "",
    surn: ""
};
const bth= document.querySelector('#bth');
const inputName = document.querySelector('#name');
const inputSurn = document.querySelector('#surn');

bth.addEventListener("click", function(){
    user.name = inputName.value;
    user.surn = inputSurn.value;
    console.log(user);
})

*/

const contactChecked = { // объект
    email: false, // ключ "email" - значение false
    phone: false, // ключ "phone" - значение false
    mail: false,  // ключ "mail" - значение false
};
const btn = document.querySelector("#btn");  //элемент btn
const checkboxElements = document.querySelectorAll('[name="contact"]'); //элементы checkbox


btn.addEventListener("click", function(){ //по клику на кнопку
    checkboxElements.forEach(element => {    //для каждого елемента checkbox
        contactChecked[element.value] = element.checked;  
//в объект contactChecked по ключу element.value записываем значение checked
    })
    console.log(contactChecked);                    //выведем в консоль объект
});