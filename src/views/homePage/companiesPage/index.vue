<template>
  <div class="md:p-10">
    <pageTitle title="FİRMALAR" />
    <div class="md:my-7">
      <div
        class="w-full flex md:flex-row flex-col items-center justify-between"
      >
        <div class="md:w-1/12 w-full md:my-0 my-2">
          <Button
            :img-show="true"
            className="flex justify-center py-2 items-center"
            :src="require('@/assets/icons/plus.svg')"
            to="#"
            title="Ekle"
            @button-click="openModal('add')"
          />
        </div>
        <div class="flex md:flex-row flex-col items-center justify-between w-full md:w-6/12">
          <div class="md:mx-2 md:w-2/4 w-full my-1">
            <filterButton minInput="Min - Bakiye" maxInput="Max - Bakiye" />
          </div>
          <div class="w-full my-1">
            <searchInput />
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
            @contractAdd="openModal('contract')"
            @save="save"
          />
        </template>
      </customModal>
      <customModal
        :header-title="modalTitle"
        ref="contractModalComponent"
        name="contractAdd"
      >
        <template v-slot:form>
          <contractModalForm />
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
import contractModalForm from "../contractsPage/components/contractModalForm.vue";
import { api } from "@/plugins/AxiosInstance.js";
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
    contractModalForm,
  },
  data() {
    return {
      modalTitle: "",
      save: "",
      companies: [],
      company: {
        companyName: "",
        companyAdress: "",
        phoneNumber: "",
        mail: "",
        taxAdress: "",
        taxNo: "",
        balance: "",
      },
    };
  },
  computed: {
    filteredCompanies() {
      return this.companies.map((company) => {
        const {
          companyAdress,
          taxAdress,
          bills,
          contract,
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
    
    // Listeleme
    async getCompanies() {
      try {
        const response = await api().get("/conpanies");
        this.companies = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    // Oluşturma
    async createCompany() {
      try {
        const response = await api().post("/companies", {
          companyName: this.company.companyName,
          companyAdress: this.company.companyAdress,
          phoneNumber: this.company.phoneNumber,
          mail: this.company.mail,
          taxAdress: this.company.taxAdress,
          taxNo: this.company.taxNo,
          balance: this.company.balance || "Henüz bakiye Yok",
        });
        const newCompanyId = response.data.id;
        this.getCompanies();
        this.closeModal();

        // alert(`Yeni şirket başarıyla eklendi! Şirket ID: ${newCompanyId}`);
      } catch (error) {
        console.error("Şirket ekleme hatası:", error);
      }
    },
    // secilen firmanın bilgilerini getirme
    async getSelectedCompanies() {
      const { id } = this.$route.params;
      try {
        const response = await api().get(`${"/companies"}/${id}`);
        this.company = response.data;
      } catch (error) {
        console.error("Error:", error);
      }
    },
    // getirilen firma bilgilerini güncel olrak gönderme
    async updateCompany() {
      const { id } = this.$route.params;
      try {
        await api().put(`${"/companies"}/${id}`, {
          companyName: this.company.companyName,
          companyAdress: this.company.companyAdress,
          phoneNumber: this.company.phoneNumber,
          mail: this.company.mail,
          taxAdress: this.company.taxAdress,
          taxNo: this.company.taxNo,
          balance: this.company.balance || "Henüz bakiye Yok",
        });
        this.getCompanies();
        this.closeModal();
      } catch (error) {
        console.error("Error:", error);
        // Hata durumunda gerekli işlemleri yapabilirsiniz.
      }
    },
    openModal(action) {
      if (action === "add") {
        this.save = this.createCompany;
        this.modalTitle = "Firma Ekle";
      } else if (action === "detail") {
        this.save = this.updateCompany;
        this.modalTitle = "Firma Detayları";
      } else if (action === "contract") {
        this.$refs.contractModalComponent.show("contractAdd");
        this.modalTitle = "Sözleşme Ekle";
      }
      this.$refs.modalComponent.show("add");
    },
    closeModal() {
      this.$refs.modalComponent.hide("add");
      this.$refs.contractModalComponent.hide("contract");
    },
    detail() {
      if (this.$route.path !== "/bills") {
        this.$router.push("/bills");
      }
    },
  },
};
</script>
