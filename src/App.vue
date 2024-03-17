<template>
  <div class="flex w-screen">
    <!-- SideBar -->
    <Sidebar :isShow="isShow" @close-sidebar="closeSidebar" />
    <main class="" :class="!isShow ? 'w-full' : 'w-full '">
      <div class="h-[50px] bg-lightBlue flex items-center">
        <div class="flex justify-between w-full">
          <div class="flex items-center space-x-2">
            <div
              class="h-[50px] flex items-center px-4 hover:bg-gray-300 cursor-pointer text-titleTextColor"
              @click="toggleMenu"
            >
              <i
                :class="
                  isShow
                    ? 'bx bx-left-indent text-3xl'
                    : 'bx bx-right-indent text-3xl'
                "
              ></i>
            </div>
            <span class="text-md font-semibold text-titleTextColor"
              >Merhaba Volkan</span
            >
          </div>
        </div>
      </div>
      <div class="p-2 h-[calc(100vh-50px)]">
        <div class="h-full p-1">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar.vue";
export default {
  components: {
    Sidebar,
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
