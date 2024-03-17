<template>
  <div class="px-2 flex w-full flex-col items-center">
    <div class="flex w-full">
      <Input label="Adı" />
      <Input label="Soyadı" />
    </div>
    <div class="flex w-full">
      <Input label="Telefon No" />
      <Input label="Mail" />
    </div>
    <div class="flex w-full">
      <Input label="Kullanıcı Adı" />
      <Input type="password" label="Şifre" />
    </div>
    <div class="flex w-full">
      <Dropdown
        label="Yetki"
        :options="dropdownOptions"
        className="my-dropdown"
      />
      <Input label="Görevi" />

    </div>
    <div
      class="md:flex md:flex-row flex flex-col w-full items-center justify-between md:mt-4 p-2"
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
</template>

<script>
import Button from "@/components/button.vue";
import Input from "@/components/input.vue";
import Dropdown from "@/components/dropdown.vue";
export default {
  components: {
    Input,
    Button,
    Dropdown,
  },
  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      this.$emit("save");
    },
  },
  data() {
    return {
      dropdownOptions: [
        { label: "Kullanıcı", value: "Kullanıcı" },
        { label: "Yönetici", value: "Yönetici" },
        { label: "Kurucu", value: "Kurucu " },
      ],
    };
  },
};
</script>
