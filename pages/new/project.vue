<template>
  <v-container>
    <h1>Create new project</h1>
    <v-form ref="projectForm" class="ma-6 pb-4" @submit.prevent="createProject">
      <v-text-field v-model="title" :counter="35" label="Title" solo></v-text-field>
      <v-text-field v-model="image_url" label="Image URL" solo></v-text-field>
      <v-textarea v-model="description" :counter="520" label="Description" solo></v-textarea>
      <v-row>
        <v-col cols="12" lg="6">
          <v-menu
            ref="start_date_menu"
            v-model="start_date_menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="start_date"
                label="Start Date"
                hint="YYYY-MM-DD format"
                persistent-hint
                @blur="sdate = parseDate(start_date)"
                v-on="on"
                solo
              ></v-text-field>
            </template>
            <v-date-picker v-model="sdate" no-title @input="start_date_menu = false"></v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="12" lg="6">
          <v-menu
            ref="proj_end_date_menu"
            v-model="proj_end_date_menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="proj_end_date"
                label="Projected End Date"
                hint="YYYY-MM-DD format"
                persistent-hint
                @blur="edate = parseDate(proj_end_date)"
                v-on="on"
                solo
              ></v-text-field>
            </template>
            <v-date-picker v-model="edate" no-title @input="proj_end_date_menu = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>

      <v-text-field v-model="address" label="Address" solo></v-text-field>

      <v-text-field
        v-model="member"
        label="Add Member by e-mail"
        :append-icon="'mdi-account-plus'"
        @click:append="addMember"
        solo
      ></v-text-field>
      <v-list v-if="members.length > 0" color="clear" class="mb-4 ml-6 mt-n6">
        <v-list-item color="clear" v-for="(item, index) in members" :key="index">
          <v-list-item-action>
            <v-btn @click="removeMember(index)" icon>
              <v-icon>mdi-account-remove</v-icon>
            </v-btn>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title v-text="item.full_name + ' ( ' + item.type + ' )'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn type="submit" color="primary" class="mt-6 mr-4">Create</v-btn>
      <v-btn @click="clear" class="mt-6" text>cancel</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import {
  mdiAccountPlus,
  mdiAccountPlusOutline,
  mdiAccountRemove,
  mdiAccountRemoveOutline
} from "@mdi/js";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  validations: {
    title: { required, maxLength: maxLength(35) },
    description: { required, maxLength: maxLength(520) }
  },
  data: vm => ({
    title: "",
    image_url: "",
    description: "",
    start_date: "",
    proj_end_date: "",
    address: "",
    member: "",
    members: [],
    sdate: new Date().toISOString().substr(0, 10),
    edate: new Date().toISOString().substr(0, 10),
    start_date_menu: false,
    proj_end_date_menu: false
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  watch: {
    sdate(val) {
      this.start_date = this.formatDate(this.sdate);
    },
    edate(val) {
      this.proj_end_date = this.formatDate(this.edate);
    }
  },
  methods: {
    clear() {
      this.title = "";
      this.image_url = "";
      this.description = "";
      this.start_date = "";
      this.proj_end_date = "";
      this.address = "";
      this.member = "";
      this.members = [];
      this.sdate = new Date().toISOString().substr(0, 10);
      this.edate = new Date().toISOString().substr(0, 10);
      this.start_date_menu = false;
      this.proj_end_date_menu = false;
    },
    async createProject(){
      const config = {
        headers: { "content-type": "application/json" }
      };

      let projectData = { project:{
        title: this.title,
        description: this.description,
        image_url: this.image_url,
        address: this.address,
        start_date: this.start_date,
        proj_end_date: this.proj_end_date,
        act_end_date: '9999-12-31',
        members: this.members
      }};

      try {
        let response = await this.$axios.$post("/projects", projectData, config);
        this.$router.push("/projects");
      } catch (e) {
        console.log(e);
      }
    },
    async addMember() {
      if (this.member != "") {

        const config = {
          headers: { "content-type": "application/json" }
        };

        try {
          let response = await this.$axios.$get("/search/members?email="+this.member, config);
          this.members.push(response.member);
          this.member = "";
        } catch (e) {
          console.log(e);
        }
      }
    },
    removeMember(indx) {
      this.members.splice(indx, 1);
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${year}-${month}-${day}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("-");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>

<style>
</style>