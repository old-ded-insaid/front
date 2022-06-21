//интервал (название функции, кол-во мс)
/*
var t = setInterval(may, 1000);

var co = 0;

function may(){
    co++;
    console.log('co: ' + co);

    if (co >= 10){
        clearInterval(t);
    }
}*/

/*
var co = 0;
setInterval(function(){
    co++;
    console.log('co: ' + co);
}, 1500);
*/
setTimeout(function(){
    console.log('co');
}, 10);
