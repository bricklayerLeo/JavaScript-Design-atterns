<template>
  <div class="hello">
    <div @click="showSubmit=!showSubmit">点击</div>
    <div v-for="(item, idx) in formArr" :key="idx">
      <sub-form @sync="sync($event, idx)" :showSubmit="showSubmit" :ref="`form${idx}`" />
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
  methods: {
    sync(subForm, idx) {
      this.formArr[idx] = subForm

      let arr = []

      arr[2] = 0
      console.log(arr, 'arr')

      let flag = arr.every( v => {
        console.log(typeof v, 'type')
        return typeof v === "number"
      })
      console.log(flag, 'flag')
    }
  },
  components: {
    subForm,
  },
  created() {
    this.formArr = Array(3)
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
