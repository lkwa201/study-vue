<template>
	<div>
		<ag-grid-vue class="ag-theme-alpine" :defaultColDef="defaultColDef" :columnDefs="headers" :rowData="rowData"
			rowHeight="40" hreaderHeight="40" style="height:550px"></ag-grid-vue>
	</div>	
</template>

<script>

export default {
	data() {
		return {

			rowData: []
		}
	},
	
	computed : {
		headers() {
			return [
				{field: 'make', headerName: "제조사"},
				{field: 'model', headerName: "모델"},
				{field: 'price', headerName: "가격"},
			]	

		},
		defaultColDef()  {
			return {
				flex: 0,
				resizeable: true,
				editable: false, //수정여부 (true 가능, false 불가)
				suppressMovable:true //헤더 이동 여부 (true 고정, false 이동)
			}
			
			
		},
		
	},
	created() {
		this.makeData();
	},
	methods: {
		makeData() {
			this.rowData = [
				{make: 'Toyota', model: 'Celica', price: 35000},
				{make: 'Ford', model: 'Mondeo', price: 32000},
				{make: 'Porsche', model: 'Boxter', price: 72000}
			]
		},
	}
}
</script>

<style scoped>

</style>