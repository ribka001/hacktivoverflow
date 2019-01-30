<template>
  <div class="home">
    <div class="row">
      <ReadAll v-if="this.$route.fullPath == '/' "></ReadAll>
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ReadAll from '@/components/ReadAll.vue';

export default {
  name: 'home',
  data() {
    return {
    };
  },
  components: {
    ReadAll,  
  },
  methods: {
    
  },
  mounted() {
  },
};
</script>
