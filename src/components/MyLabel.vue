<template>
	<div class="form-control" :class="onSizeRequired">
		<div class="form-control-label">
			<span>{{label}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyLabel",
	props:['label', 'required', 'size'],
	emits: [],
	computed : {
		onSizeRequired() {
			const cols = ["col-1 ", "col-1 ", "col-2 ", "col-3 ", "col-4 "];
			let size  =0;
			if(this.size != null && this.size >=0 && this.size <=4) {
				size = this.size;
			}
			return cols[size] + ((this.required) ? "required": "");
		}
	}
}
</script>

<style scoped>

</style>