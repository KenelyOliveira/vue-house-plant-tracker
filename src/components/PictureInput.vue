<template>
  <div>
      <div v-if="picture == null">
        <label for="file-upload" class="custom-file-upload">
            <i class="fa fa-cloud-upload"></i> Take a picture
        </label>
        <input id="file-upload" type="file" accept="image/*;capture=camera" @change="onFilePicked"/>
      </div>
      <div v-if="picture !== null">
        <img :src="picture" alt="" class="image" />
      </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class PictureInput extends Vue {
  
  readonly value!: string;

  picture: string | null = null;

  getBase64(file: File): Promise<string| null> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result!.toString());
        reader.onerror = error => reject(error);
    });
  }
  
  onFilePicked (event: any) : void {
    const files = event?.target?.files;
    this.getBase64(files[0]).then(
        data => {
            this.picture = data;
            console.log(this.picture!.split(',')[1]);
        }
    );

  }

  
}
</script>
<style scoped>
input[type="file"] {
    display: none;
}
.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
.image {
    width: 200px;
}
</style>