<template>
  <div class="hello">
    <div @click="showSubmit=true">点击</div>
    <div v-for="(item, idx) in formArr" :key="idx">
      <sub-form v-model="formArr[idx]" :showSubmit="showSubmit" :ref="`form${idx}`" />
    </div>
  </div>
</template>

<script>
import subForm from "./form";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      formArr: [],
      showSubmit: false,
    };
  },
  methods: {},
  components: {
    subForm,
  },
  created() {
    let num = 3,
      formData = {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      };

    for (let i = 0; i < num; i++) {
      this.formArr.push(formData);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
