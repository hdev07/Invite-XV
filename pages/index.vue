<template>
  <div>
    <Home/>
    <Frase/>
    <Lugar/>
  </div>
</template>
<script>
import Home from '../components/Home.vue';
import Lugar from '../components/Lugar.vue';
import Frase from '../components/Frase.vue';

export default {
    name: "IndexPage",
    components: { Home, Lugar, Frase }
}
</script>
