<template>
  <div @click="click" >
    <router-link
      class="flex w-full items-center justify-center   bg-darkBlue p-4 rounded-md my-2"
      :class="className"
      :to="to"
    >
      <div v-show="imgShow">
        <img :class="imgClass" class="md:w-10 w-8" :src="src" />
      </div>
      <button :type="Buttontype" class="md:w-full flex items-center px-2 justify-center whitespace-nowrap font-semibold text-white">
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
