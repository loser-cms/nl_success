import{Badge} from './badges.js';

let btn1 = document.querySelector('#buttonMessage');
let list1 = document.querySelector('.userMenu__list');




function eventList(btn, list){
    btn.addEventListener('click', (e) => {
    
        if(list.classList.contains('display')){
            list.style.display= 'none';
        }
        else {
            list.style.display = 'flex';
            list.classList.add('display-list');
        }
        list.classList.toggle('display')
    })
}

eventList(btn1, list1);








