<template>
  <div class="container-fluid">
    <div class="form-row">
        <input type="text" class="form-control" placeholder="Give it a name" />
    </div>
    <div class="form-row">
      <PlantTypeAndTagSelect />
    </div>
    <div class="form-row">
        <input type="text" class="form-control" placeholder="What's the species?" />
    </div>
    <div class="form-row">
        <input type="file" accept="image/*" capture="camera" placeholder="Add a picture" />
    </div>
    <div class="form-row">
        <button class="btn btn-success active" :disabled="loading" @click="save()">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';

import { Options, Vue } from 'vue-class-component';
//import { plantClient } from '@/api/plantClient';
import PlantTypeAndTagSelect from '@/components/PlantTypeAndTagSelect.vue';

@Options({
  components: {
    Header,
    PlantTypeAndTagSelect
  },
})
export default class AddPlant extends Vue {

  loading = false;

  // async save() {
  //   this.loading = true;

  //   try {
  //     await plantClient.savePlant();

  //   } catch (error) {
  //     console.log(error);
  //   }

  //   this.loading = false;
  // }
 

}
</script>

<style scoped>
.btn {
  width: 300px;
}
div {
  padding-bottom: 20px;
}
</style>
