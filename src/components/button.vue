<template>
  <div @click="click">
    <router-link
      class="flex w-full items-center justify-center bg-darkBlue hover:bg-opacBlue p-4 rounded-md my-2"
      :class="className"
      :to="to"
    >
      <div :class="iconClass" v-show="imgShow">
        <i class="bx bx-plus-medical text-white text-sm "></i>
      </div>
      <button
        :type="Buttontype"
        class="md:w-2/3 flex capitalize items-center px-2 justify-center whitespace-nowrap font-semibold text-white"
      >
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
    iconClass: String,
  },
  methods: {
    click() {
      this.$emit("button-click", true);
    },
  },
};
</script>
