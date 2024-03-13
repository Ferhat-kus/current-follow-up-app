<template>
  <div class="md:p-10">
    <pageTitle title="sözleşmeler" />
    <div class="md:my-6">
      <div
        class="w-full flex md:flex-row flex-col items-center justify-between"
      >
        <div class="md:w-1/12 w-full">
          <Button
            :img-show="true"
            className="py-2"
            :src="require('@/assets/icons/plus.svg')"
            to="#"
            title="Ekle"
            @button-click="openContractModal"
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
          'BAŞLANGIÇ TARİHİ',
          'bitiş tarihi',
          'konusu',
          'sözleşme bedeli',
          '',
        ]"
        :bodycolumns="contract"
        @row-clicked="openContractDetailModal"
        @detail-clicked="openContractDetailModal"
      />
      <customModal
        header-title="Sözleşme Ekle"
        ref="contractModalForms"
        name="contracts"
      >
        <template v-slot:form>
          <contractModalForm @close="closeContractModal" />
        </template>
      </customModal>

      <customModal
        header-title="Sözleşme Detayı"
        ref="contractDetailModalForms"
        name="contractsDetail"
      >
        <template v-slot:form>
          <contractDetailModalForm @close="closeContractDetailModal" />
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
import contractModalForm from "./components/contractModalForm.vue";
import contractDetailModalForm from "./components/contractDetailModalForm.vue";
import customModal from "@/components/customModal.vue";
import { api } from "@/networking/AxiosInstance.js";
export default {
  components: {
    pageTitle,
    Table,
    Button,
    searchInput,
    filterButton,
    customModal,
    contractModalForm,
    contractDetailModalForm,
  },
  data() {
    return {
      contract: [],
    };
  },
  created() {
    this.getContract();
  },
  methods: {
    async getContract() {
      try {
        const response = await api().get("/contract");
        this.contract = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    openContractModal() {
      this.$refs.contractModalForms.show("contracts");
    },
    closeContractModal() {
      this.$refs.contractModalForms.hide("contracts");
    },
    openContractDetailModal() {
      this.$refs.contractDetailModalForms.show("contractsDetail");
    },
    closeContractDetailModal() {
      this.$refs.contractDetailModalForms.hide("contractsDetail");
    },
  },
};
</script>
