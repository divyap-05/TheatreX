//movies
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

//events
const events = [
    {
        title: "Live Music Night",
        image: "images/liveMusicNight.jpeg",
        date: "15 September",
        location: "Mumbai"
    },

    {
        title: "Comedy Fiesta",
        image: "images/comedyFiesta.jpeg",
        date: "20 September",
        location: "Mumbai"
    },

    {
        title: "Art & Culture Fest",
        image: "images/artCultureFest.jpeg",
        date: "22 September",
        location: "Pune"
    },

    {
        title: "Stand-Up Special",
        image: "images/standupSpecial.jpeg",
        date: "27 September",
        location: "Mumbai"
    },

    {
        title: "Theatre Festival",
        image: "images/theatreFestival.jpeg",
        date: "30 September",
        location: "Thane"
    }
];

const eventContainer = document.getElementById("eventContainer");

for (let i = 0; i < events.length; i++) {

    const event = events[i];

    const eventCard = document.createElement("div");

    eventCard.classList.add("movie-card");

    eventCard.innerHTML = `
        <img src="${event.image}" alt="Event poster">

        <div class="movie-info">
            <h3>${event.title}</h3>
            <p>${event.date} • ${event.location}</p>
        </div>
    `;

    eventContainer.appendChild(eventCard);
}