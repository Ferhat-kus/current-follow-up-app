<template>
  <div class="flex w-screen">
    <Sidebar :isShow="isShow" @close-sidebar="closeSidebar" />
    <Navbar :isShow="isShow" @toggleMenu="toggleMenu">
      <template v-slot:routerView>
        <router-view />
      </template>
    </Navbar>
  </div>
</template>

<script>
import Sidebar from "@/partitions/sidebar.vue";
import Navbar from "@/partitions/navbar.vue";
export default {
  components: {
    Sidebar,
    Navbar,
  },
  data() {
    return {
      isShow: this.$store.state.isSidebar,
    };
  },
  methods: {
    toggleMenu() {
      this.isShow = !this.isShow;
      console.log(this.$store.state.isSidebar);
    },
    closeSidebar() {
      this.isShow = false;
    },
  },
  created() {
    console.log(this.$store.state.isSidebar);
  },
};
</script>
