<template>
  <div class="my-8">
    <div class="flex justify-center my-4">
      <p class="text-center font-bold text-4xl">Dónde &amp; Cuándo</p>
    </div>
    <Card
      :title="'Ceremonia Religiosa'"
      :urlImg="urlImgCeremonia"
      :desc="descCeremonia"
      :title-modal="'Ubicación'"
      :marker="markerCeremonia"
    />
    <Card
      :title="'Recepción'"
      :urlImg="urlImgReception"
      :desc="descReception"
      :title-modal="'Ubicación'"
      :marker="markerRecepcion"
    />
  </div>
</template>
<script>
import Card from "./common/Card";
export default {
  components: { Card },

  data() {
    return {
      defaultModal: false,
      descCeremonia: {
        placeName: "Parroquia san francisco",
        when: "3 de diciembre del 2022 a las 18:00 hrs.",
        placeDirection: "Mariano Arista 200, San Francisco, 42000 Pachuca de Soto, Hgo.",
      },
      urlImgCeremonia: "https://picsum.photos/600/300",
      descReception: {
        placeName: "Salón Benevento",
        when: "3 de diciembre del 2022 a las 20:00 hrs",
        placeDirection:
          "Km 2.1, Blvrd Ramón G. Bonfil, Zona Plateada, Pachuca de Soto, Hgo.",
      },
      urlImgReception: "https://picsum.photos/600/301",
      markerCeremonia: {
        id: 1,
        position: {
          lat: 20.121039,
          lng: -98.731211,
        },
      },
      markerRecepcion: {
        id: 1,
        position: {
          lat: 20.096749,
          lng: -98.78433,
        },
      },
    };
  },
  methods: {
    infoTextCeremonia(descCeremonia, markerCeremonia) {
      return;
    },
  },
};
</script>
