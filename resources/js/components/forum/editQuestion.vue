<template>
    <v-container>
        <v-card py-5>
            <v-form v-on:submit.prevent="update">
                <v-text-field
                label="Título da Pergunta"
                v-model="form.title"
                type="text"
                required
                ></v-text-field>

                <vue-simplemde v-model="form.body" />

                <v-card-actions>
                    <v-btn icon small type="submit">
                        <v-icon color="teal">mdi-content-save</v-icon>
                    </v-btn>

                    <v-btn icon small @click="cancel">
                        <v-icon color="dark">mdi-close-circle</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    props:['data'],
    data(){
        return {
            form: {
                title: null, 
                body: null,
            }
        }
    },
    methods:{
        cancel(){
            EventBus.$emit('cancelEditing')
        },
        update(){
            axios.patch(`/api/question/${this.form.slug}`, this.form)
            .then(res => this.cancel())
        }
    },
    mounted(){
        this.form = this.data
    }
}
</script>