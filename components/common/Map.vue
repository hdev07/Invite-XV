<template>
  <div class="w-full h-full pb-4">
    <div>
      <GmapMap :center="mapCenter" :zoom="15" :options="mapConfig" class="h-48">
        <GmapInfoWindow
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen = false"
        >
        </GmapInfoWindow>
        <GmapMarker
          :key="i"
          v-for="(m, i) in markers"
          :position="m.position"
          :clickable="true"
          :icon="markerOptions"
          @click="toggleInfoWindow(m, i)"
        ></GmapMarker>
      </GmapMap>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapCenter: { lat: 47.376332, lng: 8.547511 },
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
      markers: [
        {
          position: {
            lat: 47.376332,
            lng: 8.547511,
          },
          infoText: "<strong>TQM Jaque bb</strong>",
        },
      ],
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
        scaledSize: { width: 37, height: 50, f: "px", b: "px" },
      };
    },
  },

  methods: {
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
  },
};
</script>
