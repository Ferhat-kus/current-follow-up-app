<template>
  <div class="w-11/12 mx-2">
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
      :optionHeight="30"
      deselectLabel="Kaldır"
      selectLabel="Seç"
      selectedLabel="Seçili"
      track-by="value"
      label="label"
      :placeholder="selectedOption ? selectedOption : options[2].label"
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
      selectedOption: { label: "Kullanıcı", value: "Kullanıcı" },
      isOpen: false,
      options: [
        { label: "Kurucu", value: "Kurucu" },
        { label: "Yönetici", value: "Yönetici" },
        { label: "Kullanıcı", value: "Kullanıcı" },
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
}
.multiselect__tags{
  padding-left: 6px;
  border: none;
  min-height: 30px;
  background-color: #EBEBEB;
}
.multiselect__single {
  background-color: #EBEBEB   ;
  color: black;
  font-weight: 500;
}
.multiselect__option{
  color: black;
}
.multiselect__option:hover{
  color: black;
}
</style>
