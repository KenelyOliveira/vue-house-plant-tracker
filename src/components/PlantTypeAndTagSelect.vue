<template>
  <div>
      <select name="type" class="form-control" @change="this.$emit('input', v)">
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
  props: {
    type: String
  },
  
})
export default class PlantTypeAndTagSelect extends Vue {
  type: string | null = null;

  types: PlantType[] = [];

  async mounted(){
    this.types = await plantTypeClient.getPlantTypes();
  }
}
</script>