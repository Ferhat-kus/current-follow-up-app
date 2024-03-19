<template>
  <div class="md:p-10">
    <Form @submit="createMyCompany" :myCompany="myCompany" to="/settings" />
  </div>
</template>

<script>
import Button from "@/components/button.vue";
import Form from "@/components/form.vue";
import router from "@/router";
import { api } from "@/plugins/AxiosInstance";

export default {
  components: {
    Button,
    Form,
  },
  data() {
    return {
      myCompany: {
        companyName: "",
        companyAdress: "",
        taxAdress: "",
        taxNo: "",
        phoneNumber: "",
        email: "",
      },
    };
  },
  created() {
    console.log("iddddddd", this.$route.params);
  },
  methods: {
    // async createMyCompany() {
    //   const { id } = this.$route.params;

    //   try {
    //     const response = await api().post(`${"/founder"}/${id}`, {
    //       founderCompany: [
    //         ...(response.data.founderCompany || []), // Önceki öğeleri kopyalayarak yeni öğe ekleyin
    //         {
    //           companyName: this.myCompany.companyName,
    //           companyAdress: this.myCompany.companyAdress,
    //           taxAdress: this.myCompany.taxAdress,
    //           taxNo: this.myCompany.taxNo,
    //           phoneNumber: this.myCompany.phoneNumber,
    //           email: this.myCompany.email,
    //         },
    //       ],
    //     });

    //     console.log("response.data:", response.data); // Veriyi kontrol etmek için eklendi

    //     const myCompanyId = response.data[0]._id; // veya response.data[0].id
    //     console.log("id", myCompanyId);
    //     this.$store.commit("setMyCompanyId", myCompanyId);
    //     this.$router.push({ name: "Settings", params: { id: myCompanyId } });
    //     console.log("Oluşturulan firma ID:", myCompanyId);
    //   } catch (error) {
    //     console.error("Firma ekleme hatası:", error);
    //   }
    // },
  },
};
</script>
