
// ==================== MOVIES ====================
const movies = [
    {
        id: "spiderman-brand-new-day",
        title: "Spider-Man: Brand New Day",
        image: "images/spiderman.jpeg",
        genre: "Action",
        language: "English",
        duration: "2h 15m",
        certificate: "UA",
        description: "Spider-Man returns for a new adventure as he faces a fresh threat while trying to protect the people of his city.",
        cast: "Tom Holland, Zendaya",
        director: "Destin Daniel Cretton"
    },

    {
        id: "awarapan-2",
        title: "Awarapan 2",
        image: "images/awarapan2.jpeg",
        genre: "Drama",
        language: "Hindi",
        duration: "2h 20m",
        certificate: "UA",
        description: "A new chapter in the emotional world of Awarapan, filled with love, sacrifice and redemption.",
        cast: "Emraan Hashmi",
        director: "Mohit Suri"
    },

    {
        id: "the-odyssey",
        title: "The Odyssey",
        image: "images/odyssey.jpeg",
        genre: "Action",
        language: "English",
        duration: "2h 40m",
        certificate: "UA",
        description: "A legendary journey unfolds as a hero struggles to find his way home through dangerous lands and mythical challenges.",
        cast: "Matt Damon, Tom Holland, Anne Hathaway",
        director: "Christopher Nolan"
    },

    {
        id: "raja-shivaji",
        title: "Raja Shivaji",
        image: "images/raja shivaji.jpeg",
        genre: "Historical",
        language: "Marathi",
        duration: "2h 30m",
        certificate: "UA",
        description: "A historical drama depicting the life, courage and leadership of Chhatrapati Shivaji Maharaj.",
        cast: "Riteish Deshmukh",
        director: "Ravi Jadhav"
    },

    {
        id: "insidious-out-of-the-further",
        title: "Insidious: Out of The Further",
        image: "images/insidious.jpeg",
        genre: "Horror",
        language: "English",
        duration: "1h 50m",
        certificate: "A",
        description: "A terrifying new chapter takes audiences deeper into the supernatural world of The Further.",
        cast: "Lin Shaye",
        director: "TBA"
    },

    {
        id: "dhurandhar",
        title: "Dhurandhar",
        image: "images/Dhurandar.jpg",
        genre: "Action",
        language: "Hindi",
        duration: "2h 30m",
        certificate: "UA",
        description: "An action-packed story involving danger, strategy and powerful adversaries.",
        cast: "Ranveer Singh",
        director: "Aditya Dhar"
    },

    {
        id: "avatar-fire-and-ash",
        title: "Avatar: Fire and Ash",
        image: "images/avatar.jpg",
        genre: "Adventure",
        language: "English",
        duration: "3h 00m",
        certificate: "UA",
        description: "The world of Pandora expands with a new chapter filled with adventure, conflict and breathtaking landscapes.",
        cast: "Sam Worthington, Zoe Saldana",
        director: "James Cameron"
    },

    {
        id: "war-2",
        title: "War 2",
        image: "images/war2.jpg",
        genre: "Action",
        language: "Hindi",
        duration: "2h 30m",
        certificate: "UA",
        description: "A high-octane spy action thriller involving powerful agents and dangerous missions.",
        cast: "Hrithik Roshan, N. T. Rama Rao Jr.",
        director: "Ayan Mukerji"
    },

    {
        id: "housefull-5",
        title: "Housefull 5",
        image: "images/housefull5.jpg",
        genre: "Comedy",
        language: "Hindi",
        duration: "2h 30m",
        certificate: "UA",
        description: "A chaotic comedy filled with mistaken identities, unexpected twists and plenty of laughter.",
        cast: "Akshay Kumar, Riteish Deshmukh",
        director: "Tarun Mansukhani"
    },

    {
        id: "thamma",
        title: "Thamma",
        image: "images/thamma.jpg",
        genre: "Horror",
        language: "Hindi",
        duration: "2h 10m",
        certificate: "UA",
        description: "A supernatural horror story combining mystery, fear and elements of Indian folklore.",
        cast: "Ayushmann Khurrana, Rashmika Mandanna",
        director: "Aditya Sarpotdar"
    },

    {
        id: "kantara-chapter-1",
        title: "Kantara: Chapter 1",
        image: "images/kantara.jpg",
        genre: "Action",
        language: "Kannada",
        duration: "2h 45m",
        certificate: "UA",
        description: "A prequel exploring the origins of the world, traditions and conflicts surrounding Kantara.",
        cast: "Rishab Shetty",
        director: "Rishab Shetty"
    },

    {
        id: "saiyaara",
        title: "Saiyaara",
        image: "images/saiyaara.jpg",
        genre: "Romance",
        language: "Hindi",
        duration: "2h 30m",
        certificate: "UA",
        description: "A romantic musical drama following two people whose lives become deeply connected through love and music.",
        cast: "Ahaan Panday, Aneet Padda",
        director: "Mohit Suri"
    },

    {
        id: "sitaare-zameen-par",
        title: "Sitaare Zameen Par",
        image: "images/sitaare.jpg",
        genre: "Comedy",
        language: "Hindi",
        duration: "2h 20m",
        certificate: "UA",
        description: "An emotional sports comedy about growth, friendship and discovering the potential within every individual.",
        cast: "Aamir Khan, Genelia D'Souza",
        director: "R. S. Prasanna"
    },

    {
        id: "mission-impossible",
        title: "Mission: Impossible",
        image: "images/mission impossible.jpg",
        genre: "Action",
        language: "English",
        duration: "2h 50m",
        certificate: "UA",
        description: "An elite agent takes on a dangerous mission where every decision could have global consequences.",
        cast: "Tom Cruise",
        director: "Christopher McQuarrie"
    },

    {
        id: "jurassic-world",
        title: "Jurassic World",
        image: "images/jurassic world.jpeg",
        genre: "Adventure",
        language: "English",
        duration: "2h 10m",
        certificate: "UA",
        description: "Humans and dinosaurs collide in an adventure filled with survival, discovery and chaos.",
        cast: "Chris Pratt, Bryce Dallas Howard",
        director: "Colin Trevorrow"
    },

    {
        id: "fantastic-four",
        title: "The Fantastic Four",
        image: "images/fantastic four.jpg",
        genre: "Action",
        language: "English",
        duration: "2h 00m",
        certificate: "UA",
        description: "A group of astronauts gain extraordinary abilities and must learn to work together as a superhero team.",
        cast: "Pedro Pascal, Vanessa Kirby",
        director: "Matt Shakman"
    },

    {
        id: "raid-2",
        title: "Raid 2",
        image: "images/raid2.jpg",
        genre: "Crime",
        language: "Hindi",
        duration: "2h 20m",
        certificate: "UA",
        description: "An honest officer takes on another challenging investigation against powerful forces.",
        cast: "Ajay Devgn, Riteish Deshmukh",
        director: "Raj Kumar Gupta"
    },

    {
        id: "chhaava",
        title: "Chhaava",
        image: "images/chhaava.jpg",
        genre: "Historical",
        language: "Hindi",
        duration: "2h 40m",
        certificate: "UA",
        description: "A historical drama portraying the courage and struggles of Chhatrapati Sambhaji Maharaj.",
        cast: "Vicky Kaushal, Rashmika Mandanna",
        director: "Laxman Utekar"
    },

    {
        id: "superman",
        title: "Superman",
        image: "images/superman.jpg",
        genre: "Action",
        language: "English",
        duration: "2h 10m",
        certificate: "UA",
        description: "Superman faces a new chapter in his journey as he balances his Kryptonian heritage with his human identity.",
        cast: "David Corenswet, Rachel Brosnahan",
        director: "James Gunn"
    },

    {
        id: "final-destination-bloodlines",
        title: "Final Destination: Bloodlines",
        image: "images/final destination.jpg",
        genre: "Horror",
        language: "English",
        duration: "1h 50m",
        certificate: "A",
        description: "A new group attempts to escape a deadly chain of events that seems impossible to outrun.",
        cast: "Teo Briones, Kaitlyn Santa Juana",
        director: "Zach Lipovsky, Adam Stein"
    }
];

