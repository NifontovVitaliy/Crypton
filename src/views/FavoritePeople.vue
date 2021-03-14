<template>
  <section>
    <h1>Люди!</h1>
    <div v-for="people in this.$store.state.likedPeople" :key="people.height">
      <p>{{ people.name }}</p>
      <img :src="getPhotoId(people.url)" alt="dfsg" />
      <button @click="setItemDisliked(people.name)">Remove</button>
    </div>
  </section>
</template>

<script>
import { PHOTO_HOST } from "../url.js";
export default { 
  name: "people", 
  methods: {
    getPhotoId(url) {
      const photoId = url.replace(/[^\d-]/g, "");
      return `${PHOTO_HOST}/${photoId}.jpg`;
    },
    setItemDisliked(character){        
        this.$store.dispatch('setItemDisliked',character);
    }
  },
  mounted(){
      this.$store.state.likedPeople = JSON.parse(localStorage.getItem('LikedPeoples') || []);
      console.log(this.$store.state.likedPeople);
  }
};
</script>

