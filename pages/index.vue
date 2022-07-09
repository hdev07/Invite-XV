<template>
  <div>
    <Home />
    <Frase />
    <Lugar />
    <Fotos />
    <Personas />
  </div>
</template>
<script>
import Home from "../components/Home";
import Lugar from "../components/Lugar";
import Frase from "../components/Frase";
import Fotos from "../components/Fotos.vue";
import Personas from "../components/Personas.vue";

export default {
  name: "IndexPage",
  components: { Home, Lugar, Frase, Fotos, Personas },
};
</script>
