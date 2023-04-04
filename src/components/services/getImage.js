
const BASE_URL = "https://pixabay.com/api/";
const KEY = "33003809-0ba39c85a11eed1272aa84bba";


export const getImage = ( searchText, page ) => {

   return fetch(`${BASE_URL}?q=${searchText}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
}
