import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/apis/axios'
import swal from 'sweetalert';
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    questions: [],
    question: {},
    voteCount: ''
  },
  mutations: {
    setToken (state, payload) {
      localStorage.setItem('token', payload)
      state.token = payload
      router.push('/')
      swal("Welcome! You have successfully login");
    },
    setQuestions (state, payload) {
      state.questions = payload
    },
    setQuestionById (state, payload) {
      state.question = payload
    },
    setVoteCount (state, payload) {
      state.voteCount = payload
    }
  },
  actions: {
    register(context, obj) {
      axios({
        method: "POST",
        url: `/users/register`,
        data: {
          email: obj.email,
          password: obj.password
        }
      })
        .then(() => {
          swal("You have successfully registering");
          router.push('/')
        })
        .catch(err => {
          swal("Oops!", `${err.response.data}`, "error");
        })
    },
    login(context, obj){            
      axios({
        method: "POST",
        url: `/users/login`,
        data: {
          email: obj.email,
          password: obj.password
        }
      })
        .then(({data}) => {
          context.commit('setToken', data)
        })
        .catch(err => {
          swal("Oops!", `${err.response.data.message}`, "error");
        })
    },
    getQuestionById (context, id) {
      console.log("get question id", id)
      axios
        .get(`/questions/${id}`)
        .then(({data}) => {
          context.commit('setQuestionById', data.question)
        })
        .catch(err => {
          console.log('get questionById: ', err.response)
        })
    },
    getAllQuestion (context) {
      console.log("get all questions")
      axios
        .get('/questions')
        .then(({data}) => {
          context.commit('setQuestions', data.questions)
        })
        .catch(err => {
          console.log('get allQuestion', err.response)
        })
    },
    addQuestion(context, obj) {
      axios({
        method: "POST",
        url: `/questions`,
        headers: {
          token: localStorage.getItem("token")
        },
        data: {
          title: obj.title,
          question: obj.question,
          tags: obj.tags
        }
      })
        .then( () => {
          context.dispatch(`getAllQuestion`)
        })
        .catch(err => {
          swal(err.response.data.message)
        })  
    },
    updateQuestion(context, obj) {
      axios({
        method: 'PUT',
        url: `/questions/${obj.id}`,
        headers: {
          token: this.state.token
        },
        data: {
          title: obj.title,
          question: obj.question,
          tags: obj.tags
        }
      })
      .then( () => {                
        context.dispatch(`getQuestionById`, obj.id)
        context.dispatch(`getAllQuestion`)
        router.push(`/questions/${obj.id}`)
      })
      .catch((err) => {
        swal("Oops!", `${err.response.data.message}`, "error")
        console.log(err.response);
      });
    },
    upvoteQuest (context, id) {
      axios({
        method: 'PUT',
        url: `/questions/upvote/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({data}) => {
          context.dispatch(`getQuestionById`, id)
          context.dispatch(`getAllQuestion`)
          context.commit('setVoteCount', data)
        })
        .catch(err => {
          swal("Oops!", `${err.response.data.message}`, "error")
          console.log('get upvoteQuest', err.response)
        })
    },
    downvoteQuest (context, id) {
      axios({
        method: 'PUT',
        url: `/questions/downvote/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({data}) => {
          context.dispatch(`getQuestionById`, id)
          context.dispatch(`getAllQuestion`)
          context.commit('setVoteCount', data)
        })
        .catch(err => {
          swal("Oops!", `${err.response.data.message}`, "error")
          console.log('get downvoteQuest', err.response)
        })
    },
    deleteQuestion(context, id) {
      axios({
        method: 'DELETE',
        url: `/questions/${id}`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(() => {
        context.dispatch('getQuestionById', id)
        context.dispatch(`getAllQuestion`)
        router.push(`/questions/${id}`)
      })
      .catch((err) => {
        swal("Oops!", `${err.response.data.message}`, "error")
        console.log(err.response);
      });
    },
    addAnswer(context, obj) {
      axios({
        method: "POST",
        url: `/answers/${obj.id}`,
        headers: {
          token: localStorage.getItem("token")
        },
        data: {
          title: obj.title,
          answer: obj.content
        }
      })
        .then(() => {
          context.dispatch(`getQuestionById`, obj.id)
          context.dispatch(`getAllQuestion`)
          router.push(`/questions/${obj.id}`)
        })
        .catch(err => {
          swal("Oops!", `${err.response.data.message}`, "error")
          console.log(err.response)
        })  
    },
    updateAnswer(context, obj) {
      axios({
        method: "PUT",
        url: `/answers/${obj.id}`,
        headers: {
          token: localStorage.getItem("token")
        },
        data: {
          title: obj.title,
          answer: obj.answer
        }
      })
        .then(() => {
          context.dispatch(`getQuestionById`, obj.id)
          context.dispatch(`getAllQuestion`)
          router.push(`/questions/${obj.id}`)
        })
        .catch(err => {
          swal("Oops!", `${err.response.data.message}`, "error")
          console.log(err.response)
        })  
    },
    upvoteAnswer (context, id) {
      axios({
        method: 'PUT',
        url: `/answers/upvote/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({data}) => {
          context.dispatch(`getQuestionById`, id)
          context.dispatch(`getAllQuestion`)
          context.commit('setVoteCount', data)
          router.push(`/questions/${id}`)
        })
        .catch(err => {
          swal("Oops!", `${err.response.data.message}`, "error")
          console.log('get upvoteQuest', err.response)
        })
    },
    downvoteAnswer (context, id) {
      axios({
        method: 'PUT',
        url: `/answers/downvote/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({data}) => {
          context.dispatch(`getQuestionById`, id)
          context.dispatch(`getAllQuestion`)
          context.commit('setVoteCount', data)
          router.push(`/questions/${id}`)
        })
        .catch(err => {
          swal("Oops!", `${err.response.data.message}`, "error")
          console.log('get downvoteQuest', err.response)
        })
    },
  }
})
