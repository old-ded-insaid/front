const img = document.querySelector('.slider_img');

const img_arr = ['../html+css/ec3e5c6d994171e.jpg', '../html+css/first_bg.jpg'];

const dots = document.querySelectorAll(
    '.slider_dot'
)

let cur_ind = 0;

function change_ind(ind){
    cur_ind = ind;
    slide(cur_ind);
}

function next_ind(dir){
    cur_ind += dir;
    if(cur_ind >= img_arr.length) {
        cur_ind = 0;
    } else if (cur_ind < 0) {
        cur_ind = img_arr.length - 1;
    }

    slide(cur_ind);
}

function slide(ind){
    img.style.display = 'none';
    setTimeout(() => {
        img.style.display = 'block';
    }, 100);

    

    img.src = img_arr[ind];
    update_dois(ind);
}
function update_dois(ind){
    for(let dot of dots){
        dot.classList.remove('active');
    }
  dot[ind].classList.add('active');
}
