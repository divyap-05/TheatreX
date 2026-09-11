// ==================== MOVIES ====================
const movies = [
    { title: "Spider-Man: Brand New Day", image: "images/spiderman.jpeg", genre: "Action", language: "English" },
    { title: "Awarapan 2", image: "images/awarapan2.jpeg", genre: "Drama", language: "Hindi" },
    { title: "The Odyssey", image: "images/odyssey.jpeg", genre: "Action", language: "English" },
    { title: "Raja Shivaji", image: "images/raja shivaji.jpeg", genre: "Historical", language: "Marathi" },
    { title: "Insidious: Out of The Further", image: "images/insidious.jpeg", genre: "Horror", language: "English" },
    { title: "Dhurandhar", image: "images/Dhurandar.jpg", genre: "Action", language: "Hindi" },
    { title: "Avatar: Fire and Ash", image: "images/avatar.jpg", genre: "Adventure", language: "English" },
    { title: "War 2", image: "images/war2.jpg", genre: "Action", language: "Hindi" },
    { title: "Housefull 5", image: "images/housefull5.jpg", genre: "Comedy", language: "Hindi" },
    { title: "Thamma", image: "images/thamma.jpg", genre: "Horror", language: "Hindi" },
    { title: "Kantara: Chapter 1", image: "images/kantara.jpg", genre: "Action", language: "Kannada" },
    { title: "Saiyaara", image: "images/saiyaara.jpg", genre: "Romance", language: "Hindi" },
    { title: "Sitaare Zameen Par", image: "images/sitaare.jpg", genre: "Comedy", language: "Hindi" },
    { title: "Mission: Impossible", image: "images/mission impossible.jpg", genre: "Action", language: "English" },
    { title: "Jurassic World", image: "images/jurassic world.jpeg", genre: "Adventure", language: "English" },
    { title: "The Fantastic Four", image: "images/fantastic four.jpg", genre: "Action", language: "English" },
    { title: "Raid 2", image: "images/raid2.jpg", genre: "Crime", language: "Hindi" },
    { title: "Chhaava", image: "images/chhaava.jpg", genre: "Historical", language: "Hindi" },
    { title: "Superman", image: "images/superman.jpg", genre: "Action", language: "English" },
    { title: "Final Destination: Bloodlines", image: "images/final destination.jpg", genre: "Horror", language: "English" }
];

// ==================== EVENTS ====================
// Every path below matches a real file in the images folder.
const events = [
    { title: "Live Music Night", image: "images/liveMusicNight.jpeg", date: "15 September", location: "Mumbai" },
    { title: "Comedy Fiesta", image: "images/ComedyFiesta.jpeg", date: "20 September", location: "Mumbai" },
    { title: "Art & Culture Fest", image: "images/ArtCultureFest.jpeg", date: "22 September", location: "Pune" },
    { title: "Stand-Up Special", image: "images/standupSpecial.jpeg", date: "27 September", location: "Mumbai" },
    { title: "Theatre Festival", image: "images/theatreFestival.jpeg", date: "30 September", location: "Thane" },
    { title: "Bollywood Night", image: "images/bollywoodNight.jpeg", date: "5 October", location: "Mumbai" },
    { title: "Open Mic Night", image: "images/openMicNight.jpeg", date: "8 October", location: "Thane" },
    { title: "College Fest", image: "images/theatreFestival.jpeg", date: "10 October", location: "Mumbai" },
    { title: "Classical Music Evening", image: "images/classicalMusic.jpg", date: "12 October", location: "Pune" },
    { title: "Poetry Slam", image: "images/poetrySlam.jpg", date: "15 October", location: "Mumbai" },
    { title: "Dance Festival", image: "images/danceFestival.jpeg", date: "18 October", location: "Navi Mumbai" },
    { title: "Food & Music Festival", image: "images/foodMusicFest.jpeg", date: "20 October", location: "Pune" },
    { title: "Indie Music Fest", image: "images/indieMusicFest.jpeg", date: "23 October", location: "Mumbai" },
    { title: "Magic Show", image: "images/magicShow.jpeg", date: "25 October", location: "Thane" },
    { title: "Drama Night", image: "images/dramaNight.jpeg", date: "27 October", location: "Mumbai" },
    { title: "Acoustic Evening", image: "images/liveMusicNight.jpeg", date: "29 October", location: "Pune" },
    { title: "Laugh Out Loud", image: "images/ComedyFiesta.jpeg", date: "2 November", location: "Mumbai" },
    { title: "Creative Arts Fair", image: "images/ArtCultureFest.jpeg", date: "5 November", location: "Thane" },
    { title: "Rock Night Live", image: "images/liveMusicNight.jpeg", date: "8 November", location: "Mumbai" },
    { title: "Cultural Carnival", image: "images/danceFestival.jpeg", date: "12 November", location: "Pune" }
];

