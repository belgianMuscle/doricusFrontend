<template>
  <v-card>
    <v-card-actions>
      <v-btn color="blue" v-on:click="changeNewVisibility" text>Add new post</v-btn>
    </v-card-actions>
    <v-form ref="postForm" class="ma-6 pb-4" v-show="newVisible">
      <v-text-field v-model="title" :counter="35" label="Title" required></v-text-field>
      <v-textarea v-model="content" :counter="520" label="Content"></v-textarea>
      <v-btn color="primary" class="mr-4" @click="submit">Post</v-btn>
      <v-btn @click="clear" text>cancel</v-btn>
    </v-form>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  propse: ["projectId"],
  validations: {
    title: { required, maxLength: maxLength(35) },
    content: { required, maxLength: maxLength(520) }
  },
  data: () => ({
    title: "",
    content: "",
    newVisible: false
  }),
  methods: {
    changeNewVisibility: function(event) {
      this.newVisible = !this.newVisible;
    },
    submit () {
    },
    clear () {
        this.title = ''
        this.contnet = ''
        this.newVisible = false
    }
  }
};
</script>

<style>
</style>