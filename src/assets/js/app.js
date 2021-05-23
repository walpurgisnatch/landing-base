//= components/modals.js
//= components/forms.js
//= components/items.js
//= components/description.js
//= components/tabs.js
//= components/scroll.js
//= components/images.js

window.addEventListener('DOMContentLoaded', () => {
    createItems();
    scroll();
    modals();
    forms();
    tabs(".features__nav", ".features__link", ".features__content", "active");
});
