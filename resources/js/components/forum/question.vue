<template>
  <v-container>
      <v-card>
    <v-card-title primary-title>
        <div>
            <h3 class="headline mb-0">
                <router-link :to="data.path">
                    {{data.title}}
                </router-link>
            </h3>
            <div class="grey--text">
                {{data.user}} disse a {{data.created_at}}</div>
        </div>
     </v-card-title>

    <v-card-text>
      {{data.body}}
    </v-card-text>

      <!--   <v-btn
            color="orange"
            text
        >Perguntar
        </v-btn> -->
        
    </v-card>
  </v-container>
  
</template>

<script>
export default {
    props: ['data']
}
</script>

<style>

</style>>