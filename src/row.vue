<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap:wrap;
}
</style>

<script>
export default {
  name:"guluRow",
  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px"
      };
    }
  }
};
</script>

