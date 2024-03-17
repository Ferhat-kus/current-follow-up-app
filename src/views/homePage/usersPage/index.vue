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
            @button-click="openUserAddModal('add')"
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
        :bodycolumns="users"
        @row-clicked="openUserAddModal('detail')"
        @detail-clicked="openUserAddModal('detail')"
      />
      <customModal
        :header-title="modalTitle"
        ref="usersAddModal"
        name="user"
      >
        <template v-slot:form>
          <userForm @close="closeUserAddModal" />
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
import userForm from "./components/userForm.vue";
import { api } from "@/networking/AxiosInstance.js";
export default {
  components: {
    pageTitle,
    Table,
    Button,
    searchInput,
    filterButton,
    customModal,
    userForm,
  },
  data() {
    return {
      users: [],
      modalTitle: "Kullanıcı Ekle", // Default modal title
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const response = await api().get("/users");
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    openUserAddModal(action) {
      if (action === "add") {
        this.modalTitle = "Kullanıcı Ekle";
      } else if (action === "detail") {
        this.modalTitle = "Kullanıcı Detayları";
      }
      this.$refs.usersAddModal.show("user");
    },
    closeUserAddModal() {
      this.$refs.usersAddModal.hide("user");
    },
  },
};
</script>
