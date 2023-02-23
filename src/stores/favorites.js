import { defineStore } from "pinia";
import axios from "axios";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ace0bfb7";

export const useFavoriteStore = defineStore("favorite", {
  state: () => {
    return {
      favMovies: JSON.parse(localStorage.getItem("favMovies")) ?? [],
    };
  },
  actions: {
    addToFavorite(id) {
      axios
        .get(`${API_URL}&id=${id}`)
        .then((res) => {
          const { data } = res;
          const movie = {
            imdbID: data.imdbID,
            Title: data.Title,
            Poster: data.Poster,
            Year: data.Year,
          };
          this.favMovies.push(movie);
          localStorage.setItem("favMovies", JSON.stringify(this.favMovies));
        })
        .catch((err) => console.log(err));
    },
    removeFromFav(id) {
      this.favMovies = this.favMovies.filter((movie) => movie.imdbID != id);
      localStorage.setItem("favMovies", JSON.stringify(this.favMovies));
    },
  },
});
