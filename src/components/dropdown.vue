<template>
  <div class="w-full px-2">
    <div class="w-full">
      <label
        for="inputField"
        class="block text-start my-2 text-sm font-medium text-gray-700"
        >{{ label }}</label
      >
    </div>
    <button
      type="button"
      @click="toggleDropdown"
      class="bg-lightGray flex w-full text-gray-700 font-semibold py-1 px-4 rounded"
    >
      {{ selectedOption.label }}
      <i class="ml-auto text-xl bx bx-chevron-down"></i>
    </button>
    <div v-if="isOpen" class="absolute mt-1 w-72 z-50  bg-lightGray rounded-md shadow-lg">
      <span
        v-for="(option, index) in options"
        :key="index"
        class="flex justify-between w-full px-4 py-1 font-semibold text-gray-700 hover:bg-darkGray cursor-pointer"
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
  props: {
    label: {
      type: String,
    },
    selectedValue: { // Yeni özellik (prop) eklendi
      type: String, // veya null olabilir
      default: null, // Varsayılan olarak null ayarlandı
    },
  },
  data() {
    return {
      selectedOption: { label: "Kullanıcı", value: "Kullanıcı" }, // Varsayılan olarak "Kullanıcı" seçeneği
      isOpen: false,
      options: [
        { label: "Kullanıcı", value: "Kullanıcı" },
        { label: "Yönetici", value: "Yönetici" },
        { label: "Kurucu", value: "Kurucu" },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.$emit("selected-value", option.value); // Seçilen değeri dış bileşene gönder
    },
    isSelected(option) {
      return option === this.selectedOption;
    },
  },
};
</script>
