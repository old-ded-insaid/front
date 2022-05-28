/*function sum(a, b){
    console.log(a + b);
};

const sum2 = (a, b) => {
    console.log('sum2 = '+ (a - b));
};

const sum3 = (a, b) => {
    const c = a + b;
    console.log('c = ' + c);
    return c;
};
const sum4 = (a, b) =>{ return (a + b)};
console.log('sum4 = ' + sum4);

sum(1, 2);
sum2(1, 2);
sum3(1, 2);
sum4(1, 2);*/

const a = prompt('let');

function is_let(age) {
    if(a >= 10) {
        return true;
        console.log(true);
    } else
        return false;
        console.log(false);
}

const mes = is_let(age) ? 'w' : 'r';
alert(mes);