<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "guluCollapse"
};
</script>


<style lang="scss" scoped>
.collapse {
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>