// ==================== EVENTS ====================
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

    card.addEventListener("click", function () {
        window.location.href = `movieDetails.html?id=${movie.id}`;
    });

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

    card.addEventListener("click", function () {
        const eventId = event.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        window.location.href = `eventDetails.html?id=${eventId}`;
    });

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

    card.addEventListener("click", function () {
        const playId = play.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        window.location.href = `playDetails.html?id=${playId}`;
    });

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
    list.forEach(play => container.appendChild(createPlayCard(play)));
}

function showEmptyState(container, message) {
    if (!container) return;
    container.innerHTML = `<p class="no-results">${message}</p>`;
}

// ==================== ELEMENT REFERENCES ====================
const movieContainer = document.getElementById("movieContainer");
const eventContainer = document.getElementById("eventContainer");
const playContainer = document.getElementById("playContainer");

const allMovieContainer = document.getElementById("allMovieContainer");
const allEventContainer = document.getElementById("allEventContainer");
const allPlayContainer = document.getElementById("allPlayContainer");

const searchInput = document.querySelector(".search");
const locationSelect = document.querySelector(".location");

const movieGenreFilter = document.getElementById("movieGenreFilter");
const movieLanguageFilter = document.getElementById("movieLanguageFilter");
const movieResetFilter = document.getElementById("movieResetFilter");


