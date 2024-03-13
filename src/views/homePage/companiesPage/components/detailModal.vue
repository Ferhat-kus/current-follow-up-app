<template>
  <div
    v-show="detailModalVisible"
    @click="closeModal"
    class="flex justify-center items-center absolute z-50 top-0 left-0 w-full h-full bg-slate-300 bg-opacity-50"
  >
    <div
      @click.stop
      class="bg-white md:w-4/12 w-full md:h-3/6 min-w-96 h-full rounded-md"
    >
      <!-- Header -->
      <div
        class="bg-darkBlue py-3 px-4 rounded-t-md flex items-center justify-between"
      >
        <div class="text-titleTextColor font-semibold">Firma Detayı</div>
        <div @click="closeModal">
          <img src="@/assets/icons/close.svg" alt="" />
        </div>
      </div>
      <!-- Form -->
      <div class="px-2 flex flex-col md:my-0 my-3">
        <div class="flex md:my-0 my-2">
          <Input label="Firma Ünvanı" />
          <Input label="Firma Adresi" />
        </div>
        <div class="flex md:my-0 my-2">
          <Input label="Telefon No" />
          <Input label="Mail" />
        </div>
        <div class="flex md:my-0 my-2">
          <Input label="Vergi Adresi" />
          <Input label="Vergi No" />
        </div>
        <div
          class="md:flex md:flex-row flex flex-col w-full items-center justify-between md:mt-4 px-2"
        >
          <div class="md:w-5/12 w-full md:my-0 my-3">
            <Button
              :img-show="false"
              className="py-2 px-5 whitespace-nowrap bg-opacBlue"
              :src="require('@/assets/icons/plus.svg')"
              to="#"
              title="Sözleşme Ekle"
              @button-click="contractModal"
            />
          </div>
          <div
            class="md:flex md:justify-end w-full justify-center items-center"
          >
            <div class="md:my-0 my-3">
              <Button
                :img-show="false"
                className="py-2 px-5 md:mx-4 bg-red"
                :src="require('@/assets/icons/plus.svg')"
                to="#"
                title="İptal"
                @button-click="closeModal"
              />
            </div>
            <div class="md:my-0 my-3">
              <Button
                :img-show="false"
                className="py-2 px-4 "
                :src="require('@/assets/icons/plus.svg')"
                to="#"
                title="kaydet"
              />
            </div>
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
    detailModalVisible: {
      type: Boolean,
    },
  },
  methods: {
    closeModal() {
      this.$emit("changeModalVisibility", false);
    },
    contractModal() {
      this.$emit("contractModalVisibility", false);
    },
  },
};
</script>
