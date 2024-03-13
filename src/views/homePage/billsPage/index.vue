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
            @button-click="odmModalVisible"
          />
          <Button
            :img-show="true"
            imgClass="md:mr-0 mr-5"
            :src="require('@/assets/icons/plus.svg')"
            to="#"
            title="Ekle"
            @button-click="AddmodalVisibility"
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
        :bodycolumns="data"
        @row-clicked="modalVisibility"
      />
      <billsAdd @modalVisible="AddmodalVisibility" :modalVisible="Addmodal" />
      <billsDetail
        @cancelModalVisible="cancelModal"
        @modalVisible="modalVisibility"
        :modalVisible="modalVisible"
      />

      <odmAdd
        @cancelmodalVisible="cancelModal"
        @modalVisible="odmModalVisible"
        :odmModalVisible="odmModal"
      />
      <cancelModal
        @modalVisible="(val) => (cancelModalVisible = val)"
        :cancelModalVisible="cancelModalVisible"
      />
    </div>
  </div>
</template>

<script>
import pageTitle from "@/components/pageTitle.vue";
import Button from "@/components/button.vue";
import searchInput from "@/components/searchInput.vue";
import filterButton from "@/components/filterButton/filterButton.vue";
import Table from "@/components/table.vue";
import billsDetail from "./components/billsDetail.vue";
import billsAdd from "./components/billsAdd.vue";
import cancelModal from "./components/cancelModal.vue";
import odmAdd from "./components/odmAdd.vue";
export default {
  components: {
    pageTitle,
    Table,
    Button,
    searchInput,
    filterButton,
    billsDetail,
    billsAdd,
    cancelModal,
    odmAdd,
  },
  data() {
    return {
      modalVisible: false,
      cancelModalVisible: false,
      Addmodal: false,
      odmModal: false,
      data: [
        {
          id: 1,
          faturaTutar: "1.000.00 TL",
          faturaNo: "123456789",
          faturaTarihi: "2021/01/01",
          odemeTarihi: "2021/01/01",
        },
        {
          id: 1,
          faturaTutar: "1.000.00 TL",
          faturaNo: "123456789",
          faturaTarihi: "2021/01/01",
          odemeTarihi: "2021/01/01",
        },
        {
          id: 1,
          faturaTutar: "1.000.00 TL",
          faturaNo: "123456789",
          faturaTarihi: "2021/01/01",
          odemeTarihi: "2021/01/01",
        },
        {
          id: 1,
          faturaTutar: "1.000.00 TL",
          faturaNo: "123456789",
          faturaTarihi: "2021/01/01",
          odemeTarihi: "2021/01/01",
        },
        {
          id: 1,
          faturaTutar: "1.000.00 TL",
          faturaNo: "123456789",
          faturaTarihi: "2021/01/01",
          odemeTarihi: "2021/01/01",
        },
        {
          id: 1,
          faturaTutar: "1.000.00 TL",
          faturaNo: "123456789",
          faturaTarihi: "2021/01/01",
          odemeTarihi: "2021/01/01",
        },
        {
          id: 1,
          faturaTutar: "1.000.00 TL",
          faturaNo: "123456789",
          faturaTarihi: "2021/01/01",
          odemeTarihi: "2021/01/01",
        },
        {
          id: 1,
          faturaTutar: "1.000.00 TL",
          faturaNo: "123456789",
          faturaTarihi: "2021/01/01",
          odemeTarihi: "2021/01/01",
        },
      ],
    };
  },
  methods: {
    modalVisibility() {
      this.modalVisible = !this.modalVisible;
    },
    AddmodalVisibility() {
      this.Addmodal = !this.Addmodal;
    },
    cancelModal() {
      this.cancelModalVisible = !this.cancelModalVisible;
    },
    odmModalVisible() {
      this.odmModal = !this.odmModal;
    },
  },
};
</script>
