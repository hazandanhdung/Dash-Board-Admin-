<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row> </b-row>
    </base-header>
    <b-card>
      <form action="">
        <b-card-body>
          <b-form-group>
            <label class="font-weight-bold">Name</label>
            <b-form-input
              v-model="userAccount.name"
              placeholder="Username"
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <label class="font-weight-bold">Budget</label>
            <b-form-input
              v-model="userAccount.budget"
              placeholder="Budget"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Status"
            class="font-weight-bold"
            v-model="userAccount.status"
          >
            <b-form-radio name="some-radios" value="A">
              <b-badge variant="success">Active</b-badge>
            </b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="B">
              <b-badge variant="warning">Not Active</b-badge>
            </b-form-radio>
          </b-form-group>
          <b-form-group>
            <label class="font-weight-bold">User</label>
            <b-card no-body>
              <b-card-body class="card-body">
                <b-form>
                  <b-form-file
                    @change="filesChange"
                    placeholder="Select file"
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                </b-form>
              </b-card-body>
            </b-card>
          </b-form-group>
          <b-form-group label="Completion" class="font-weight-bold">
            <b-form-radio name="some-radios" value="A">
              <b-badge variant="default">Done</b-badge>
            </b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="B">
              <b-badge variant="primary">Unfinished</b-badge>
            </b-form-radio>
          </b-form-group>
        </b-card-body>
      </form>
    </b-card>
  </div>
</template>

<script>
import { addTodoUsers } from "@/api/listUser";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  name: "UserAddNew",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      addTodoUsers: addTodoUsers,
      userAccount: {
        name: "",
        budget: "",
        status: [],
        userAvatar: "",
        completion: "",
      },
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped></style>
