import './sass/index.scss';
import { fetchImages } from "./js/fetch-images";
import { renderGallery } from "./js/render-gallery";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');
let searchQuery = '';

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e){
    e.preventDevault();
    searchQuery = e.currentTarget.elements.query.value;
    // gallery.innerHTML('');
    // loadMoreBtn.classList.add('is-hidden');
    // if(searchQuery == ''){
    //     alertEmptySearch();
    //     return;
    // }
     ;
    console.log(fetchImages());
}

function onLoadMore(){
    
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