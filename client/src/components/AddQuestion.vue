<template>
    <div class="d-flex justify-content-center" style="margin-left:200px;">
        <div class="alert alert-danger" role="alert" v-if="shownError" style="width:100%; position:fixed; top:0;">
            {{shownError}}
        </div>
        <span class="form__field" style=" padding-right:50px;">
            <label for="title">Title : </label>
            <input type="text" name="title" v-model="title" placeholder="title" class="form__input" style="width:300px; height:60px;" required>
        </span>   
        <span class="form__field" style=" padding-right:50px;">
            <label for="question">Question : </label>
            <wysiwyg v-model="question" />
            <!-- <textarea name="question" form="form-article" v-model="question" placeholder="question" class="form__input" style="width:600px; height:60px;" required></textarea>         -->
        </span>
        <span class="form__field" style=" padding-right:50px;">
            <button id="buttonAddQuestion" v-on:click.prevent="addQuestion()">ADD QUESTION</button>
        </span>                    
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'AddQuestion',
    data() {
        return  {
            title: "",
            question: ""
        }
    },
    methods: {
        ...mapActions([
            'addQuestion'
        ]),
        addQuestion() {
            this.$store.dispatch('addQuestion', {title: this.title, question: this.question})
            this.title = ''
            this.question = ''
        }
    }
}
</script>