<template>
  <v-container fluid>
    <v-content color="primary" class="mt-12" >
      <v-row>
        <v-col>
        <h3 class="display-3 text-center">Welcome to Doricus</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
        <span class="subheading text-center">Your preferred platform for tracking your construction progress!</span>
        </v-col>
      </v-row>
    </v-content>
    <v-row class="mt-12">
      <v-col cols="12" md="4">
        <h3>Architect</h3>
        <p>Manage your building portfolio and manage the ongoing construction.</p>
        <p>Communicate with Builders and Customers to ensure everyone is up-to-date with the latest progress!</p>
      </v-col>
      <v-col cols="12" md="4">
        <h3>Builder</h3>
        <p>Stay connected with your Architect and Customers during the construction.</p>
        <p>Initiate immediate communication with everyone to provide progress status and challenges/accomplishments!</p>
      </v-col>
      <v-col cols="12" md="4">
        <h3>Customer</h3>
        <p>Stay connected with your ongoing project while waiting for it to be completed.</p>
        <p>Always be informed with the latest updates and provide input whenever needed!</p>
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