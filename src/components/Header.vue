<template>
  <div>
    <router-link to="/" tag="img">
      <img alt="logo" src="../assets/logo.png">
    </router-link>
    <h1>House Plant Tracker</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class Header extends Vue {
  
}
</script>

<style scoped>
h1 {
  font-family: 'Pacifico', cursive;
}
img {
  width: 200px;
}
</style>
