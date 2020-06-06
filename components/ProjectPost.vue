<template>
  <v-card>
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>{{ post.timestamp }} by {{ post.member_name }}</v-card-subtitle>
    <v-card-text>{{ post.content }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue" v-on:click="changeCommentsVisibility" text>See More</v-btn>
    </v-card-actions>
    <v-card-text v-show="commentsVisible">
      <PostComments :post="post" />
    </v-card-text>
  </v-card>
</template>

<script>
import PostComments from "~/components/PostComments.vue";

export default {
  components: {
    PostComments
  },
  props: ['post'],
  data: () => ({
    commentsVisible: false,
    //post: {
    //  id: "1",
    //  title: "Post Title",
    //  content: "Post content blabla",
    //  timestamp: "2020-01-01 10:00",
    //  member_name: "David"
    //}
  }),
  methods: {
    changeCommentsVisibility: function(event) {
      this.commentsVisible = !this.commentsVisible;
    }
  }
};
</script>

<style>
</style>