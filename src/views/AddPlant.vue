<template>
    <div class="container-fluid">
      <p v-if="isInvalid" class="danger">Please fill all the fields</p>
      <div class="form-row">
          <input type="text" class="form-control" placeholder="Give it a name" 
            v-model="name" />
      </div>
      <div class="form-row">
        <PlantTypeAndTagSelect :type="type" />
      </div>
      <div class="form-row">
        <input type="text" class="form-control" placeholder="What's the species?" v-model="species" />
      </div>
      <div class="form-row">
        <PictureInput v-model="image" />
      </div>
      <div class="form-row">
        <button class="btn btn-success active" 
          :disabled="loading" 
          @click="save()">Save</button>
      </div>
    </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';

import { Options, Vue } from 'vue-class-component';
import { createPlantModel, plantClient } from '@/api/plantClient';
import PlantTypeAndTagSelect from '@/components/PlantTypeAndTagSelect.vue';
import PictureInput from '@/components/PictureInput.vue';
import { required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core';

@Options({
  components: {
    Header,
    PlantTypeAndTagSelect,
    PictureInput
  },
  validations: {
    name: { required },
    type: { required },
    image: { required }
  }
})
export default class AddPlant extends Vue {
  v = useVuelidate().value;

  loading = false;

  name: string | null = null;
  type: string | null = null;
  species: string | null = null;
  image: string | null = null;
 
  isInvalid = false;
  
  async save() {
    const result = await this.v.$validate;
    if (!result) {
      this.isInvalid = true;
      return;
    }
    
    this.loading = true;
    this.isInvalid = false;

    try {
      
      await plantClient.savePlant(this.createPlantModel());

    } catch (error) {
      console.log(error);
    }

    this.loading = false;
  }

  createPlantModel(): createPlantModel {
        return {
          name: this.name!,
          type: this.type!,
          species: this.species,
          image: this.image!,
        };
    }

}
</script>

<style scoped>
.btn {
  width: 300px;
}
div {
  padding-bottom: 20px;
}
.danger{
  color: red;
}
</style>
