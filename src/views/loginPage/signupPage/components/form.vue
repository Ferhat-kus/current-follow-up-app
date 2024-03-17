<template>
  <div>
    <form id="form" class="w-full flex flex-col justify-between">
      <div class="flex">
        <Input label="Adı" />
        <Input label="Soyadı" />
      </div>
      <div class="flex">
        <Input label="Kullanıcı Adı" />
        <Input type="email" label="Mail" />
      </div>
      <div class="flex">
        <Input type="number" label="Telefon" />
        <Input label="Görevi" />
      </div>
      <div class="flex">
        <Input type="password" label="Şifre" />
        <Input type="password" label="Şifre Tekrar" />
      </div>
      <div class="my-3 w-fullflex flex-col items-center px-2">
        <router-link to="/signin" class="underline my-2">Giriş Yap</router-link>
        <Button :imgShow="false" className="md:w-full flex md:items-center md:justify-center py-2" to="/setuppage" title="Kayıt Ol" />
      </div>
    </form>
  </div>
</template>

<script>
import Button from '@/components/button.vue';
import Input from "@/components/input.vue";
export default {
  components: {
    Input,
    Button
  },
};
</script>

<style lang="scss" scoped></style>
