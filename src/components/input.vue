<template>
  <div class="w-11/12 flex flex-col items-start  mx-2 ">
    <label
      for="inputField"
      class="block my-2 text-sm font-medium text-gray-700"
      >{{ label }}</label
    >
    <div class="relative w-full flex">
      <div
        v-show="dropdownShow"
        @click="toggleDropdown"
        class="bg-darkGray rounded-l-md flex  items-center px-4 w-3/12 font-semibold whitespace-nowrap"
      >
        {{ selectedOption }}
      </div>
      <input
        id="inputField"
        :class="className"
        class="bg-lightGray w-full px-3 py-2 text-sm font-medium rounded-md focus:outline-none"
        :type="type"
      />
      <div
        v-show="dropdown"
        class="absolute z-10 mt-9 md:w-3/12 w-4/12 bg-lightGray rounded-md shadow-lg whitespace-nowrap"
      >
        <ul>
          <li @click="selectOption('Aylık')" class="py-2 px-2 hover:bg-darkGray cursor-pointer">Aylık</li>
          <li @click="selectOption('Yıllık')" class="py-2 px-2 hover:bg-darkGray cursor-pointer">Yıllık</li>
          <li @click="selectOption('Tek Ödeme')" class="py-2 px-2 hover:bg-darkGray cursor-pointer">Tek Ödeme</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
    className: String,
    dropdownShow: Boolean,
  },
  data() {
    return {
      dropdown: false,
      selectedOption: 'AYLIK',
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.dropdown = false; 
    },
  },
};
</script>
