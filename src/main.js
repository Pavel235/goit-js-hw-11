'use strict'

const inputElement = document.querySelector('.input-text');
const buttonElement = document.querySelector('.search-button');

const initialParams = {
    key: '41688461-d2a05e0fbe969f7f46dd1fb4f',
    q: inputElement.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
}

function searchImage(params) {
    fetch(`https://pixabay.com/api/?${params}`)
        .then(response => {
            if(!response.ok) {
                throw new Error (`Sorry, there are no images matching your search query. Please try again!`);
            };

            response.json();
        })
        .then
        
}