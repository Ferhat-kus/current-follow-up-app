<template>
  <div class="px-4 flex w-full flex-col items-center">
    <div class="flex w-full">
      <div class="w-1/2 mr-2">
        <Input label="Adı" />
      </div>
      <div class="w-1/2 ml-2">
        <Input label="Soyadı" />
      </div>
    </div>
    <div class="flex w-full">
      <div class="w-1/2 mr-2">
        <Input label="Telefon No" />
      </div>
      <div class="w-1/2 ml-2">
        <Input label="Mail" />
      </div>
    </div>
    <div class="flex w-full">
      <div class="w-1/2 mr-2">
        <Input label="Kullanıcı Adı" />
      </div>
      <div class="w-1/2 ml-2">
        <Input type="password" label="Şifre" />
      </div>
    </div>
    <div class="flex w-full">
      <div class="w-1/2 mr-2">
        <Dropdown label="Yetki" />
      </div>
      <div class="w-1/2 ml-2">
        <Input label="Görevi" />
      </div>
    </div>
    <div class="md:flex md:flex-row flex flex-col w-full items-center justify-between md:mt-4 ">
      <div class="md:flex md:justify-end w-full justify-center items-center md:my-0 my-7">
        <Button :img-show="false" className="py-2 px-4 " :src="require('@/assets/icons/plus.svg')" to="#" title="kaydet" @button-click="save" />
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
    return {};
  },
};
</script>

<style></style>
