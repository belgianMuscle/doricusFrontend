<template>
  <v-card>
    <v-row>
      <v-card-title class="ml-3">{{ post.title }}</v-card-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="changeConfirm" persistent max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            v-if="$store.state.account.id == post.member_id"
            x-small 
            icon 
            class="mr-6 mt-4"
            v-bind="attrs"
            v-on="on" >
            <v-icon>{{ post.visibility=='OPEN' ? 'mdi-lock-open' : 'mdi-lock' }}</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">Change visibility?</v-card-title>
          <v-card-text>Are you sure you want to change the post visibility?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="changeConfirm = false">Cancel</v-btn>
            <v-btn color="primary darken-1" text @click="changePostVisibility">Continue</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


    </v-row>
    <v-card-subtitle class="mt-n9">{{ post.timestamp }} by {{ post.member_id }}</v-card-subtitle>
    <v-card-text class="mt-n2">{{ post.content }}</v-card-text>
    <v-card-actions class="my-n4">
      <v-spacer></v-spacer>
      <v-btn icon @click="commentsVisible = !commentsVisible">
        <v-icon>{{ commentsVisible ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <v-card-text v-show="commentsVisible">
        <PostComments :post="post" />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script>
import PostComments from "~/components/PostComments.vue";

export default {
  components: {
    PostComments
  },
  props: ["post"],
  data: () => ({
    commentsVisible: false,
    changeConfirm: false
    //post: {
    //  id: "1",
    //  title: "Post Title",
    //  content: "Post content blabla",
    //  timestamp: "2020-01-01 10:00",
    //  member_name: "David"
    //}
  }),
  created() {
    if (this.post.comments.length == 0) {
      this.commentsVisible = true;
      this.buttonText = "Hide More";
    }
  },
  methods: {
    async changePostVisibility(){
      const config = {
        headers: { "content-type": "application/json" }
      };
      let prevValue = this.post.visibility;
      if (this.post.visibility =='OPEN'){
        this.post.visibility = 'CLOSED';
      }else{
        this.post.visibility = 'OPEN';
      }

      let inputData = { topic: this.post };

      try {
        let response = await this.$axios.$patch("/topics/"+this.post.id, inputData, config);
        
      } catch (e) {
        console.log(e);
        this.post.visibility = prevValue;
      }

      this.changeConfirm = false;
    }
  }
};
</script>

<style>
</style>