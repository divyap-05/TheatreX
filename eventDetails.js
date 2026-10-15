// ==================== THEATREX EVENT DETAILS ====================

const params = new URLSearchParams(window.location.search);
const eventId = params.get("id");

function makeEventId(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const selectedEvent = events.find(item => makeEventId(item.title) === eventId);
const eventDetailsContainer = document.getElementById("eventDetails");

const eventDescriptions = {
    "Live Music Night": "Enjoy an exciting evening of live performances, great music and an energetic atmosphere.",
    "Comedy Fiesta": "Spend an evening laughing with entertaining comedy acts and fun-filled performances.",
    "Art & Culture Fest": "Explore creative artwork, cultural activities and performances celebrating art and tradition.",
    "Stand-Up Special": "Enjoy a live stand-up comedy show featuring humour, relatable stories and lively entertainment.",
    "Theatre Festival": "Experience a celebration of theatre with engaging performances and a vibrant stage atmosphere.",
    "Bollywood Night": "Enjoy popular Bollywood music, dance and a lively night of entertainment.",
    "Open Mic Night": "Discover fresh talent as performers share music, poetry, comedy and other creative acts.",
    "College Fest": "Join a fun-filled college celebration featuring performances, activities and entertainment.",
    "Classical Music Evening": "Relax and enjoy a special evening of classical music and beautiful live melodies.",
    "Poetry Slam": "Listen to expressive poetry and spoken-word performances by creative voices.",
    "Dance Festival": "Watch energetic dance performances celebrating different styles, rhythms and cultures.",
    "Food & Music Festival": "Enjoy a mix of delicious food, music and a lively festival atmosphere.",
    "Indie Music Fest": "Discover independent music and enjoy live performances from emerging artists.",
    "Magic Show": "Be amazed by a fun performance filled with magic tricks, surprises and illusions.",
    "Drama Night": "Enjoy an engaging evening of dramatic performances and storytelling.",
    "Acoustic Evening": "Experience a relaxed musical evening featuring acoustic sounds and live performances.",
    "Laugh Out Loud": "Take a break and enjoy comedy performances designed to keep the audience laughing.",
    "Creative Arts Fair": "Explore creative displays, artistic ideas and activities celebrating imagination.",
    "Rock Night Live": "Enjoy powerful live music, rock sounds and an energetic concert atmosphere.",
    "Cultural Carnival": "Celebrate culture through music, dance, performances and colourful festivities."
};

if (!selectedEvent) {
    eventDetailsContainer.innerHTML = `
        <h2>Event not found</h2>
        <p>Sorry, we could not find this event.</p>
        <a href="events.html">Back to Events</a>
    `;
} else {
    eventDetailsContainer.innerHTML = `
        <div class="movie-detail-card">
            <div class="movie-detail-image">
                <img src="${selectedEvent.image}" alt="${selectedEvent.title}">
            </div>
            <div class="movie-detail-info">
                <h1>${selectedEvent.title}</h1>
                <p class="movie-meta">Event • ${selectedEvent.date} • ${selectedEvent.location}</p>
                <h3>About the Event</h3>
                <p>${eventDescriptions[selectedEvent.title] || "Join us for an enjoyable live event at TheatreX."}</p>
                <div class="movie-extra-details">
                    <p><strong>Date:</strong> ${selectedEvent.date}</p>
                    <p><strong>Location:</strong> ${selectedEvent.location}</p>
                    <p><strong>Experience:</strong> Live entertainment</p>
                </div>
                <button id="bookEventBtn">Book Now</button>
            </div>
        </div>
    `;

    const eventImage = eventDetailsContainer.querySelector("img");
    eventImage.addEventListener("error", function () {
        this.src = "images/icon1.jpeg";
        this.alt = "TheatreX image unavailable";
    });

    document.getElementById("bookEventBtn").addEventListener("click", function () {
        startTheatreXBooking("event", makeEventId(selectedEvent.title));
    });
}
