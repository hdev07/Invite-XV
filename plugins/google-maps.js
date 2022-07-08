import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_MAP_API || 'YOUR_API_KEY',
    libraries: "places"
  }
});