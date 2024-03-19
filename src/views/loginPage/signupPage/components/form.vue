<template>
  <div>
    <form id="form" class="w-full flex flex-col justify-between">
      <div class="flex">
        <Input v-model="user.name" label="Adı" />
        <Input v-model="user.surname" label="Soyadı" />
      </div>
      <div class="flex">
        <Input v-model="user.userName" label="Kullanıcı Adı" />
        <Input v-model="user.email" type="email" label="Mail" />
      </div>
      <div class="flex">
        <Input v-model="user.phoneNumber" type="number" label="Telefon" />
        <Input v-model="user.task" label="Görevi" />
      </div>
      <div class="flex">
          <Input v-model="user.password" type="password" label="Şifre" />
        <div class="flex w-full ">
          <Dropdown :selectedValue="user.authority" label="Yetki" @selected-value="updateUserAuthority" />
        </div>
      </div>
      <div class="my-3 w-fullflex flex-col items-center px-2">
        <router-link to="/signin" class="underline my-2">Giriş Yap</router-link>
        <Button
          @button-click="submit"
          :imgShow="false"
          className="md:w-full flex md:items-center md:justify-center py-2"
          to="/setup"
          title="Kayıt Ol"
        />
      </div>
    </form>
  </div>
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
