function createShelf() {
  shelf = document.createElement("div");
  shelf.classList.add("shelf");
  return shelf;
}

function createShelfTitle(movie) {
  const shelfTitle = document.createElement("p");
  shelfTitle.innerHTML = movie.category;
  shelfTitle.classList.add("shelf-title");
  return shelfTitle;
}

function createMovieTile(item) {
  const movieTile = document.createElement("div");
  movieTile.classList.add("tile");

  const image = document.createElement("img");
  image.src = item.image;
  image.width = 300;
  image.height = 200;

  const movieTitle = document.createElement("p");
  movieTitle.innerHTML = item.name + " | " + item.duration + " min";

  movieTile.appendChild(image);
  movieTile.appendChild(movieTitle);

  return movieTile;
}

function loadMovies() {
  const content = document.getElementById("content");

  for (const movie of data.movies) {
    const shelf = createShelf();
    shelfTitle = createShelfTitle(movie);

    content.appendChild(shelfTitle);
    content.appendChild(shelf);

    for (const item of movie.items) {
      const movieTile = createMovieTile(item);
      shelf.appendChild(movieTile);
    }
  }
}

function algo() {
  valor = "gato";
  if (valor == "gato") {
    console.log("miau");
  } else {
    console.log("guau");
  }
}
