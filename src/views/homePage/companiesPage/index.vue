<template>
  <div class="md:p-10">
    <pageTitle title="FİRMALAR" />
    <div class="md:my-6">
      <div
        class="w-full flex md:flex-row flex-col items-center justify-between"
      >
        <div class="md:w-1/12 w-full">
          <Button
            :img-show="true"
            className="flex justify-center py-2 items-center"
            :src="require('@/assets/icons/plus.svg')"
            to="#"
            title="Ekle"
            @button-click="openAddModal"
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
        :show="false"
        :headercolumns="[
          '#',
          'firma adı',
          'Firma Adresi',
          'telefon no',
          'mail',
          'Vergi Adresi',
          'vergi no',
          'bakiye',
          '',
        ]"
        :bodycolumns="companies"
        @row-clicked="detail"
        @detail-clicked="openDetailmodalComponent"
      />
      <!-- models -->
      <customModal header-title="Firma Ekle" ref="modalComponent" name="add">
        <template v-slot:form>
          <companiesModal @close="closeAddModal" />
        </template>
      </customModal>
      <customModal header-title="Firma Detayları" ref="detailmodalComponent" name="detail">
        <template v-slot:form>
          <companiesModal @close="closeDetailmodalComponent" />
        </template>
      </customModal>
    </div>
  </div>
</template>

<script>
import pageTitle from "@/components/pageTitle.vue";
import Button from "@/components/button.vue";
import Input from "@/components/input.vue";
import searchInput from "@/components/searchInput.vue";
import filterButton from "@/components/filterButton/filterButton.vue";
import Table from "@/components/table.vue";
import companiesModal from "./components/companiesModal.vue";
import customModal from "@/components/customModal.vue";
import { api } from "@/networking/AxiosInstance.js";
export default {
  components: {
    companiesModal,
    pageTitle,
    Table,
    Button,
    Input,
    searchInput,
    filterButton,
    customModal,
  },
  data() {
    return {
      // listeleme
      companies: [],
    };
  },
  created() {
    this.getCompanies();
  },
  methods: {
    async getCompanies() {
      try {
        const response = await api().get("/companies");
        this.companies = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    openAddModal() {
      this.$refs.modalComponent.show("add");
    },
    closeAddModal() {
      this.$refs.modalComponent.hide("add");
    },
    openDetailmodalComponent() {
      this.$refs.detailmodalComponent.show("detail");
    },
    closeDetailmodalComponent() {
      this.$refs.detailmodalComponent.hide("detail");
    },
    detail() {
      if (this.$route.path !== "/bills") {
        this.$router.push("/bills"); // bills sayfasına yönlendir
      }
    },

    // updateModal(){
    // data = this.companies,
    // openUpdateModal(data) {
    //   this.$refs.modalComponent.show("update", data);
    //   // }
    // },
  },
};
</script>
