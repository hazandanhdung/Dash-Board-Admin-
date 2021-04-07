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
      db.ref("users/").once("value", function (response) {
        response.forEach((item) => {
          resultUser.push(item.val());
        });
        store.commit("SAVE_USERS", resultUser);
      });
    },
  },
  mutations: {
    SAVE_USERS(state, users) {
      state.users = users;
    },
  },
});

export default store;
