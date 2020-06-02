<template>
    <v-card>
         <v-toolbar color="deep-purple accent-4" dark>
            <v-toolbar-title>Categorias</v-toolbar-title>
               <v-spacer></v-spacer>
            </v-toolbar>

         <v-list subheader>
            <div v-for="category in categories" :key="category.id">
               <v-list-item>

                  
                     <v-list-item-icon>
                        <v-btn icon small>
                           <v-icon color="orange">mdi-pencil</v-icon>
                        </v-btn>
                     </v-list-item-icon>
                  
               
                  <v-list-item-content>
                     <v-list-item-title>
                        {{category.name}}
                     </v-list-item-title>
                  </v-list-item-content>

                  
                     <v-list-actions>
                        <v-btn icon small @click="destroy(category.slug)">
                           <v-icon color="red">mdi-delete</v-icon>
                        </v-btn>
                     </v-list-actions>
                  
               
               </v-list-item>
               <v-divider></v-divider>
            </div>
         </v-list>
      </v-card>     
</template>

