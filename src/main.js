import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const input = document.querySelector(".inputsrc");
const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");
const loadbtn = document.querySelector(".loadbtn");

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});

let page = 1;
let perPage = 40;
let searchParams;
let userInput;
let response;
let cardHeight;

loadbtn.addEventListener("click", loadMoreBtn);

form.addEventListener("submit", async event => {
  event.preventDefault();
  gallery.innerHTML = "";
  page = 1;
  userInput = input.value;
  loadbtn.classList.add("hide");
  await postGallery();
})

async function loadMoreBtn() {
  page += 1;

  const totalPages = Math.ceil(response.data.totalHits / perPage);
  if (page > totalPages) {
    loadbtn.classList.add("hide");
    iziToast.show({
      message: `We're sorry, but you've reached the end of search results.`,
      position: 'topRight'
    });
    return;
  }
  await postGallery();
  loadbtn.classList.remove("hide");
}

async function postGallery() {
  searchParams = {
    params: {
      key: '41766309-9b727aff341ca6e5a641aa2fb',
      q: userInput,
      orientation: 'horizontal',
      per_page: perPage,
      page: page,
      image_type: 'photo',
      safesearch: true,
      order: 'likes',
    },
  }; 
  
  try {
    loader.classList.remove('hide');
    response = await axios.get(
    'https://pixabay.com/api/',
    searchParams);
    
    const images = response.data;

    loader.classList.add('hide');

      if (response.data.totalHits > 0) {
        const imglist = images.hits.reduce((html, hit) => {
          return (
            html +
            `<li>
          <a href="${hit.largeImageURL}">
            <img src="${hit.webformatURL}" alt="${hit.tags}" class="gallery-image">
          </a>
          <div class="info">
            <div class="field">
              <span class="label">Likes</span>
              <span class="value">${hit.likes}</span>
            </div>
            <div class="field">
              <span class="label">Views</span>
              <span class="value">${hit.views}</span>
            </div>
            <div class="field">
              <span class="label">Comments</span>
              <span class="value">${hit.comments}</span>
            </div>
            <div class="field">
              <span class="label">Downloads</span>
              <span class="value">${hit.downloads}</span>
            </div>
          </div>
          </li>`
          )
        }, '')
        gallery.insertAdjacentHTML('beforeend', imglist);

        const imgCard = document.querySelector(".gallery-image");
        cardHeight = imgCard.getBoundingClientRect().height;

        window.scrollBy({
          top: 2 * cardHeight,
          behavior: 'smooth'
        });

        lightbox.refresh();
        
      } else {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight'
        });
      }
      updateButtonVisibility();

  }
    catch (error) {
        console.log(error);
    } finally {
    form.reset();
    }
}

function updateButtonVisibility() {
  if (gallery.innerHTML.trim() === "") {
    loadbtn.classList.add("hide");
  } else {
    loadbtn.classList.remove("hide");
  }
}