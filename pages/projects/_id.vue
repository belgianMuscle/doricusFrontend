<template>
  <v-container class="mt-n6">
    <v-row>
      <v-img
        class="white--text align-end rounded-image"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="300px"
        :src="project.image_url"
      >
        <v-content class="ml-6">
          <h1>{{ project.title }}</h1>
          <span>{{ project.description }}</span>
          <v-btn v-if="$store.state.account.type == 'ARCHITECT'"
            class="mx-2" fab dark x-small color="teal" :to="'/edit/project/'+project.id">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-content>
      </v-img>
    </v-row>
    <v-row v-if="$store.state.account.type == 'ARCHITECT'" class="mt-2">
      <v-col cols="12">
        <AddPost :project-id="project.id" />
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col>
        <v-row>
          <h3>Timeline</h3>
        </v-row>
        <v-row v-if="project.topics.length > 0">
          <v-col>
            <v-row v-for="(topic, index) in project.topics" :key="index">
              <v-col>
                <ProjectPost :post="project.topics[index]" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row v-if="project.topics.length == 0" class="ma-2">
          <span class="muted">No topics exist yet for this project!</span>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectPost from "~/components/ProjectPost.vue";
import AddPost from "~/components/AddPost.vue";

const sampleData = {
  projectId: "1",
  posts: [
    {
      id: "1",
      commentsVisible: false,
      title: "Post Title One",
      content: "Post content bla",
      timestamp: "2020-01-01 10:00",
      member_name: "David"
    },
    {
      id: "2",
      commentsVisible: false,
      title: "Post Title Two",
      content: "Post content blabla",
      timestamp: "2020-01-02 11:00",
      member_name: "David"
    },
    {
      id: "3",
      commentsVisible: false,
      title: "Post Title Three",
      content: "Post content blablabla",
      timestamp: "2020-01-03 12:00",
      member_name: "David"
    }
  ]
};

export default {
  components: {
    ProjectPost,
    AddPost
  },
  async asyncData({ $axios, params }) {
    try {
      let data = await $axios.$get(`/projects/${params.id}`);
      return { project: data.project };
    } catch (e) {
      return {
        project: {
          id: "",
          title: "",
          description: "",
          image_url: "",
          topics: []
        }
      };
    }
  },
  data: () => ({
    project: {
      id: "",
      title: "",
      description: "",
      image_url: "",
      topics: []
    }
  })
};
</script>

<style>
.rounded-image {
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>