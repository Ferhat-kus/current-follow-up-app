<template>
  <div
    v-show="odmModalVisible"
    @click="closeModal"
    class="flex justify-center items-center absolute z-50 top-0 left-0 w-full h-full bg-slate-300 bg-opacity-50"
  >
    <div @click.stop class="bg-white md:w-4/12 md:min-w-96 w-full md:h-4/6 h-full rounded-md">
      <!-- Header -->
      <div
        class="bg-darkBlue py-3 px-4 rounded-t-md flex items-center justify-between"
      >
        <div class="text-titleTextColor font-semibold">Ödeme Ekle</div>
        <div @click="closeModal">
          <img src="@/assets/icons/close.svg" alt="" />
        </div>
      </div>
      <!-- Form -->
      <div class="px-2 flex flex-col">
        <div class="flex flex-col items-center">
          <Input label="Ödeme Tarihi" />
          <Input label="Ödeme Tutarı" />
          <descriptionInput label="Açıklama" />
        </div>
        <div class="flex items-center justify-end px-2  my-3">
          <div
            class="flex w-full justify-end md:px-2 px-6 md:justify-end items-center "
          >
          <div class="mx-2">
            <Button
              :img-show="false"
              className="py-2 px-5 mx-2  bg-red"
              :src="require('@/assets/icons/plus.svg')"
              to="#"
              title="İptal"
              @button-click="closeModal"
            />
          </div>
            <Button
              :img-show="false"
              className="py-2 px-5 mx-2"
              :src="require('@/assets/icons/plus.svg')"
              to="#"
              title="Kaydet"
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

export default {
  components: {
    Input,
    Button,
    descriptionInput,
  },
  props: {
    odmModalVisible: {
      type: Boolean,
    },
  },
  methods: {
    closeModal() {
      this.$emit("modalVisible", false); // modalVisible prop'unu false olarak güncelle
    },
    cancel() {
      this.$emit("cancelmodalVisible", false); // modalVisible prop'unu false olarak güncelle
    },
  },
};
</script>
