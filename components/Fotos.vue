<template>
  <div>
    <div class="flex justify-center my-4 py-8">
      <p class="text-center font-bold text-4xl">Fotos</p>
    </div>
    <div class="relative slide">
      <div
        class="carousel-indicators absolute bottom-0 flex h-24 w-full justify-center items-center hidden"
      >
        <ol class="flex w-4/12 justify-center">
          <li
            v-for="(img, i) in images"
            :key="i"
            class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2"
          ></li>
        </ol>
      </div>
      <div class="carousel-inner relative overflow-hidden w-full">
        <div
          v-for="(img, i) in images"
          :id="`slide-${i}`"
          :key="i"
          :class="`${active === i ? 'active' : 'left-full'}`"
          class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out"
        >
          <img class="block w-full" :src="img" alt="First slide" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    images: [
      require("../assets/img/Foto_1.jpg"),
      require("../assets/img/Foto_2.jpg"),
      require("../assets/img/Foto_3.jpg"),
    ],
    active: 0,
  }),
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 2000);
  },
};
</script>
<style>
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>
