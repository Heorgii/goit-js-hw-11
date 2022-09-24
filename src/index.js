// import { fetchImages } from "./js/fetch-images";
// import Notiflix from 'notiflix';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');
let query = '';
searchForm.addEventListener('submit', onSearchForm);
loadMoreBtn.addEventListener('click', onLoadMoreBtn);

function onSearchForm(e){
    e.preventDevault();

    if(query == ''){
        alertEmptySearch();
        return;
    }
}

function alertSuccess(data){
    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
}

function alertSurchEnd(){
    Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
}

function alertNotFound(){
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
}

function alertEmptySearch(){
    Notiflix.Notify.failure("The search string cannot be empty.");
}