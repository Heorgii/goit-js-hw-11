// import axios from "axios";

// axios.defaults.baseURL = '

// async function fetchImages(q, page, perPage){
//     const resp = await axios.get(
//         `?key=${KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
//     );
//     return resp;
// }

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '30145762-bbea4d10537f12ddab0b4a39f';

async function fetchImages(q){
    const resp = await fetch`${BASE_URL}?key=${KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`
    return resp.join();
}

export{fetchImages};
