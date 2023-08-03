<template>
	<button type="button" class="btn btn-outline-success" :class="onFormatSizeDisabled" >
		<span v-if="hasLabel">{{label}}</span>
		<i class="bi bi-search"></i>
	</button>
</template>

<script>
export default {
	name: "MeButton",
	props: ['label', 'format', 'size', 'icon', 'disabled', 'panel', 'validate']
	,computed : {
		onIcon() {
			return (this.icon != null && this.icon !== "") ? "icon-" + this.icon : "";
		}
		,hasLabel() {
			return (!(this.label === null || this.label === ""));
		},
		onFormatSizeDisabled() {
			let attr = [];
			attr.push(this.format);
			attr.push(this.size);
			// if(this.isDisable) {
			// 	attr.push("disabled")
			// }
			return attr.join(" ");
		}
	}
}
</script>

<style>

</style>