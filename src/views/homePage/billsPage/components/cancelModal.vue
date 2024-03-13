<template>
  <div
    v-show="cancelModalVisible"
    class="flex justify-center items-center absolute z-50 top-0 left-0 w-full h-full bg-slate-300 bg-opacity-50"
  >
    <div @click.stop class="bg-white md:w-4/12 w-full h-full md:h-2/5  rounded-md">
      <!-- Header -->
      <div
        class="bg-darkBlue py-3 px-4 rounded-t-md flex items-center justify-between"
      >
        <div class="text-titleTextColor font-semibold">İptal Nedeni</div>
        <div @click="closeModal">
          <img src="@/assets/icons/close.svg" alt="" />
        </div>
      </div>
      <!-- Form -->
      <div class="px-2 flex flex-col justify-center ">
        <div class="flex flex-col items-center my-3">
          <descriptionInput label="Açıklama" />
        </div>
        <div class="flex items-center justify-end ">
          <div
            class="flex w-full justify-end px-7 md:justify-end items-center"
          >
            <Button
              :img-show="false"
              className="py-2 px-5 bg-red"
              :src="require('@/assets/icons/plus.svg')"
              to="#"
              title="İptal Et"
            />
            <Button
              :img-show="false"
              className="py-2 px-5 mx-2"
              :src="require('@/assets/icons/plus.svg')"
              to="#"
              title="Kapat"
              @button-click="closeModal"
            />
          </div>
        </div>
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
  props: {
    cancelModalVisible: {
      type: Boolean,
    },
  },
  methods: {
    closeModal() {
      this.$emit("modalVisible", false); // modalVisible prop'unu false olarak güncelle
    },
  },
};
</script>
