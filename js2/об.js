/*var date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getHours());
console.log(date.getMinutes());

console.log('текущее время: ' + date.getHours() + ' часов ' + date.getMinutes() + ' минут');

date.setHours(11);
date.setMinutes(11);
console.log('текущее время: ' + date.getHours() + ' часов ' + date.getMinutes() + ' минут');

var l = [1, 2, 4, 0, 88];
console.log(l.length);
console.log(l.join(', '));
console.log(l.sort());
console.log(l.reverse());
console.log(l.reverse().join(', '));
var s = l.reverse().join(', ');
console.log(s.split(", "));
console.log(s.split(', '));
*/

//классы
class person {
    constructor(name, age, happ){
        this.name = name;
        this.age = age;
        this.happ = happ;
    }

    info() {
        console.log('чел: ' + this.name + ', возраст: ' + this.age);
        
    }
}

var al = new person('al', 45, true);
var b = new person('bob', 22, false);

al.info();
b.info();

console.log(al.name, al.age, al.happ);
console.log(b.name, b.age, b.happ);