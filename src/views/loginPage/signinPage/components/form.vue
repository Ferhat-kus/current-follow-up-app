<template>
  <div>
    <form id="form" class="w-full flex flex-col justify-center">
      <div class="flex flex-col items-center">
        <Input label="Firma Ünvanı" />
        <Input type="password" label="Şifre" />
      </div>
      <div class="my-3 w-full flex flex-col items-center">
        <div class="w-full">
          <Button
            :imgShow="false"
            className="py-2"
            to="/companies"
            title="Giriş Yap"
          />
        </div>
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
