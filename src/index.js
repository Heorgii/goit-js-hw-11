import './sass/main.scss';
import { fetchImages } from './js/fetch-images';
import { renderGallery } from './js/render-gallery';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');
let query = '';
let page = 1;
let simpleLightBox;
const perPage = 40;

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
    e.preventDefault();
    page = 1;
    query = e.currentTarget.searchQuery.value.trim();
    gallery.innerHTML = '';
    loadMoreBtn.classList.add('is-hidden');
    if (query === '') {
        alertEmptySearch();
        return;
    }

    fetchImages(query, page, perPage)
        .then(({ data }) => {
            if (data.totalHits === 0) {
                alertNotFound();
            } else {
                renderGallery(data.hits);
                simpleLightBox = new SimpleLightbox('.gallery a').refresh();
                alertSuccess(data);

                if (data.totalHits > perPage) {
                    loadMoreBtn.classList.remove('is-hidden');
                }
            } 
        })
        .catch(error => console.log(error))
        .finally(() => {
            searchForm.reset();
        });
}

function onLoadMore() {
    page += 1;
    simpleLightBox.destroy();

    fetchImages(query, page, perPage)
        .then(({ data }) => {
            renderGallery(data.hits);
            simpleLightBox = new SimpleLightbox('.gallery a').refresh();

            const totalPages = Math.ceil(data.totalHits / perPage);
            if (page > totalPages) {
                loadMoreBtn.classList.add('is-hidden');
                alertSearchEnd();
            }
        })
        .catch(error => console.log(error));
}

function alertSuccess(data) {
    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
}

function alertEmptySearch() {
    Notiflix.Notify.failure("The search string cannot be empty. Please specify your search query.");
}

function alertSearchEnd() {
    Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
}

function alertNotFound() {
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
}