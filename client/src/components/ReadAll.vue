<template>
    <div>
        <div class="d-flex justify-content-center" style="margin-left:200px;">
            <span class="form__field" style=" padding-right:50px;">
                <label for="title">Title : </label>
                <input type="text" name="title" v-model="title" placeholder="title" class="form__input" style="width:300px; height:60px;" required>
            </span>   
            <span class="form__field" style=" padding-right:50px;">
                <label for="question">Question : </label>          
                <textarea name="question" form="form-article" v-model="question" placeholder="question" class="form__input" style="width:600px; height:60px;" required></textarea>        
            </span>
            <span class="form__field" style=" padding-right:50px;">
                <label for="text">Tags</label>
                <input type="text" id="tags" v-model="tags" placeholder="tags" style="width:300px; height:60px;">
            </span>
            <span class="form__field" style=" padding-right:50px;">
                <button id="buttonAddQuestion" class="btn btn-primary" @click.prevent="addQuestion()">ADD QUESTION</button>
            </span>                    
        </div>
        <br>
        <div class="card text-white bg-secondary mb-3" style="width: 1700px; margin-left:50px;" v-for="question in questions" :key="question._id">
            <div class="card-header"><router-link :to='{name:"question",params:{id:question._id}}'>{{question.title}}</router-link></div>
            <div class="card-body">
                <h5>{{question.question}}</h5>
            </div>
        </div>
    </div>
    
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'ReadAll',
    data() {
        return {
            title: "",
            question: "",
            tags: "",
            // questions: this.$store.state.questions
        }
    },
    components: {
              
    },
    methods: {
        ...mapActions([
            'addQuestion'
        ]),
        addQuestion() {
            this.$store.dispatch('addQuestion', {title: this.title, question: this.question, tags: this.tags})
            this.title = ''
            this.question = ''
            this.tags = ''
        }
    },
    mounted(){
        this.$store.dispatch('getAllQuestion')
    },
    computed: {
        questions: function() {
            return this.$store.state.questions
        }
    }
}
</script>