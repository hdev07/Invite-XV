<template>
  <div>
    <Home />
    <Frase />
    <Lugar />
  </div>
</template>
<script>
import Home from "../components/Home";
import Lugar from "../components/Lugar";
import Frase from "../components/Frase";

export default {
  name: "IndexPage",
  components: { Home, Lugar, Frase },
};
</script>
