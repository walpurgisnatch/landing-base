const thanks = document.querySelector('#thanks'),
      overlay = document.querySelector('.overlay');

const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, order = false) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        if (!order) {
          getItem(item.getAttribute("id"));
        }

        modal.style.display = "block";
        overlay.style.display = "block";
        if(order) {
          overlay.style.zIndex = "2000";
        }
        document.body.style.overflow = "hidden";
      });
    });

    close.addEventListener('click', () => {
      closeModal(modal, order);
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(modal, order);
      }
    });
  }

  function bindOrder() {
    bindModal('.description__button', '#order', '#order-close', true);
  }

  function bindDescription() {
    bindModal('.item__button', '#description', '#descr-close');
    bindModal('.intro__button', '#description', '#descr-close');
  }

  bindOrder();
    bindDescription();
}

function closeModal(modal, order) {
  modal.style.display = "none";
  if (!order) {
    overlay.style.display = "none";
    document.body.style.overflow = "";
  } else {
    overlay.style.zIndex = "100";
  }
}

function showThanks() {
    closeModal(document.querySelector('#order'), true)
  thanks.style.display = "block";
  overlay.style.zIndex = "2000";
  document.body.style.overflow = "hidden";

  overlay.addEventListener('click', (e) => {
      closeModal(thanks, true);
  });

  document.querySelector("#thanks-close").addEventListener('click', () => {
      closeModal(thanks, true);
  });
}
