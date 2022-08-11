<template>
  <div v-if="family !== undefined">
    <div class="h-64 w-screen bg-img-invitacion">
      <div class="flex justify-around mx-4">
        <div class="flex align-center">
          <div class="mt-12 pt-2">
            <p class="cursive text-3xl text-center font-bold cursive">
              Familia <br />"{{ family ? family.name : "name" }}"
            </p>
            <p class="text-2xl text-center pt-2">
              {{ family ? family.ticket : "0" }} Personas
            </p>
          </div>
        </div>
        <div class="flex pb-4 w-1/3 relative">
          <img
            :src="family ? family.urlCode : ''"
            alt="QRCODE"
            class="w-28 absolute -bottom-20 -right-8 rounder-2 rounded-lg opacity-75"
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
      family: {},
      info: [
        {
          // Matlalcuatzi Solis - 5
          id: "MS",
          name: "Matlalcuatzi Solis",
          ticket: 4,
          urlCode:
            "https://api.qrcode-monkey.com/tmp/77d5478551e9f9d077c60f23998be135.svg",
        },
        {
          // Lopez Solis - 3
          id: "LS",
          name: "López Solis",
          ticket: 3,
          urlCode:
            "https://api.qrcode-monkey.com/tmp/31f8f3247464e7c1c3c94da2ee62f02f.svg",
        },
        {
          // Villalobos Solis - 5
          id: "VS",
          name: "Villalobos Solis",
          ticket: 5,
          urlCode:
            "https://api.qrcode-monkey.com/tmp/aaba64520e98b4e69c62c53db9036f42.svg",
        },
        {
          // Solis Hurtado - 4
          id: "SH",
          name: "Solis Hurtado",
          ticket: 4,
          urlCode:
            "https://api.qrcode-monkey.com/tmp/17485848a54fb353ac0d35a835cc8db8.svg",
        },
        {
          // Jarácuaro Solis - 3
          id: "JS",
          name: "Jarácuaro Solis",
          ticket: 3,
          urlCode:
            "https://api.qrcode-monkey.com/tmp/5ead0277d8cdc33ae4313cde4ede1d95.svg",
        },
        {
          // Cruz Solis - 8
          id: "CS",
          name: "Cruz Solis",
          ticket: 8,
          urlCode:
            "https://api.qrcode-monkey.com/tmp/e94c02898d16a753973b5867ecb5bd98.svg",
        },
        {
          // Matlalciatzi del Angel - 5
          id: "MA",
          name: "Matlalciatzi del Angel",
          ticket: 5,
          urlCode:
            "https://api.qrcode-monkey.com/tmp/1c1e1e79b018d430706ad4995286f1db.svg",
        },
        {
          // Hurtado Tovar - 2
          id: "HT",
          name: "Hurtado Tovar",
          ticket: 2,
          urlCode:
            "https://api.qrcode-monkey.com/tmp/5297521caf521faa43e9b3e8c7041c20.svg",
        },
        {
          // Hurtado Hernández - 2
          id: "HH",
          name: "Hurtado Hernández",
          ticket: 2,
          urlCode:
            "https://api.qrcode-monkey.com/tmp/27abb8cea1808824986dc9a3c3a8222e.svg",
        },
        {
          // Hurtado Hernández - 1
          id: "HH-1",
          name: "Hurtado Hernández",
          ticket: 1,
          urlCode:
            "https://api.qrcode-monkey.com/tmp/b42baf21ed72e9dab757af8cc6b64b2e.svg",
        },
      ],
    };
  },
  mounted() {
    this.filterFamily();
  },
  methods: {
    filterFamily() {
      try {
        const q = this.$route.query.id;
        this.family = this.info.find((fam) => fam.id == q);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style></style>
