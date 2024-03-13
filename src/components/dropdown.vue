<template>
  <div class="w-full px-2">
    <label for="inputField" class="block my-2 text-sm font-medium text-gray-700">{{ label }}</label>
    <button @click="toggleDropdown" class="bg-lightGray flex w-full text-gray-700 font-semibold py-2 px-4 rounded">
      {{ selectedOption.label }}
    </button>
    <div v-if="isOpen" class="mt-1 w-full bg-lightGray rounded-md shadow-lg">
      <span
        v-for="(option, index) in options"
        :key="index"
        href="#"
        class="flex justify-between w-full px-4 py-2 font-semibold text-gray-700 hover:bg-darkGray"
        :class="{ 'bg-darkGray': isSelected(option) }"
        @click="selectOption(option)"
      >
        {{ option.label }}
        <span>seç</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: this.options.length > 0 ? this.options[0] : null,
      isOpen: false,
    };
  },
  props: {
    label: String,
    className: String,
    options: Array,
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
    },
    isSelected(option) {
      return option === this.selectedOption;
    },
  },
};
</script>