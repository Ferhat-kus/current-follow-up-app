<template>
  <div>
    <form id="form" class="w-full flex flex-col justify-center">
      <div class="flex flex-col items-center">
        <Input label="Firma Ünvanı" />
        <Input label="Şifre" />
      </div>
      <div class="my-3 w-fullflex flex-col items-center px-9">
        <Button :imgShow="false" className="md:w-full flex md:items-center md:justify-center py-2" to="/companies" title="Giriş Yap" />
        <router-link to="/" class="underline my-2"> Kayıt Ol </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Button from "@/components/button.vue";
import Input from "@/components/input.vue";
export default {
  components: {
    Input,
    Button,
  },
};
</script>
