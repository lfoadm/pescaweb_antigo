<template>
    <div>
        <v-card
    max-width="500"
    class="mx-auto"
  >
    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Categoria 2</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item
        v-for="category in categories"
        :key="category.id"
        
      >
        <v-list-item-icon>
          <v-icon v-if="category.name" color="pink">mdi-star</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="category.name"></v-list-item-title>
        </v-list-item-content>

        
      </v-list-item>
    </v-list>
  </v-card>        
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: {}
        }
    },
    created() {
        axios.get('/api/category')
        .then (res => this.categories = res.data.data)
    }
}
</script>