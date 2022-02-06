<template>
  <div class="home">
    <div>
      <router-link to="/" tag="button" class="btn btn-primary active">Search</router-link>
    </div>
    <div>
      <router-link to="/add-plant" tag="button" class="btn btn-success active">Add new plant</router-link>
    </div>
    <div>
      <button class="btn btn-success active">Add progress</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {}
</script>
<style scoped>
.btn {
  width: 300px;
}
div {
  padding-bottom: 20px;
}
</style>