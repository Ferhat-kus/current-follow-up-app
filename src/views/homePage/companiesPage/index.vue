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
            @button-click="toggleModal"
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
        :bodycolumns="data"
        @row-clicked="detailModals"
      />
      <!-- models -->
      <addModal
        @contractModalVisibility="contractModals"
        @changeModalVisibility="(val) => (modalVisible = val)"
        :modal-visible="modalVisible"
      />
      <detailModal
        @contractModalVisibility="contractModals"
        @changeModalVisibility="(val) => (detailModalVisible = val)"
        :detailModalVisible="detailModalVisible"
      />
      <contractModal
        @changeModalVisibility="(val) => (contractModalVisibility = val)"
        :contractModalVisibility="contractModalVisibility"
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
import addModal from "./components/addModal.vue";
import detailModal from "./components/detailModal.vue";
import contractModal from "@/views/homePage/contractsPage/components/contractModal.vue";
export default {
  components: {
    pageTitle,
    Table,
    Button,
    searchInput,
    filterButton,
    addModal,
    detailModal,
    contractModal,
  },
  data() {
    return {
      contractModalVisibility: false,
      detailModalVisible: false,
      modalVisible: false,
      data: [
        {
          id: 1,
          firmaadi: "Sirius",
          telefonno: "05372700415",
          mail: "55ferhat.kus@gmail.com",
          vergiNo: "123456789101",
          bakiye: "1.000.00",
        },
        {
          id: 2,
          firmaadi: "Sirius",
          telefonno: "05372700415",
          mail: "55ferhat.kus@gmail.com",
          vergiNo: "123456789101",
          bakiye: "1.000.00",
        },
        {
          id: 3,
          firmaadi: "Sirius",
          telefonno: "05372700415",
          mail: "55ferhat.kus@gmail.com",
          vergiNo: "123456789101",
          bakiye: "1.000.00",
        },
        {
          id: 4,
          firmaadi: "Sirius",
          telefonno: "05372700415",
          mail: "55ferhat.kus@gmail.com",
          vergiNo: "123456789101",
          bakiye: "1.000.00",
        },
        {
          id: 5,
          firmaadi: "Sirius",
          telefonno: "05372700415",
          mail: "55ferhat.kus@gmail.com",
          vergiNo: "123456789101",
          bakiye: "1.000.00",
        },
        {
          id: 6,
          firmaadi: "Sirius",
          telefonno: "05372700415",
          mail: "55ferhat.kus@gmail.com",
          vergiNo: "123456789101",
          bakiye: "1.000.00",
        },
        {
          id: 7,
          firmaadi: "Sirius",
          telefonno: "05372700415",
          mail: "55ferhat.kus@gmail.com",
          vergiNo: "123456789101",
          bakiye: "1.000.00",
        },
        {
          id: 8,
          firmaadi: "Sirius",
          telefonno: "05372700415",
          mail: "55ferhat.kus@gmail.com",
          vergiNo: "123456789101",
          bakiye: "1.000.00",
        },
        {
          id: 9,
          firmaadi: "Sirius",
          telefonno: "05372700415",
          mail: "55ferhat.kus@gmail.com",
          vergiNo: "123456789101",
          bakiye: "1.000.00",
        },
        {
          id: 10,
          firmaadi: "Sirius",
          telefonno: "05372700415",
          mail: "55ferhat.kus@gmail.com",
          vergiNo: "123456789101",
          bakiye: "1.000.00",
        },
        {
          id: 11,
          firmaadi: "Sirius",
          telefonno: "05372700415",
          mail: "55ferhat.kus@gmail.com",
          vergiNo: "123456789101",
          bakiye: "1.000.00",
        },
        {
          id: 12,
          firmaadi: "Sirius",
          telefonno: "05372700415",
          mail: "55ferhat.kus@gmail.com",
          vergiNo: "123456789101",
          bakiye: "1.000.00",
        },
      ],
    };
  },
  methods: {
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    },
    detailModals() {
      this.detailModalVisible = !this.detailModalVisible;
    },
    contractModals() {
      this.contractModalVisibility = !this.contractModalVisibility;
    },
  },
};
</script>