// ==================== PLAYS ====================
const plays = [
    { title: "Sakharam Binder", image: "images/sakharamBinder.jpeg", date: "14 September", location: "Mumbai", language: "Marathi" },
    { title: "Mughal-e-Azam", image: "images/mughalEAzam.jpeg", date: "18 September", location: "Pune", language: "Hindi" },
    { title: "The Merchant of Venice", image: "images/merchantVenice.jpeg", date: "21 September", location: "Thane", language: "English" },
    { title: "Ghashiram Kotwal", image: "images/ghashiramKotwal.jpeg", date: "25 September", location: "Mumbai", language: "Marathi" },
    { title: "Andha Yug", image: "images/andhaYug.jpeg", date: "28 September", location: "Pune", language: "Hindi" },
    { title: "Tughlaq", image: "images/tughlaq.jpeg", date: "2 October", location: "Thane", language: "English" },
    { title: "Aadhe Adhure", image: "images/aadheAdhure.jpeg", date: "6 October", location: "Mumbai", language: "Hindi" },
    { title: "Hayavadana", image: "images/hayavadana.jpeg", date: "10 October", location: "Pune", language: "English" },
    { title: "Natsamrat", image: "images/natsamrat.jpeg", date: "14 October", location: "Thane", language: "Marathi" },
    { title: "Final Solutions", image: "images/finalSolutions.jpeg", date: "18 October", location: "Mumbai", language: "English" },
    { title: "Court Martial", image: "images/courtMartial.jpeg", date: "22 October", location: "Pune", language: "Hindi" },
    { title: "Taj Mahal Ka Tender", image: "images/tajMahalKaTender.jpeg", date: "26 October", location: "Thane", language: "Hindi" },
    { title: "Silence! The Court Is in Session", image: "images/silenceCourt.jpeg", date: "30 October", location: "Mumbai", language: "Marathi" },
    { title: "Julius Caesar", image: "images/juliusCaesar.jpeg", date: "3 November", location: "Pune", language: "English" },
    { title: "Maqbool", image: "images/maqbool.jpeg", date: "7 November", location: "Thane", language: "Hindi" },
    { title: "Rangmanch", image: "images/rangmanch.jpeg", date: "11 November", location: "Mumbai", language: "Marathi" },
    { title: "The Glass Menagerie", image: "images/glassMenagerie.jpeg", date: "15 November", location: "Pune", language: "English" },
    { title: "Evam Indrajit", image: "images/evamIndrajit.jpeg", date: "19 November", location: "Thane", language: "Hindi" },
    { title: "Othello", image: "images/othello.jpeg", date: "23 November", location: "Mumbai", language: "English" },
    { title: "Katyar Kaljat Ghusali", image: "images/katyar.jpeg", date: "27 November", location: "Pune", language: "Marathi" }
];



function addImageFallback(img) {
    img.addEventListener("error", function () {
        this.src = "images/icon1.jpeg";
        this.alt = "TheatreX image unavailable";
    });
}

