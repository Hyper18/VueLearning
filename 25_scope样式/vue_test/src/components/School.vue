<template>
  <div class="demo">
    <h2>名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "某大",
      address: "广州",
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>