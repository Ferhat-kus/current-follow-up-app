<template>
        <!-- Form -->
        <div class="px-2 flex flex-col">
          <div class="flex flex-col items-center">
            <Input label="Şirket Adı" />
            <Input label="Fatura Tarihi" />
            <Input label="Fatura No" />
            <descriptionInput label="Acıklama" />
          </div>
          <div class="flex px-2">
            <Input label="Fatura Tutarı" />
            <Input label="Son Ödeme Tarihi" />
          </div>
          <div class="flex items-center justify-end px-2  my-3">
          <div
            class="md:flex w-full justify-end px-2  md:justify-end items-center "
          >
          <!-- <div class="md:mx-2">
            <Button
              :img-show="false"
              className="py-2 px-5 md:mx-2  bg-red"
              :src="require('@/assets/icons/plus.svg')"
              to="#"
              title="İptal"
              @button-click="close"
            
            />
          </div> -->
            <Button
              :img-show="false"
              className="py-2 px-5"
              :src="require('@/assets/icons/plus.svg')"
              to="#"
              title="Kaydet"
              @button-click="save"
            />
          </div>
        </div>
        </div>
  </template>
  
  <script>
  import Button from "@/components/button.vue";
  import Input from "@/components/input.vue";
  import descriptionInput from "@/components/descriptionInput.vue";
  
  export default {
    components: {
      Input,
      Button,
      descriptionInput,
    },
    methods: {
      close() {
        this.$emit("close");
      },
      save() {
        this.$emit("save");
      },
    },
  };
  </script>
  