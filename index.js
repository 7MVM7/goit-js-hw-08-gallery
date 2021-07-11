import galleryItems from "./app.js";
console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".js-gallery"),
  modal: document.querySelector(".js-lightbox"),
  modalImg: document.querySelector(".lightbox__image"),
};

let activeIndex = null;

// ======================== Step 1 - converting incoming data into Markup ==============================

// переменная для функции создающей разметку:

const imgCardsMarkup = createImgGalleryMarkup(galleryItems);

// функция, которая преображает входящий массив объектов в разметку:

function createImgGalleryMarkup(galleryItems) {
  return galleryItems.map((galleryItem) => {
    return `<li class="gallery__item">
                <a
                    class="gallery__link"
                    href="${galleryItem.original}"
                >
                <img
                    class="gallery__image"
                    src="${galleryItem.preview}"
                    data-source="${galleryItem.original}"
                    alt="${galleryItem.description}"
                    />
                </a>
            </li>`;
  });
}

refs.gallery.insertAdjacentHTML("beforeend", imgCardsMarkup.join(""));

// ================================ Step 2 - open && close modal =======================================================

refs.gallery.addEventListener("click", onGalleryClick);

// proverka

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  imgCardsMarkup.forEach((element, index) => {
    if (element.includes(event.target.src)) {
      activeIndex = index;
    }
  });
  console.log(activeIndex);
  window.addEventListener("keydown", keyboardManipulation);
  refs.modal.classList.add("is-open");
  refs.modalImg.src = event.target.dataset.source;
}

// function closeModal(event) {
//   if (event.target.nodeName === "IMG") {
//     return;
//   }
//   refs.modal.classList.remove("is-open");
//   refs.modalImg.src = "#";
// }

refs.modal.addEventListener("click", closeModal);

function closeModal() {
  refs.modal.classList.remove("is-open");
  refs.modalImg.src = "";
  refs.modalImg.alt = "";
  window.removeEventListener("keyup", keyboardManipulation);
}

// window.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") {
//     closeModal(event);
//   }
//   return;
// });

// ================================ Step 3 - switch with arrows =======================================================

function keyboardManipulation(e) {
  switch (e.key) {
    case activeIndex < galleryItems.length - 1 && "ArrowRight":
      activeIndex += 1;
      refs.modalImg.src = galleryItems[activeIndex].original;
      break;
    case activeIndex > 0 && "ArrowLeft":
      activeIndex -= 1;
      refs.modalImg.src = galleryItems[activeIndex].original;
      break;
    case activeIndex === 0 && "ArrowLeft":
      activeIndex = galleryItems.length - 1;
      refs.modalImg.src = galleryItems[activeIndex].original;
      break;
    case activeIndex === galleryItems.length - 1 && "ArrowRight":
      activeIndex = 0;
      refs.modalImg.src = galleryItems[activeIndex].original;
      break;
    case "Escape":
      closeModal();
      break;
    default:
      alert("что-то пошло не так");
  }
}
