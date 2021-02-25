import Vue from "vue";
import Vuex from "vuex";
import User from "./listUser";
import Common from "./common";
import UserAccount from "./user"


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    User,
    Common,
    UserAccount
  }
});

export default store;

