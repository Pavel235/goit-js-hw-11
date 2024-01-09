'use strict'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formElement = document.querySelector('.form');
const inputElement = document.querySelector('.input-text');
const buttonElement = document.querySelector('.search-button');
const galleryElement = document.querySelector('.gallery');
const loadingContainer = document.querySelector('.loading-container');

const initialParams = {
    key: '41688461-d2a05e0fbe969f7f46dd1fb4f',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
}

function searchImage(params) {
    
    fetch(`https://pixabay.com/api/?${params}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText);
            };

           return response.json();
        })
        .then(({ hits }) => {
            if(hits.length > 0) {
           const rendedImages = hits.reduce((html, hit) => {
            return html + `
                <li class='gallery-list'>
                    <a href='${hit.largeImageURL}'>
                     <img class='img-element' src='${hit.webformatURL}' alt='${hit.tags}'/>
                     <div class='gallery-text-wrapper'>
                     <p>Likes: <span class='img-text'>${hit.likes}</span></p>
                     <p>Views: <span class='img-text'>${hit.views}</span></p>
                     <p>Comments: <span class='img-text'>${hit.comments}</span></p>
                     <p>Downloads: <span class='img-text'>${hit.downloads}</span></p>
                     </div>
                    </a>
                </li>`
            }, "")

            galleryElement.insertAdjacentHTML('afterbegin', rendedImages);
            const simpleBoxContent = new SimpleLightbox ('.gallery a', {
                captionType: 'attr',
                captionsData: 'alt',
                captionDelay: 250, 
                captionPosition: 'bottom',
                close: true,
                enableKeyboard: true, 
                docClose: true, 
            })

            simpleBoxContent.refresh()
        } else {
            iziToast.error({
                position: 'topRight',
                message: `Sorry, there are no images matching your search query. Please try again!`,
            })
        }
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: error.message,
                position: 'topRight',
            })
        })
        .finally(() => {
            loadingContainer.classList.remove('is-open');
        })
        
}

    formElement.addEventListener('submit', event => {
        event.preventDefault();

        galleryElement.innerHTML = ""; 

        if(galleryElement.innerHTML === "") {
            loadingContainer.classList.add('is-open');
        }

        initialParams.q = inputElement.value;
        const searchParams = new URLSearchParams(initialParams);
        searchImage(searchParams);
    });