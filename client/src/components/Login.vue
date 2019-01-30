<template>
    <div class="container-fluid">        
        <form method="post" class="form login" @submit.prevent="login()">                                        
            <div class="form__field">
                <label for="email"><i class="fa fa-envelope" style="color: #fff"></i><span class="hidden">Email</span></label>
                <input type="email" name="email" v-model="inputLogin.email" placeholder="email" class="form__input" required>
            </div>                                        
            <div class="form__field">
                <label for="login__password"><i class="fa fa-lock" style="color: #fff"></i><span class="hidden">Password</span></label>
                <input type="password" name="password" v-model="inputLogin.password" class="form__input" placeholder="password" required>
            </div>                                        
            <div class="form__field">
                <button type="submit" id="buttonLoginSubmit">LOGIN</button>
            </div>                                            
        </form>                                
    </div> 
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
          inputLogin: {
            email: "",
            password: ""
          },
        }
    },
    methods: {
        ...mapActions([
            'login'
        ]),
        login() {
            this.$store.dispatch('login', {email: this.inputLogin.email, password: this.inputLogin.password})
            this.inputLogin.email = ""
            this.inputLogin.password = ""
        }
    }

}
</script>