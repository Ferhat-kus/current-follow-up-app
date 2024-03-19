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
      isShow: window.innerWidth >= 800 ? this.$store.state.isSidebar : false,
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
    handleResize() {
      this.isShow = window.innerWidth >= 800 ? this.$store.state.isSidebar : false;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
