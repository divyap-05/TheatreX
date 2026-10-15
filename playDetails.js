// ==================== THEATREX PLAY DETAILS ====================

const params = new URLSearchParams(window.location.search);
const playId = params.get("id");

function makePlayId(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// Extra details for each play (keyed by title)
const playInfo = {
    "Sakharam Binder": {
        genre: "Drama",
        duration: "2h 30m",
        writer: "Vijay Tendulkar",
        cast: "Ensemble Marathi theatre cast",
        description: "A bold and controversial drama about Sakharam, a bookbinder who gives shelter to abandoned women on his own harsh terms. It explores morality, power and hypocrisy in society."
    },
    "Mughal-e-Azam": {
        genre: "Musical Historical Drama",
        duration: "2h 45m",
        writer: "Based on the classic film by K. Asif",
        cast: "Ensemble musical theatre cast",
        description: "A grand musical stage retelling of the legendary love story of Prince Salim and Anarkali, and the conflict with Emperor Akbar, filled with song, dance and spectacle."
    },
    "The Merchant of Venice": {
        genre: "Comedy / Drama",
        duration: "2h 20m",
        writer: "William Shakespeare",
        cast: "Ensemble English theatre cast",
        description: "Shakespeare's tale of a merchant, a bond of flesh and the moneylender Shylock, exploring justice, mercy, prejudice and love."
    },
    "Ghashiram Kotwal": {
        genre: "Musical Political Satire",
        duration: "2h 15m",
        writer: "Vijay Tendulkar",
        cast: "Ensemble Marathi theatre cast",
        description: "A landmark Marathi musical drama about the rise and fall of Ghashiram, a Brahmin who becomes the Kotwal of Pune, and the abuse of power."
    },
    "Andha Yug": {
        genre: "Epic Verse Drama",
        duration: "2h 00m",
        writer: "Dharamvir Bharati",
        cast: "Ensemble Hindi theatre cast",
        description: "Set on the last day of the Mahabharata war, this verse play examines violence, moral blindness and the aftermath of war."
    },
    "Tughlaq": {
        genre: "Historical Drama",
        duration: "2h 30m",
        writer: "Girish Karnad",
        cast: "Ensemble theatre cast",
        description: "The story of Muhammad bin Tughlaq, an idealistic and brilliant sultan whose bold ideas turn into disaster, charting his descent into cruelty and isolation."
    },
    "Aadhe Adhure": {
        genre: "Family Drama",
        duration: "2h 10m",
        writer: "Mohan Rakesh",
        cast: "Ensemble Hindi theatre cast",
        description: "A modern classic about a middle-class family struggling with unmet desires, strained relationships and the feeling of being incomplete."
    },
    "Hayavadana": {
        genre: "Folk Drama",
        duration: "2h 15m",
        writer: "Girish Karnad",
        cast: "Ensemble theatre cast",
        description: "Drawing on folk theatre and an ancient tale, this play follows two friends whose heads get swapped, and explores identity, completeness and desire."
    },
    "Natsamrat": {
        genre: "Tragedy",
        duration: "2h 45m",
        writer: "V. V. Shirwadkar (Kusumagraj)",
        cast: "Ensemble Marathi theatre cast",
        description: "The tragic story of Ganpatrao Belvalkar, a celebrated stage actor who retires and gives away his wealth, only to be neglected by those he loved."
    },
    "Final Solutions": {
        genre: "Social Drama",
        duration: "2h 15m",
        writer: "Mahesh Dattani",
        cast: "Ensemble English theatre cast",
        description: "A gripping play on communal tension and prejudice, in which past and present collide within one family during a time of unrest."
    },
    "Court Martial": {
        genre: "Courtroom Drama",
        duration: "2h 00m",
        writer: "Swadesh Deepak",
        cast: "Ensemble Hindi theatre cast",
        description: "A tense courtroom drama about the military trial of a soldier accused of murdering his superior, exposing caste prejudice and the system."
    },
    "Taj Mahal Ka Tender": {
        genre: "Satire / Comedy",
        duration: "1h 50m",
        writer: "Ajay Shukla",
        cast: "Ensemble Hindi theatre cast",
        description: "A witty satire on bureaucracy and corruption, imagining what would happen if the Taj Mahal were built through a modern government tender."
    },
    "Silence! The Court Is in Session": {
        genre: "Drama / Thriller",
        duration: "2h 00m",
        writer: "Vijay Tendulkar",
        cast: "Ensemble Marathi theatre cast",
        description: "A group of amateur actors stage a mock trial that turns into a cruel, revealing judgment of one of their own, exposing social hypocrisy."
    },
    "Julius Caesar": {
        genre: "Political Tragedy",
        duration: "2h 20m",
        writer: "William Shakespeare",
        cast: "Ensemble English theatre cast",
        description: "Shakespeare's drama of conspiracy, ambition and loyalty, following the assassination of Caesar and its dramatic consequences for Rome."
    },
    "Maqbool": {
        genre: "Crime Drama",
        duration: "2h 15m",
        writer: "Adapted from Shakespeare's Macbeth",
        cast: "Ensemble Hindi theatre cast",
        description: "A Hindi adaptation of Macbeth set in the Mumbai underworld, about ambition, betrayal and the cost of power."
    },
    "Rangmanch": {
        genre: "Drama",
        duration: "2h 00m",
        writer: "TheatreX Productions",
        cast: "Ensemble Marathi theatre cast",
        description: "A heartfelt tribute to the world of the stage, celebrating the actors, craft and magic that make live theatre special."
    },
    "The Glass Menagerie": {
        genre: "Memory Play",
        duration: "2h 10m",
        writer: "Tennessee Williams",
        cast: "Ensemble English theatre cast",
        description: "A poignant memory play about a struggling family, a domineering mother and a fragile daughter who treasures her collection of glass animals."
    },
    "Evam Indrajit": {
        genre: "Absurdist Drama",
        duration: "2h 00m",
        writer: "Badal Sircar",
        cast: "Ensemble Hindi theatre cast",
        description: "A landmark absurdist play about ordinary lives, the search for meaning and a writer struggling to tell the story of everyman."
    },
    "Othello": {
        genre: "Tragedy",
        duration: "2h 30m",
        writer: "William Shakespeare",
        cast: "Ensemble English theatre cast",
        description: "Shakespeare's tragedy of love, jealousy and manipulation, as Iago schemes to destroy the general Othello and his marriage to Desdemona."
    },
    "Katyar Kaljat Ghusali": {
        genre: "Musical Drama",
        duration: "3h 00m",
        writer: "Purushottam Darvhekar",
        cast: "Ensemble Marathi musical theatre cast",
        description: "A celebrated Marathi musical about the rivalry between two classical singers, with rich Hindustani classical music at its heart."
    }
};

const selectedPlay = plays.find(p => makePlayId(p.title) === playId);
const playDetailsContainer = document.getElementById("playDetails");

if (!selectedPlay) {

    playDetailsContainer.innerHTML = `
        <h2>Play not found</h2>
        <p>Sorry, we could not find this play.</p>
        <a href="plays.html">Back to Plays</a>
    `;

} else {

    const info = playInfo[selectedPlay.title] || {
        genre: "Theatre",
        duration: "2h 00m",
        writer: "To be announced",
        cast: "To be announced",
        description: "A live theatre performance on TheatreX."
    };

    playDetailsContainer.innerHTML = `

        <div class="movie-detail-card">

            <div class="movie-detail-image">
                <img src="${selectedPlay.image}" alt="${selectedPlay.title}">
            </div>

            <div class="movie-detail-info">

                <h1>${selectedPlay.title}</h1>

                <p class="movie-meta">
                    ${info.genre} •
                    ${selectedPlay.language} •
                    ${info.duration}
                </p>

                <h3>About the Play</h3>

                <p>${info.description}</p>

                <div class="movie-extra-details">

                    <p><strong>Writer:</strong> ${info.writer}</p>
                    <p><strong>Cast:</strong> ${info.cast}</p>
                    <p><strong>Date:</strong> ${selectedPlay.date}</p>
                    <p><strong>Location:</strong> ${selectedPlay.location}</p>

                </div>

                <button id="bookPlayBtn">Book Now</button>

            </div>

        </div>

    `;

    const bookPlayBtn = document.getElementById("bookPlayBtn");

    bookPlayBtn.addEventListener("click", function () {
        startTheatreXBooking("play", makePlayId(selectedPlay.title));
    });
}
