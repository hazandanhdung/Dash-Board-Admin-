/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import DashboardPlugin from "./plugins/dashboard-plugin";
import App from "./App.vue";
import store from "./store";
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTRraEidnc4YMU0_MLymmfX8mfNjGE_Ik",
  authDomain: "center-beat.firebaseapp.com",
  projectId: "center-beat",
  storageBucket: "center-beat.appspot.com",
  messagingSenderId: "1035574816170",
  appId: "1:1035574816170:web:7ce6bd5add65f42fe28fd3",
  measurementId: "G-K7DSJMMEX3",
};

firebase.initializeApp(firebaseConfig);

// router setup
import router from "./routes/router";
// plugin setup
Vue.use(DashboardPlugin);



/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
