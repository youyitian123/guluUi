<template>
	<div class="col" :class="[`col-${span}`]">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
$class: col-;
.col {
	height: 100px;
	background: grey;
	width: 50%;
	border: 1px solid red;
	@for $n from 1 through 24 {
		&.#{$class}#{$n} {
			width: ($n/24) * 100%;
			background-color: darken(cornflowerblue, 0% + ($n/2));
		}
	}
}
</style>


<script>
export default {
	props: {
		span: [Number,String]
	}
};
</script>

