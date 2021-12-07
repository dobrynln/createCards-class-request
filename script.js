class Cards {
    constructor(img, alt, title, descr, price, parentNode, ...classMenu) {
        this.img = img;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classMenu = classMenu
        this.parentChild = document.querySelector(parentNode)
        this.convertNumber = 2;
        this.convertValue();
    }

    convertValue() {
        this.price = this.price * this.convertNumber;
    }

    render() {
        const card = document.createElement('div')
        console.log(this.classMenu)
        if(this.classMenu.length === 0) {
            this.classitem = 'menu__item'
            card.classList.add(this.classitem)
        } else {
            this.classMenu.forEach((item) => card.classList.add(item))
        }
        card.innerHTML += `
            <img src=${this.img} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div> `;

        this.parentChild.append(card)
    }
}

const getData = async (url) => {
    const res = await fetch(url, {
        method: 'GET'
    });
    return await res.json();
}
getData('http://localhost:3000/menu').then(res => {
    res.forEach(({img, altimg, title, descr, price}) => {
        new Cards(
            img, altimg, title, descr, price,'.menu-container'
        ).render()
    })
})