let succes = ` succes`
let str = 'plus'
console.log(str+succes)
class Basket {
    constructor(
        items,
        plusClass = 'plus',
        minusClass = `minus`,
        deleteClass = 'delete',
    )
    {
        this.items = items,
        this.plusClass = plusClass,
        this.minusClass = minusClass,
        this.deleteClass = deleteClass
    }

    render(selector = '.basket'){
        console.log(document.querySelector(selector))
        let out = document.querySelector(selector);
        out.innerHTML = ' ';

        for(let art in this.items){
            let item = document.createElement('div');
            item.classList.add('basket-item');
            let good = this.items[art];

            item.innerHTML = `
                <button class=${this.deleteClass} type='button'  data-key=${art}>убрать</button>
                <div class='basket-img'>
                <img src=${good['image']} alt=${good['name']}>
                <p class='basket-text'>${good['name']}</p>
                </div>
                <button class=${this.minusClass} type='button'  data-key=${art}>-</button>
                <p class='basket-text'><span>Кол-во</span><span>${good['count']}</span></p>
                <button class=${this.plusClass} type='button'  data-key=${art}>+</button>
                <p class='basket-text'><span>Цена</span><span>${good['price'] * good['count']}, BYN</span></p>
                `
            out.appendChild(item)
        }  
        let sum = document.createElement('div');
        sum.classList.add('allSum');
            sum.innerHTML = `Итого: ${this.allSum()} BYN
            <button class='confirm' type='button' data-key='confrim'>Сохранить</button>`
            out.appendChild(sum)
    }
     delete(key){
        delete this.items[key];
     }

     plus(key){
        this.items[key]['count']++;
     }

     minus(key){
        this.items[key]['count']--;
        if(this.items[key]['count'] == -1){
            this.delete(key)
        }
     }


     allSum(){
         let money = [];
          Object.keys(this.items).forEach(element => {
            
             money.push(this.items[element]['price'] * this.items[element]['count'])
         });

         if(money.length > 0){
            return money.reduce((prev, current) => {
                return prev + current
             })
         }
         else return 'Сумма: 0'
     }
     
     confirm(){
         console.log('holaaaaaaaaaaa')
         localStorage.setItem('data', JSON.stringify(this.items))
     }
}



// export {Basket}
let cart = new Basket(JSON.parse(localStorage.getItem('data')))
cart.render('.basket')

let out = document.querySelector('.basket');
out.addEventListener('click', (e) => {
    let art = e.target.dataset.key
    if(art){
        if(e.target.classList.contains('delete')){
            cart.delete(art);
            cart.render();
        }
        if(e.target.classList.contains('plus')){
            cart.plus(art);
            cart.render();
        }
        if(e.target.classList.contains('minus')){
            cart.minus(art);
            cart.render();
        }
        if(e.target.classList.contains('confirm')){
            cart.confirm();
        }
    }
})



//для стилизации
if(window.screen.availWidth >= 1140){
    document.querySelector('.main').classList.remove('container-xl');
    document.querySelector('.footer').classList.remove('container-xl');
}