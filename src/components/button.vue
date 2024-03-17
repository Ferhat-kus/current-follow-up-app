<template>
  <div @click="click">
    <router-link
      class="flex items-center justify-center md:justify-between px-2 md:w-auto w-full bg-darkBlue py-2 rounded-md my-2"
      :class="className"
      :to="to"
    >
      <div v-show="imgShow">
        <img :class="imgClass" class="md:w-10 w-8" :src="src" />
      </div>
      <button :type="Buttontype" class="md:w-full whitespace-nowrap font-semibold text-white mr-2">
        {{ title }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    to: String,
    src: String,
    className: String,
    imgClass: String,
    imgShow: Boolean,
    Buttontype: String,
  },
  methods: {
    click() {
      this.$emit("button-click",true);
    },
  },
};
</script>
