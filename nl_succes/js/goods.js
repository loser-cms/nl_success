let goods = {
    'p123451': {
        name: 'Моряк',
        url: '#',
        image: '../img/lego/marine.jpg',
        price: 10.0,
    },

    'p123452': {
        name: 'Пират',
        url: '#',
        image: '../img/lego/pirat.jpg',
        price: 8.0,
    },

    'p123453': {
        name: 'Бэтман',
        url: '#',
        image: '../img/lego/batman.jpg',
        price: 11.0,
    },

    'p123454': {
        name: 'Застройщик',
        url: '#',
        image: '../img/lego/build.jpg',
        price: 9.0,
    },

    'p123455': {
        name: 'Розовый бэтман',
        url: '#',
        image: '../img/lego/rosa.jpg',
        price: 11.0,
    },

    'p123456': {
        name: 'Супермен',
        url: '#',
        image: '../img/lego/superman.jpg',
        price: 9.90,
    },
}






let goods2 = {
    'p123451': {
        name: 'Моряк',
        url: '#',
        image: '../img/lego/marine.jpg',
        price: 10.0,
    },

    'p123452': {
        name: 'Пират',
        url: '#',
        image: '../img/lego/pirat.jpg',
        price: 8.0,
    },

    'p123453': {
        name: 'Бэтман',
        url: '#',
        image: '../img/lego/batman.jpg',
        price: 11.0,
    },

    'p123454': {
        name: 'Застройщик',
        url: '#',
        image: '../img/lego/build.jpg',
        price: 9.0,
    },

    'p123455': {
        name: 'Розовый бэтман',
        url: '#',
        image: '../img/lego/rosa.jpg',
        price: 11.0,
    },

    'p123456': {
        name: 'Супермен',
        url: '#',
        image: '../img/lego/superman.jpg',
        price: 9.90,
    },
    'p123454': {
        name: 'Застройщик',
        url: '#',
        image: '../img/lego/build.jpg',
        price: 9.0,
    },

    'p123455': {
        name: 'Розовый бэтман',
        url: '#',
        image: '../img/lego/rosa.jpg',
        price: 11.0,
    },

    'p123456': {
        name: 'Супермен',
        url: '#',
        image: '../img/lego/superman.jpg',
        price: 9.90,
    },
    'p123454': {
        name: 'Застройщик',
        url: '#',
        image: '../img/lego/build.jpg',
        price: 9.0,
    },

    'p123455': {
        name: 'Розовый бэтман',
        url: '#',
        image: '../img/lego/rosa.jpg',
        price: 11.0,
    },

    'p123456': {
        name: 'Супермен',
        url: '#',
        image: '../img/lego/superman.jpg',
        price: 9.90,
    },
    'p123454': {
        name: 'Застройщик',
        url: '#',
        image: '../img/lego/build.jpg',
        price: 9.0,
    },

    'p123455': {
        name: 'Розовый бэтман',
        url: '#',
        image: '../img/lego/rosa.jpg',
        price: 11.0,
    },

    'p123456': {
        name: 'Супермен',
        url: '#',
        image: '../img/lego/superman.jpg',
        price: 9.90,
    },
}

let shop = document.querySelector('.goods');

function renderShop(goods){
    for(let key in goods){
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                <h5 class='card__title'>${goods[key]['name']}</h5>
                <img src=${goods[key]['image']} alt=${goods[key]['name']} class='card__img'>
                <p class='card__price'>${goods[key]['price']}  byn</p>
                <button type='button' class='card__button' data-key=${key}>В корзину</button>
        `
        shop.appendChild(card);
    }
}

function addToLocalStorage(goods){
    let data = JSON.parse(localStorage.getItem('data')) || {};
    shop.addEventListener('click', (e) => {
        if(e.target.dataset.key){
            let articul = e.target.dataset.key;
            if(!data[articul]){
                goods[articul]['count'] = 1;
                data[articul] = goods[articul];
            }
            else {
                let count = goods[articul]['count'];
                count++;
                goods[articul]['count'] = count;
            }
        }
        localStorage.setItem('data', JSON.stringify(data))
    })
}

if(window.screen.availWidth >= 1140){
    renderShop(goods2);
    addToLocalStorage(goods2)
}

renderShop(goods);
addToLocalStorage(goods)


