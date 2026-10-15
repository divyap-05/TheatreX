// TheatreX shared booking flow. Uses auth.js for the current session.
(function () {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const contentId = params.get("id");
    const validCategories = ["movie", "event", "play"];
    const slug = title => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const contentList = category === "movie" ? (typeof movies !== "undefined" ? movies : []) :
        category === "event" ? (typeof events !== "undefined" ? events : []) :
        category === "play" ? (typeof plays !== "undefined" ? plays : []) : [];
    const content = contentList.find(item => category === "movie" ? item.id === contentId : slug(item.title) === contentId);
    const $ = id => document.getElementById(id);
    const BOOKINGS_KEY = "theatrex_bookings";
    const PENDING_KEY = "theatrex_pendingBooking";
    const pricePerSeat = category === "movie" ? 200 : category === "event" ? 350 : 250;
    let selectedSeats = [];

    function getUser() {
        const user = typeof getCurrentUser === "function" ? getCurrentUser() : null;
        if (!user || !user.email) return null;
        // Match the active session to an account still present in the existing users list.
        const account = typeof getUsers === "function" ? getUsers().find(u =>
            u.email.toLowerCase() === user.email.toLowerCase() && u.name === user.name) : null;
        return account ? { name: account.name, email: account.email, userId: account.email.toLowerCase() } : null;
    }
    function requireLogin() {
        if (getUser()) return true;
        localStorage.removeItem(PENDING_KEY);
        if (validCategories.includes(category) && content) {
            localStorage.setItem(PENDING_KEY, JSON.stringify({ category, contentId }));
        }
        alert("Please log in to continue with your booking.");
        location.href = "login.html?returnTo=booking";
        return false;
    }
    function getBookings() {
        try {
            const saved = JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]");
            return Array.isArray(saved) ? saved : [];
        } catch (e) { return []; }
    }
    function saveBookings(bookings) {
        localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    }
    // Deliberately excludes userId: seats are shared by all users for this exact show.
    function availabilityKey(option) {
        return [option.category, option.contentId, option.location, option.venueId,
            option.date, option.showTime, option.areaId].join("|");
    }
    function currentOption() {
        return {
            category, contentId, location: $("location").value, venueId: $("venue").value,
            date: $("showDate").value, showTime: $("showTime").value, areaId: $("area").value
        };
    }
    function bookedSeats(option) {
        const key = availabilityKey(option);
        return getBookings().filter(b => b.status === "confirmed" && availabilityKey(b) === key)
            .flatMap(b => b.seats || []);
    }
    function showNotice(message) { $("notice").textContent = message; }
    function setOptions(select, values, placeholder) {
        select.innerHTML = `<option value="">${placeholder}</option>`;
        values.forEach(v => {
            const option = document.createElement("option");
            option.value = v.id; option.textContent = v.name; select.appendChild(option);
        });
    }
    function venuesFor(location) {
        const types = category === "movie" ? ["Cinema Hall", "PVR Theatre"] :
            category === "event" ? ["Event Hall", "Cultural Studio"] : ["Performing Arts Theatre", "City Auditorium"];
        return [
            { id: location.toLowerCase() + "-venue-1", name: location + " " + types[0] },
            { id: location.toLowerCase() + "-venue-2", name: location + " " + types[1] }
        ];
    }
    function refreshAreas() {
        const venue = $("venue").value;
        let areas = [];
        if (venue) {
            areas = category === "movie" ?
                [1, 2, 3].map(n => ({ id: "screen-" + n, name: "Screen " + n })) :
                category === "event" ?
                [{ id: "stalls", name: "Stalls" }, { id: "balcony", name: "Balcony" }, { id: "vip", name: "VIP Section" }] :
                [{ id: "auditorium-a", name: "Auditorium A" }, { id: "auditorium-b", name: "Auditorium B" }, { id: "balcony", name: "Balcony" }];
        }
        setOptions($("area"), areas, "Choose screen / area");
        selectedSeats = []; renderSeats(); updateSummary();
    }
    function renderSeats() {
        const container = $("seats"); container.innerHTML = "";
        const option = currentOption();
        if (!option.location || !option.venueId || !option.date || !option.showTime || !option.areaId) return;
        const unavailable = bookedSeats(option);
        for (let r = 0; r < 5; r++) {
            for (let c = 1; c <= 8; c++) {
                const seatId = String.fromCharCode(65 + r) + c;
                const btn = document.createElement("button");
                btn.type = "button"; btn.className = "seat"; btn.textContent = seatId;
                if (unavailable.includes(seatId)) {
                    btn.classList.add("booked"); btn.disabled = true; btn.title = "Already booked";
                } else if (selectedSeats.includes(seatId)) btn.classList.add("selected");
                btn.addEventListener("click", () => {
                    if (!requireLogin()) return;
                    if (selectedSeats.includes(seatId)) selectedSeats = selectedSeats.filter(s => s !== seatId);
                    else selectedSeats.push(seatId);
                    renderSeats(); updateSummary();
                });
                container.appendChild(btn);
            }
        }
    }
    function updateSummary() {
        const subtotal = selectedSeats.length * pricePerSeat;
        const fee = selectedSeats.length ? 20 : 0;
        $("summary").innerHTML = `<strong>${content ? content.title : "Selected content"}</strong><p>Price per seat: ₹${pricePerSeat} · Seats: ${selectedSeats.length}</p><p>Subtotal: ₹${subtotal} · Convenience fee: ₹${fee} · <strong>Total: ₹${subtotal + fee}</strong></p>`;
    }
    function selectionValid() {
        const o = currentOption();
        if (!o.location || !o.venueId || !o.date || !o.showTime || !o.areaId) {
            showNotice("Please complete every booking selection."); return false;
        }
        if (o.date < new Date().toISOString().slice(0, 10)) {
            showNotice("Please choose today or a future date."); return false;
        }
        if (!selectedSeats.length) { showNotice("Please select at least one available seat."); return false; }
        return true;
    }
    function optionNames(o) {
        return { venueName: venuesFor(o.location).find(v => v.id === o.venueId)?.name || o.venueId,
            areaName: Array.from($("area").options).find(v => v.value === o.areaId)?.textContent || o.areaId };
    }
    function summaryHtml(o, seats, payment) {
        const names = optionNames(o), subtotal = seats.length * pricePerSeat, fee = 20;
        return `<p><b>Content:</b> ${content.title}</p><p><b>Category:</b> ${category}</p><p><b>Location:</b> ${o.location}</p><p><b>Venue:</b> ${names.venueName}</p><p><b>Date:</b> ${o.date}</p><p><b>Show time:</b> ${o.showTime}</p><p><b>Screen / area:</b> ${names.areaName}</p><p><b>Seats:</b> ${seats.join(", ")}</p><p><b>Number of seats:</b> ${seats.length}</p><p><b>Price per seat:</b> ₹${pricePerSeat}</p><p><b>Subtotal:</b> ₹${subtotal}</p><p><b>Convenience fee:</b> ₹${fee}</p><p><b>Total:</b> ₹${subtotal + fee}</p>${payment ? `<p><b>Demo payment:</b> ${payment}</p>` : ""}`;
    }
    function displayBill(booking) {
        $("bookingPanel").hidden = true; $("reviewPanel").hidden = true; $("billPanel").hidden = false;
        $("bill").innerHTML = `<div class="bill-card"><h2>TheatreX</h2><h3>Booking confirmed</h3><p><b>Booking reference:</b> ${booking.reference}</p>${summaryHtml(booking, booking.seats, booking.paymentMethod)}<p><b>Status:</b> ${booking.status}</p><p>Demo payment only — no real money was charged.</p></div>`;
    }

    if (!validCategories.includes(category) || !content) {
        $("bookingPanel").hidden = true;
        showNotice("This booking link is invalid. Please select a movie, event, or play again.");
        return;
    }
    if (!requireLogin()) return;
    localStorage.removeItem(PENDING_KEY);
    $("welcome").textContent = "Booking for " + content.title + " · Signed in as " + getUser().name;
    $("showDate").min = new Date().toISOString().slice(0, 10);
    $("location").addEventListener("change", () => {
        setOptions($("venue"), $("location").value ? venuesFor($("location").value) : [], "Choose venue");
        $("area").innerHTML = '<option value="">Choose screen / area</option>';
        selectedSeats = []; renderSeats(); updateSummary(); showNotice("");
    });
    $("venue").addEventListener("change", () => { refreshAreas(); showNotice(""); });
    ["showDate", "showTime"].forEach(id => $(id).addEventListener("change", () => {
        selectedSeats = []; renderSeats(); updateSummary(); showNotice("");
    }));
    $("area").addEventListener("change", () => { selectedSeats = []; renderSeats(); updateSummary(); showNotice(""); });
    $("continueBtn").addEventListener("click", () => {
        if (!requireLogin() || !selectionValid()) return;
        const o = currentOption();
        const conflict = selectedSeats.filter(s => bookedSeats(o).includes(s));
        if (conflict.length) { showNotice("Some selected seats were just booked. Please select again."); selectedSeats = []; renderSeats(); updateSummary(); return; }
        $("reviewSummary").innerHTML = summaryHtml(o, selectedSeats);
        $("bookingPanel").hidden = true; $("reviewPanel").hidden = false; showNotice("");
    });
    $("backBtn").addEventListener("click", () => { $("reviewPanel").hidden = true; $("bookingPanel").hidden = false; });
    $("cancelPayBtn").addEventListener("click", () => { $("reviewPanel").hidden = true; $("bookingPanel").hidden = false; showNotice("Demo payment cancelled. Your seats are still available."); });
    $("payBtn").addEventListener("click", () => {
        if (!requireLogin()) return;
        const method = $("paymentMethod").value;
        if (!method) { showNotice("Please choose a demo payment method."); return; }
        const user = getUser();
        if (!user) { requireLogin(); return; }
        const o = currentOption();
        const latest = getBookings();
        const conflicts = selectedSeats.filter(seat => latest.some(b =>
            b.status === "confirmed" && availabilityKey(b) === availabilityKey(o) && (b.seats || []).includes(seat)));
        if (conflicts.length) {
            showNotice("Booking conflict: " + conflicts.join(", ") + " are no longer available. Please choose seats again.");
            $("reviewPanel").hidden = true; $("bookingPanel").hidden = false; selectedSeats = []; renderSeats(); updateSummary(); return;
        }
        // Read the session again immediately before saving the confirmed booking.
        const finalUser = getUser();
        if (!finalUser || finalUser.userId !== user.userId) { requireLogin(); return; }
        const names = optionNames(o), subtotal = selectedSeats.length * pricePerSeat, fee = 20;
        const booking = { userId: finalUser.userId, userName: finalUser.name, userEmail: finalUser.email,
            category, contentId, contentName: content.title, location: o.location, venueId: o.venueId,
            venueName: names.venueName, date: o.date, showTime: o.showTime, areaId: o.areaId,
            areaName: names.areaName, seats: selectedSeats.slice(), seatCount: selectedSeats.length,
            pricePerSeat, subtotal, convenienceFee: fee, totalAmount: subtotal + fee,
            paymentMethod: method, reference: "TX" + Date.now().toString(36).toUpperCase(),
            status: "confirmed", confirmedAt: new Date().toISOString() };
        latest.push(booking); saveBookings(latest);
        selectedSeats = []; displayBill(booking);
    });
    $("printBtn").addEventListener("click", () => window.print());
    window.addEventListener("storage", event => {
        if (event.key === BOOKINGS_KEY) { renderSeats(); updateSummary(); }
        if (event.key === "theatrex_currentUser" && !getUser()) requireLogin();
    });
    window.addEventListener("pageshow", () => { if (!getUser()) requireLogin(); else { renderSeats(); updateSummary(); } });
    renderSeats(); updateSummary();
})();