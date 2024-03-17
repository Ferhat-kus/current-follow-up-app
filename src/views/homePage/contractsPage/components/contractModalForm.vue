<template>
  <!-- Form -->
  <div class="px-2 flex flex-col items-center">
    <Input label="Başlangıç Tarihi" />
    <Input label="Bitiş Tarihi" />
    <descriptionInput label="İçeriği/Konusu" />
    <fileInput label="Sözleşme dosyası" />
    <Input
      :dropdownShow="true"
      className="rounded-none rounded-r-md"
      label="Sözleşme Bedeli"
    />
    <div
      class="md:flex md:flex-row flex flex-col w-full items-center md:my-3 px-4"
    >
      <div
        class="md:flex md:justify-between w-full justify-center items-center md:my-0 my-7"
      >
        <div class="flex w-2/4">
          <Button
            v-show="reviewButton"
            :img-show="false"
            className="py-2 px-5  bg-opacBlue"
            :src="require('@/assets/icons/plus.svg')"
            to="#"
            title="İncele"
            @button-click="review"
          />
        </div>
        <div class="flex">
          <Button
            :img-show="false"
            className="py-2 px-5 md:mx-4 bg-red"
            :src="require('@/assets/icons/plus.svg')"
            to="#"
            title="İptal"
            @button-click="close"
          />
          <Button
            :img-show="false"
            className="py-2 px-4 "
            :src="require('@/assets/icons/plus.svg')"
            to="#"
            title="kaydet"
            @button-click="save"
          />
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
    fileInput,
  },
  props: {
    reviewButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    review() {
      this.$emit("review");
    },
    close() {
      this.$emit("close");
    },
    save() {
      this.$emit("save");
    },
  },
};
</script>
