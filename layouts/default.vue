<template>
  <v-app>
    <v-navigation-drawer v-if="$auth.loggedIn && $vuetify.breakpoint.smAndDown" v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="$auth.loggedIn" v-show="$vuetify.breakpoint.smAndDown" /> 
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>


      <v-btn v-if="$auth.loggedIn" to="/" text v-show="$vuetify.breakpoint.mdAndUp">
        Home
      </v-btn>

      <v-btn v-if="$auth.loggedIn" to="/projects" text v-show="$vuetify.breakpoint.mdAndUp">
        Projects
      </v-btn>

      <v-btn v-if="$auth.loggedIn" to="/account" text v-show="$vuetify.breakpoint.mdAndUp">
        Account
      </v-btn>

      <v-btn v-if="$auth.loggedIn" @click="logout()" text>Log Out</v-btn>
      <v-btn v-else @click="$auth.loginWith('auth0')" text>Log In</v-btn>

    </v-app-bar>
    <v-content class="teal lighten-5">
        <nuxt />
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  middleware: ['auth','get-account'],
  data() {
    return {
      dark:true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-domain",
          title: "Projects",
          to: "/projects"
        },
        {
          icon: "mdi-account",
          title: "Account",
          to: "/account"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Doricus"
    };
  },
  methods: {
    async logout(){
      await this.$auth.logout()
      window.location = 'https://belgianmuscle.auth0.com/v2/logout?client_id=wDLuwFE5xkwMsZ6blZbxrBMGquv1E9tK&returnTo=http%3A%2F%2Flocalhost:3000'
    }
  }
};
</script>
<style scoped>
</style>