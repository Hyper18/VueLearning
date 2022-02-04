<template>
  <div>
    <Student name="李四" sex="女" :age="11" />
    <!-- <hr />
    <Student />
    <hr />
    <Student /> -->
  </div>
</template>

<script>
import Student from "./components/Student";

export default {
  name: "App",
  components: { Student },
};
</script>