<template>
  <v-list three-line>
    <template v-for="(item, index) in comments">
      <v-divider v-if="item.divider" :key="index"></v-divider>
      <v-list-item v-else-if="item.comment" :key="item.title">
        <v-list-item-content>
          <v-list-item-subtitle v-text="item.timestamp + ' by ' + item.member_name"></v-list-item-subtitle>
          <v-list-item-content v-html="item.comment"></v-list-item-content>
        </v-list-item-content>
      </v-list-item>
      <v-form v-else-if="item.add" :key="index" ref="commentForm" class="ml-6">
          <v-row class="align-baseline">
        <v-text-field v-model="comment" :counter="255" label="Comment" required></v-text-field>
        <v-btn color="primary" class="mr-4" @click="submit">Send</v-btn>
          </v-row>
      </v-form>
    </template>
  </v-list>
</template>

<script>
export default {
    props: ['post'],
    data: () => ({
        comment:'',
        comments: [
            {
                comment:'blablablabla',
                member_name:'Anna',
                timestamp:'2020-01-01 10:00'
            },
            { divider: true },
            {
                comment:'blablablabla',
                member_name:'Anna',
                timestamp:'2020-01-01 10:00'
            },
            { divider: true },
            {
                comment:'blablablabla',
                member_name:'Anna',
                timestamp:'2020-01-01 10:00'
            },
            { divider: true },
            {
                add:true
            }
        ]
    }),
    methods: {
        submit () {

        }
    }
};
</script>

<style>
</style>