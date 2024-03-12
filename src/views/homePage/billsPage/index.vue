<template>
  <div class="md:p-10">
    <pageTitle title="FATURALAR" />
    <div class="md:my-7">
      <div
        class="w-full flex md:flex-row flex-col items-center justify-between"
      >
        <div class="md:w-3/12 w-full flex">
          <Button
            :img-show="true"
            className="mr-5 py-2"
            :src="require('@/assets/icons/plus.svg')"
            to="#"
            title="ODM Ekle"
          />
          <Button
            :img-show="true"
            imgClass="md:mr-0 mr-5"
            :src="require('@/assets/icons/plus.svg')"
            to="#"
            title="Ekle"
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

export default {
  components: {
    pageTitle,
    Table,
    Button,
    searchInput,
    filterButton,
  },
  data() {
    return {
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
};
</script>
