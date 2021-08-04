class Movie {
    title;
    rating;
    director;
    releaseDate;
    poster;

    constructor(title, rating, director, releaseDate, poster) {
        this.title = title;
        this.rating = rating;
        this.director = director;
        this.releaseDate = releaseDate;
        this.poster = poster;
    }
    getHTML() {
        let card = document.createElement('div');
        card.classList.add("card");

        let titleElement = document.createElement('h3');
        titleElement.innerText = this.title;
        card.appendChild(titleElement);

        let posterElement = document.createElement('img');
        posterElement.src = this.poster;
        posterElement.alt = `Poster: ${this.title}`;
        card.appendChild(posterElement);

        let directorElement = document.createElement('span');
        directorElement.innerText = this.director;
        card.appendChild(directorElement);

        let releaseDateElement = document.createElement('span');
        releaseDateElement.innerText = this.releaseDate;
        card.appendChild(releaseDateElement);

        let ratingElement = document.createElement('span');
        ratingElement.innerText = this.rating;
        card.appendChild(ratingElement);

        return card;
    }
}

let animatedMovies = [
    new Movie("Treasure Plant", "PG", "Ron Clements & John Musker", "2002"),
    new Movie("Finding Nemo", "G", "Andrew Stanton", "2003"),
    new Movie("Atlantis: The Lost Empire", "PG", "Gary Trousdale & Kirk Wise", "2001"),
    new Movie("Monsters Inc.", "G", "Pete Docter & David Silverman & Lee Unkrich", "2001"),
    new Movie("Kung Fu Panda", "PG", "Mark Osborne & JOhn Stevenson", "2008"),
    new Movie("Titan AE", "PG", "Don Bluth & Gary Goldman", "2000"),
    new Movie("The Transformers: The Movie", "PG", "Nelson Shin", "1986"),
    new Movie("Your Name", "PG", "Makoto Shinkai", "2016"),
    new Movie("KiKi's Delivery Service", "G", "Hayao Miyazaki", "1989"),
    new Movie("Bee Movie", "PG", "Simon J. Smith & Steve Hickner", "2007"),
    new Movie("Ponyo", "G", "Hayao Miyazaki", "2008"),
    new Movie("The Last Unicorn", "G", "Jules Bass & Arthur Rankin Jr.", "1982")
];

//Animated Movies
for (let movie of animatedMovies) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let title = document.createElement('span');
    title.innerText = movie.title;
    let director = document.createElement('span');
    director.innerText = movie.director;
    director.style.float = "right";
    li.appendChild(title);
    li.appendChild(director);
    ul.appendChild(li);
}

//Live Action Movies
let liveActionMovies = [
    new Movie("Iron Man", "PG-13", "Jon Favreau", "2008", "https://m.media-amazon.com/images/I/31UiPirP4GL._AC_.jpg"),
    new Movie("Scott Pilgrim vs The World", "PG-13", "Edgar Wright", "2010", "https://m.media-amazon.com/images/I/51laOwyb-CL._AC_.jpg"),
    new Movie("George of the Jungle", "Sam Weiseman", "PG", "1997", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlx1APzbhEV_xLSDqz6wYjCUbPghQZ91iPgA&usqp=CAU"),
    new Movie("The Mummy", "PG-13", "1999", "Stephen Sommers", "https://i5.walmartimages.com/asr/ebb601da-e2a6-470a-834e-b24c68eb6ff2_1.613011c95be5fd4023e713c2d7d0814f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"),
    new Movie("Batman", "PG-13", "Tim Burton", "1989", "https://m.media-amazon.com/images/I/41gVNr2gGBL._AC_SS450_.jpg"),
    new Movie("Ghost Busters", "PG", "Ivan Reitman", "1984", "https://cdn.shopify.com/s/files/1/1057/4964/products/ghostbusters-ghost-busters-vintage-movie-poster-original-1-sheet-27x41-5814_300x@2x.jpg?v=1620968471"),
    new Movie("The Princess Bride", "PG", "Rob Reiner", "1987", "https://i.etsystatic.com/19389619/r/il/1c28f5/2654936601/il_570xN.2654936601_6uub.jpg")
];

for (let movie of liveActionMovies) {
    let container = document.querySelector('.container');
    container.appendChild(movie.getHTML());
}

//Navigation
let navButtons = document.querySelectorAll('nav a');

for (let button of navButtons) {
    button.addEventListener('click', (ev) => {
        let sections = document.querySelectorAll('section');
        for (let section of sections) {
            section.removeAttribute('style');
        }
        document.querySelector(ev.target.getAttribute('href')).style.display = "initial";
    });
}

//Page Int
if (window.location.hash == "") {
    window.location.hash = "#home";
    document.querySelector('#home').style.display = "initial";
} else {
    document.querySelector(window.location.hash).style.display = "initial";
}

//Form
let form = document.getElementById('movieForm');
form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    let formData= new FormData(form);
    let newMovie = new Movie(formData.get('title'),formData.get('rating'),formData.get('Director'),parseInt(formData.get('releaseDate')),formData.get('poster'));
    document.querySelector('#form .container').appendChild(newMovie.getHTML());
    form.reset();
});