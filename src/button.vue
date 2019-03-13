<template>
  <button
    class="g-button"
    :class="{[`icon-${iconposition}`]: true, [`button-${type}`]:true}"
    @click="$emit('click')"
  >
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="g-button-content">
      <slot/>
    </div>
  </button>
</template>


<script>
import Icon from "./icon";
export default {
  name: "guluButton",
  components: {
    "g-icon": Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default",
      validator(value) {
        return (
          [
            "default",
            "primary",
            "success",
            "info",
            "warning",
            "danger"
          ].indexOf(value) >= 0
        );
      }
    },
    iconposition: {
      type: String,
      default: "left",
      validator(value) {
        return ["left", "right"].indexOf(value) >= 0;
      }
    }
  }
};
</script>



<style lang="scss" scoped>
@import "var";
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

button:disabled {
  cursor: no-drop;
}
.g-button {
  cursor: pointer;
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  &.is-round {
    border-radius: 15px;
  }
  &.button-primary {
    color: white;
    background: #3498db;
    border: none;
  }
  &.button-primary:hover {
    background: #5dade2;
  }
  &.button-success {
    border: none;
    color: white;
    background: #2ecc71;
  }
  &.button-success:hover {
    background: #58d68d;
  }
  &.button-info {
    border: none;
    color: white;
    background: #909497;
  }
  &.button-info:hover {
    background: #aab7b8;
  }
  &.button-warning {
    border: none;
    color: white;
    background: #f4d03f;
  }
  &.button-warning:hover {
    background: #f7dc6f;
  }
  &.button-danger {
    border: none;
    color: white;
    background: #e74c3c;
  }
  &.button-danger:hover {
    background: #ec7063;
  }
  &.icon-left {
    > .g-button-content {
      order: 2;
    }
    > .icon {
      order: 1;
      margin-right: 0.1em;
    }
  }

  &.icon-right {
    > .g-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>


