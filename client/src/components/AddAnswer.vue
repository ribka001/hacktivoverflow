<template>
    <div class="d-flex justify-content-center">
        <div class="form__field" style=" padding-right:50px;">
            <label for="title">Title</label>
            <input type="text" name="title" v-model="title" placeholder="title" class="form__input" style="width:300px; height:60px;" required>        
        </div> 
        <div class="form__field" style=" padding-right:50px;">
            <label for="content">Answer</label>          
            <textarea name="content" form="form-article" v-model="content" placeholder="content" class="form__input" required></textarea>        
        </div>                  
        <div class="form__field" style=" padding-right:50px;">
            <button id="buttonAddAnswer" class="btn btn-primary" @click.prevent="addAnswer()">Add Answer</button>
        </div>   
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'AddAnswer',
    data() {
        return  {
            id: this.$route.params.id,
            title: "",
            content: "",
        }
    },
    methods: {
        ...mapActions([
            'addAnswer'
        ]),
        addAnswer() {
            this.$store.dispatch('addAnswer', {id: this.id, title: this.title, content: this.content})
        }
    }
}
</script>