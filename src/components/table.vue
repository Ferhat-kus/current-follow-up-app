<template>
  <div class="flex flex-col my-3">
    <!-- tablo -->
    <div class="md:overflow-x-auto">
      <div class="w-full inline-block align-middle">
        <div
          class="md:overflow-y-scroll md:overflow-x-hidden md:h-[351px] h-80 overflow-scroll border-darkBlue border-2 rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <!-- Tablo başlığı -->
            <thead class="bg-darkBlue sticky top-0">
              <tr>
                <th
                  v-for="(column, index) in headercolumns"
                  :key="index"
                  scope="col"
                  class="px-6 whitespace-nowrap py-4 text-xs font-bold text-left text-titleTextColor uppercase"
                >
                  {{ column }}
                </th>
              </tr>
            </thead>
            <!-- Tablo içeriği -->
            <tbody class="divide-y divide-gray-200 cursor-pointer">
              <tr
                @click="onRowClicked"
                v-for="(items, index) in displayedItems"
                :key="index"
              >
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-semibold text-left text-textColor border-b border-darkBlue"
                  v-for="(item, index) in items"
                  :key="index"
                >
                  {{ item }}
                </th>
                <th class="border-b border-darkBlue">
                  <img class="w-5" src="@/assets/icons/edit.svg" alt="" />
                </th>
                <th v-show="show" class="border-b border-darkBlue">
                  <img class="w-5" src="@/assets/icons/trash.svg" alt="" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Sayfa sayısı ve pagination -->
    <div class="flex justify-between mt-4">
      <div>Toplam {{ totalPages }} sayfa var</div>
      <div class="flex ">
        <button
          @click="goToPreviousPage"
          :disabled="currentPage === 1"
          class="px-3 py-1 rounded-l-md border text-white  border-[#7d85c5] bg-[#7d85c5] hover:text-white"
        >
        <img src="@/assets/icons/leftarrow.svg" alt="">
        </button>
        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          @click="setCurrentPage(pageNumber)"
          :class="{ 'bg-darkBlue text-white': pageNumber === currentPage }"
          class="px-3 py-1 border bg-[#7d85c5] border-[#7d85c5] hover:bg-darkBlue hover:border-darkBlue text-white"
        >
          {{ pageNumber }}
        </button>
        <button
          @click="goToNextPage"
          :disabled="currentPage === totalPages"
          class="px-3 py-1 rounded-r-md border border-[#7d85c5] bg-[#7d85c5] hover:text-white"
        >
          <img src="@/assets/icons/rightarrow.svg" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headercolumns: {
      type: Array,
    },
    bodycolumns: {
      type: Array,
    },
    show: {
      type: Boolean,
    },
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10, // Her sayfadaki öğe sayısı
      List: [],
    };
  },
  async created() {
    await this.updateDisplayedItems();
  },
  watch: {
    async bodycolumns(val) {
      await this.updateDisplayedItems();
    },
  },
  computed: {
    // Toplam sayfa sayısını hesaplar
    totalPages() {
      return Math.ceil(this.List.length / this.pageSize);
    },
    // Sayfada görüntülenen öğeleri filtreler
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.List.slice(startIndex, endIndex);
    },
  },
  methods: {
    onRowClicked() {
      this.$emit("row-clicked");
    },
    // Sayfayı değiştirir
    setCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    // Sayfa içeriğini günceller
    async updateDisplayedItems() {
      const data = await this.bodycolumns.map((item) => Object.values(item));
      this.List = data;
    },
    // Bir sonraki sayfaya git
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    // Bir önceki sayfaya git
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>
