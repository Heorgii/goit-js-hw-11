import axios from "axios";
export{fetchImages};

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '30145762-bbea4d10537f12ddab0b4a39f';

async function fetchImages(q, page, perPage){
    const resp = await axios.get(
        `?key=${KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`,
    );
    return resp;
}