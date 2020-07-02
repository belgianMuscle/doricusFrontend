<template>
  <v-list two-line>
    <template v-for="(item, index) in post.comments">
      <v-list-item v-if="item.content" :key="index" class="">
        <v-list-item-content>
          <v-list-item-subtitle class="text-right" v-text="item.timestamp + ' by ' + item.member_id"></v-list-item-subtitle>
          <v-list-item-content v-html="item.content"></v-list-item-content>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mt-n2" v-if="index < post.comments.length - 1" :key="'dividier-'+index"></v-divider>
    </template>
    <span v-if="post.comments.length == 0">No comments yet!</span>
    <v-form ref="commentForm" class="mx-6 mb-n4">
      <v-row class="align-baseline">
        <v-text-field v-model="comment" :counter="255" label="Comment" :append-icon="'mdi-send'"
        @click:append="submit" required></v-text-field>
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