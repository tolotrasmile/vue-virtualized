<template>
  <RecycleScroller
    class="photo-scroller"
    :items="photos"
    :item-size="180"
    key-field="id"
    v-slot="{ item, index }"
  >
    <photo :item="item" :count="photos.length" :index="index+1" />
  </RecycleScroller>
</template>

<script>
import Photo from './components/Photo'
export default {
  name: 'app',
  components: { Photo },
  data() {
    return {
      photos: [],
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const url = 'https://jsonplaceholder.typicode.com/photos'
      const photos = await fetch(url).then(res => res.json())
      this.photos = [...photos, ...photos, ...photos]
    },
  },
}
</script>

<style scoped>
/** Height */
.photo-scroller {
  height: 100vh;
}
</style>