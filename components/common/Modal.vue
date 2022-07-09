<template>
  <div
    v-show="modal"
    tabindex="-1"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-screen bg-gray-100"
  >
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto flex items-center">
      <div class="relative bg-white rounded-lg shadow">
        <div class="flex justify-between items-start p-4 rounded-t border-b">
          <h3 class="text-xl font-semibold">{{ title }}</h3>
          <button
            @click="showModal"
            type="button"
            class="bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              class="w-5 h-5"
              fill="#00000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="p-6 space-y-6">
          <div class="w-full mb-4">
            <client-only>
              <Map />
            </client-only>
          </div>
          <div class="flex text-justify">
            <p class="font-bold">Cuándo:&nbsp;</p>
            <p class="text-right">{{ descModal ? descModal.when : "Undefined" }}</p>
          </div>
          <br />
          <div class="flex text-justify">
            <p class="font-bold">Dirección:&nbsp;</p>
            <p class="text-right">
              {{ descModal ? descModal.placeDirection : "Undefined" }}
            </p>
          </div>
        </div>
        <!-- Modal footer -->
        <div
          class="flex justify-end items-center p-6 space-x-2 rounded-b border-t border-gray-200"
        >
          <button
            @click="showModal"
            type="button"
            class="w-full flex justify-center text-white bg-black hover:bg-black/80 focus:ring-2 focus:outline-none focus:ring-black/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Map from "./Map";
export default {
  components: { Map },
  props: {
    title: { type: String, required: true },
    descModal: { type: Object, default: {} },
    modal: { type: Boolean, required: true },
  },

  methods: {
    showModal() {
      this.$emit("modal");
    },
  },
};
</script>
