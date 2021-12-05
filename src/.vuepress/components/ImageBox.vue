<template>
  <div class="image-box">
    <div class="img">
      <img :src="src" :alt="alt" />
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.image-box {
  text-align: center;
  padding: 1rem;
  border: 1px dashed #ccc;
  margin-bottom: 1rem;
  .title {
    margin-top: 1rem;
    font-weight: bold;
  }
}
</style>