<template>
  <div>
    <h2>学生名称:{{ name }}</h2>
    <h2>学生地址:{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      name: "张三",
      age: 19,
    };
  },
};
</script>