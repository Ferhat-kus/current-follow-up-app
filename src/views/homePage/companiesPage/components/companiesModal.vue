<template>
  <form @submit.prevent="submitForm" class="px-2 flex flex-col md:my-0 my-3">
    <div class="flex md:my-0 my-2">
      <Input v-model="company.companyName" label="Firma Ünvanı" />
      <Input v-model="company.companyAdress" label="Firma Adresi" />
    </div>
    <div class="flex md:my-0 my-2">
      <Input v-model="company.phoneNumber" label="Telefon No" />
      <Input v-model="company.mail" label="Mail" />
    </div>
    <div class="flex md:my-0 my-2">
      <Input v-model="company.taxAdress" label="Vergi Adresi" />
      <Input v-model="company.taxNo" label="Vergi No" />
    </div>
    <div
      class="md:flex md:flex-row flex flex-col w-full items-center justify-between md:my-2 px-2"
    >
      <div class="md:w-5/12 w-full md:my-0 my-3">
        <Button
          :img-show="false"
          className="py-2 px-5 whitespace-nowrap bg-opacBlue"
          :src="require('@/assets/icons/plus.svg')"
          to="#"
          title="Sözleşme Ekle"
          @click="contractAdd"
        />
      </div>
      <div class="md:flex md:justify-end w-full justify-center items-center">
        <!-- <Button
          :img-show="false"
          className="py-2 px-5 md:my-0 my-3 md:mx-4 bg-red"
          :src="require('@/assets/icons/plus.svg')"
          to="#"
          title="İptal"
          @button-click="close"
        /> -->
        <Button
          buttontype="submit"
          :img-show="false"
          className="py-2 md:my-0 my-3 px-4 "
          :src="require('@/assets/icons/plus.svg')"
          to="#"
          title="kaydet"
          @button-click="save"
          />
      </div>
    </div>
  </form>
</template>

<script>
import Button from "@/components/button.vue";
import Input from "@/components/input.vue";

export default {
  props: ["company", "submitForm"],
  components: {
    Button,
    Input,
  },
  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      this.$emit("save");
    },
    contractAdd() {
      this.$emit("contractAdd");
    },
  },
};
</script>
