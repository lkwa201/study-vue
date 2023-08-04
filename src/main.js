import { createApp , defineAsyncComponent } from 'vue'
import { AgGridVue } from "ag-grid-vue3";
//import {AllCommunityModules} from 'ag-grid-community/all-modules';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-material.css";

import "bootstrap/dist/css/bootstrap.css"; // [bootstrap]
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap'


import router from "./router";
import axios from 'axios';

const COMPONEENTS = [
	"MeButton", "MyLabel"
];

function loadComponents(app) {
	try {
		for(let comps of COMPONEENTS) {
			app.component(comps, defineAsyncComponent(() =>
			import(`@/components/${comps}.vue`)));
		}
	} catch (error) {
		console.log("loadCompoments : error =" + error);
	}
}


import App from './App.vue';
const app = createApp(App);
app.use(router);

app.config.globalProperties.$router = router;
app.config.globalProperties.$axios = axios;

app.component("AgGridVue", AgGridVue);
loadComponents(app);
app.mount('#app');
