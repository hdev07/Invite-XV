<template>
  <div class="">
    <div class="h-64 w-screen bg-img-invitacion">
      <div class="flex justify-between mx-4">
        <div class="flex align-center">
          <div class="mt-12 pt-2">
            <p class="cursive text-3xl text-center font-bold cursive">
              Familia <br />"{{ info ? info[0].name : "name" }}"
            </p>
            <p class="text-2xl text-center pt-2">
              {{ info ? info[0].ticket : "ticket" }} Personas
            </p>
          </div>
        </div>
        <div class="flex pb-4 w-1/3 relative">
          <img
            :src="info ? info[0].urlCode : ''"
            alt=""
            class="w-24 absolute -bottom-16 right-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // text: this.$route,
      info: [
        {
          id: "MS",
          name: "Matlalcuatzi Solis",
          ticket: 4,
          urlCode:
            "https://api.qrcode-monkey.com/tmp/77d5478551e9f9d077c60f23998be135.svg",
        },
      ],
    };
  },
  // mounted() {
  //   console.log(this.text);
  // },
};
</script>

<style></style>
