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
            @button-click="contractModals"
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
        :bodycolumns="data"
        @row-clicked="contractModalsDetail"
      />
    </div>
    <contractModal
      @changeModalVisibility="(val) => (contractModalVisibility = val)"
      :contractModalVisibility="contractModalVisibility"
    />
    <contractModalDetail
      @changeModalVisibility="(val) => (contractModalDetailVisibility = val)"
      :contractModalDetailVisibility="contractModalDetailVisibility"
    />
  </div>
</template>

<script>
import pageTitle from "@/components/pageTitle.vue";
import Button from "@/components/button.vue";
import searchInput from "@/components/searchInput.vue";
import filterButton from "@/components/filterButton/filterButton.vue";
import Table from "@/components/table.vue";
import contractModal from "./components/contractModal.vue";
import contractModalDetail from "./components/contractModalDetail.vue";
export default {
  components: {
    pageTitle,
    Table,
    Button,
    searchInput,
    filterButton,
    contractModal,
    contractModalDetail
  },
  data() {
    return {
      contractModalDetailVisibility: false,
      contractModalVisibility: false,
      data: [
        {
          id: 1,
          date: "2021/01/01",
          time: "2025/01/01",
          description: "sözleşme...",
          amount: "10.000 TL",
        },
        {
          id: 1,
          date: "2021/01/01",
          time: "2025/01/01",
          description: "sözleşme...",
          amount: "10.000 TL",
        },
        {
          id: 1,
          date: "2021/01/01",
          time: "2025/01/01",
          description: "sözleşme...",
          amount: "10.000 TL",
        },
        {
          id: 1,
          date: "2021/01/01",
          time: "2025/01/01",
          description: "sözleşme...",
          amount: "10.000 TL",
        },
        {
          id: 1,
          date: "2021/01/01",
          time: "2025/01/01",
          description: "sözleşme...",
          amount: "10.000 TL",
        },
        {
          id: 1,
          date: "2021/01/01",
          time: "2025/01/01",
          description: "sözleşme...",
          amount: "10.000 TL",
        },
        {
          id: 1,
          date: "2021/01/01",
          time: "2025/01/01",
          description: "sözleşme...",
          amount: "10.000 TL",
        },
      ],
    };
  },
  methods: {
    contractModals() {
      this.contractModalVisibility = !this.contractModalVisibility;
    },
    contractModalsDetail() {
      this.contractModalDetailVisibility =!this.contractModalDetailVisibility;
    },
  },
};
</script>
