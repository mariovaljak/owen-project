<template>
  <h1>Movie Titles</h1>
  <div v-for="movie in movies" :key="movie.movie" class="movie">
    <router-link :to="{ name: 'MovieDetails', params: { movie: movie.movie } }">
      <h2>{{ movie.movie }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    fetch(
      "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=8&sort=movie&direction=desc"
    )
      .then((res) => res.json())
      .then((data) => (this.movies = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.movie h2 {
  background: #f4da71;
  padding: 25px;
  border-radius: 15px;
  margin: 10px auto;
  max-width: 500px;
  cursor: pointer;
  color: #444;
  transition: 0.2s ease-in-out;
}
.movie h2:hover {
  background: #f4f4f4;
}
.movie a {
  text-decoration: none;
}
</style>