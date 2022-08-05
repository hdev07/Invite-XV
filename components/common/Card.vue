<template>
  <div class="flex justify-center px-4 m-2 pb-4">
    <a class="block p-6 max-w-sm rounded-lg border border-gray-300 shadow-md">
      <div>
        <p class="mb-6 text-3xl text-center">{{ title }}</p>
        <img :src="urlImg" :alt="title" class="rounded-lg shadow-md mb-6" />
        <p class="mb-2 text-1xl uppercase">{{ desc ? desc.placeName : "Undefined" }}</p>
      </div>
      <div class="flex text-justify">
        <p class="font-bold">Cuándo:&nbsp;</p>
        <p class="text-right">{{ desc ? desc.when : "Undefined" }}</p>
      </div>
      <br />
      <div class="flex text-justify">
        <p class="font-bold">Dirección:&nbsp;</p>
        <p class="text-right">{{ desc ? desc.placeDirection : "Undefined" }}</p>
      </div>
      <div class="pt-4">
        <button
          @click="showModal"
          data-modal-toggle="defaultModal"
          type="button"
          class="w-full flex justify-center text-white bg-black hover:bg-black/80 focus:ring-2 focus:outline-none focus:ring-black/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
        >
          <svg
            class="h-4 mr-2 -ml-1 w-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Ver ubicacion
        </button>
        <button
          type="button"
          class="w-full flex justify-center text-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
        >
          <svg
            class="h-4 mr-2 -ml-1 w-8"
            fill="#000000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <a target="_blank" :href="desc ? desc.urlCalendar : 'Error'">
            Agregar al calendario
          </a>
        </button>
      </div>
    </a>
    <Modal
      :title="titleModal"
      :desc-modal="desc"
      :modal="defaultModal"
      :marker="marker"
      @modal="showModal"
    />
  </div>
</template>

<script>
import Modal from "./Modal";
export default {
  components: { Modal },
  props: {
    title: { type: String, required: true },
    urlImg: { type: String, required: true },
    desc: { type: Object, required: true },
    titleModal: { type: String, required: true },
    marker: { type: Object, required: true },
  },
  data() {
    return {
      defaultModal: false,
    };
  },
  methods: {
    showModal() {
      this.defaultModal = !this.defaultModal;
      if (this.defaultModal === true) {
        this.pushElement(this.marker);
      }
    },

    pushElement() {
      const lat = this.marker.position.lat;
      const lng = this.marker.position.lng;

      this.marker["infoText"] = `
        <div class="w-full flex flex-wrap">
          <div class="w-full flex border-b mb-4 pb-1">
            <p class="w-full font-semibold flex items-center">
            ${this.desc ? this.desc.placeName : "null"}</p>
          </div>
          <p class="w-full">${this.desc ? this.desc.placeDirection : "null"}</p>
          <div class="w-full flex flex-wrap">
            <div class="w-full">
              <a href="https://www.google.com/maps/search/?api=1&query=${lat},${lng}"
                target="_blank"
                rel="noopener noreferrer"
                class="underline text-blue"
              >Obtener Indicaciones
              </a>
            </div>
          </div>
        </div>
      `;
    },
  },
};
</script>
