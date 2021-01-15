shop.addEventListener('click', (e) => {
    if(e.target.dataset.key){
        if(!localStorage.getItem(`${e.target.dataset.key}`)){
            goods[e.target.dataset.key]['count'] = 1; 
            localStorage.setItem(`${e.target.dataset.key}`, JSON.stringify(goods[e.target.dataset.key]))
        }
        else{
          let count =  JSON.parse(localStorage.getItem(e.target.dataset.key))['count']++;
             count++;
          goods[e.target.dataset.key]['count'] = count; 

        localStorage.setItem(e.target.dataset.key, JSON.stringify(goods[e.target.dataset.key]))
        }
    }
})


