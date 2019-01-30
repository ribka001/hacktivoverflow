<template>
    <div class="container-fluid">    
        <form method="post" class="form login" @submit.prevent="register()">             
            <div class="form__field">
                <label for="email"><i class="fa fa-envelope" style="color: #fff"></i><span class="hidden">Email</span></label>
                <input type="email" name="email" v-model="inputRegister.email" placeholder="email" class="form__input" required>
            </div>                
            <div class="form__field">
                <label for="password"><i class="fa fa-lock" style="color: #fff"></i><span class="hidden">Password</span></label>
                <input type="password" name="password" v-model="inputRegister.password" class="form__input" placeholder="password" required>
            </div>                
            <div class="form__field">
                <button type="submit" id="buttonRegisterSubmit">REGISTER</button>
            </div>                    
        </form>        
    </div>                
</template>

<script>
import {mapActions} from 'vuex';

export default {    
    data() {
        return {
            inputRegister: {
                email: "",
                password: ""
            },
        }
    },
    methods: {
        ...mapActions([
            'register'
        ]),
        register() {
            this.$store.dispatch('register', {email: this.inputRegister.email, password: this.inputRegister.password})
            this.inputRegister.email = ""
            this.inputRegister.password = ""
        }
    }
}
</script>