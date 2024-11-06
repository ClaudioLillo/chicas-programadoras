function loadMovies() {
  console.log(data);
  const content = document.getElementById("content");

  for (const movie of data.movies) {
    shelf = document.createElement("div");
    shelf.classList.add("shelf");
    shelfTitle = document.createElement("p");
    shelfTitle.innerHTML = movie.category;
    shelfTitle.classList.add("shelf-title");
    content.appendChild(shelfTitle);
    content.appendChild(shelf);

    for (const item of movie.items) {
      console.log(movie);
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

      shelf.appendChild(movieTile);
    }
  }
}
