<template>
  <v-container class="mt-n6">
    <v-row>
      <v-img
        class="white--text align-end rounded-image"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="300px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-content class="ml-6">
          <h1>Project Title</h1>
          <span>This is the description of the project</span>
        </v-content>
      </v-img>
    </v-row>
    <v-row class="mt-2">
      <v-col cols="12">
        <AddPost :project-id="projectId"/>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col>
        <v-row>
          <h3>Timeline</h3>
        </v-row>
        <v-row v-for="(post, index) in posts" :key="index">
          <v-col>
            <ProjectPost :post="posts[index]" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectPost from "~/components/ProjectPost.vue";
import AddPost from "~/components/AddPost.vue";

export default {
  components: {
    ProjectPost,
    AddPost
  },
  data: () => ({
    projectId: "1",
    posts: [
        {id:"1",commentsVisible:false,title:"Post Title One",content:"Post content bla",timestamp:"2020-01-01 10:00",member_name:"David"},
        {id:"2",commentsVisible:false,title:"Post Title Two",content:"Post content blabla",timestamp:"2020-01-02 11:00",member_name:"David"},
        {id:"3",commentsVisible:false,title:"Post Title Three",content:"Post content blablabla",timestamp:"2020-01-03 12:00",member_name:"David"}
    ]
  })
};
</script>

<style>
.rounded-image {
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>