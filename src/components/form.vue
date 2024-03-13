<template>
  <div>
    <div class="flex">
      <Input label="Firma Ünvanı" />
      <Input label="Firma Adresi" />
    </div>
    <div class="flex">
      <Input label="Vergi Dairesi" />
      <Input label="Vergi No" />
    </div>
    <div class="flex">
      <Input label="Telefon No" />
      <Input label="Mail" />
    </div>
    <div class="flex justify-end pr-4">
      <Button
        :img-show="false"
        className="py-2 px-4"
        :src="require('@/assets/icons/plus.svg')"
        :to="to"
        title="kaydet"
      />
    </div>
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
  props:{
    to: String,
  
  }
};
</script>
