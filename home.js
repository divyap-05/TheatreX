
const movies = [
    {
        title: "Spider-Man: Brand New Day",
        image: "images/spiderman.jpeg",
        genre: "Action",
        language: "English"
    },

    {
        title: "Awarapan 2",
        image: "images/awarapan2.jpeg",
        genre: "Drama",
        language: "Hindi"
    },

    {
        title: "The Odyssey",
        image: "images/odyssey.jpeg",
        genre: "Action",
        language: "English"
    },

    {
        title: "Raja Shivaji",
        image: "images/raja shivaji.jpeg",
        genre: "Historical",
        language: "Marathi"
    },

    {
        title: "Insidious: Out of The Further",
        image: "images/insidious.jpeg",
        genre: "Horror",
        language: "English"
    }
];


const movieContainer = document.getElementById("movieContainer");


for (let i = 0; i < movies.length; i++) {

    const movie = movies[i];

    const movieCard = document.createElement("div");

    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
        <img src="${movie.image}" alt="Movie poster">

        <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${movie.genre} • ${movie.language}</p>
        </div>
    `;

    movieContainer.appendChild(movieCard);
}