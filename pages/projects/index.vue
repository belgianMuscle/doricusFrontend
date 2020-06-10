<template>
  <v-container>
    <v-row class="mt-2">
      <v-col>
        <v-row cols="12" class="align-baseline">
          <h2>Open Projects ({{ openProjectCount }})</h2>
          <v-btn v-if="$store.state.account.type == 'ARCHITECT'" text color="blue" href="/new/project" class="pl-4">Create new project</v-btn>
        </v-row>
        <v-row cols="12" class="mt-2">
          <v-card v-for="card in openProjects" :key="card.id" width="250" class="mx-2 my-2">
            <v-img
              :src="card.image_url"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ card.start_date }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div v-text="card.description"></div>
            </v-card-text>
            <v-card-actions>
              <v-btn :to="'/projects/'+card.id" color="blue" text>Open Project</v-btn>
              <v-btn v-if="$store.state.account.type == 'ARCHITECT'" :to="'/edit/project/'+card.id" text>Edit</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-2">
      <v-col>
        <v-row>
          <h2>Closed Projects ({{ closedProjectCount }})</h2>
        </v-row>
        <v-row class="mt-2">
          <v-card v-for="card in closedProjects" :key="card.id" width="250" class="mx-2 my-2">
            <v-img
              :src="card.image_url"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ card.start_date }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div v-text="card.description"></div>
            </v-card-text>
            <v-card-actions>
              <v-btn v-bind:href="'/projects/'+card.id" color="blue" text>Open Project</v-btn>
              <v-btn v-bind:href="'/edit/project/'+card.id" text>Edit</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  async asyncData({ $store, $axios, params }) {
    //If user is good and user has permissions, keep going
    try {
      let data = await $axios.$get("/projects");
      return {
        closedProjects: data.closedProjects,
        openProjects: data.openProjects,
        openProjectCount: data.openProjectCount,
        closedProjectCount: data.closedProjectCount
      };
    } catch (e) {
      return {
        closedProjects: [],
        openProjects: [],
        openProjectCount: 0,
        closedProjectCount: 0
      };
    }
  },
  data() {
    return {
      closedProjects: [],
      openProjects: [],
      openProjectCount: 0,
      closedProjectCount: 0
    };
  }
};
</script>

<style>
</style>