const eventLocationFilter = document.getElementById("eventLocationFilter");
const eventSortFilter = document.getElementById("eventSortFilter");
const eventResetFilter = document.getElementById("eventResetFilter");

const playLocationFilter = document.getElementById("playLocationFilter");
const playLanguageFilter = document.getElementById("playLanguageFilter");
const playResetFilter = document.getElementById("playResetFilter");



// ==================== FILTER DROPDOWN SETUP ====================
function populateOptions(select, values) {
    if (!select) return;
    values.forEach(value => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = value;
        select.appendChild(opt);
    });
}

if (eventLocationFilter) {
    populateOptions(eventLocationFilter, [...new Set(events.map(e => e.location))].sort());
}
if (playLocationFilter) {
    populateOptions(playLocationFilter, [...new Set(plays.map(p => p.location))].sort());
}
if (playLanguageFilter) {
    populateOptions(playLanguageFilter, [...new Set(plays.map(p => p.language))].sort());
}
if (movieLanguageFilter) {
    populateOptions(movieLanguageFilter, [...new Set(movies.map(m => m.language))].sort());
}
if (movieGenreFilter) {
    populateOptions(movieGenreFilter, [...new Set(movies.map(m => m.genre))].sort());
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function parseEventDate(dateStr) {
    const [day, month] = dateStr.split(" ");
    return new Date(2026, MONTHS.indexOf(month), parseInt(day, 10));
}

// ==================== SEARCH + FILTER LOGIC ====================
function getQuery() {
    return searchInput ? searchInput.value.trim().toLowerCase() : "";
}

function refreshMovies() {
    const query = getQuery();
    let filtered =  movies.filter(m =>!query||
            m.title.toLowerCase().includes(query) ||
            m.genre.toLowerCase().includes(query) ||
            m.language.toLowerCase().includes(query));


 if (movieGenreFilter && movieGenreFilter.value) {
        filtered = filtered.filter(m => m.genre === movieGenreFilter.value);
    }


 if (movieLanguageFilter && movieLanguageFilter.value) {
    filtered = filtered.filter(m => m.language === movieLanguageFilter.value);
    }
   
if (movieContainer){
    if (filtered.length) renderMovies(movieContainer, filtered.slice(0, 5));
     else showEmptyState(movieContainer, "No movies match your search.");}
    if (allMovieContainer) {
        if (filtered.length) renderMovies(allMovieContainer, filtered);
        else showEmptyState(allMovieContainer, "No movies match your search.");
    }
    

console.log("container:", allMovieContainer);
console.log("filtered:", filtered);
console.log("filtered length:", filtered.length);}


function refreshEvents() {
    const query = getQuery();
    let filtered = events.filter(e =>!query ||
        e.title.toLowerCase().includes(query) ||
        e.location.toLowerCase().includes(query)
    );

    if (eventLocationFilter && eventLocationFilter.value) {
        filtered = filtered.filter(e => e.location === eventLocationFilter.value);
    }

    if (eventSortFilter && eventSortFilter.value) {
        const sortVal = eventSortFilter.value;
        filtered = [...filtered].sort((a, b) => {
            const diff = parseEventDate(a.date) - parseEventDate(b.date);
            return sortVal === "date-desc" ? -diff : diff;
        });
    }

    if (eventContainer) {
        // Home page preview also respects the header city selector.
        let previewList = filtered;
        if (locationSelect && locationSelect.value && locationSelect.value !== "Select city") {
            previewList = previewList.filter(e => e.location === locationSelect.value);
        }
        if (previewList.length) renderEvents(eventContainer, previewList.slice(0, 5));
        else showEmptyState(eventContainer, "No events match right now.");
    }
    if (allEventContainer) {
        if (filtered.length) renderEvents(allEventContainer, filtered);
        else showEmptyState(allEventContainer, "No events match your filters.");
    }
}

function refreshPlays() {
    const query = getQuery();
    let filtered = plays.filter(p =>
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.language.toLowerCase().includes(query)
    );

    if (playLocationFilter && playLocationFilter.value) {
        filtered = filtered.filter(p => p.location === playLocationFilter.value);
    }
    if (playLanguageFilter && playLanguageFilter.value) {
        filtered = filtered.filter(p => p.language === playLanguageFilter.value);
    }

    if (playContainer) {
         let previewList = filtered;
        if (locationSelect && locationSelect.value && locationSelect.value !== "Select city") {
            previewList = previewList.filter(p => p.location === locationSelect.value);
        }
        if (previewList.length) renderPlays(playContainer, previewList.slice(0, 5));
        else showEmptyState(playContainer, "No plays match right now.");
    }
    if (allPlayContainer) {
        if (filtered.length) renderPlays(allPlayContainer, filtered);
        else showEmptyState(allPlayContainer, "No plays match your filters.");
    }
}

function refreshAll() {
    refreshMovies();
    refreshEvents();
    refreshPlays();
}

// ==================== EVENT LISTENERS ====================
if (searchInput) searchInput.addEventListener("input", refreshAll);
if (locationSelect) locationSelect.addEventListener("change", refreshEvents);
if (locationSelect) locationSelect.addEventListener("change", refreshPlays);

if (movieLanguageFilter) movieLanguageFilter.addEventListener("change", refreshMovies);
if (movieGenreFilter) movieGenreFilter.addEventListener("change", refreshMovies);
if (movieResetFilter) {
    movieResetFilter.addEventListener("click", () => {
        if (movieLanguageFilter)movieLanguageFilter .value = "";
        if (movieGenreFilter) movieGenreFilter.value = "";
        if (searchInput) searchInput.value = "";
        refreshMovies();
    });
}


if (eventLocationFilter) eventLocationFilter.addEventListener("change", refreshEvents);
if (eventSortFilter) eventSortFilter.addEventListener("change", refreshEvents);
if (eventResetFilter) {
    eventResetFilter.addEventListener("click", () => {
        if (eventLocationFilter) eventLocationFilter.value = "";
        if (eventSortFilter) eventSortFilter.value = "date-asc";
        if (searchInput) searchInput.value = "";
        refreshEvents();
    });
}

if (playLocationFilter) playLocationFilter.addEventListener("change", refreshPlays);
if (playLanguageFilter) playLanguageFilter.addEventListener("change", refreshPlays);
if (playResetFilter) {
    playResetFilter.addEventListener("click", () => {
        if (playLocationFilter) playLocationFilter.value = "";
        if (playLanguageFilter) playLanguageFilter.value = "";
        if (searchInput) searchInput.value = "";
        refreshPlays();
    });
}


// Initial render for whichever containers exist on this page.
refreshAll();

// ==================== CURRENT PAGE NAV HIGHLIGHT ====================
const currentPage = window.location.pathname;
if (currentPage.includes("movies.html")) {
    document.querySelector('a[href="movies.html"]').classList.add("active");
} else if (currentPage.includes("home.html") || currentPage.endsWith("/") || currentPage.endsWith("theatreX")) {
    const homeLink = document.querySelector('a[href="home.html"]');
    if (homeLink) homeLink.classList.add("active");
} else if (currentPage.includes("plays.html")) {
    document.querySelector('a[href="plays.html"]').classList.add("active");
} else if (currentPage.includes("events.html")) {
    document.querySelector('a[href="events.html"]').classList.add("active");
}
