<template>
  <div>
    <div v-if="device !== 'smartphone'">
      <MsgDevice />
    </div>
    <div v-if="device === 'smartphone'">
      <Home />
      <Msg />
      <Frase />
      <Lugar />
      <Fotos />
      <Personas />
      <Insta />
      <Final />
    </div>
  </div>
</template>
<script>
import Home from "../components/Home";
import Lugar from "../components/Lugar";
import Frase from "../components/Frase";
import Fotos from "../components/Fotos.vue";
import Personas from "../components/Personas.vue";
import Insta from "../components/Insta.vue";
import Final from "../components/Final.vue";
import Msg from "../components/Msg.vue";
import MsgDevice from "../components/MsgDevice.vue";

export default {
  name: "IndexPage",
  components: {
    Home,
    Lugar,
    Frase,
    Fotos,
    Personas,
    Insta,
    Final,
    Msg,
    MsgDevice,
  },
  data() {
    return {
      device: "",
    };
  },
  mounted() {
    console.log(this.$device.machine.type);
    this.device = this.$device.machine.type;
  },
};
</script>
