<template>
  <div class="tabs-header" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
export default {
  name: "guluTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      var { width, left } = vm.$el.getBoundingClientRect();
      let { left: left2 } = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - left2}px`;
    });
  }
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;

.tabs-header {
  border-bottom: 1px solid #ddd;

  height: $tab-height;
  position: relative;
  display: flex;
  > .line {
    transition: all 400ms;
    position: absolute;
    bottom: -1px;
    z-index: 1;
    border-bottom: 2px solid #3498db;
  }
}
</style>


