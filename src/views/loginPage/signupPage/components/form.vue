<template>
  <form id="form" class="w-full flex flex-col items-center justify-between">
    <div class="flex w-full">
      <div class="w-1/2 mr-2">
        <Input v-model="user.name" label="Adı" />
      </div>
      <div class="w-1/2 ml-2">
        <Input v-model="user.surname" label="Soyadı" />
      </div>
    </div>
    <div class="flex w-full">
      <div class="w-1/2 mr-2">
        <Input v-model="user.userName" label="Kullanıcı Adı" />
      </div>
      <div class="w-1/2 ml-2">
        <Input v-model="user.email" type="email" label="Mail" />
      </div>
    </div>
    <div class="flex w-full">
      <div class="w-1/2 mr-2">
        <Input v-model="user.phoneNumber" type="number" label="Telefon" />
      </div>
      <div class="w-1/2 ml-2">
        <Input v-model="user.task" label="Görevi" />
      </div>
    </div>
    <div class="flex w-full">
      <div class="w-1/2 mr-2">
        <Input v-model="user.password" type="password" label="Şifre" />
      </div>
      <div class="w-1/2 ml-2">
        <Dropdown
          :selectedValue="user.authority"
          label="Yetki"
          @selected-value="updateUserAuthority"
        />
      </div>
    </div>
    <div class="my-3 w-full flex flex-col items-center ">
      <router-link to="/signin" class="underline my-2">Giriş Yap</router-link>
      <div class="w-full">
        <Button
          @button-click="submit"
          :imgShow="false"
          className="py-2"
          to="/setup"
          title="Kayıt Ol"
        />
      </div>
    </div>
  </form>
</template>

<script>
import Button from "@/components/button.vue";
import Input from "@/components/input.vue";
import Dropdown from "@/components/dropdown.vue";

export default {
  props: ["user"],
  components: {
    Input,
    Button,
    Dropdown,
  },
  methods: {
    submit() {
      this.$emit("submit", this.user);
    },
    updateUserAuthority(selectedAuthority) {
      this.user.authority = selectedAuthority;
    },
  },
};
</script>
