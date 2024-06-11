import "./assets/main.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";

// Components Primevue
import Button from "primevue/button";
import Tag from "primevue/tag";
import Dropdown from "primevue/dropdown";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";
import Message from "primevue/message";
import ConfirmPopup from "primevue/confirmpopup";
import ConfirmationService from "primevue/confirmationservice";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import OrderList from "primevue/orderlist";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Panel from "primevue/panel";

import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);

// Components Primevue
app.component("Button", Button);
app.component("Tag", Tag);
app.component("Dropdown", Dropdown);
app.component("FloatLabel", FloatLabel);
app.component("InputText", InputText);
app.component("Card", Card);
app.component("Checkbox", Checkbox);
app.component("Message", Message);
app.component("ConfirmPopup", ConfirmPopup);
app.component("Toast", Toast);
app.component("OrderList", OrderList);
app.component("DataView", DataView);
app.component("DataViewLayoutOptions", DataViewLayoutOptions);
app.component("Panel", Panel);

app.mount("#app");
