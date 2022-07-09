<template>
  <div class="">
    <div class="flex justify-center my-4 py-8">
      <p class="text-center font-bold text-4xl">Mis Personas</p>
    </div>
    <div v-for="(person, i) in people" :key="i">
      <div class="flex justify-center pb-4">
        <img
          class="rounded-full border-4 shadow-2xl grayscale border-white ring-white w-48 h-48"
          :src="person.img"
          alt=""
        />
      </div>
      <div class="m-2 pb-12">
        <p class="text-center font-bold text-3xl">{{ person.name }}</p>
        <p class="text-center font-bold text-1xl">{{ person.relationship }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          name: "Beatriz",
          relationship: "Madre",
          img: require("../assets/img/Persona_1.jpg"),
        },
        {
          name: "Hector",
          relationship: "Padre",
          img: require("../assets/img/Persona_2.jpg"),
        },
        {
          name: "Sandra",
          relationship: "Madrina",
          img: require("../assets/img/Persona_3.jpg"),
        },
        {
          name: "Axel",
          relationship: "Padrino",
          img: require("../assets/img/Persona_4.jpg"),
        },
      ],
    };
  },
};
</script>

<style></style>
