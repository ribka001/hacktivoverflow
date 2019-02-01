<template>
    <div>
        <div class="d-flex justify-content-center" style="margin-left:200px;">
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
                <button id="upvoteQuest" class="btn btn-primary" @click.prevent="upvoteQuest(question._id)">UPVOTE</button>
                {{question.vote}}
                <button id="upvoteQuest" class="btn btn-primary" @click.prevent="downvoteQuest(question._id)">DOWNVOTE</button>
                <br>
                <!-- {{question.question}} -->
                <div v-html="question.question"></div>
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
            'addQuestion',
            'upvoteQuest',
            'downvoteQuest'
        ]),
        addQuestion() {
            this.$store.dispatch('addQuestion', {title: this.title, question: this.question, tags: this.tags})
            this.title = ''
            this.question = ''
            this.tags = ''
        },
        upvoteQuest(id){
            this.$store.dispatch('upvoteQuest', id)
        },
        downVoteQuest(id){
            this.$store.dispatch('downvoteQuest', id)
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