<template>
  <div id="app">
    <img alt="forum logo" src="./assets/logo-forum.png">
    <div id="nav">
      <ul>
        <li class="nav-item" ><router-link to="/">Home</router-link></li>
        <li class="nav-item" v-if="!$store.state.token"><router-link to="/register"> Register </router-link> </li>
        <li class="nav-item" v-if="!$store.state.token"><router-link to="/login"> Login </router-link> </li>
        <li class="nav-item" v-if="$store.state.token"><button class="btn btn-secondary" @click.prevent="logout">Log Out</button></li>
      </ul>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
    }
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$store.state.token = ""
    },
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>