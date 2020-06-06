<template>
  <v-container>
    <h1>Account information</h1>
    <v-form ref="projectForm" class="ma-6 pb-4">
      <v-text-field v-model="full_name" :counter="55" label="Full name" solo></v-text-field>
      <v-text-field v-model="email" label="Email" email solo></v-text-field>
      <v-radio-group v-model="type">
        <v-radio :key="'1'" :label="'Architect'" :value="'ARCHITECT'"></v-radio>
        <v-radio :key="'2'" :label="'Builder'" :value="'BUILDER'"></v-radio>
        <v-radio :key="'3'" :label="'Customer'" :value="'CUSTOMER'"></v-radio>
      </v-radio-group>
      <v-btn color="primary" class="mt-6 mr-4" @click="submit">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    full_name: "",
    email: "",
    type: ""
  }),
  methods: {
    submit() {}
  }
};
</script>

<style>
</style>