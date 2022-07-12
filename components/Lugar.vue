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
        placeName: "Parroquia la Asunción",
        when: "3 de diciembre del 2022 a las 17:45 hrs.",
        placeDirection:
          "Constitución 97A, Capulin Soledad, 53720 Naucalpan de Juárez, Méx.",
      },
      urlImgCeremonia: require("../assets/img/Iglesia.png"),
      descReception: {
        placeName: "Salón de las Bugambilias",
        when: "3 de diciembre del 2022 a las 19:00 hrs",
        placeDirection: "120 Av. de la Tolva Naucalpan de Juárez, Estado de México",
      },
      urlImgReception: require("../assets/img/Salon.jpg"),
      markerCeremonia: {
        id: 1,
        position: {
          lat: 19.4481349,
          lng: -99.2539861,
        },
      },
      markerRecepcion: {
        id: 1,
        position: {
          lat: 19.4502913,
          lng: -99.2522322,
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
