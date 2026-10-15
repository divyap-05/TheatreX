// ==================== THEATREX MOVIE DETAILS ====================

// Get the movie ID from the URL
const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

// Find the movie from the movies array
const movie = movies.find(m => m.id === movieId);

// Get the container
const movieDetailsContainer = document.getElementById("movieDetails");

// If movie is not found
if (!movie) {

    movieDetailsContainer.innerHTML = `
        <h2>Movie not found</h2>
        <p>Sorry, we could not find this movie.</p>
        <a href="movies.html">Back to Movies</a>
    `;

} else {

    // Display movie information
    movieDetailsContainer.innerHTML = `

        <div class="movie-detail-card">

            <div class="movie-detail-image">
                <img 
                    src="${movie.image}" 
                    alt="${movie.title}"
                >
            </div>


            <div class="movie-detail-info">

                <h1>${movie.title}</h1>

                <p class="movie-meta">
                    ${movie.genre} • 
                    ${movie.language} • 
                    ${movie.duration} • 
                    ${movie.certificate}
                </p>

                <h3>About the Movie</h3>

                <p>
                    ${movie.description}
                </p>


                <div class="movie-extra-details">

                    <p>
                        <strong>Cast:</strong>
                        ${movie.cast}
                    </p>

                    <p>
                        <strong>Director:</strong>
                        ${movie.director}
                    </p>

                </div>


                <button id="bookMovieBtn">
                    Book Now
                </button>

            </div>

        </div>

    `;


    // Book Now button
    const bookMovieBtn = document.getElementById("bookMovieBtn");

    bookMovieBtn.addEventListener("click", function () {

        startTheatreXBooking("movie", movie.id);

    });

}