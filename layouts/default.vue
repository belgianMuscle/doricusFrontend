<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app v-show="$vuetify.breakpoint.smAndDown">
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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-show="$vuetify.breakpoint.smAndDown" /> 
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>

      <v-btn href="/projects" text v-show="$vuetify.breakpoint.mdAndUp">
        Projects
      </v-btn>

      <v-btn href="/account" text v-show="$vuetify.breakpoint.mdAndUp">
        Account
      </v-btn>

      <v-btn href="/logout" text>
        Log Out
      </v-btn>
    </v-app-bar>
    <v-content class="teal lighten-5">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dark:true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Projects",
          to: "/projects"
        },
        {
          icon: "mdi-chart-bubble",
          title: "About",
          to: "/about"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Contact",
          to: "/contact"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Doricus"
    };
  }
};
</script>
<style scoped>
</style>