// получить объект по его id
/*var text = document.getElementById('text');

text.title = 'new'
console.log(text.title);

text.style.color = 'red'
text.style.backgroundColor = 'green'

text.innerHTML = 'new<br>string';

//document.getElementById('text').style.color = 'yellow'

//var spans = document.getElementsByName('tagName');

/*var spans = document.getElementsByClassName('simple-text');

for(var i = 0; i < spans.length; i++){
    console.log(spans[i].innerHTML);
}*/

document.getElementById('main-form').addEventListener('submit', checkform);

function checkform(){
    var e = document.getElementById('main-form');

    var name1 = e.name.value;
        console.log(name1);
    var pass = e.pass.value;
        console.log(pass);
    var repass = e.repass.value;
        console.log(repass);
    var p = e.state.value;
     console.log(p);
    var fail = '';


    if (name1 == '' || pass == '' || state == ''){
        fail = 'поля';
    } else if(name1.length <= 1 || name1.length > 50) {
        fail = 'введи норм имя';
    } else if(pass.split("&").length > 1){
        fail = 'говно пароль';
    }

   if(fail != ''){
   } else {
     alert('yfqc');
     window.location = 'https://vk.com/im'

   }
   return false;
}