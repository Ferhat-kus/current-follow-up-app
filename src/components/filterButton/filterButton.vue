<template>
  <div>
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        @click="show = !show"
        class="flex w-full items-center justify-between p-2 px-4 text-darkBlue bg-white rounded-md border-2 border-darkBlue"
      >
        <span class="mr-4 font-semibold">Filtrele</span>
        <svg
          class="w-5 h-5 text-darkBlue"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        v-show="show"
        class="absolute z-50 w-full flex flex-col items-center right-0 px-2 py-2 mt-2 bg-white border-2 border-darkBlue rounded-md shadow-xl"
      >
        <div
          class="block w-full py-1 text-base font-semibold text-darkBlue"
        >
          <maxAndMinRangeInput :placeholder="minInput" />
        </div>
        <!-- <span class="text-darkBlue text-xl font-bold">-</span> -->
        <div
          class="block w-full py-1 text-base font-semibold text-darkBlue"
        >
          <maxAndMinRangeInput :placeholder="maxInput" />
        </div>
        <button
          class="flex w-full px-2 py-2   text-base justify-center items-center font-semibold bg-darkBlue text-titleTextColor rounded-md"
        >
          Filtrele
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import maxAndMinRangeInput from "./components/maxAndMinRangeInput.vue";
export default {
  props: ['maxInput','minInput'],
  components: {
    maxAndMinRangeInput,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
