<template>
  <v-container>
    <v-row class="ma-12">
      <v-row cols="12" class="align-baseline">
        <h2>Open Projects (2)</h2>
        <v-btn text color="blue" href="/new/project" class="pl-4">Create new project</v-btn>
      </v-row>
      <v-row cols="12" class="mt-2">
          <v-card v-for="card in openProjects" :key="card.title" max-width="250" class="mx-2 my-2">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">Start Date - End Date</v-card-subtitle>
            <v-card-text class="text--primary">
              <div v-text="card.description"></div>
            </v-card-text>
            <v-card-actions>
              <v-btn v-bind:href="'/projects/'+card.id" color="blue" text>Open Project</v-btn>
              <v-btn v-bind:href="'/edit/project/'+card.id" text>Edit</v-btn>
            </v-card-actions>
          </v-card>
      </v-row>
    </v-row>
    <v-row class="ma-12">
      <v-col>
        <v-row>
          <h2>Closed Projects (3)</h2>
        </v-row>
        <v-row class="mt-2">
          <v-card v-for="card in closedProjects" :key="card.title" max-width="250" class="mx-2 my-2">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">Start Date - End Date</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>Description</div>
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
  data: () => ({
    closedProjects: [
      {
        id: "1",
        title: "Pre-fab homes",
        description: "This is the description",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 3
      },
      {
        id: "2",
        title: "Favorite road trips",
        description: "This is the description",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3
      },
      {
        id: "3",
        title: "Best airlines",
        description: "This is the description",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 3
      }
    ],
    openProjects: [
      {
        id: "4",
        title: "Pre-fab homes",
        description: "This is the description",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 3
      },
      {
        id: "5",
        title: "Favorite road trips",
        description: "This is the description",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3
      },
      {
        id: "6",
        title: "Best airlines",
        description: "This is the description",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 3
      }
    ]
  })
};
</script>

<style>
</style>