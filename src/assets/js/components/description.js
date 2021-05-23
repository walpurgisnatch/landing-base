function getItem (id) {
    items.forEach(item => {
      if (item.id == id) {
          setDescription(item.header, item.description, item.price, item.images);
      }
    });
  }

function setDescription (header, description, price, images) {
    let description_list =  document.querySelector(".description__description"),
        thumbnails = document.querySelector(".description__thumbnails");
    document.querySelector(".description__header").innerHTML = header;
    document.querySelector(".description__price").innerHTML = price;    
    document.querySelector(".description__image").src = images[0];
          
    description_list.textContent = '';
    thumbnails.innerHTML = '';
    
    images.forEach(item => {
        let img = document.createElement('img');
        img.classList.add("description__thumbnail");
        img.src = item;
        thumbnails.appendChild(img);
    });
    description.forEach(item => {
      let li = document.createElement('li');
        li.classList.add("description__description-item");        
        li.innerHTML += item;        
        description_list.appendChild(li);        
    });

    popupThumbnails();

  }
