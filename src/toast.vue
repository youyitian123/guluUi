<template>
  <div class="wapper" :class="toastClasses">
    <div class="toast" ref="toast" :class="toastClasses">
      <slot v-if="!ebableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
      <div class="line" ref="line"></div>
      <span v-if="close" class="close" @click="onClickClose()">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
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
    ebableHtml: {
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
        }, this.autoCloseDelay * 1000);
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
.wapper {
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
  background: rgba(0, 0, 0, 0.74);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);

  .line {
    border-left: solid 1px #666;
    margin-left: 16px;
    height: 100%;
  }
  .close {
    flex-shrink: 0;
    padding-left: 16px;
  }
}
</style>

