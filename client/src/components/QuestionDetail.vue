<template>
    <div style="margin-left:20%;">
        Detail Question:
        <br>
        <button id="upvoteQuest" class="btn btn-primary" @click.prevent="upvoteQuest(question._id)">UPVOTE</button>
        {{question.vote}}
        <button id="upvoteQuest" class="btn btn-primary" @click.prevent="downvoteQuest(question._id)">DOWNVOTE</button>
        <br>
        <h3>{{question.title}}</h3>
        <div v-html="question.question"></div>
        <br>
        <br>
        <button data-toggle="modal" data-target="#editQuestionModal">EDIT QUESTION</button>
        <button @click.prevent="deleteQuestion()">DELETE QUESTION</button>

        <div class="modal fade" id="editQuestionModal" tabindex="-1" role="dialog" aria-labelledby="editQuestionModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editQuestionModalLabel">Edit Question</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body"> 
                        <div class="grid">    
                            <form method="post" id="form-question" onsubmit="return false">
                                <div class="form__field">
                                    <label for="title">Title</label>
                                    <input type="text" name="title" v-model="upQuestion.title" class="form__input" required>
                                </div>   
                                <div class="form__field">
                                    <label for="text">Content</label>          
                                    <textarea name="text" form="form-question" v-model="upQuestion.question" class="form__input" required></textarea>        
                                </div>
                                <div class="form__field">
                                    <label for="text">Tags</label>
                                    <input type="text" class="form-control" id="tags" v-model="upQuestion.tags" placeholder="tags">
                                </div>
                                <div class="form__field">
                                    <button id="buttonEditQuestion" data-dismiss="modal" v-on:click.prevent="updateQuestion()">UPDATE QUESTION</button>
                                </div>                    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br>
        <br>
        <AddAnswer></AddAnswer>
        <br>
        <ul> Answers:
            <li v-for="answer in question.answer" :key="answer._id">
                {{answer.title}}<br>
                <button id="upvoteQuest" class="btn btn-primary" @click.prevent="upvoteAnswer(answer._id)">UPVOTE</button>
                {{answer.vote}}
                <button id="upvoteQuest" class="btn btn-primary" @click.prevent="downvoteAnswer(answer._id)">DOWNVOTE</button>
                <div v-html="answer.answer"></div>
                <button data-toggle="modal" data-target="#editAnswerModal">EDIT ANSWER</button>
                <div class="modal fade" id="editAnswerModal" tabindex="-1" role="dialog" aria-labelledby="editAnswerModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="editAnswerModalLabel">Edit Answer</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body"> 
                                <div class="grid">    
                                    <form method="post" id="form-question" onsubmit="return false">
                                        <div class="form__field">
                                            <label for="title">Title</label>
                                            <input type="text" name="title" v-model="upAnswer.title" class="form__input" required> {{answer.title}}
                                        </div>   
                                        <div class="form__field">
                                            <label for="text">Content</label>          
                                            <textarea name="text" form="form-question" v-model="upAnswer.answer" class="form__input" required></textarea> {{answer.answer}}       
                                        </div>
                                        <div class="form__field">
                                            <button id="buttonEditAnswer" data-dismiss="modal" v-on:click.prevent="updateAnswer(answer._id)">UPDATE ANSWER</button>
                                        </div>                    
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import AddAnswer from '@/components/AddAnswer.vue';

export default {
    name: 'QuestionDetail',
    data() {
        return  {
            upQuestion: {
                title: '',
                question: '',
                tags: ''
            },
            upAnswer: {
                title: "",
                answer: ""
            }
        }
    },
    components: {
        AddAnswer
    },
    props: {    
    },
    methods: {
        ...mapActions([
            'getQuestionById',
            'updateQuestion',
            'deleteQuestion',
            'updateAnswer'
        ]),
        updateQuestion() {
            this.$store.dispatch('updateQuestion', {id: this.$route.params.id, title: this.upQuestion.title, question: this.upQuestion.question, tags: this.upQuestion.tags})
        },
        deleteQuestion() {
            this.$store.dispatch('deleteQuestion', this.$route.params.id)
        },
        updateAnswer(id) {
            this.$store.dispatch('updateQuestion', {id: id, title: this.upAnswer.title, answer: this.upAnswer.answer})
        },
        upvoteQuest(id){
            this.$store.dispatch('upvoteQuest', id)
        },
        downVoteQuest(id){
            this.$store.dispatch('downvoteQuest', id)
        },
        upvoteAnswer(id){
            this.$store.dispatch('upvoteAnswer', id)
        },
        downvoteAnswer(id){
            this.$store.dispatch('downvoteAnswer', id)
        }
    },
    mounted() {
        this.$store.dispatch('getQuestionById', this.$route.params.id)
    },
    computed: {
        question: function() {
            return this.$store.state.question
        }
    }
}
</script>