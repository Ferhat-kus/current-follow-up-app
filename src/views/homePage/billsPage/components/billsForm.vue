<template>
        <!-- Form -->
        <div class=" flex flex-col w-full px-4 items-center">
          <div class="flex flex-col w-full  items-center justify-center ">
            <Input label="Şirket Adı" />
            <Input label="Fatura Tarihi" />
            <Input label="Fatura No" />
            <descriptionInput label="Acıklama" />
          </div>
          <div class="flex  w-full justify-between ">
            <div class="w-1/2 mr-2">
            <Input label="Fatura Tutarı" />
          </div>
          <div class="w-1/2 ml-2">
            <Input label="Son Ödeme Tarihi" />
          </div>
          </div>
          <div class="flex w-full bg-red items-center justify-end my-3">
          <div
            class="md:flex w-full justify-end  bg-gray-50  md:justify-end items-center "
          >
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
  