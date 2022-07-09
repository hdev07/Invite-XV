<template>
  <div class="w-full h-full pb-4">
    <div>
      <GmapMap
        :center="marker ? marker.position : mapCenter"
        :zoom="15"
        :options="mapConfig"
        class="h-48"
      >
        <GmapInfoWindow
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen = false"
        />
        <GmapMarker
          :position="marker.position"
          :clickable="true"
          :icon="markerOptions"
          @click="toggleInfoWindow(marker, marker.id)"
        />
      </GmapMap>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    marker: { type: Object, required: true },
  },
  data() {
    return {
      mapCenter: { lat: 23.9843859, lng: -103.9607737 },
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        content: "",
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },

  computed: {
    mapConfig() {
      return {
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      };
    },
    markerOptions() {
      return {
        url: require("../../assets/icons/marker.png"),
        scaledSize: { width: 35, height: 50, f: "px", b: "px" },
      };
    },
  },

  methods: {
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;

      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
  },
};
</script>
