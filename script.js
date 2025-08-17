const movies = [
  {
    id: 1,
    title: "WAR 2",
    genre: "Action-Thriller",
    image: "https://i.ytimg.com/vi/tonHauwMNCw/hqdefault.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4Ac4FgALQBYoCDAgAEAEYDyBlKFUwDw==&rs=AOn4CLAsIfwsfEqbRl6R_94TUGgdfjC8jQ",
    showtimes: ["1:00 PM", "4:00 PM", "7:00 PM"]
  },
  {
    id: 2,
    title: "Son Of Sardar 2",
    genre: "Comedy-Family-Romantic",
    image: "https://upload.wikimedia.org/wikipedia/en/4/41/Son_of_Sardaar_2_film_poster.jpg",
    showtimes: ["2:00 PM", "5:00 PM", "8:00 PM"]
  },
  {
    id: 3,
    title: "SAIYAARA",
    genre: "Drama-Musical-Love Story",
    image: "https://images.filmibeat.com/img/popcorn/movie_posters/saiyaara-20250602185108-23732.jpg",
    showtimes: ["12:00 PM", "3:00 PM", "6:00 PM"]
  }
];

const movieList = document.getElementById("movie-list");
const modal = document.getElementById("booking-modal");
const modalTitle = document.getElementById("modal-movie-title");
const showtimesDiv = document.getElementById("showtimes");
const confirmation = document.getElementById("confirmation");
const confirmationMsg = document.getElementById("confirmation-message");

let selectedMovie = null;
let selectedTime = null;

function displayMovies() {
  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.genre}</p>
    `;
    card.onclick = () => openBookingModal(movie);
    movieList.appendChild(card);
  });
}

function openBookingModal(movie) {
  selectedMovie = movie;
  selectedTime = null;
  modal.classList.remove("hidden");
  modalTitle.textContent = movie.title;
  showtimesDiv.innerHTML = "";
  movie.showtimes.forEach(time => {
    const btn = document.createElement("button");
    btn.textContent = time;
    btn.onclick = () => {
      selectedTime = time;
      Array.from(showtimesDiv.children).forEach(b => b.style.backgroundColor = "#ff5c5c");
      btn.style.backgroundColor = "#28a745"; // green
    };
    showtimesDiv.appendChild(btn);
  });
}

function closeModal() {
  modal.classList.add("hidden");
}

function bookTicket() {
  if (!selectedTime) {
    alert("Please select a showtime.");
    return;
  }
  closeModal();
  confirmation.classList.remove("hidden");
  confirmationMsg.textContent = `You booked "${selectedMovie.title}" at ${selectedTime}. Enjoy the show! 🍿`;
}

function closeConfirmation() {
  confirmation.classList.add("hidden");
}

displayMovies();
