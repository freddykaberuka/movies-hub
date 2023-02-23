import { defineStore } from "pinia";
import axios from "axios";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ace0bfb7";

export const moviesStore = defineStore("movies", {
  state: () => {
    return {
      movies: [],
      movie: {},
      isLoading: false,
      totalResults: 0,
      loadingMessage: "Please wait",
      page: 1,
    };
  },
  actions: {
    async getAllMovies(keyword) {
      this.isLoading = true;
      this.loadingMessage = "Please wait";
      if (!keyword) {
        keyword = "anaconda";
      }

      try {
        const { data } = await axios.get(`${API_URL}&s=${keyword}`);
        if (data.Response == "False") {
          throw new Error(data.Error);
        }
        [this.totalResults, this.movies, this.isLoading, this.page] = [
          data.totalResults,
          data.Search,
          false,
          1,
        ];
      } catch (err) {
        [this.isLoading, this.loadingMessage] = [true, err.message];
      }
    },
    async getMovieByID(id) {
      this.isLoading = true;
      try {
        const { data, status } = await axios.get(`${API_URL}&id=${id}`);
        if (status != 200) {
          throw new Error(data.Error);
        }
        [this.movie, this.isLoading] = [data, false];
      } catch (err) {
        console.log(err.message, "test");
      }
    },
    async nextPage(page) {
      const keyword = localStorage.getItem("keyword")
        ? localStorage.getItem("keyword")
        : "anaconda";
      this.isLoading = true;
      this.loadingMessage = "Please wait";
      try {
        const { data } = await axios.get(
          `${API_URL}&s=${keyword}&page=${page}`
        );

        if (data.Response == "False") {
          throw new Error(data.Error);
        }
        this.isLoading = false;
        data.Search.forEach((movie) => this.movies.push(movie));
      } catch (error) {
        ("");
      }
    },
  },
});
