<template>
  <form class="flex flex-col w-full">
    <div class="flex w-full md:flex-row flex-col items-center justify-center">
      <div class="md:w-1/2 w-full md:mr-2">
        <Input v-model="myCompany.companyName" placeholder="Sirius" label="Firma Ünvanı" />
      </div>
      <div class="md:w-1/2 w-full md:ml-2">
        <Input v-model="myCompany.companyAdress" placeholder="barbaros hayrettin paşa mahallesi" label="Firma Adresi" />
      </div>
    </div>
    <div class="flex md:flex-row flex-col items-center justify-center">
      <div class="md:w-1/2 w-full md:mr-2">
        <Input v-model="myCompany.taxAdress" placeholder="Esenyurt" label="Vergi Dairesi" />
      </div>
      <div class="md:w-1/2 w-full md:ml-2">
        <Input v-model="myCompany.taxNo" placeholder="123456" label="Vergi No" />
      </div>
    </div>
    <div class="flex md:flex-row flex-col items-center justify-center">
      <div class="md:w-1/2 w-full md:mr-2">
        <Input v-model="myCompany.phoneNumber" placeholder="05555555555" label="Telefon No" />
      </div>
      <div class="md:w-1/2 w-full md:ml-2">
        <Input v-model="myCompany.email" placeholder="siriustedarik6654@gmail.com" label="Mail" />
      </div>
    </div>
    <div class="my-4 w-full flex items-center md:justify-end justify-center">
      <div class="w-full md:w-auto md:justify-end  pr-0">
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
  props: ['to', 'myCompany'],
  methods: {
    submit() {
      this.$emit("submit", this.myCompany);
    },
  },
};
</script>
