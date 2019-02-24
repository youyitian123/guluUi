<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabsItem",
  inject: ["eventBus"],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  },
  methods: {
    xxx() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-item {
  cursor: pointer;
  flex-shrink: 0;
  padding: 0 1em;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.active {
    color: blue;
  }
  &.disabled {
    color: gray;
  }
}
</style>

