<template>
  <div class="hello">
    <div @click="showSubmit=!showSubmit">点击</div>
    <div v-for="(item, idx) in formArr" :key="idx">
      <sub-form @fromSon="fromSon($event, idx)" :resert="resert" :showSubmit="showSubmit" />
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
      formArr: Array(3),
      showSubmit: false,
      resert: false,
    };
  },
  methods: {
    fromSon(v, idx) {
      this.formArr[idx] = v;

      let arr = [];

      for (let i = 0; i < this.formArr.length; i++) {
        if (typeof this.formArr[i] === "object") {
          arr.push("ok");
          // sessionStorage.setItem("sss", JSON.stringify(this.formArr));
        }
      }

      if (arr.length === this.formArr.length) {
        sessionStorage.setItem("sss", JSON.stringify(this.formArr));
        this.resert = !this.resert;
      }
      // let flag = this.formArr.every((obj) => {
      //   console.log(typeof obj);
      //   console.log(obj instanceof Object, "obj.constructor == Object");
      //   return obj instanceof Object;
      // });
      // if (flag) {
      //   sessionStorage.setItem("sss", JSON.stringify(this.formArr));
      //   // this.resert = !this.resert;
      //   setTimeout((e) => {
      //     this.$children[idx + 1].resetForm("ruleForm");
      //   }, 3000);
      //   // this.$children[idx + 1].resetForm("ruleForm");
      // }
    },
  },
  components: {
    subForm,
  },
  // created() {
  //   let num = 3,
  //   formData = {
  //     name: "",
  //     region: "",
  //     date1: "",
  //     date2: "",
  //     delivery: false,
  //     type: [],
  //     resource: "",
  //     desc: "",
  //   };

  // for (let i = 0; i < num; i++) {
  //   this.formArr.push(formData);
  // }
  // },
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
