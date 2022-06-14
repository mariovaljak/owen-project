<template>
  <div v-if="item" v-for="movie in item" class="container">
    <h2>{{ movie.movie }}</h2>
    <p>Movie year: {{ movie.year }}</p>
    <p>Release date: {{ movie.release_date }}</p>
    <p>Movie director: {{ movie.director }}</p>
    <p>Movie duration: {{ movie.movie_duration }}</p>
    <section>
      <img v-bind:src="movie.poster" alt="" />
      <audio controls v-bind:src="movie.audio"></audio>
    </section>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  data() {
    return {
      item: null,
    };
  },
  mounted() {
    fetch(
      "https://owen-wilson-wow-api.herokuapp.com/wows/random?movie=" +
        this.movie
    )
      .then((res) => res.json())
      .then((data) => (this.item = data))
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