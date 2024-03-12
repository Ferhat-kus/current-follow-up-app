<template>
  <div class="bg-white w-full px-5 py-2 text-darkBlue border-2 border-darkBlue rounded-md flex justify-between">
    <input
      class=" bg-white w-full outline-none placeholder:text-darkBlue placeholder:font-semibold"
      placeholder="Arama"
      type="text"
    />
    <img class="text-darkBlue w-6" :src="src" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
  },
};
</script>

<style lang="scss" scoped></style>
