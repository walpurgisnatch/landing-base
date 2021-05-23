const items = [{"id": 1, "header": "Oak table", "price": "$500", "images": ["assets/img/table.png"], "description": ["heh"], "status": "new"}]

function createItems() {
    items.forEach(({id, header, price, images, description, status}) => {
        let item = document.createElement('div');

        item.classList.add('item');

        item.innerHTML = `
  <div class="item__preview">
    <img class="item__image" src=${images[0]}>
    <div class=${status}>${status}</div>
  </div>
  <div class="item__header">${header}</div>
  <div class="item__description">${description[0]}</div>
  <div class="item__price">${price}</div>
  <a id="${id}" class="item__button">
    <img class="item__icon" src="assets/img/buy.svg" height="15px" width="15px" />
    Buy
  </a>
  `;

        document.querySelector('.catalog').appendChild(item);

        if (status === 'new') {
            var clone = item.cloneNode(true);
            document.querySelector('new-items').appendChild(clone);
        }
        if (status === 'popular') {
            var clone = item.cloneNode(true);            
            document.querySelector('popular').appendChild(clone);
        }
    });  
}
