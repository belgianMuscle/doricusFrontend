<template>
  <v-container>
    <h1>Account information</h1>
    <v-form ref="projectForm" class="ma-6 pb-4">
      <v-text-field v-model="account.full_name" :counter="55" label="Full name" solo></v-text-field>
      <v-text-field v-model="account.email" label="Email" email solo></v-text-field>
      <v-radio-group v-model="account.type">
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
    account: {
      full_name: "",
      email: "",
      type: ""
    }
  }),
  async asyncData({ store, $axios, params }) {
    try {
      let data = await $axios.$get(`/members`);
      return {
        account: {
          id: data.member.id,
          full_name: data.member.full_name,
          email: data.member.email,
          type: data.member.type
        }
      };
    } catch (e) {
      return {
        account: {
          full_name: "",
          email: "",
          type: ""
        }
      };
    }
  },
  methods: {
    async submit({ $axios, params }) {
      const config = {
        headers: { "content-type": "application/json" }
      };

      let accountData = {
        member: {}
      };

      accountData.member = this.account;
      console.log(accountData.member);
      try {
        let response = {};
        if (this.account.id == "" || this.account.id == null) {
          response = await this.$axios.$post("/members", accountData, config).catch(e => { console.log(e) });
        } else {
          response = await this.$axios.$patch(
            "/members/" + this.account.id,
            accountData,
            config
          );
        }
        this.$store.commit('set_account',response.member)

        this.$router.push("/projects");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style>
</style>