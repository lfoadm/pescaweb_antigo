<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
     <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>PescaWeb</v-toolbar-title>

      <v-spacer></v-spacer>

    <div>
      <router-link
      v-for="item in items"
      :key="item.title"
      :to="item.to"
      v-if="item.show">
        <v-btn ><v-icon>{{item.title}}</v-icon></v-btn>
      </router-link>
    </div>

      <!-- <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
</template>


<script>
export default {
  data(){
    return {
      items: [
        {title: 'mdi-library', to:'/forum', show: true},
        {title: 'mdi-comment-plus-outline', to:'/ask', show: User.loggedIn()},
        {title: 'mdi-database', to:'/category', show: User.loggedIn()},
        {title: 'mdi-login', to:'/login', show: !User.loggedIn()},
        {title: 'mdi-logout', to:'/logout', show: User.loggedIn()},
      ]
    }
  },
  created(){
    EventBus.$on('logout', () => {
      User.logout()
    })
  }
}
</script>