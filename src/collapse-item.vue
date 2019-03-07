<template>
  <div class="collapse-item">
    <div class="collapse-item-title" @click="open = !open">{{title}}</div>
    <div class="collapse-item-centent" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "guluCollapsItem",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  }
};
</script>


<style lang="scss" scoped>
.collapse-item {
  border-radius: 4px;
  .collapse-item-title {
    border: solid 1px #ddd;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    .collapse-item-title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    > .collapse-item-title:last-child {
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }
  .collapse-item-centent {
    padding: 8px;
  }
}
</style>

