<template>
  <div>
    <router-view></router-view>
    <loading-center-screen v-if="loading"></loading-center-screen>
  </div>
</template>

<script>
import LoadingCenterScreen from "@/components/LoadingScreenCenter/LoadingScreenCenter";
import { mapState } from "vuex";
import firebase from "firebase";
import router from "@/routes/router";

router.beforeEach((to, from, next) => {
  const authed = localStorage.getItem("USER_ID");
  console.log(to.name);
  if (!authed && to.name !== "login" && to.name !== "register")
    next({ name: "login" });
  else next();
});

export default {
  beforeMount() {
    firebase.auth().onAuthStateChanged((user) => {
      let userId = localStorage.getItem("USER_ID");
      console.log(userId);
      if (!userId) {
        console.log("1");
        this.$router.push("/login");
      } else if (
        this.$route.path == "/login" ||
        this.$route.path == "/register"
      ) {
        console.log("3");
        this.$router.push("/");
      }
    });
  },
  components: {
    LoadingCenterScreen,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      loading: (state) => state.Common.loading,
    }),
  },
};
</script>
