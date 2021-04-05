import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import Common from "./common";
import UserAccount from "./user";

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
  actions: {
    loadUsers({ commit }) {
      Vue.axios
        .get("contacts")
        .then((result) => {
          console.log(result.data, "xxx");
          commit("SAVE_USERS", result.data);
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
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
