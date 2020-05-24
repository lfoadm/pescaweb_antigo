<template>
    <v-container>
        <v-form v-on:submit.prevent="login">

            <v-text-field
            label="E-mail"
            v-model="form.email"
            type="email"
            required
            ></v-text-field>
            
            <v-text-field
            label="Senha"
            v-model="form.password"
            type="password"
            required
            ></v-text-field>

            <v-btn
            color="success"
            type="submit"
            >Entrar</v-btn>

            <router-link to="/signup">
                <v-btn
                color="primary">Registrar</v-btn>
            </router-link>


        </v-form>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            form :{
                email:null,
                password:null
            }
        }
    },
    created(){
        if(User.loggedIn()){
            this.$router.push({name:'forum'})
        }
    },
    methods:{
        login(){
            User.login(this.form)
        }
    }    
}
</script>


<style>
    
</style>