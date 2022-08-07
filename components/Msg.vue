<template>
  <div class="mt-8">
    <div class="h-64 w-screen bg-img-invitacion">
      <div class="flex justify-between mx-4">
        <div class="flex">
          <p class="cursive text-4xl text-center m-4 mb-12 font-bold uppercase cursive">
            Hola soy un div con texto
          </p>
        </div>
        <div class="flex pb-4">qrcode</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      body: {
        data: "https://www.misxvsofi.me?MS-1",
        config: {
          body: "mosaic",
          eye: "frame12",
          eyeBall: "ball14",
          erf1: [],
          erf2: [],
          erf3: [],
          brf1: [],
          brf2: [],
          brf3: [],
          bodyColor: "#000000",
          bgColor: "#FFFFFF",
          eye1Color: "#000000",
          eye2Color: "#000000",
          eye3Color: "#000000",
          eyeBall1Color: "#000000",
          eyeBall2Color: "#000000",
          eyeBall3Color: "#000000",
          gradientColor1: "",
          gradientColor2: "",
          gradientType: "linear",
          gradientOnEyes: true,
          logo: "b7a435b94c442be6ce29f2c4f18a01a98796a67f.png",
          logoMode: "clean",
        },
        size: 2000,
        download: "imageUrl",
        file: "svg",
      },
    };
  },
  mounted() {
    this.getUrlQrCode();
  },
  methods: {
    async getUrlQrCode() {
      try {
        const { data, status } = await this.$axios.post(
          "https://api.qrcode-monkey.com//qr/custom",
          this.body
        );
        if (status !== 200) throw new Error("No se pudo obtener el QR Code.");

        this.imageUrl = data;
        await this.getQrCode();
      } catch (err) {
        console.error(err);
      }
    },

    async getQrCode() {
      try {
        const qrCode = await this.$axios.get(`https:${this.imageUrl}`);
        console.log("qrCode", qrCode);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style></style>
