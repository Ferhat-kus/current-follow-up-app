<template>
  <div class="w-full cursor-pointer">
    <div class="w-full">
      <label
        for="inputField"
        class="block text-start my-2 text-sm font-medium text-gray-700"
        >{{ label }}</label
      >
    </div>
    <multiselect
      v-model="selectedOption"
      :options="options"
      label="name"
      :optionHeight="30"
      selectLabel="Seç"
      selectedLabel="Seçili"
      deselectLabel="Kaldır"
      track-by="name"
      :show-labels="true"
      :placeholder="selectedOption.name"
      class="w-full"
      :close-on-select="true"
      @close="isOpen = false"
      :searchable="false"
      remove-on-keydown="false"
      id="selected"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  components: {
    Multiselect,
  },
  props: {
    label: {
      type: String,
    },
    selectedValue: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectedOption: { name: "Kullanıcı", value: "Kullanıcı" },
      isOpen: false,
      options: [
        { name: "Kurucu", value: "Kurucu" },
        { name: "Yönetici", value: "Yönetici" },
        { name: "Kullanıcı", value: "Kullanıcı" },
      ],
    };
  },
};
</script>

<style>
.multiselect__option {
  font-weight: 500;
}
.multiselect__placeholder {
  border-color: red;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;
}
.multiselect__tags {
  padding-left: 6px;
  border: none;
  min-height: 30px;
  background-color: #ebebeb;
}
.multiselect__single {
  background-color: #ebebeb;
  color: black;
  font-weight: 500;
  min-height: 30px;
  margin-bottom: 0px;
}
.multiselect__option {
  color: black;
}
.multiselect__option:hover {
  color: black;
}
</style>
