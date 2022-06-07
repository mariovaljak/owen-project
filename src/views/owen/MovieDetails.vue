<template>
  <div v-if="movie" class="container">
    <h2>{{ movie.title }}</h2>
    <p>Movie year: {{ movie.year }}</p>
    <p>Release date: {{ movie.release_date }}</p>
    <p>Movie director: {{ movie.director }}</p>
    <p>Movie duration: {{ movie.movie_duration }}</p>
    <section>
      <img v-bind:src="movie.poster" alt="" />
      <video controls width="320" height="240">
        <source v-bind:src="movie.video" type="video/mp4" />
      </video>
      <audio controls v-bind:src="movie.audio"></audio>
    </section>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      movie: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/movies/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.movie = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container h2 {
  margin: 20px 0;
  font-size: 30px;
}

.container p {
  line-height: 22px;
  font-weight: 700;
}

img {
  width: 20%;
  height: auto;
}

section {
  width: 1000px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 25px 50px;
  padding: 0 40px;
}
</style>