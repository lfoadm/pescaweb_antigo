<template>
    <v-container fluid>
        <v-card>
            <v-card-title>
                <div>
                    <div class="headline">
                        {{data.title}}
                    </div>
                    <span class="grey--text">{{data.user}} disse a {{data.created_at}}</span>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="teal">15 Replies</v-btn>
            </v-card-title>
            <v-card-text v-html="data.body"></v-card-text>
        </v-card>
    </v-container>
</template>


<script>

export default {
    props: ['data']
}
</script> 