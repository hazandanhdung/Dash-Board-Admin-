import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import Common from "./common";
import UserAccount from "./user";
import db from "@/firebase/configFirebase";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "http://localhost:3000/";

const store = new Vuex.Store({
  modules: {
    Common,
    UserAccount,
  },
  state: {
    users: [],
  },
  getters: {
    getResultUser(state) {
      return state.users;
    },
  },
  actions: {
    getUser() {
      let resultUser = [];
      store.commit("Common/setLoading", true);
      db.ref("users/").once("value", function (response) {
        response.forEach((item) => {
          console.log(item.val());
          resultUser.push(item.val());
          store.commit("Common/setLoading", false);
        });
        console.log(resultUser);
        store.commit("SAVE_USERS", resultUser);
      });
    },
    updateUser() {
      db.ref("users/")
        .child(1)
        .set({
          name: "",
          email: "",
        })
        .then(() => {
          console.log("success");
          store.commit("EDIT_USER");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addUser() {
      //Todo handling user to flow n + 1
      db.ref("users/")
        .child("13")
        .set({ name: "tuyenvanhoa", email: "tuyendfs@gmail.com" })
        .then(() => {
          console.log("success");
          store.commit("ADD_USER");
        })
        .catch((error) => {
          console.log("error");
        });
    },
  },
  mutations: {
    SAVE_USERS(state, users) {
      state.users = users;
    },
    EDIT_USER(state, users) {
      state.users = users;
    },
    ADD_USER(state, users) {
      state.users = users;
    },
  },
});

export default store;
