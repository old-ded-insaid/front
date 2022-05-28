const percon = {
    first_name: 'mih',
    last_name: 'ne',
    age: '22',
    city: 'novosib',
    marred: false,
    leng: {
            engl: '60',
            span: '60' 
    }
};

console.log(percon.age, percon['last_name'], percon.leng.engl);
/*
for(let key in person) {
    console.log(key, percon[key])
}*/

const nums = [1, 2, 3, 4];
console.log(nums[2]);
/*
for(let num in nums){
    console.log(nums);
}*/

percon.age = 23;
console.log(percon.age);

percon.qwe = 1998;
console.log(percon.qwe);

nums.push(5);
console.log(nums);

nums.shift(5);
console.log(nums);

nums.shift(5);
console.log(nums.length);
/*
for(let i = 0; i < nums.length; i ++){

}*/