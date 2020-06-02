<template>
    <div>
        <vue-simplemde v-model="reply.reply" />
        
        <v-card-actions>
            <v-btn icon large @click="update">
                <v-icon color="green">mdi-content-save</v-icon>
            </v-btn>
            <v-btn icon large @click="cancel">
                <v-icon color="black">mdi-keyboard-backspace</v-icon>
            </v-btn>
        </v-card-actions>

    </div>
</template>

<script>
export default {
    props:['reply'],
    methods: {
        cancel(){
            EventBus.$emit('cancelEditing');
        },
        update() {
            axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body:this.reply.reply})
            .then(res => this.cancel())
        },
    },
}
</script>