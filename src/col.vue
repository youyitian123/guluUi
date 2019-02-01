<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
$class: col-;
.col {
  width: 50%;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
      //   background-color: darken(cornflowerblue, 0% + ($n/2));
    }
  }

  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>


<script>
export default {
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
      return [
        this.span && `col-${this.span}`,
        this.offset && `offset-${this.offset}`
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  }
};
</script>

