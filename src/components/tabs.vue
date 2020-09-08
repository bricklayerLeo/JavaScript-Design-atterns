<template>
  <div class="tabs">
    <div
      :class="['title',{'active':index===e.id}]"
      @click="getCurrent(e.id)"
      v-for="e in arr"
      :key="e.id"
    >{{e.name}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      arr: [
        { name: "标题一", id: 1 },
        { name: "标题二标题二", id: 2 },
        { name: "标题三", id: 3 },
      ],
    };
  },
  methods: {
    getCurrent(e) {
      this.index = e;
    },
  },
};
</script>

<style>
.tabs {
  display: flex;
  flex-direction: row;
  border-bottom: 6px solid green;
}
.title {
  margin-right: 60px;
  position: relative;
  top: 6px;
}
.active {
  color: red;
  padding-bottom: 20px;
  border-bottom: 10px solid red;
}
</style>