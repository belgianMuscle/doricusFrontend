<template>
  <v-container grid-list-md>
    <v-jumbotron color="primary" class="mt-12">
      <v-container fill-height>
        <v-layout align-center text-center>
          <v-flex>
            <h3 class="display-3">Welcome to Doricus</h3>
            <span
              class="subheading"
            >Your preferred platform for tracking your construction progress!</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-row class="mt-12">
      <v-col>
        <h3>Architect</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </v-col>
      <v-col>
        <h3>Builder</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </v-col>
      <v-col>
        <h3>Customer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </v-col>
    </v-row>
    <v-row class="mt-12">
        <v-col class="text-center">
        <h3>Start Now</h3>
        <p>Log in to your account or signup now and start tracking your project's progress!</p>
        <v-btn color="primary" nuxt to="/projects">Log In</v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "login"
};
</script>

<style>
.container {
    width:900px;
}
</style>