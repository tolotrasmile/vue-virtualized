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
  margin: 1em;
  display: flex;
  justify-content: flex-start;
  border-radius: 1em;
  transition: box-shadow 0.5s, transform 5s;
}

.photo:hover {
  box-shadow: 10px 10px 15px -4px rgba(0, 0, 0, 0.31);
}

.content {
  padding: 1em;
  width: 100%;
  background-color: #f5f5f5;
}

h4 {
  font-weight: bold;
  font-size: 2em;
}
</style>