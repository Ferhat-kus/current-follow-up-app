<template>
  <div class="flex flex-col my-1">
    <!-- tablo -->
    <div class="md:overflow-x-auto">
      <div class="w-full inline-block align-middle">
        <div
          class="md:overflow-y-auto md:overflow-x-auto md:h-[351px] h-80 overflow-scroll border-darkBlue border-2 rounded-lg"
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
              <tr v-if="displayedItems.length === 0">
                <td
                  colspan="100"
                  class="text-base pt-14 whitespace-nowrap font-semibold text-center items-center justify-center w-full h-full"
                >
                  Listelenecek öğe yok
                </td>
              </tr>
              <tr v-for="(items, index) in displayedItems" :key="index">
                <th
                  @click="onRowClicked"
                  scope="col"
                  class="px-6  py-3 text-xs whitespace-nowrap font-semibold text-left text-textColor border-b border-darkBlue"
                  v-for="(item, index) in items"
                  :key="index"
                >
                  {{ item }}
                </th>
                <th
                  class="py-3 px-6 text-xs  whitespace-nowrap font-semibold text-left text-textColor border-b border-darkBlue"
                >
                  <div class="flex items-center justify-around">
                    <div @click="detailClicked">
                      <img class="w-5" src="@/assets/icons/edit.svg" alt="" />
                    </div>
                    <div @click="deleteClicked" v-show="show">
                      <img class="w-4" src="@/assets/icons/trash.svg" alt="" />
                    </div>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Sayfa sayısı ve pagination -->
    <div class="flex justify-between mt-2">
      <div v-if="totalPages > 0">Toplam {{ totalPages }} sayfa var</div>
      <div v-if="totalPages === 0">Öge yok</div>
      <div class="flex">
        <button
          @click="goToPreviousPage"
          :disabled="currentPage === 1"
          class="px-3 py-1 rounded-l-md text-white bg-opacBlue hover:text-white"
        >
          <img src="@/assets/icons/leftarrow.svg" alt="" />
        </button>
        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          @click="setCurrentPage(pageNumber)"
          :class="{ 'bg-darkBlue text-white': pageNumber === currentPage }"
          class="px-3 py-1 bg-[#7d85c5] hover:bg-darkBlue text-white"
        >
          {{ pageNumber }}
        </button>
        <button
          @click="goToNextPage"
          :disabled="currentPage === totalPages"
          class="px-3 py-1 rounded-r-md bg-opacBlue hover:text-white"
        >
          <img src="@/assets/icons/rightarrow.svg" alt="" />
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
    onRowClicked(companyId) {
      this.$emit("row-clicked", companyId);
    },
    detailClicked(companyId) {
      this.$emit("detail-clicked", companyId);
    },
    deleteClicked() {
      this.$emit("delete-clicked");
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
