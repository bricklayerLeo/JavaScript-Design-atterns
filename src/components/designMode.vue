<template>
  <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm()">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Validator } from "./validate";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
      },
    };
  },
  methods: {
    submitForm() {
      const validator = new Validator();

      //公司名称字段校验
      validator.check(this.ruleForm.name, [
        { strategy: "isEmpty", errMsg: "公司名称不能为空" },
        { strategy: "maxLength:6", errMsg: "公司名称最多6个字符" },
      ]);
      //付款户名字段
      // validator.check(this.payAccount,[{strategy:'isEmpty',errMsg:'付款户名不能为空'},{strategy:'maxLength:10',errMsg:'付款户名最多10个字符'}]);

      //加入还有别的字段要校验,则再次调用check()方法

      //获取err信息,若有则alert出并return
      let errMsg = validator.checkResult();

      if (errMsg) {
        alert(errMsg);
        return;
      }
    },
  },
};
</script>

<style>
</style>