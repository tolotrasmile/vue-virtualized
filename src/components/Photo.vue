<template>
  <div class="photo">
    <img :src="item.thumbnailUrl" />
    <div class="content">
      <h4>{{index}} - {{item.title}}</h4>
      <a :href="item.url">{{item.url}}</a>
      <hr />
      <p :style="{color: color}">Photos number: {{count}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
    count: Number,
    index: Number,
  },
  computed: {
    color() {
      const urls = this.item.url.split('/')
      return `#${urls[urls.length - 1]}`
    },
  },
}
</script>

<style scoped>
/** Styling each items*/
.photo {
  padding: 1em;
  display: flex;
  justify-content: flex-start;
}

.content {
  padding: 1em;
}

h4 {
  font-weight: bold;
  font-size: 2em;
}
</style>