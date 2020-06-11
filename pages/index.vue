<template>
  <v-container fluid>
    <v-content color="primary" class="mt-12">
      <v-container fill-height>
        <v-layout align-center text-center>
            <h3 class="display-3">Welcome to Doricus</h3>
            <span class="subheading">
              Your preferred platform for tracking your construction progress!
            </span>
        </v-layout>
      </v-container>
    </v-content>
    <v-row class="mt-12">
      <v-col cols="4">
        <h3>Architect</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </v-col>
      <v-col cols="4">
        <h3>Builder</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </v-col>
      <v-col cols="4">
        <h3>Customer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </v-col>
    </v-row>
    <v-row class="mt-12">
      <v-col v-if="$auth.loggedIn" class="text-center">
        <h3>Check out your projects now</h3>
        <p>Welcome back, go ahead and check out your projects!</p>
        <v-btn color="primary" nuxt to="/projects">See projects</v-btn>
      </v-col>
      <v-col v-else class="text-center">
        <h3>Start Now</h3>
        <p>Log in to your account or signup now and start tracking your project's progress!</p>
        <v-btn color="primary" @click="$auth.loginWith('auth0')">Log In</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  auth: false
};
</script>

<style>
.container {
  width: 900px;
}
</style>