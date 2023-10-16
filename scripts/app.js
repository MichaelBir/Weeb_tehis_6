const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPostrerUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlStored = localStorage.getItem('imageUrl');

if(titleInStorage && imageUrlStored) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)),
    url('${imageUrlStored}')`;
}
 
btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput= moviePosterUrl.value;
    //console.log(movieTitleInput);
    //console.log(moviePosterInput);
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)),
    url('${posterUrlInput}')`; 

}); 