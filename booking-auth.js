// Shared Book Now handler: use TheatreX's existing session, never registered-user data alone.
function startTheatreXBooking(category, contentId) {
    const user = typeof getCurrentUser === "function" ? getCurrentUser() : null;
    if (!user || !user.email) {
        localStorage.setItem("theatrex_pendingBooking", JSON.stringify({
            category: category,
            contentId: String(contentId)
        }));
        alert("Please log in to continue with your booking.");
        window.location.href = "login.html?returnTo=booking";
        return;
    }
    window.location.href = "booking.html?category=" + encodeURIComponent(category) +
        "&id=" + encodeURIComponent(contentId);
}
