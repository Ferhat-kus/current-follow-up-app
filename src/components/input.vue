<template>
  <div class="w-11/12 flex flex-col items-start mx-2">
    <label for="inputField" class="block my-2 text-sm font-medium text-gray-700"
      >{{ label }}</label
    >
    <input
      id="inputField"
      class="bg-lightGray w-full px-3 py-2 text-sm font-medium rounded-md focus:outline-none"
      :type="type"
    />
  </div>
</template>

<script>
export default {
    props: {
        label: String,
        type: String,
    }
};
</script>
