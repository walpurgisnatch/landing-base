function popupThumbnails () {
    const thumbnails = document.querySelectorAll('.description__thumbnail'),
          bigImage = document.querySelector('.description__image');


    thumbnails.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {                
                const path = item.getAttribute('src');
                bigImage.setAttribute('src', path);
            }
        });
    });
}
