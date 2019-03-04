<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "guluTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      var { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
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
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }

  > .line {
    transition: all 400ms;
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid blue;
  }
}
</style>


