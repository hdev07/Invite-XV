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
        placeDirection: "Constitución, Capulin Soledad, 53730 Naucalpan de Juárez, Méx.",
        urlCalendar:
          "https://calendar.google.com/event?action=TEMPLATE&tmeid=M3FrODhvM3VuOG1nOGlyNGNrNjB0Zmt1bTcgcWQ1bm9jcWxqYTg0ZmJkbzlvOTE4NnFuMGNAZw&tmsrc=qd5nocqlja84fbdo9o9186qn0c%40group.calendar.google.com",
      },
      urlImgCeremonia: require("../assets/img/Iglesia.png"),
      descReception: {
        placeName: "Salón de las Bugambilias",
        when: "3 de diciembre del 2022 a las 19:00 hrs",
        placeDirection:
          "Av. de la Tolva 19 Capulin Soledad 53720 Naucalpan de Juárez, Méx.",
        urlCalendar:
          "https://calendar.google.com/event?action=TEMPLATE&tmeid=MWlmc3RnZTQ0Ym5xaGU3Mjlvb2RwOXAyaWQgcWQ1bm9jcWxqYTg0ZmJkbzlvOTE4NnFuMGNAZw&tmsrc=qd5nocqlja84fbdo9o9186qn0c%40group.calendar.google.com",
      },
      urlImgReception: require("../assets/img/Salon.jpg"),
      markerCeremonia: {
        id: 1,
        position: {
          lat: 19.4482542,
          lng: -99.2539072,
        },
      },
      markerRecepcion: {
        id: 1,
        position: {
          lat: 19.450289,
          lng: -99.251733,
        },
      },
    };
  },
  methods: {},
};
</script>
