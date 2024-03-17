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
            @button-click="openModal('add')"
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
          'telefon no',
          'mail',
          'vergi no',
          'bakiye',
          '',
        ]"
        :bodycolumns="filteredCompanies"
        @row-clicked="detail"
        @detail-clicked="openModal('detail')"
      />
      <!-- models -->
      <customModal :header-title="modalTitle" ref="modalComponent" name="add">
        <template v-slot:form>
          <companiesModal
            :company="company"
            @close="closeModal"
            @save="createCompany"
          />
          <!-- :submitForm="" -->
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
      modalTitle: "",
      companies: [],
      company: {
        companyName: "",
        companyAdress: "",
        phoneNumber: "",
        mail: "",
        taxAdress: "",
        taxNo: "",
      },
    };
  },
  computed: {
    filteredCompanies() {
      return this.companies.map((company) => {
        const {
          bills,
          contract,
          companyAdress,
          taxAdress,
          ...filteredCompany
        } = company;
        return filteredCompany;
      });
    },
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
    async createCompany() {
      try {
        const response = await api().post("/companies", {
          companyName: this.company.companyName,
          companyAdress: this.company.companyAdress,
          phoneNumber: this.company.phoneNumber,
          mail: this.company.mail,
          taxAdress: this.company.taxAdress,
          taxNo: this.company.taxNo,
        });
        // Yeni şirketin ID'sini alabiliriz
        const newCompanyId = response.data.id;

        // Yerel verileri güncelledikten sonra sayfanın yenilenmesi gerekiyorsa:
        this.getCompanies(); // Yerel verileri güncellemek için API'den tüm şirketleri yeniden alır
        this.closeModal(); // Modalı kapatır

        // Kullanıcıya eklenen şirketi göstermek için bir geribildirim sağlayabiliriz
        alert(`Yeni şirket başarıyla eklendi! Şirket ID: ${newCompanyId}`);
      } catch (error) {
        console.error("Şirket ekleme hatası:", error);
      }
    },
    openModal(action) {
      if (action === "add") {
        this.modalTitle = "Firma Ekle";
      } else if (action === "detail") {
        this.modalTitle = "Firma Detayları";
      }
      this.$refs.modalComponent.show("add");
    },
    closeModal() {
      this.$refs.modalComponent.hide("add");
    },
    detail() {
      if (this.$route.path !== "/bills") {
        this.$router.push("/bills");
      }
    },
  },
};
</script>
