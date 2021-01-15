export class Badge{
    constructor(title, losed){
        this.title = title;
        this.losed = losed;
        this.url = function (){
            if(this.title == 'Белые зубы'){
                return 'badge.png'
            }
            else if(this.title == 'Клиентик'){
                return 'flag.png';
            }
            else{
                return 'smart.png';
            }
        }
    }
 
    get srcRat(){
        if(window.devicePixelRatio > 1.5){
            return Math.ceil(window.devicePixelRatio) + 'x' + this.url()
        }
        else  return this.url()
    }

    // get src (){
    //     if(window.devicePixelRatio > 1.5){
    //        return '2@x' + this.url 
    //     }
    //     return url
    // }
}


// function buildRealBages(num, list){
//     let arr = [];
//     for(let i = 0; i <= num; i++){
//         if(i % 2 != 0 && i % 3 != 0){
//             arr.push(new Badge('Белые зубы', false));
//         }
//         else if(i % 3 == 0 && i % 2 != 0){
//             arr.push(new Badge('Клиентик', false));
//         }
//         else {
//             arr.push(new Badge('Smart', false));
//         }
//     }


//     arr.map((elem) => {
//         list.innerHTML += `<li class='badgesCard badges__list-item'>
//             <img src=../img/${elem.srcRat} alt=${elem.title}>
//             <p class='badgesTitle'>${elem.title}</p>
//             </li>`
//     })
// }


function buildRealBages(num, list){
        let arr = [];
        for(let i = 0; i <= num; i++){
            if(i % 2 != 0 && i % 3 != 0){
                arr.push(new Badge('Белые зубы', false));
            }
            else if(i % 3 == 0 && i % 2 != 0){
                arr.push(new Badge('Клиентик', false));
            }
            else {
                arr.push(new Badge('Smart', false));
            }
        }
    
    
        arr.map((elem) => {
            list.innerHTML += `<li class='badgesCard badges__list-item'>
                <img src=../img/${elem.srcRat} alt=${elem.title}>
                <p class='badgesTitle'>${elem.title}</p>
                </li>`
        })
}



let num = 12;
let badgesList = document.querySelector('.badges__list')

let promise = new Promise((resolve, reject) => {
    buildRealBages(num, badgesList)
    setTimeout(() => resolve("done"), 500);
})

promise.then(val => {
if(window.screen.width > 720 ){

if(num <= 7){
    document.querySelector('.badgesLabel').style.display = 'none';
}
}
if(window.screen.width > 720){
    if(num <= 11){
        document.querySelector('.badgesLabel').style.display = 'none';
    }
}


})






// buildRealBages(num, badgesList)





