<template>
  <div class="md:p-10">
    <pageTitle title="FATURALAR" />
    <div class="md:my-5">
      <div
        class="w-full flex md:flex-row flex-col items-center justify-between"
      >
        <div class="md:w-3/12 w-full md:flex">
          <Button
            :img-show="true"
            className="mr-5 py-2"
            :src="require('@/assets/icons/plus.svg')"
            to="#"
            title="ODM Ekle"
            @button-click="openOdmModalComponent"
          />
          <Button
            :img-show="true"
            imgClass="md:mr-0 mr-5"
            :src="require('@/assets/icons/plus.svg')"
            to="#"
            title="Ekle"
            @button-click="openBillsAddModalComponent"
          />
        </div>
        <div class="flex md:flex-row flex-col items-center w-full md:w-2/6">
          <div class="md:mx-5 md:w-2/3 w-full my-1">
            <filterButton minInput="Min - Bakiye" maxInput="Max - Bakiye" />
          </div>
          <div class="w-full my-1">
            <searchInput :src="require('@/assets/icons/search.svg')" />
          </div>
        </div>
      </div>
      <Table
        :headercolumns="[
          '#',
          'fatura tutarı',
          'fatura no',
          'fatura tarihi',
          'ödeme tarihi',
          '',
        ]"
        :bodycolumns="bills"
        @row-clicked="openBillsDetailModalComponent"
        @detail-clicked="openBillsDetailModalComponent"
      />
      <!-- Fatura Ekle -->
      <customModal header-title="Fatura Ekle" ref="modalComponent" name="add">
        <template v-slot:form>
          <billsAddForm @close="closeBillsAddModalComponent" />
        </template>
      </customModal>
      <!-- Fatura Detayı -->
      <customModal
        header-title="Fatura Detayı"
        ref="detailModalComponent"
        name="detail"
      >
        <template v-slot:form>
          <billsDetailForm
            @save="openCancelModalComponent"
            @close="closeBillsDetailModalComponent"
          />
        </template>
      </customModal>
      <!-- İptal Modal -->
      <customModal
        header-title="İptal Nedeni"
        ref="cancelModalComponent"
        name="cancel"
      >
        <template v-slot:form>
          <cancelForm @close="closeCancelModalComponent" />
        </template>
      </customModal>
      <!-- Ödeme Modal -->
      <customModal header-title="Ödeme Ekle" ref="odmModalComponent" name="odm">
        <template v-slot:form>
          <odmAddForm @close="closeOdmModalComponent" />
        </template>
      </customModal>
    </div>
  </div>
</template>

<script>
import pageTitle from "@/components/pageTitle.vue";
import Button from "@/components/button.vue";
import searchInput from "@/components/searchInput.vue";
import filterButton from "@/components/filterButton/filterButton.vue";
import Table from "@/components/table.vue";
import customModal from "@/components/customModal.vue";
import billsAddForm from "./components/billsAddForm.vue";
import odmAddForm from "./components/odmAddForm.vue";
import billsDetailForm from "./components/billsDetailForm.vue";
import cancelForm from "./components/cancelForm.vue";
import { api } from "@/networking/AxiosInstance.js";
export default {
  components: {
    pageTitle,
    Table,
    Button,
    searchInput,
    filterButton,
    customModal,
    billsAddForm,
    odmAddForm,
    billsDetailForm,
    cancelForm,
  },
  data() {
    return {
      bills: [],
    };
  },
  created() {
    this.getBills();
  },
  methods: {
    async getBills() {
      try {
        const response = await api().get("/bills");
        this.bills = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    openBillsAddModalComponent() {
      this.$refs.modalComponent.show("add");
    },
    closeBillsAddModalComponent() {
      this.$refs.modalComponent.hide("add");
    },

    openBillsDetailModalComponent() {
      this.$refs.detailModalComponent.show("detail");
    },
    closeBillsDetailModalComponent() {
      this.$refs.detailModalComponent.hide("detail");
    },

    openOdmModalComponent() {
      this.$refs.odmModalComponent.show("odm");
    },
    closeOdmModalComponent() {
      this.$refs.odmModalComponent.hide("odm");
    },

    openCancelModalComponent() {
      this.$refs.detailModalComponent.hide("detail");
      this.$refs.cancelModalComponent.show("cancel");
    },
    closeCancelModalComponent() {
      this.$refs.detailModalComponent.show("detail");
      this.$refs.cancelModalComponent.hide("cancel");
    },
  },
};
</script>
