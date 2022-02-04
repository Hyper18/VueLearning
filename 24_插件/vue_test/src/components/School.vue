<template>
  <div>
    <h2>名称:{{ name | mySliceGlobal }}</h2>
    <h2>地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "某大1234",
      address: "广州",
    };
  },
};
</script>