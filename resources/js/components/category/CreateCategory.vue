<template>
   <v-container >
      <!-- @submit.prevent="submit" -->
      <v-form v-on:submit.prevent="submit">
          <v-text-field
            label="Nome da Categoria"
            v-model="form.name"
            required
            ></v-text-field>

            <v-btn type="submit" color="pink" v-if="editSlug">Atualizar</v-btn>
            <v-btn type="submit" color="cyan" v-else>Criar</v-btn>

      </v-form>


       <v-card max-width="800" class="mx-auto">
         
         <v-toolbar color="light-blue" dark>
            <v-toolbar-title>Categorias</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
               <v-icon>mdi-tag</v-icon>
            </v-btn>
         </v-toolbar>

         <v-list >
            <div v-for="(category, index) in categories" :key="category.id">
               
               <v-list-item>

                  <v-list-item-action>
                     <v-btn icon large @click="edit(index)">
                        <v-icon color="orange">mdi-pencil</v-icon>
                     </v-btn>
                  </v-list-item-action>

                  <v-list-item-content>
                     <v-list-item-title>
                        {{category.name}}
                     </v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                     <v-btn icon large @click="destroy(category.slug, index)">
                        <v-icon color="red">mdi-delete</v-icon>
                     </v-btn>
                  </v-list-item-action>

               </v-list-item>
               <v-divider inset></v-divider>
            </div>
         </v-list>
      </v-card>
   </v-container>
</template>

<script>
export default {

    data() {
       return {
          form: {
             name: null,
          },
          categories: {},
          editSlug: null,
       }
    },
   created() {
      if(!User.admin()){
         this.$router.push('/forum')
      }
      axios.get('/api/category')
      .then (res => this.categories = res.data.data)
    },
    methods: {
       submit(){
          this.editSlug ? this.update() : this.create()
       },

       update(){
          axios.patch(`/api/category/${this.editSlug}`, this.form)
          .then(res => {
             this.categories.unshift(res.data)
             this.form.name = null
          })
       },

       create(){
          axios.post('/api/category', this.form)
          .then(res => {
             this.categories.unshift(res.data)
             this.form.name = null
          })
       },

       destroy(slug, index) {
          axios.delete(`/api/category/${slug}`)
          .then(res => this.categories.splice(index,1))
       },

       edit(index) {
          this.form.name = this.categories[index].name
          this.editSlug = this.categories[index].slug
          this.categories.splice(index,1)
       }
    }
}

    
</script>