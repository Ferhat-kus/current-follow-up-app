<template>
  <div class="md:p-10">
    <div
      class="flex justify-center items-center bg-slate-200 opacity-40 fixed inset-0 z-40"
    ></div>

    <div class="relative z-50">
      <Form @submit="createMyCompany" :myCompany="myCompany" to="/companies" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/button.vue";
import Form from "@/components/form.vue";
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
};
</script>
