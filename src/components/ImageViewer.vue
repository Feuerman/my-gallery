<template>
  <div class="image-viewer">
    <div
      v-for="(item, index) in images"
      class="image-viewer__item"
      :key="index"
    >
      <img
        :src="item.data"
        :alt="item.title"
        :title="item.title"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageViewer',
  data () {
    return {
      images: [
        {
          title: 'Image 1',
          data: require('../assets/images/Снимок экрана 2020-01-31 в 14.37.31.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-viewer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      img {
        width: 100%;
      }
    }
  }
</style>
