<template>
  <div
    class="col"
    :class="[span && `col-${span}`,offset && `offset-${offset}`]"
    :style="{paddingLeft: gutter/2+'px',paddingRight: gutter/2+'px'}"
  >
    <div style=" border: 1px solid green;">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$class: col-;
.col {
  height: 100px;
  width: 100%;
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
  }
};
</script>

