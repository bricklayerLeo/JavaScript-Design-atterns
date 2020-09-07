<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <!-- <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>-->
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" @click="submitForm(`ruleForm`)">立即创建</el-button>
        <el-button @click="resetForm(`ruleForm`)">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    showSubmit: {
      type: Boolean,
      default: false,
    },
    resert: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "ruleForm",
    event: "sync",
  },
  data() {
    return {
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      a: [],
    };
  },
  watch: {
    showSubmit(n) {
      //   console.log(n, "nnn");
      //   if (n) {
      this.submitForm(`ruleForm`);
      //   }
    },
    resert(v) {
      //   if (v) {
      this.resetForm("ruleForm");
      //   }
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("fromSon", this.ruleForm);
          //   this.ruleForm = {
          //     name: "",
          //     region: "",
          //     date1: "",
          //     date2: "",
          //     delivery: false,
          //     type: [],
          //     resource: "",
          //     desc: "",
          //   };
          //   this.resetForm("ruleForm");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
</style>