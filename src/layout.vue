<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>

<script>
export default {
  name:"guluLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "guluSider") {
        this.layoutClass.hasSider = true;
      }
    });
  }
};
</script>



