<template>
  <div
    v-show="contractModalVisibility"
    @click="closeModal"
    class="flex justify-center items-center absolute z-50 top-0 left-0 w-full h-full bg-slate-300 bg-opacity-50"
  >
    <div
      @click.stop
      class="bg-white md:w-4/12 w-full md:h-4/5 h-full rounded-md"
    >
      <!-- Header -->
      <div
        class="bg-darkBlue py-3 px-4 rounded-t-md flex items-center justify-between"
      >
        <div class="text-titleTextColor text-sm font-semibold">Sözleşme Ekle</div>
        <div @click="closeModal">
          <img src="@/assets/icons/close.svg" alt="" />
        </div>
      </div>
      <!-- Form -->
      <div class="px-2 flex flex-col items-center">
        <Input label="Başlangıç Tarihi"/>
        <Input label="Bitiş Tarihi"/>
        <descriptionInput label="İçeriği/Konusu"/>
        <fileInput label="Sözleşme dosyası"/>
        <Input :dropdownShow="true" className="rounded-none rounded-r-md" label="Sözleşme Bedeli"/>
        <div
          class="md:flex md:flex-row flex flex-col w-full items-center justify-between md:mt-4 px-5"
        >
          <div
            class="md:flex md:justify-end w-full justify-center items-center md:my-0 my-7"
          >
            <Button
              :img-show="false"
              className="py-2 px-5 md:mx-4 bg-red"
              :src="require('@/assets/icons/plus.svg')"
              to="#"
              title="İptal"
              @button-click="closeModal"
            />
            <Button
              :img-show="false"
              className="py-2 px-4 "
              :src="require('@/assets/icons/plus.svg')"
              to="#"
              title="kaydet"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/button.vue";
import Input from "@/components/input.vue";
import descriptionInput from "@/components/descriptionInput.vue";
import fileInput from "@/components/fileInput.vue";

export default {
  components: {
    Input,
    Button,
    descriptionInput,
    fileInput
  },
  props: {
    contractModalVisibility: {
      type: Boolean,
    },
  },
  methods: {
    closeModal() {
      this.$emit("changeModalVisibility", false);
    },
  },
};
</script>
