<template>
  <v-container>
    <h1>Edit project</h1>
    <v-form ref="projectForm" class="ma-6 pb-4" @submit.prevent="editProject">
      <v-text-field v-model="project.title" :counter="35" label="Title" solo></v-text-field>
      <v-text-field v-model="project.image_url" label="Image URL" solo></v-text-field>
      <v-textarea v-model="project.description" :counter="520" label="Description" solo></v-textarea>
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

        <v-col cols="12" lg="6">
          <v-menu
            ref="act_end_date_menu"
            v-model="act_end_date_menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="act_end_date"
                label="Actual End Date"
                hint="YYYY-MM-DD format"
                persistent-hint
                @blur="adate = parseDate(act_end_date)"
                v-on="on"
                solo
              ></v-text-field>
            </template>
            <v-date-picker v-model="adate" no-title @input="act_end_date_menu = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>

      <v-text-field v-model="project.address" label="Address" solo></v-text-field>

      <v-text-field
        v-model="member"
        label="Add Member by e-mail"
        :append-icon="'mdi-account-plus'"
        @click:append="addMember"
        solo
      ></v-text-field>
      <v-list v-if="project.members.length > 0" color="clear" class="mb-4 ml-6 mt-n6">
        <v-list-item color="clear" v-for="(item, index) in project.members" :key="index">
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

      <v-btn type="submit" color="primary" class="mt-6 mr-4">Save</v-btn>
      <v-btn to="/projects" class="mt-6" text>cancel</v-btn>
    </v-form>
    <v-snackbar
      v-model="snackbar">
      
      {{ snacktext }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
    project: {},
    start_date: "",
    proj_end_date: "",
    act_end_date: "",
    member: "",
    sdate: new Date().toISOString().substr(0, 10),
    edate: new Date().toISOString().substr(0, 10),
    adate: new Date().toISOString().substr(0, 10),
    start_date_menu: false,
    proj_end_date_menu: false,
    act_end_date_menu: false,
    snackbar: false,
    snacktext: '',
    timeout: 5000,
    multiLine:true
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
    },
    adate(val) {
      this.act_end_date = this.formatDate(this.edate);
    }
  },
  async asyncData({ $axios, params }) {
    try {
      let data = await $axios.$get(`/projects/${params.id}`);

      if (data.project.image_url == "/placeholder.png"){
        data.project.image_url = "";
      }
      console.log(data.project);
      return { 
        project: data.project,
        start_date: new Date(data.project.start_date).toISOString().substr(0, 10),
        proj_end_date: new Date(data.project.proj_end_date).toISOString().substr(0, 10),
        act_end_date: new Date(data.project.act_end_date).toISOString().substr(0, 10),
        snackbar: false,
        text: '',
        timeout: 5000,
        multiLine:true
      };
    } catch (e) {
      return {
        project: {
          id: "",
          title: "",
          description: "",
          image_url: ""
        },
        start_date: "",
        proj_end_date: "",
        act_end_date: "",
        member: "",
        sdate: new Date().toISOString().substr(0, 10),
        edate: new Date().toISOString().substr(0, 10),
        adate: new Date().toISOString().substr(0, 10),
        start_date_menu: false,
        proj_end_date_menu: false
      };
    }
  },
  methods: {
    async editProject() {
      const config = {
        headers: { "content-type": "application/json" }
      };
      
      this.project.start_date = this.start_date;
      this.project.proj_end_date = this.proj_end_date;
      this.project.act_end_date = this.act_end_date;

      let projectData = {
        project: this.project
      };
    
      console.log(projectData);

      try {
        let response = await this.$axios.$patch(
          "/projects/"+this.project.id,
          projectData,
          config
        );
        this.$router.push("/projects/"+this.project.id);
      } catch (e) {
        
        this.snackbar = true;
        this.multiLine = true;
        this.snacktext = 'An error occurred!';
      }
    },
    async addMember() {
      if (this.member != "") {

        const config = {
          headers: { "content-type": "application/json" }
        };

        try {
          let response = await this.$axios.$get("/search/members?email="+this.member, config);
          this.project.members.push(response.member);
          this.member = "";
        } catch (e) {
          console.log(e);
        }
      }
    },
    removeMember(indx) {
      this.project.members.splice(indx, 1);
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