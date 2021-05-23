const scroll = () => {
    function bindScroll() {
        document.querySelector(".announce__stupid-button").addEventListener('click', (e) => {
            if (e.target) {
                document.querySelector(".catalog").scrollIntoView();
            } 
        });
    }

    bindScroll();
}
