<template>
      <div class="px-2 flex flex-col justify-center ">
        <div class="flex flex-col items-center my-3">
          <descriptionInput label="Açıklama" />
        </div>
        <div class="flex items-center justify-end ">
          <div
            class="flex w-full justify-end px-5 my-2 md:justify-end items-center"
          >
            <Button
              :img-show="false"
              className="py-2 px-5 bg-red"
              :src="require('@/assets/icons/plus.svg')"
              to="#"
              title="İptal Et"
              @button-click="save"
            />
            <!-- <Button
              :img-show="false"
              className="py-2 px-5 mx-2"
              :src="require('@/assets/icons/plus.svg')"
              to="#"
              title="Geri"
              @button-click="close"
            /> -->
          </div>
        </div>
      </div>
</template>

<script>
import Button from "@/components/button.vue";
import Input from "@/components/input.vue";
import descriptionInput from "@/components/descriptionInput.vue";

export default {
  components: {
    Input,
    Button,
    descriptionInput,
  },
  methods: {
    close() {
      this.$emit("close"); 
    },
    save(){
      this.$emit("save");
    }
  },
};
</script>
