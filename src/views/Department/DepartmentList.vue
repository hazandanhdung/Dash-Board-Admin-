<template>
  <div>
    <!-- BootstrapVue Done -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row> </b-row>
    </base-header>

    <b-container fluid class="mt--7">
      <b-row class="justify-content-center">
        <b-col lg="12">
          <card header-classes="bg-transparent">
            <h3 slot="header" class="mb-0">Department Information</h3>
            <b-card no-body>
              <b-card-header class="border-0 d-flex justify-content-between">
                <div class="size-form">
                  <b-form-group class="mb-0">
                    <b-input-group
                      class="input-group-alternative input-group-merge"
                    >
                      <b-form-input
                        placeholder="Search"
                        type="text"
                        v-model="searchQuery"
                      >
                      </b-form-input>
                      <div class="input-group-append">
                        <span class="input-group-text"
                          ><i class="fas fa-search"></i
                        ></span>
                      </div>
                    </b-input-group>
                  </b-form-group>
                </div>
                <router-link
                  :to="{ name: 'department-add-user' }"
                  class="color__a"
                >
                  <b-button variant="primary">Add User</b-button>
                </router-link>
              </b-card-header>
              <el-table
                class="table-responsive table-flush"
                header-row-class-name="thead-light"
                :data="resultQuery"
              >
                <el-table-column
                  label="ID"
                  min-width="100px"
                  prop="id"
                  sortable
                >
                  <template v-slot="{ row }">
                    <b-media no-body class="align-items-center">
                      <b-media-body>
                        <span class="font-weight-600 name mb-0 text-sm">
                          {{ row.index }}</span
                        >
                      </b-media-body>
                    </b-media>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Name"
                  min-width="190px"
                  prop="name"
                  sortable
                >
                  <template v-slot="{ row }">
                    <b-media no-body class="align-items-center">
                      <b-media-body>
                        <span class="font-weight-600 name mb-0 text-sm">
                          {{ row.name }}</span
                        >
                      </b-media-body>
                    </b-media>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Gender"
                  min-width="190px"
                  prop="gender"
                  sortable
                >
                  <template v-slot="{ row }">
                    <b-media no-body class="align-items-center">
                      <b-media-body>
                        <span class="font-weight-600 name mb-0 text-sm">
                          {{ row.gender }}
                        </span>
                      </b-media-body>
                    </b-media>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Email"
                  min-width="210px"
                  prop="gender"
                  sortable
                >
                  <template v-slot="{ row }">
                    <b-media no-body class="align-items-center">
                      <b-media-body>
                        <span class="font-weight-600 name mb-0 text-sm">
                          {{ row.email }}
                        </span>
                      </b-media-body>
                    </b-media>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Phone"
                  min-width="170px"
                  prop="phone"
                  sortable
                >
                  <template v-slot="{ row }">
                    <div class="badge-dot mr-4" type="">
                      <span class="font-weight-600 name mb-0 text-sm">
                        {{ row.phone }}
                      </span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Avatar"
                  min-width="190px"
                  prop="avatar"
                  sortable
                >
                  <template v-slot="{ row }">
                    <b-media no-body class="align-items-center">
                      <b-media-body>
                        <a
                          href="#"
                          class="avatar avatar-sm rounded-circle"
                          data-toggle="tooltip"
                          data-original-title="Ryan Tompson"
                        >
                          <img alt="Image placeholder" :src="row.picture" />
                        </a>
                      </b-media-body>
                    </b-media>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Completion"
                  prop="completion"
                  min-width="240px"
                  sortable
                >
                  <template v-slot="{ row }">
                    <div class="d-flex align-items-center">
                      <div class="completion mr-2" v-if="row.isActive == true">
                        <b-badge variant="primary">Active</b-badge>
                      </div>
                      <div class="completion mr-2" v-if="row.isActive == false">
                        <b-badge variant="danger">UnActive</b-badge>
                      </div>
                      <div></div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="Options" min-width="180px">
                  <template v-slot="{ row }">
                    <div class="mb-3">
                      <b-button
                        v-b-modal.modal-1
                        class="btn-info"
                        @click="handleEditUser"
                        >Edit <i class="ni ni-settings-gear-65"></i>
                      </b-button>
                    </div>
                    <div>
                      <b-button v-b-modal.modal-1 class="btn-danger"
                        >Delete <i class="ni ni-fat-remove"></i>
                      </b-button>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
              <b-card-footer class="py-4 d-flex justify-content-end">
                <base-pagination
                  v-model="currentPage"
                  :per-page="15"
                  :total="50"
                ></base-pagination>
              </b-card-footer>
            </b-card>
          </card>
          <b-modal id="modal-1" title="Edit Department">
            <b-card-body>
              <form>
                <base-input label="Name" placeholder="Name" />
                <base-input
                  label="Email address"
                  placeholder="name@example.com"
                />
                <base-input label="Phone" placeholder="Phone" />
                <b-form>
                  <label class="custom-text-avatar">Avatar</label>
                  <b-form-file
                    label="Avatar"
                    placeholder="Select file"
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                </b-form>
              </form>
            </b-card-body>
          </b-modal>
          <b-modal id="modal-2" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
          </b-modal>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "element-ui";
import { mapGetters } from "vuex";

export default {
  name: "user",
  components: {
    BaseHeader,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
  },
  data() {
    return {
      items: [],
      loading: false,
      currentPage: 1,
      searchQuery: null,
    };
  },
  computed: {
    ...mapGetters(["getResultUser"]),
    resultQuery() {
      if (this.searchQuery) {
        return this.getResultUser.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(
              (v) =>
                item.name.toLowerCase().includes(v) ||
                item.phone.toLowerCase().includes(v) ||
                item._id.toLowerCase().includes(v)
            );
        });
      } else {
        return this.getResultUser;
      }
    },
  },
  mounted() {
    this.$store.dispatch("getUser");
    // this.$store.dispatch("updateUser");
    // this.$store.dispatch("addUser");
  },
  methods: {
    handleEditUser() {
      this.$store.dispatch("updateUser");
    },
  },
};
</script>

<style lang="scss" scoped>
.size-form {
  min-width: 300px;
}
.custom-text-avatar {
  color: #525f7f;
  font-size: 0.875rem;
  font-weight: 600;
}
</style>
