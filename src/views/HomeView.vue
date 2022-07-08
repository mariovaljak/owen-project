<template>
  <div class="home">
    <h1>Homepage</h1>
    <div class="content">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
        excepturi odio eaque vero laboriosam in,<br />
        laudantium velit illo itaque cupiditate ipsum fugiat minus ratione,
        saepe recusandae incidunt debitis. Tempora, dicta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        eum suscipit accusamus voluptates,<br />
        sit tenetur alias exercitationem excepturi. Neque earum numquam dolore
        error illo praesentium tenetur voluptates itaque laboriosam sit.
      </p>
      <div class="animation">
        <h3><span></span> is the best!</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style>
h1 {
  font-size: 35px;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
}
.animation {
  margin-top: 60px;
  text-transform: uppercase;
  font-weight: bold;
}
h3 span::before {
  content: "Funkhaus";
  color: #2d3d2f;
  text-decoration-line: underline;
  animation: text 6s 1;
  animation-delay: 1.5s;
}
@keyframes text {
  25% {
    content: "Drew";
  }
  50% {
    content: "Svebor";
  }
  80% {
    content: "Mario";
  }
}
</style>
