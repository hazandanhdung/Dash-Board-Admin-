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
              <b-card-header class="border-0 d-flex justify-content-end">
                <router-link :to="{ name: 'user-add-new' }" class="color__a">
                  <b-button variant="primary">Add User</b-button>
                </router-link>
              </b-card-header>
              <el-table
                class="table-responsive table-flush"
                header-row-class-name="thead-light"
                :data="users"
              >
                <el-table-column
                  label="ID"
                  min-width="190px"
                  prop="id"
                  sortable
                >
                  <template v-slot="{ row }">
                    <b-media no-body class="align-items-center">
                      <b-media-body>
                        <span class="font-weight-600 name mb-0 text-sm">
                          {{ row._id }}</span
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
                <el-table-column label="Action" min-width="180px">
                  <template v-slot="{ row }">
                    <el-dropdown trigger="click" class="dropdown">
                      <span class="btn btn-sm btn-icon-only text-light">
                        <i class="fas fa-ellipsis-v mt-2"></i>
                      </span>
                      <el-dropdown-menu
                        class="dropdown-menu dropdown-menu-arrow show"
                        slot="dropdown"
                      >
                        <b-dropdown-item>
                          <base-button type="primary">Update UsUer</base-button>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <base-button type="danger">Delete User</base-button>
                        </b-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
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
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import LoadingScreenCenter from "@/components/LoadingScreenCenter/LoadingScreenCenter";
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "element-ui";
import { mapState, mapActions } from "vuex";

export default {
  name: "user",
  components: {
    BaseHeader,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
    LoadingScreenCenter,
  },
  data() {
    return {
      items: [],
      loading: false,
      currentPage: 1,
    };
  },
  computed: mapState(["users"]),
  methods: {},
  created() {
    this.$store.dispatch("loadUsers");
  },
};
</script>

<style lang="scss" scoped></style>
