<template>
  <div>
    <Home />
    <Frase />
    <Lugar />
    <Fotos />
  </div>
</template>
<script>
import Home from "../components/Home";
import Lugar from "../components/Lugar";
import Frase from "../components/Frase";
import Fotos from "../components/Fotos.vue";

export default {
  name: "IndexPage",
  components: { Home, Lugar, Frase, Fotos },
};
</script>
