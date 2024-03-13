<template>
  <div class="md:p-10">
    <pageTitle title="Kullanıcılar" />
    <div class="md:my-6">
      <div
        class="w-full flex md:flex-row flex-col items-center justify-between"
      >
        <div class="md:w-1/12 w-full">
          <Button
            :img-show="true"
            :src="require('@/assets/icons/plus.svg')"
            to="#"
            title="Ekle"
            className="py-2"
            @button-click="userAddModal"
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
        :show="true"
        :headercolumns="[
          '#',
          'adı soyadı',
          'mail',
          'kullanıcı adı',
          'tel. no.',
          'görevi',
          'Yetki',
          '',
          '',
        ]"
        :bodycolumns="data"
      />
      <userAdd
      @changeModalVisibility="userAddModalVisible"
        :userModalVisibility="userAddModalVisible"
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
import userAdd from "./components/userAdd.vue";
export default {
  components: {
    pageTitle,
    Table,
    Button,
    searchInput,
    filterButton,
    userAdd,
  },
  data() {
    return {
      userAddModalVisible: false,
      data: [
        {
          id: 1,
          name: "Ferhat Kuş",
          email: "hzdkv@example.com",
          username: "ferhatkus",
          telno: "05372700415",
          role: "Muhasebe",
          authority: "Yöneticix",
        },
        {
          id: 2,
          name: "Ferhat Kuş",
          email: "hzdkv@example.com",
          username: "ferhatkus",
          telno: "05372700415",
          role: "Muhasebe",
          authority: "Yöneticix",
        },
        {
          id: 3,
          name: "Ferhat Kuş",
          email: "hzdkv@example.com",
          username: "ferhatkus",
          telno: "05372700415",
          role: "Muhasebe",
          authority: "Yöneticix",
        },
        {
          id: 4,
          name: "Ferhat Kuş",
          email: "hzdkv@example.com",
          username: "ferhatkus",
          telno: "05372700415",
          role: "Muhasebe",
          authority: "Yöneticix",
        },
        {
          id: 5,
          name: "Ferhat Kuş",
          email: "hzdkv@example.com",
          username: "ferhatkus",
          telno: "05372700415",
          role: "Muhasebe",
          authority: "Yöneticix",
        },
        {
          id: 6,
          name: "Ferhat Kuş",
          email: "hzdkv@example.com",
          username: "ferhatkus",
          telno: "05372700415",
          role: "Muhasebe",
          authority: "Yöneticix",
        },
        {
          id: 7,
          name: "Ferhat Kuş",
          email: "hzdkv@example.com",
          username: "ferhatkus",
          telno: "05372700415",
          role: "Muhasebe",
          authority: "Yöneticix",
        },
      ],
    };
  },
  methods: {
    userAddModal() {
      this.userAddModalVisible = !this.userAddModalVisible;
    },
  },
};
</script>
