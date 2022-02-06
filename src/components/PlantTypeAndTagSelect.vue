<template>
  <div>
      <select name="typle" class="form-control">
          <option value="" selected disabled>Select a type</option>
          <option v-for="type in types" v-bind:key="type.Title">
            {{ type.Title }}
          </option>
      </select>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { plantTypeClient } from '@/api/plantTypeClient';
import { PlantType } from '@/models/PlantType';

@Options({
})
export default class PlantTypeAndTagSelect extends Vue {
  
  types: PlantType[] = [];

  async mounted(){
    this.types = await plantTypeClient.getPlantTypes();
  }
}
</script>