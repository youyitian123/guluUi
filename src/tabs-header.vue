<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["eventBus"]
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;

.tabs-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: $tab-height;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>


