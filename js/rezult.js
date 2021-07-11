import galleryItems from "./app.js";
console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".js-gallery"),
  modal: document.querySelector(".js-lightbox"),
  modalImg: document.querySelector(".lightbox__image"),
};

let activeIndex = null;


// ======================== Step 1 - converting incoming data into Markup ==============================

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
























// import galleryItems from './gallery-items.js';
// console.log(galleryItems);
// const galleryList = document.querySelector('.js-gallery');
// function addsGalleryItems(image) {
//   const elements = `<li><a href = ${image.original}><img src = ${image.preview} alt = ${image.description}/></a></li>`;
//   return elements;
// }
// const elementListRef = galleryItems.map(image => addsGalleryItems(image));
// console.log(elementListRef.join(''));
// galleryList.innerHTML = elementListRef.join('');




{/* <li class="gallery__item">
<a class="gallery__link"
  href="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg">
  <img class="gallery__image"
    src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg"
    data-source="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg"
    alt="Hokkaido Flower" />
</a>
</li>


<li class="gallery__item">
<a class="gallery__link" href="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg">
  <img class="gallery__image" src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg"
    data-source="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg"
    alt="Container Haulage Freight" />
</a>
</li>

<li class="gallery__item">
<a class="gallery__link" href="https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg">
  <img class="gallery__image" src="https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg"
    data-source="https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg" alt="Aerial Beach View" />
</a>
</li>

<li class="gallery__item">
<a class="gallery__link" href="https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg">
  <img class="gallery__image" src="https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg"
    data-source="https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg" alt="Flower Blooms" />
</a>
</li>

<li class="gallery__item">
<a class="gallery__link" href="https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg">
  <img class="gallery__image" src="https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg"
    data-source="https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg"
    alt="Alpine Mountains" />
</a>
</li>

<li class="gallery__item">
<a class="gallery__link" href="https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg">
  <img class="gallery__image" src="https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg"
    data-source="https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg"
    alt="Mountain Lake Sailing" />
</a>
</li>


<li class="gallery__item">
<a class="gallery__link" href="https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg">
  <img class="gallery__image" src="https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg"
    data-source="https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg"
    alt="Alpine Spring Meadows" />
</a>
</li>



<li class="gallery__item">
<a class="gallery__link" href="https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg">
  <img class="gallery__image" src="https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg"
    data-source="https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg"
    alt="Nature Landscape" />
</a>
</li>



<li class="gallery__item">
<a class="gallery__link" href="https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg">
  <img class="gallery__image" src="https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg"
    data-source="https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg"
    alt="Lighthouse Coast Sea" />
</a>
</li> */}