function createMovieCard(movie) {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" loading="lazy">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${movie.genre} • ${movie.language}</p>
        </div>
    `;
    addImageFallback(card.querySelector("img"));
    return card;
}

function createEventCard(event) {
    const card = document.createElement("div");
    card.className = "movie-card event-card";
    card.innerHTML = `
        <img src="${event.image}" alt="${event.title}" loading="lazy">
        <div class="movie-info">
            <h3>${event.title}</h3>
            <p>${event.date} • ${event.location}</p>
        </div>
    `;
    addImageFallback(card.querySelector("img"));
    return card;
}
function createPlayCard(play) {
    const card = document.createElement("div");
    card.className = "movie-card play-card";

    card.innerHTML = `
        <img src="${play.image}" alt="${play.title}" loading="lazy">
        <div class="movie-info">
            <h3>${play.title}</h3>
            <p>${play.date} • ${play.location} • ${play.language} </p>
        </div>
    `;

    addImageFallback(card.querySelector("img"));

    return card;
}

function renderMovies(container, list) {
    if (!container) return;
    container.innerHTML = "";
    list.forEach(movie => container.appendChild(createMovieCard(movie)));
}

function renderEvents(container, list) {
    if (!container) return;
    container.innerHTML = "";
    list.forEach(event => container.appendChild(createEventCard(event)));
}

function renderPlays(container, list) {
    if (!container) return;

    container.innerHTML = "";

    list.forEach(play => {
        container.appendChild(createPlayCard(play));
    });
}

// ==================== HOME PAGE ====================
const movieContainer = document.getElementById("movieContainer");
const eventContainer = document.getElementById("eventContainer");
const playContainer = document.getElementById("playContainer");

if (movieContainer) renderMovies(movieContainer, movies.slice(0, 5));
if (eventContainer) renderEvents(eventContainer, events.slice(0, 5));
if (playContainer) renderPlays(playContainer, plays.slice(0, 5));

// ==================== ALL MOVIES PAGE ====================
const allMovieContainer = document.getElementById("allMovieContainer");
if (allMovieContainer) renderMovies(allMovieContainer, movies);


// ==================== SEARCH ====================
const searchInput = document.querySelector(".search");
if (searchInput) {
    searchInput.addEventListener("input", function () {
        const query = this.value.trim().toLowerCase();
        const filteredMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(query) ||
            movie.genre.toLowerCase().includes(query) ||
            movie.language.toLowerCase().includes(query)
        );

        if (movieContainer) renderMovies(movieContainer, filteredMovies.slice(0, 5));
        if (allMovieContainer) renderMovies(allMovieContainer, filteredMovies);
    });
}

// ==================== CITY FILTER ====================
const locationSelect = document.querySelector(".location");
if (locationSelect && eventContainer) {
    locationSelect.addEventListener("change", function () {
        const city = this.value;
        const filteredEvents = city === "Select city"
            ? events.slice(0, 5)
            : events.filter(event => event.location === city).slice(0, 5);
        renderEvents(eventContainer, filteredEvents);
    });
}
//current page highlight
const currentPage=window.location.pathname;
if(currentPage.includes("movies.html"))
{
    document.querySelector('a[href="movies.html"]').classList.add("active");

}
else if (currentPage.includes("home.html"))
{
    document.querySelector('a[href="home.html"]').classList.add("active");

}
else if (currentPage.includes("plays.html")) {
    document.querySelector('a[href="plays.html"]').classList.add("active");
}
else if (currentPage.includes("events.html")) {
    document.querySelector('a[href="events.html"]').classList.add("active");
}



// ==================== ALL PLAYS PAGE ====================
const allPlayContainer = document.getElementById("allPlayContainer");
if (allPlayContainer) renderPlays(allPlayContainer, plays);

// ==================== ALL EVENTS PAGE ====================
const allEventContainer = document.getElementById("allEventContainer");
if (allEventContainer) renderPlays(allEventContainer, events);

