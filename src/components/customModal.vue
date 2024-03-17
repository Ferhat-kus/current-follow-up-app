<template>
  <modal
    :name="name"
    :height="isMobile ? '100%' : 'auto'"
    :width="isMobile ? '100%' : '35%'"
    :scrollable="true"
    :ref="ref"
  >
    <div class="rounded-sm">
      <!-- Header -->
      <header
        class="bg-darkBlue w-full py-3 px-4 rounded-t-sm flex items-center justify-between"
      >
        <div class="text-titleTextColor text-sm font-semibold">
          {{ headerTitle }}
        </div>
        <div @click="hide">
          <img src="@/assets/icons/close.svg" alt="" />
        </div>
      </header>
      <slot name="form"></slot>
    </div>
  </modal>
</template>

<script>
export default {
  data(){
    return {
      isMobile: window.innerWidth < 768
    }
  },
  props: {
    ref: String,
    name: String,
    headerTitle: String,
  },
  methods: {
    show() {
      this.$modal.show(this.name);
    },
    hide() {
      this.$modal.hide(this.name);
    },
  },
};
</script>
