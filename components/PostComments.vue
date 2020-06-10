<template>
  <v-list three-line>
    <template v-for="(item, index) in post.comments">
      <v-list-item v-if="item.content" :key="index">
        <v-list-item-content>
          <v-list-item-subtitle v-text="item.timestamp + ' by ' + item.member_id"></v-list-item-subtitle>
          <v-list-item-content v-html="item.content"></v-list-item-content>
        </v-list-item-content>
      </v-list-item>
      <v-divider v-if="index < post.comments.length - 1" :key="'dividier-'+index"></v-divider>
    </template>
    <span v-if="post.comments.length == 0">No comments yet!</span>
    <v-form ref="commentForm" class="ml-6">
      <v-row class="align-baseline">
        <v-text-field v-model="comment" :counter="255" label="Comment" required></v-text-field>
        <v-btn color="primary" class="mr-4" @click="submit">Send</v-btn>
      </v-row>
    </v-form>
  </v-list>
</template>

<script>
const samplecomments = [
  {
    comment: "blablablabla",
    member_name: "Anna",
    timestamp: "2020-01-01 10:00"
  },
  { divider: true },
  {
    comment: "blablablabla",
    member_name: "Anna",
    timestamp: "2020-01-01 10:00"
  },
  { divider: true },
  {
    comment: "blablablabla",
    member_name: "Anna",
    timestamp: "2020-01-01 10:00"
  },
  { divider: true },
  {
    add: true
  }
];

export default {
  props: ["post"],
  data: () => ({
    comment: ""
  }),
  methods: {
    async submit({ $axios, params }) {
      const config = {
        headers: { "content-type": "application/json" }
      };

      let commentData = {
        comment: {
          content: this.comment
        }
      };

      let pID = this.$route.params.id;

      try {
        let response = await this.$axios.$post(
          "/projects/" + pID + "/topics/" + this.post.id + "/comments",
          commentData,
          config
        );
        this.clear();
        this.post.comments.push(response.comment);
        this.$forceUpdate();
      } catch (e) {
        console.log(e);
      }
    },
    clear () {
      this.comment = '';
    }
  }
};
</script>

<style>
</style>