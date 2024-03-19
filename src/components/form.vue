<template>
  <form class="flex flex-col relative z-50">
    <div class="md:flex items-center justify-center">
      <Input v-model="myCompany.companyName" label="Firma Ünvanı" />
      <Input v-model="myCompany.companyAdress" label="Firma Adresi" />
    </div>
    <div class="md:flex">
      <Input v-model="myCompany.taxAdress" label="Vergi Dairesi" />
      <Input v-model="myCompany.taxNo" label="Vergi No" />
    </div>
    <div class="md:flex">
      <Input v-model="myCompany.phoneNumber" label="Telefon No" />
      <Input v-model="myCompany.email" label="Mail" />
    </div>
    <div class="md:pr-0 pr-6 my-4 pl-2 w-full flex items-center justify-end">
      <div class="w-full md:w-auto justify-end md:pr-2">
        <Button
          :img-show="false"
          className="py-2 px-4"
          :src="require('@/assets/icons/plus.svg')"
          :to="to"
          title="kaydet"
          @button-click="submit"
        />
      </div>
    </div>
  </form>
</template>

<script>
import Button from "@/components/button.vue";
import Input from "@/components/input.vue";
export default {
  components: {
    Input,
    Button,
  },
  props:['to', 'myCompany',],
  methods:{
    submit() {
      this.$emit("submit", this.myCompany);
    },
  }
};
</script>
