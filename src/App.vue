<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import LoadingCenterScreen from "@/components/LoadingScreenCenter/LoadingScreenCenter";
import { mapState } from "vuex";
import firebase from "firebase";
import router from "@/routes/router";

router.beforeEach((to, from, next) => {
  const authed = localStorage.getItem("USER_ID");
  if (!authed && to.name !== "login" && to.name !== "register")
    next({ name: "login" });
  else next();
});

export default {
  beforeMount() {
    firebase.auth().onAuthStateChanged((user) => {
      let userId = localStorage.getItem("USER_ID");
      if (!userId) {
        this.$router.push("/login");
      } else if (
        this.$route.path == "/login" ||
        this.$route.path == "/register"
      ) {
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
