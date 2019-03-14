<template>
  <div class="toast-wrapper" :class="toastClasses">
    <div class="toast" ref="toast" :class="[toastClasses,`g-${type}`]">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
      <div class="line" ref="line"></div>
      <span v-if="close" class="close" @click="onClickClose()">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "guluToast",
  props: {
    type: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "success", "warning", "error"].indexOf(value) >= 0;
      }
    },
    autoClose: {
      type: [Boolean, Number],
      default: 5,
      validator(value) {
        return value === false || typeof value === "number";
      }
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "midele"].indexOf(value) >= 0;
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
  mounted() {
    this.execAutoClose();
    this.updateStyles();
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$toast-font-size: 14px;
$toast-min-height: 40px;
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.toast-wrapper {
  z-index: 50;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
  }
  &.position-bottom {
    bottom: 0;
  }
  &.position-midele {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
.toast {
  &.position-top {
    animation: slide-down 1s;
  }
  &.position-bottom {
    animation: slide-up 1s;
  }
  &.position-midele {
    animation: fade-in 1s;
  }

  color: #ffffff;
  font-size: $toast-font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border: 1px solid;
  .line {
    margin-left: 16px;
    height: 100%;
  }

  &.g-default {
    color: #909399;
    background-color: #d6eaf8;
    border-color:#AED6F1;
    .line {
      border-left: solid 1px #909399;
    }
  }
  &.g-success {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
    .line {
      border-left: solid 1px #67c23a;
    }
  }

  &.g-warning {
    color: #e6a23c;
    background-color: #fdf6ec;
    border-color: #faecd8;
    .line {
      border-left: solid 1px #e6a23c;
    }
  }
  &.g-error {
    color: #f56c6c;
    background-color: #fef0f0;
    border-color: #fde2e2;
    .line {
      border-left: solid 1px #f56c6c;
    }
  }

  .close {
    flex-shrink: 0;
    padding-left: 16px;
  }
}
</style>

